# 首页内容规划

## 定位与页面顺序

主页是 Aias 的技术写作与开源作品入口。访客首先能找到书，其次能找到可用工具，最后了解作者并建立联系。

1. **个人首屏**：保留深色、青绿和粒子球的视觉识别；主操作为“浏览电子书架”，次操作为“开源工具”。手机缩短图形区域。
2. **电子书架**：首页主内容。默认展示所有已发布书籍，按主题筛选；每本提供在线阅读和 EPUB 下载。
3. **建议阅读路线**：按读者目标提供选读顺序，不把独立书籍写成必修前置关系。
4. **开源工具**：Agent Skills、Skills Manager。书籍统一归书架，避免 Envoy 在两个栏目重复出现。
5. **关于与联系**：Apache ShenYu PMC 身份、关注领域和 GitHub 联系入口。

## 分类与默认排列

同一主题放在一起，主题内优先基础，再到实践。当前共 8 本、3 个阅读方向；数量按已核验的公开阅读入口统计，不将 EPUB、PDF 或独立发布站重复计为新书。

| 顺序 | 分类 | 书籍 | 内容规模 | 主要读者与用途 |
| --- | --- | --- | --- | --- |
| 01 | 后端与基础设施 / Java 与 JVM | 从零开始学 Java 高并发 | 18 章、5 个实验 | 有 Java 基础，开始学习线程安全、并发工具与系统场景 |
| 02 | 后端与基础设施 / Java 与 JVM | JVM 线上故障排查实战 | 10 个教学案例 | 通过症状、证据、根因和复盘练习故障排查 |
| 03 | 后端与基础设施 / 中间件 | Redis 学习手册 | 20 章 | 从数据结构、业务建模走向可靠性与综合实践 |
| 04 | 后端与基础设施 / 云原生 | 从零读懂 Envoy | 26 章、3 个实验 | 理解代理、Go xDS 控制平面与 Kubernetes 网关 |
| 05 | 后端与基础设施 / 网关工程 | API 网关设计与实现 | 20 章、5 个附录 | 有 HTTP、Java 或后端基础，理解 ShenYu 与网关工程设计 |
| 06 | AI 与智能体 | Agent Sandbox：从零开始 | 27 章 | 理解执行边界，从概念和 Docker 实验走向工程导读 |
| 07 | AI 与智能体 | Agent 记忆：从概念到可落地的工程设计 | 5 章正文 | 探索 Agent 记忆的研究与工程设计方案 |
| 08 | 开源实践 | 从零参与 Apache 开源 | 13 章 | 开始贡献，了解协作、发布与社区治理 |

Java 并发虽然发布在 Apache 开源书站的子目录，内容是独立书籍，在书架独立呈现。JVM 的十个案例是教学案例，文案不称为真实生产事故。Agent 记忆定位研究与设计，不宣传为已经实现或压测的产品。

## 建议阅读路线

- **Java 工程**：Java 高并发 → JVM 故障排查。
- **中间件与网关**：Redis → Envoy → API 网关设计与实现，作为扩大技术视野的选读顺序，不是必需前置关系。
- **Agent 工程**：Sandbox 关注执行与隔离边界，Agent 记忆关注记忆组织与系统设计，可按目标独立选读。
- **开源协作**：Apache 开源入门的选项目 → 第一个 PR → 持续贡献与社区协作。

## 书目入口

| 书籍 | 在线阅读 | EPUB |
| --- | --- | --- |
| Java 高并发 | https://aias00.github.io/opensource-book-site/java-concurrency/ | https://aias00.github.io/opensource-book-site/java-concurrency/book.epub |
| JVM 故障排查 | https://aias00.github.io/jvm-bug-book-reader/ | https://aias00.github.io/jvm-bug-book-reader/book.epub |
| Redis | https://aias00.github.io/redis-book/ | https://aias00.github.io/redis-book/downloads/redis-learning-handbook.epub |
| Envoy | https://aias00.github.io/envoy-learning-book/ | https://github.com/Aias00/envoy-learning-book/releases/download/v1.0.0/envoy-learning-book.epub |
| API 网关 | https://aias00.github.io/api-gateway-book-reader/ | https://aias00.github.io/api-gateway-book-reader/book.epub |
| Agent Sandbox | https://aias00.github.io/agent-sandbox-book-online/ | https://aias00.github.io/agent-sandbox-book-online/Agent-Sandbox-3.0.epub |
| Agent 记忆 | https://aias00.github.io/agent-memory-book/ | https://aias00.github.io/agent-memory-book/agent-memory.epub |
| Apache 开源 | https://aias00.github.io/opensource-book-site/ | https://aias00.github.io/opensource-book-site/book.epub |

Envoy 的 PDF、HTML 和 Markdown 版本保留在其 [Release](https://github.com/Aias00/envoy-learning-book/releases/tag/v1.0.0)，书架主操作统一使用在线阅读和 EPUB。

## 后续维护

- 新书在阅读页和下载入口可用后加入；单本书更新版本不新增书卡。
- 书目内容位于 `index.html` 的 `#book-grid`，按表格顺序排列。分类筛选基于每张卡片的 `data-topic`；筛选数量由页面自动计算。
- 增删书籍时同步修改首屏总数、书架说明、分类标签的初始数量、总数与阅读路线。
- 保持统一封面体系、清晰主题、内容规模和两项主操作；不添加未核实的评分、销量或完成状态。
- 书目明显增多时再拆独立书架页；首页保留精选书，完整书目页承载搜索与更多分类。
