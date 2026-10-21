# 首页内容规划

## 定位与页面结构

主页是 Aias 的技术写作入口。首页、书架与自我介绍分别独立成页，通过全站导航互相连接。

1. **首页 `/`**：个人首屏采用深海军蓝背景、冰青主色与靛蓝辅助色，保留粒子球的视觉识别；主操作“浏览电子书架”进入独立书架页。手机缩短图形区域。
2. **电子书架 `/books/`**：默认展示所有已发布书籍，按主题筛选；每本提供在线阅读和 EPUB 下载，并按读者目标提供选读顺序，不把独立书籍写成必修前置关系。
3. **关于我 `/about/`**：介绍 Apache ShenYu PMC 身份与关注领域，提供 GitHub 联系入口；联系区保留 `#contact` 锚点。

三页各有独立标题、描述和规范链接。导航顺序为“首页 / 书架 / 关于”，当前页状态随页面生成，不依赖 JavaScript。旧首页的书架与书籍锚点跳转到 `/books/`，关于与联系锚点跳转到 `/about/`；兼容脚本保留书籍和联系的具体位置。

## 分类与默认排列

同一主题放在一起，主题内优先基础，再到实践。当前共 12 本、3 个阅读方向；数量按已核验的公开阅读入口统计，不将 EPUB、PDF 或独立发布站重复计为新书。

| 顺序 | 分类 | 书籍 | 内容规模 | 主要读者与用途 |
| --- | --- | --- | --- | --- |
| 01 | 后端与基础设施 / Java 与 JVM | 从零开始学 Java 高并发 | 18 章、5 个实验 | 有 Java 基础，开始学习线程安全、并发工具与系统场景 |
| 02 | 后端与基础设施 / Java 与 JVM | JVM 线上故障排查实战 | 10 个教学案例 | 通过症状、证据、根因和复盘练习故障排查 |
| 03 | 后端与基础设施 / 中间件 | Redis 学习手册 | 20 章 | 从数据结构、业务建模走向可靠性与综合实践 |
| 04 | 后端与基础设施 / 云原生 | 从零读懂 Envoy | 26 章、3 个实验 | 理解代理、Go xDS 控制平面与 Kubernetes 网关 |
| 05 | 后端与基础设施 / 网关工程 | API 网关设计与实现 | 20 章、5 个附录 | 有 HTTP、Java 或后端基础，理解 ShenYu 与网关工程设计 |
| 06 | AI 与智能体 | Agent 工程入门与实战：Java 开发者学习指南 | 16 章、附录 | Java 开发者围绕知识库助手学习 Agent 工程与维护 |
| 07 | AI 与智能体 | Agent Sandbox：从零开始 | 27 章 | 理解执行边界，从概念和 Docker 实验走向工程导读 |
| 08 | AI 与智能体 | Agent 记忆：从概念到可落地的工程设计 | 5 章正文 | 探索 Agent 记忆的研究与工程设计方案 |
| 09 | AI 与智能体 | 从零读懂 Codex 工程 | 14 章、2 个附录 | 从终端与 Git 基础走向代理循环、权限与 SDK 源码导读 |
| 10 | AI 与智能体 | 从零读懂 Pi：AI 编程助手的工程入门 | 16 章、3 个附录 | 理解会话、工具、扩展与编程助手的工程结构 |
| 11 | AI 与智能体 | 从零认识 DeepSeek Harness | 12 章 | 从任务流程、插件协作和排错建立工程阅读地图 |
| 12 | 开源实践 | 从零参与 Apache 开源 | 13 章 | 开始贡献，了解协作、发布与社区治理 |

Java 并发虽然发布在 Apache 开源书站的子目录，内容是独立书籍，在书架独立呈现。JVM 的十个案例是教学案例，文案不称为真实生产事故。Agent 记忆定位研究与设计，不宣传为已经实现或压测的产品。

## 建议阅读路线

