# 首页内容规划

## 定位与页面结构

主页是 Aias 的技术写作入口。首页、书架与自我介绍分别独立成页，通过全站导航互相连接。

1. **首页 `/`**：个人首屏采用深海军蓝背景、冰青主色与靛蓝辅助色，保留粒子球的视觉识别；主操作“浏览电子书架”进入独立书架页。手机缩短图形区域。
2. **电子书架 `/books/`**：默认展示所有已发布书籍，按主题筛选；每本提供在线阅读和 EPUB 下载，并按读者目标提供选读顺序，不把独立书籍写成必修前置关系。
3. **关于我 `/about/`**：介绍 Apache ShenYu PMC 身份与关注领域，提供 GitHub 联系入口；联系区保留 `#contact` 锚点。

三页各有独立标题、描述和规范链接。导航顺序为“首页 / 书架 / 关于”，当前页状态随页面生成，不依赖 JavaScript。旧首页的书架与书籍锚点跳转到 `/books/`，关于与联系锚点跳转到 `/about/`；兼容脚本保留书籍和联系的具体位置。

## 分类与默认排列

同一主题放在一起，主题内优先基础，再到实践。当前共 23 本、3 个阅读方向：后端与基础设施 12 本、AI 与智能体 10 本、开源实践 1 本。数量按已核验的公开阅读入口统计，不将 EPUB、PDF 或独立发布站重复计为新书。

| 顺序 | 分类 | 书籍 | 内容规模 | 主要读者与用途 |
| --- | --- | --- | --- | --- |
| 01 | 后端与基础设施 / Java 与 JVM | 从零开始学 Java 高并发 | 18 章、5 个实验 | 有 Java 基础，开始学习线程安全、并发工具与系统场景 |
| 02 | 后端与基础设施 / Java 与 JVM | JVM 线上故障排查实战 | 10 个教学案例 | 通过症状、证据、根因和复盘练习故障排查 |
| 03 | 后端与基础设施 / 网络编程 | 从零开始学 Netty | 15 章、4 个附录 | 从 TCP 与协议边界学习异步网络服务 |
| 04 | 后端与基础设施 / 中间件 | Redis 学习手册 | 20 章 | 从数据结构、业务建模走向可靠性与综合实践 |
| 05 | 后端与基础设施 / 数据库 | MySQL 事务、并发控制与故障排查 | 17 章、4 个附录 | 用真实InnoDB实验理解快照、并发不变量和失败恢复 |
| 06 | 后端与基础设施 / 消息中间件 | RocketMQ：从消息模型到可靠系统 | 17 章正文、2 个附录 | 从消息模型、生产消费走向消息系统可靠性设计 |
| 07 | 后端与基础设施 / 事件日志 | Kafka 从零开始 | 14 章、4 个附录 | 用真实KRaft实验理解日志、消费进度、回放与再均衡 |
| 08 | 后端与基础设施 / 云原生 | 从零开始学 Kubernetes | 14 章、3 个附录 | 在真实kind集群练习部署、探针、回滚、持久卷与调度排错 |
| 09 | 后端与基础设施 / 云原生 | 从零读懂 Envoy | 26 章、3 个实验 | 理解代理、Go xDS 控制平面与 Kubernetes 网关 |
| 10 | 后端与基础设施 / 网关工程 | API 网关设计与实现 | 20 章、5 个附录 | 有 HTTP、Java 或后端基础，理解 ShenYu 与网关工程设计 |
| 11 | 后端与基础设施 / AI 网关 | AI 网关与模型路由实战 | 17 章、4 个附录 | 用真实 HTTP 实验学习流式协议、能力路由、租户预算和故障边界 |
| 12 | 后端与基础设施 / 可观测性 | 全链路可观测性：从一次慢请求到故障定位 | 16 章、4 个附录 | 用Java、Redis、RocketMQ与OTel真实链路学习指标、日志、追踪和排障 |
| 13 | AI 与智能体 | Agent 工程入门与实战：Java 开发者学习指南 | 16 章、附录 | Java 开发者围绕知识库助手学习 Agent 工程与维护 |
| 14 | AI 与智能体 / 知识库检索 | 企业知识库检索工程 | 16 章、4 个附录 | 从文档与权限建立检索、更新删除和可核查引用 |
| 15 | AI 与智能体 | Agent Sandbox：从零开始 | 27 章 | 理解执行边界，从概念和 Docker 实验走向工程导读 |
| 16 | AI 与智能体 | Agent 记忆：从概念到可落地的工程设计 | 5 章正文 | 探索 Agent 记忆的研究与工程设计方案 |
| 17 | AI 与智能体 | 从零读懂 Codex 工程 | 14 章、2 个附录 | 从终端与 Git 基础走向代理循环、权限与 SDK 源码导读 |
| 18 | AI 与智能体 | 从零读懂 Pi：AI 编程助手的工程入门 | 16 章、3 个附录 | 理解会话、工具、扩展与编程助手的工程结构 |
| 19 | AI 与智能体 | 从零认识 DeepSeek Harness | 12 章 | 从任务流程、插件协作和排错建立工程阅读地图 |
| 20 | AI 与智能体 | Claude Code 源码阅读 | 12 章导读、源码附录 | 围绕 Claude Code 2.1.88 阅读架构、工程导读与完整源码 |
| 21 | AI 与智能体 | AI 编程代理工程 | 26 章正文、5 个附录 | 对照四套实现，理解编程代理的工程结构并设计自己的 Harness |
| 22 | AI 与智能体 | AI 应用质量交付：从评测集到发布回归 | 16 章、4 个附录 | 建立版本化样本、评分校准、逐样本回归与发布门槛 |
| 23 | 开源实践 | 从零参与 Apache 开源 | 13 章、4 个附录 | 开始贡献，了解协作、发布与社区治理 |

