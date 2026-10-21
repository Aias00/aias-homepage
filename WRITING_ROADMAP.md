# 技术电子书写作与发布路线

用户目标：按已推荐路线继续写书，提供 EPUB，提交至 Aias00 的 GitHub，并支持在线阅读。2026-10-21 已确认将三份现有书稿也一并整理发布，范围共八本。完成一本不能视为整个目标完成。

| 顺序 | 书籍 | 状态 | 本地目录 | GitHub / 在线入口 |
| --- | --- | --- | --- | --- |
| 1 | AI 网关与模型路由实战 | 17章4附录、26项HTTP测试、EPUB/在线与Release已发布；书架待发布 | /Volumes/data/ai-gateway-book | [GitHub](https://github.com/Aias00/ai-gateway-book) · [阅读](https://aias00.github.io/ai-gateway-book/) · [EPUB](https://aias00.github.io/ai-gateway-book/downloads/ai-gateway-book.epub) |
| 2 | 全链路可观测性：从一次慢请求到故障定位 | 搭建真实 OTel / Java / Redis / RocketMQ 实验 | /Volumes/data/observability-book | 待发布 |
| 3 | MySQL 事务、并发控制与故障排查 | 待编写 | 待建立 | 待发布 |
| 4 | AI 应用质量交付：从评测集到发布回归 | 26条样本与17项流水线测试已跑通，编写16章 | /Volumes/data/ai-quality-book | 待发布 |
| 5 | 企业知识库检索工程 | 待编写 | 待建立 | 待发布 |
| 6 | 从零开始学 Netty | 15章4附录、Java/EPUB/在线与Release已发布；书架待发布 | /Volumes/data/netty-book | [阅读](https://aias00.github.io/netty-book-reader/) · [GitHub](https://github.com/Aias00/netty-book-reader)；原仓库保持私有 |
| 7 | Kafka 现稿 | 本机4.1.2真实回放、再均衡、重启与配置实验通过，准备公开发布 | /Volumes/data/kafka-book | 待核验公开入口 |
| 8 | Kubernetes 现稿 | 待真实集群实验、整理与发布 | /Volumes/data/k8s-book | 待核验公开入口 |

## 每本书的交付条件

1. 完整中文正文、清楚的读者定位与学习路线、权威来源和实验边界；不能将提纲或几章示例当成整书。
2. 实验与书稿一致，正常路径和关键失败路径有运行证据；不能以静态配置检查声称运行过数据库、网络或集群实验。
3. EPUB 包含元数据、封面、目录和正文，通过 EPUBCheck；在线与 EPUB 使用相同正文来源。
4. 在线阅读支持分章、目录、导航、搜索、字号、移动端、默认浅色及可切换深色，同域共享主题偏好；禁用 JavaScript 仍可读正文。
5. 源码与构建发布流程提交至用户 GitHub，发布 EPUB 下载和可访问的 GitHub Pages；必须检查实际远程状态与线上页面。
6. 阅读及下载地址核验后加入主页书架，更新分类、阅读路线和维护文档。

## 当前工作约定

- 第一本文稿：`book/chapters/*.md`，元数据：`book/metadata.json`；原生 SVG 封面。
- 第一本文实验：`lab/` 与 `tests/`；先用可控的真实 HTTP 上游替身建立确定性实验，区分教学保证与生产实现。
- 构建与网页：`scripts/`、`web/`、`epub/`；生成物不直接修改。
- 不冒称来自真实生产事故，不声称已经完成尚未运行的评测、集群或故障实验。
- Kubernetes 实验环境需要重新探测，不能沿用旧稿“未安装工具”的状态作为当前阻塞证据。
- 2026-10-21 已实测本机无容器、Kubernetes、MySQL、OTel工具及可用服务；JDK21/Maven可运行。后续依赖实验可通过 GitHub Actions 的真实容器和 kind 环境运行并保存证据，缺少本地工具不构成停止写作与验证的依据。

## 完成审计

第一本与Netty已公开发布并完成产品验收，书架同步待最终发布；其余六本仍有必需工作，整体目标未完成。以本文件、各书仓库的源码、实际运行记录、GitHub 提交 / Actions 和线上产物作为后续继续工作的依据。