- **Java 工程**：Java 高并发 → JVM 故障排查。
- **中间件与网关**：Redis → Envoy → API 网关设计与实现，作为扩大技术视野的选读顺序，不是必需前置关系。
- **Agent 工程**：先读《Agent 工程入门与实战》，围绕 Java 知识库助手建立整体认识，再按目标选读专题。Sandbox 关注执行与隔离边界，Agent 记忆关注记忆组织与系统设计，可按目标独立选读。
- **AI 编程助手工程**：Codex、Pi、DeepSeek Harness 是三个独立项目的工程导读，可按目标选读，不构成前置关系。
- **开源协作**：Apache 开源入门的选项目 → 第一个 PR → 持续贡献与社区协作。

## 书目入口

| 书籍 | 在线阅读 | EPUB |
| --- | --- | --- |
| Java 高并发 | https://aias00.github.io/opensource-book-site/java-concurrency/ | https://aias00.github.io/opensource-book-site/java-concurrency/book.epub |
| JVM 故障排查 | https://aias00.github.io/jvm-bug-book-reader/ | https://aias00.github.io/jvm-bug-book-reader/book.epub |
| Redis | https://aias00.github.io/redis-book/ | https://aias00.github.io/redis-book/downloads/redis-learning-handbook.epub |
| Envoy | https://aias00.github.io/envoy-learning-book/ | https://github.com/Aias00/envoy-learning-book/releases/download/v1.0.0/envoy-learning-book.epub |
| API 网关 | https://aias00.github.io/api-gateway-book-reader/ | https://aias00.github.io/api-gateway-book-reader/book.epub |
| Agent 工程入门与实战 | https://aias00.github.io/agent-book/ | https://aias00.github.io/agent-book/downloads/agent-engineering-java.epub |
| Agent Sandbox | https://aias00.github.io/agent-sandbox-book-online/ | https://aias00.github.io/agent-sandbox-book-online/Agent-Sandbox-3.0.epub |
| Agent 记忆 | https://aias00.github.io/agent-memory-book/ | https://aias00.github.io/agent-memory-book/agent-memory.epub |
| Codex 工程 | https://aias00.github.io/codex-engineering-book/ | https://aias00.github.io/codex-engineering-book/downloads/codex-engineering-book.epub |
| Pi 工程入门 | https://aias00.github.io/pi-beginner-book-zh/ | https://aias00.github.io/pi-beginner-book-zh/downloads/pi-beginner.epub |
| DeepSeek Harness | https://aias00.github.io/deepseek-harness-book/ | https://aias00.github.io/deepseek-harness-book/deepseek-harness-book.epub |
| Apache 开源 | https://aias00.github.io/opensource-book-site/ | https://aias00.github.io/opensource-book-site/book.epub |

Envoy 的 PDF、HTML 和 Markdown 版本保留在其 [Release](https://github.com/Aias00/envoy-learning-book/releases/tag/v1.0.0)，书架主操作统一使用在线阅读和 EPUB。

## 后续维护

- 新书在阅读页和下载入口可用后加入；单本书更新版本不新增书卡。
- 书目内容位于 `src/data/books.ts`，按表格顺序排列；书卡由 `BookCard.astro` 生成。分类筛选基于每张卡片的 `data-topic`。
- 增删书籍时修改书目数据，并复核 `ReadingPaths.astro` 中的阅读路线；首屏、书架总数、分类数量与编号在构建时自动生成。
- 保持统一封面体系、清晰主题、内容规模和两项主操作；不添加未核实的评分、销量或完成状态。
- 完整书目和阅读路线维护在 `/books/`，首页保留书架概览与入口；个人介绍和联系维护在 `/about/`。新增导航或页面时保持静态 HTML 可访问，并检查移动端布局。

## 最近核验

2026-10-20：新增《Agent 工程入门与实战：Java 开发者学习指南》，按公开仓库 README 核对为 16 章及附录；全部 9 本书的在线阅读和 EPUB 入口均返回 HTTP 200。Kafka、Netty、Kubernetes 等本地书稿待公开阅读与下载入口可核验后再加入书架。

2026-10-20（第二轮）：新增 Codex、Pi、DeepSeek Harness 三本工程导读，书架共 12 本。Sandbox 分章页面包含指南和附录，正文仍为 27 章。阅读站统一采用浅色默认、手动深色切换与共用排版；网页版调整不更改 EPUB。