《Claude Code 源码阅读》的副标题为“架构导读与完整源码”，《AI 编程代理工程》的副标题为“从四套实现到自己的 Harness”；书架卡片展示主标题，副标题保留在封面。

Java 并发虽然发布在 Apache 开源书站的子目录，内容是独立书籍，在书架独立呈现。JVM 的十个案例是教学案例，文案不称为真实生产事故。Agent 记忆定位研究与设计，不宣传为已经实现或压测的产品。

## 建议阅读路线

- **Java 工程**：Java 高并发 → JVM 故障排查；Netty 补充 TCP、异步网络和协议实现。
- **中间件与网关**：Redis 关注数据建模与可靠性，MySQL 关注事务、并发不变量和失败恢复，RocketMQ 关注消息模型与消息系统可靠性，Kafka 关注日志、消费进度和回放；网关方向选读 Envoy → API 网关设计与实现 → AI 网关与模型路由实战。各专题按目标选读，不构成必需前置关系；《全链路可观测性》连接网关、Java、Redis与消息链路的故障证据。Kubernetes 从应用部署与隔离 kind 实验建立容器编排认识。
- **Agent 工程**：先读《Agent 工程入门与实战》，围绕 Java 知识库助手建立整体认识，再按目标选读专题。企业知识库检索关注文档、权限、更新删除与引用证据，Sandbox 关注执行与隔离边界，Agent 记忆关注记忆组织与系统设计，《AI 应用质量交付》将评测与回归做成可运行流水线，可按目标独立选读。
- **AI 编程助手工程**：《AI 编程代理工程》对照四套实现，建立 Harness 的工程认识；Codex、Pi、DeepSeek Harness、Claude Code 是独立项目的源码与工程导读，可按目标选读，不构成前置关系。
- **开源协作**：Apache 开源入门的选项目 → 第一个 PR → 持续贡献与社区协作。

## 书目入口

| 书籍 | 在线阅读 | EPUB |
| --- | --- | --- |
| 从零开始学 Java 高并发 | https://aias00.github.io/opensource-book-site/java-concurrency/ | https://aias00.github.io/opensource-book-site/java-concurrency/book.epub |
| JVM 线上故障排查实战 | https://aias00.github.io/jvm-bug-book-reader/ | https://aias00.github.io/jvm-bug-book-reader/book.epub |
| 从零开始学 Netty | https://aias00.github.io/netty-book-reader/ | https://aias00.github.io/netty-book-reader/downloads/netty-book-reader.epub |
| Redis 学习手册 | https://aias00.github.io/redis-book/ | https://aias00.github.io/redis-book/downloads/redis-learning-handbook.epub |
| MySQL 事务、并发控制与故障排查 | https://aias00.github.io/mysql-reliability-book/ | https://aias00.github.io/mysql-reliability-book/downloads/mysql-reliability-book.epub |
| RocketMQ：从消息模型到可靠系统 | https://aias00.github.io/rocketmq-book/ | https://aias00.github.io/rocketmq-book/rocketmq-book.epub |
| Kafka 从零开始 | https://aias00.github.io/kafka-book-reader/ | https://aias00.github.io/kafka-book-reader/downloads/kafka-book-reader.epub |
| 从零开始学 Kubernetes | https://aias00.github.io/k8s-book-reader/ | https://aias00.github.io/k8s-book-reader/downloads/k8s-book-reader.epub |
| 从零读懂 Envoy | https://aias00.github.io/envoy-learning-book/ | https://github.com/Aias00/envoy-learning-book/releases/download/v1.0.0/envoy-learning-book.epub |
| API 网关设计与实现 | https://aias00.github.io/api-gateway-book-reader/ | https://aias00.github.io/api-gateway-book-reader/book.epub |
| AI 网关与模型路由实战 | https://aias00.github.io/ai-gateway-book/ | https://aias00.github.io/ai-gateway-book/downloads/ai-gateway-book.epub |
| 全链路可观测性：从一次慢请求到故障定位 | https://aias00.github.io/observability-book/ | https://aias00.github.io/observability-book/downloads/observability-book.epub |
| Agent 工程入门与实战：Java 开发者学习指南 | https://aias00.github.io/agent-book/ | https://aias00.github.io/agent-book/downloads/agent-engineering-java.epub |
| 企业知识库检索工程 | https://aias00.github.io/knowledge-retrieval-book/ | https://aias00.github.io/knowledge-retrieval-book/downloads/knowledge-retrieval-book.epub |
| Agent Sandbox：从零开始 | https://aias00.github.io/agent-sandbox-book-online/ | https://aias00.github.io/agent-sandbox-book-online/Agent-Sandbox-3.0.epub |
| Agent 记忆：从概念到可落地的工程设计 | https://aias00.github.io/agent-memory-book/ | https://aias00.github.io/agent-memory-book/agent-memory.epub |
| 从零读懂 Codex 工程 | https://aias00.github.io/codex-engineering-book/ | https://aias00.github.io/codex-engineering-book/downloads/codex-engineering-book.epub |
| 从零读懂 Pi：AI 编程助手的工程入门 | https://aias00.github.io/pi-beginner-book-zh/ | https://aias00.github.io/pi-beginner-book-zh/downloads/pi-beginner.epub |
| 从零认识 DeepSeek Harness | https://aias00.github.io/deepseek-harness-book/ | https://aias00.github.io/deepseek-harness-book/deepseek-harness-book.epub |
| Claude Code 源码阅读 | https://aias00.github.io/claude-code-source-book/ | https://aias00.github.io/claude-code-source-book/downloads/claude-code-source-book.epub |
| AI 编程代理工程 | https://aias00.github.io/agent-harness-engineering-book-zh/ | https://aias00.github.io/agent-harness-engineering-book-zh/downloads/agent-harness-engineering.epub |
| AI 应用质量交付：从评测集到发布回归 | https://aias00.github.io/ai-quality-book/ | https://aias00.github.io/ai-quality-book/downloads/ai-quality-book.epub |
| 从零参与 Apache 开源 | https://aias00.github.io/opensource-book-site/ | https://aias00.github.io/opensource-book-site/book.epub |

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

