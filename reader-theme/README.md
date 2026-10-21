# 统一阅读样式

所有书站使用同一套暖白浅色、炭灰深色、青绿色链接、正文与代码排版。默认浅色；手动选择后在 `aias00.github.io` 同域书站之间共享，并随刷新保留。禁用 JavaScript 时仍能用浅色阅读。EPUB 使用各书原有样式，不受网页版调整影响。

`reader.css` 适配各站现有的颜色变量，屏幕样式不会覆盖打印规则；`reader.js` 复用原主题按钮或选择框，没有主题控件时在正文上方补充入口。搜索、目录、字号、阅读进度继续使用各书自己的实现。

| 书站仓库 | 样式源码 | 发布位置 |
| --- | --- | --- |
| opensource-book-site | reading.css / reading.js | 仓库根目录；Java 高并发为 java-concurrency/index.html 内嵌资源 |
| redis-book | assets/reader.css / reader.js | docs/ |
| envoy-learning-book | book/styles/aias-reader.css / .js | MkDocs extra_css / extra_javascript，保留 Material 原生主题控件 |
| api-gateway-book-reader | web/reader.css / reader.js | site/ |
| agent-sandbox-book-online | reader.css / reader.js | 仓库根目录 |
| agent-memory-book | styles/site.css / reader.js | docs/，构建脚本复制资源 |
| jvm-bug-book-reader | public/reader.css / reader.js | public/ |
| agent-book | web/reader.css / reader.js | scripts/build_site.py 构建到 docs/site/；assets/style.css 仅用于 EPUB |
| codex-engineering-book | web/reader.css / reader.js | 构建到 _site/ |
| pi-beginner-book-zh | web/site.css / site.js | 构建到 site/ |
| deepseek-harness-book | site.css / reader.js / site-template.html | docs/，构建脚本复制资源 |

## 更新

修改共用文件后，在各书仓库的上级目录执行同步，再运行对应书站的构建与校验：

```sh
python3 scripts/sync_reader_theme.py --checkout-root /path/to/books
```

同步器会跳过不存在的仓库，同步生成文件和源码；重复执行不会重复插入样式。它也支持原始写作目录 `opensource-book`、`concurrency-book`、`api-gateway-book`、`jvm-bug-book`、`agent-sandbox`，避免后续重新发布时覆盖新样式。

API 下载的临时仓库快照位于 `/Volumes/data/build/ebook-readers/`；原有写作仓库仍在 `/Volumes/data/`。临时快照的 Git 基线只用于审查差异，不能直接向远程推送其提交历史。

## 验证

各书正常构建后，在书仓库父目录启动静态服务。`scripts/check_readers.cjs` 使用已安装的 Playwright / Chromium 检查 12 本书：深色系统下默认浅色、手动深色、刷新保留、390px 手机宽度、正文与代码高亮对比度、JavaScript 错误；同时检查首页分类与路线、禁用存储及 JavaScript 的降级行为。

```sh
python3 -m http.server 4198 --bind 127.0.0.1 --directory /path/to/books
PLAYWRIGHT_MODULE=/path/to/node_modules/playwright node scripts/check_readers.cjs
```

检查器中的路径按上述临时快照和原有写作目录布局设置。可通过 `READER_BASE` 指定服务地址、`READER_SCREENSHOTS` 指定截图输出目录。
