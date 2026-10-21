#!/usr/bin/env python3
"""Vendor the shared screen theme into book sources and their published copies.

Usage: python3 scripts/sync_reader_theme.py --checkout-root /path/to/book/repos
Run each book's normal site builder/checks afterwards. EPUB styles are untouched.
"""
from pathlib import Path
import argparse
import re

ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / "reader-theme/reader.css").read_text()
JS = (ROOT / "reader-theme/reader.js").read_text()
START = "/* BEGIN AIAS SHARED READER */"
END = "/* END AIAS SHARED READER */"


def write(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists() or path.read_text() != content:
        path.write_text(content)
        print(path)


def append(path, content):
    text = path.read_text() if path.exists() else ""
    text = re.sub(re.escape(START) + r".*?" + re.escape(END), "", text, flags=re.S)
    write(path, text.rstrip() + "\n\n" + START + "\n" + content.rstrip() + "\n" + END + "\n")


def assets(repo, css, js, copies=()):
    append(repo / css, CSS)
    append(repo / js, JS)
    for source, destination in copies:
        write(repo / destination, (repo / source).read_text())


def inline(path):
    text = path.read_text()
    text = re.sub(r"\n?<style data-aias-reader>.*?</style>", "", text, flags=re.S)
    text = re.sub(r"\n?<script data-aias-reader>.*?</script>", "", text, flags=re.S)
    text = text.replace("</head>", '<style data-aias-reader>\n' + CSS + '</style>\n</head>', 1)
    text = text.replace("</body>", '<script data-aias-reader>\n' + JS + '</script>\n</body>', 1)
    write(path, text)


def add_script(path, src="reader.js"):
    text = path.read_text()
    tag = f'<script src="{src}" defer></script>'
    if tag not in text:
        write(path, text.replace("</head>", tag + "\n</head>"))


def sync(root):
    configs = {
        "opensource-book-site": ("reading.css", "reading.js", []),
        "redis-book": ("assets/reader.css", "assets/reader.js", [("assets/reader.css", "docs/reader.css"), ("assets/reader.js", "docs/reader.js")]),
        "api-gateway-book-reader": ("web/reader.css", "web/reader.js", [("web/reader.css", "site/reader.css"), ("web/reader.js", "site/reader.js")]),
        "agent-sandbox-book-online": ("reader.css", "reader.js", []),
        "agent-memory-book": ("styles/site.css", "styles/reader.js", [("styles/site.css", "docs/site.css"), ("styles/reader.js", "docs/reader.js")]),
        "jvm-bug-book-reader": ("public/reader.css", "public/reader.js", []),
        "codex-engineering-book": ("web/reader.css", "web/reader.js", []),
        "pi-beginner-book-zh": ("web/site.css", "web/site.js", []),
        "deepseek-harness-book": ("site.css", "reader.js", [("site.css", "docs/site.css"), ("reader.js", "docs/reader.js")]),
        # Original authoring checkouts used to publish the standalone readers.
        "opensource-book": ("assets/reading.css", "assets/reading.js", [("assets/reading.css", "docs/reading.css"), ("assets/reading.js", "docs/reading.js")]),
        "api-gateway-book": ("web/reader.css", "web/reader.js", [("web/reader.css", "site/reader.css"), ("web/reader.js", "site/reader.js")]),
        "jvm-bug-book": ("web/reader.css", "web/reader.js", []),
        "agent-sandbox": ("site/reader.css", "site/reader.js", []),
    }
    for name, (css, js, copies) in configs.items():
        repo = root / name
        if repo.exists() and (repo / css).exists():
            assets(repo, css, js, copies)

    for path in [root / "opensource-book-site/java-concurrency/index.html",
                 root / "concurrency-book/web/template.html", root / "concurrency-book/docs/index.html"]:
        if path.exists():
            inline(path)

    repo = root / "envoy-learning-book"
    if repo.exists():
        write(repo / "book/styles/aias-reader.css", CSS)
        write(repo / "book/styles/aias-reader.js", JS)
        config = repo / "mkdocs.yml"
        text = config.read_text()
        if "styles/aias-reader.css" not in text:
            text += "\nextra_css:\n  - styles/aias-reader.css\n"
        if "styles/aias-reader.js" not in text:
            text += "\nextra_javascript:\n  - styles/aias-reader.js\n"
        write(config, text)

    repo = root / "agent-memory-book"
    if repo.exists():
        builder = repo / "scripts/build_site.py"
        add_script(builder)
        text = builder.read_text()
        copy = '    shutil.copyfile(ROOT / "styles/reader.js", SITE / "reader.js")'
        if copy not in text:
            text = text.replace('    shutil.copyfile(ROOT / "styles/site.css", SITE / "site.css")',
                                '    shutil.copyfile(ROOT / "styles/site.css", SITE / "site.css")\n' + copy)
            write(builder, text)
        for path in (repo / "docs").glob("*.html"):
            add_script(path)

    repo = root / "deepseek-harness-book"
    if repo.exists():
        add_script(repo / "site-template.html")
        builder = repo / "build_site.py"
        text = builder.read_text()
        if "('reader.js', 'reader.js')" not in text:
            write(builder, text.replace("[('site.css', 'site.css'),", "[('site.css', 'site.css'), ('reader.js', 'reader.js'),"))
        for path in (repo / "docs").glob("*.html"):
            add_script(path)

    repo = root / "agent-book"
    if repo.exists():
        # Keep assets/style.css for EPUB; the web reader gets separate assets.
        base = (repo / "assets/style.css").read_text()
        write(repo / "assets/reader.css", base + "\n" + CSS)
        write(repo / "assets/reader.js", JS)
        write(repo / "assets/reader-head.html", '<meta name="viewport" content="width=device-width, initial-scale=1">\n<script src="reader.js" defer></script>\n')
        write(repo / "docs/site/style.css", (repo / "assets/reader.css").read_text())
        write(repo / "docs/site/reader.js", JS)
        builder = repo / "scripts/build-book.sh"
        text = builder.read_text().replace('--css=style.css --standalone', '--css=style.css --include-in-header=assets/reader-head.html --standalone')
        text = text.replace('cp assets/style.css docs/site/style.css', 'cp assets/reader.css docs/site/style.css\ncp assets/reader.js docs/site/reader.js')
        # The handcrafted index and Pandoc chapter pages share the same assets.
        text = text.replace('<meta charset="utf-8"><title>', '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script src="reader.js" defer></script><title>')
        postprocess = """
python3 - <<'PYREADER'
from pathlib import Path
for page in Path('docs/site').glob('*.html'):
    text = page.read_text().replace('<body>', '<body class="aias-basic-reader">').replace('<main>', '<main class="prose">')
    page.write_text(text)
PYREADER
"""
        if "PYREADER" not in text:
            text += postprocess
        write(builder, text)
        for path in (repo / "docs/site").glob("*.html"):
            text = path.read_text().replace('<body>', '<body class="aias-basic-reader">').replace('<main>', '<main class="prose">')
            if 'name="viewport"' not in text:
                text = text.replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">')
            if 'src="reader.js"' not in text:
                if '</head>' in text:
                    text = text.replace('</head>', '<script src="reader.js" defer></script></head>')
                else:
                    text = text.replace('<main>', '<script src="reader.js" defer></script><main>', 1)
            write(path, text)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--checkout-root", required=True, type=Path)
    args = parser.parse_args()
    sync(args.checkout_root)