2026-10-21：新增 RocketMQ、Claude Code 源码阅读、AI 编程代理工程三本，书架共 15 本。三本的在线阅读入口均可访问，EPUB 下载最终返回 HTTP 200，并验证 ZIP 结构与 EPUB mimetype。RocketMQ 为 17 章正文、2 个附录，AI 编程代理工程为 26 章正文、5 个附录；Claude Code 为 12 章导读，另有前言、附录说明与完整源码，源码基于 2.1.88。原有 12 本未发现扩章或主版本变化；补齐 Agent 记忆的正式书名，以及 Apache 开源书的 4 个附录说明。

新增三站已接入共用阅读主题；15 本阅读器的默认浅色、深色切换、刷新保留和移动端检查通过，新增页面补测 320px 目录与顶栏操作、下载按钮对比度。书架三页浏览器回归全部 8 项通过，15 本的 30 个阅读与下载入口均完整 GET 返回 HTTP 200。

本轮写作与整理共八本，逐本交付状态见 [写作路线](WRITING_ROADMAP.md)。已完成公开阅读与 EPUB 核验的书籍才加入上述书架；后续待写书目不计入总数。

2026-10-21（写作路线首批）：新增《AI 网关与模型路由实战》（17章、4附录）与《从零开始学 Netty》（15章、4附录），共17本。AI网关26项真实HTTP测试、Netty Java/TCP实验、两书EPUBCheck及320/390px在线阅读均通过。EPUB使用成功CI产物发布，Pages与Release核对相同内容；原Netty维护仓库保持私有，公开reader仓库采用审查后的干净历史。

2026-10-21（第二批交付）：新增Kafka、全链路可观测性、AI应用质量交付，书架共20本。Kafka以官方包校验后的真实KRaft实验验证回放与再均衡；可观测性以真实Java/Redis/RocketMQ/OTel/Tempo/Prometheus集成验证因果、日志、指标与故障；质量交付以明确标注的合成样本和受控候选验证评分与发布流水线，不冒称真实模型排名。

2026-10-21（第三批交付）：新增MySQL、企业知识库检索、Kubernetes，书架共23本。MySQL为17章4附录、15项真实InnoDB场景；检索为16章4附录、24项测试含真实CPU ONNX BGE，覆盖权限、更新、删除与引用；Kubernetes为14章3附录、真实kind部署和故障演练。三书EPUBCheck零错误零警告，分章网页在320/390px及无JavaScript阅读下验收通过。阅读和EPUB主入口均指向各自Pages，同次成功CI工件同时用于Release，避免独立重建导致版本不一致。

本轮八本共125章正文、31附录、164阅读单元，[最终出版审计](docs/publication-audit-2026-10-21.json)全部通过。23本书架源提交d7c0419的完整CI39581614746成功；[实际公网验收](docs/homepage-publication-2026-10-21.json)核对三页移动端、全部书卡链接、分类筛选、无脚本与旧锚点兼容。交付记录补充提交不改页面源文件。
