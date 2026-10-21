# 技术电子书写作与发布路线

用户目标：按已推荐路线继续写书，提供 EPUB，提交至 Aias00 的 GitHub，并支持在线阅读。2026-10-21 已确认将三份现有书稿也一并整理发布，范围共八本。完成一本不能视为整个目标完成。

| 顺序 | 书籍 | 状态 | 本地目录 | GitHub / 在线入口 |
| --- | --- | --- | --- | --- |
| 1 | AI 网关与模型路由实战 | 已交付：17章4附录、26项HTTP测试、EPUB/在线/Release与书架均核验 | /Volumes/data/ai-gateway-book | [GitHub](https://github.com/Aias00/ai-gateway-book) · [阅读](https://aias00.github.io/ai-gateway-book/) · [EPUB](https://aias00.github.io/ai-gateway-book/downloads/ai-gateway-book.epub) |
| 2 | 全链路可观测性：从一次慢请求到故障定位 | 已交付：16章4附录，真实Java/Redis/RocketMQ/OTel链路、EPUB与公开阅读核验通过 | /Volumes/data/observability-book | [GitHub](https://github.com/Aias00/observability-book) · [阅读](https://aias00.github.io/observability-book/) · [EPUB](https://aias00.github.io/observability-book/downloads/observability-book.epub) |
| 3 | MySQL 事务、并发控制与故障排查 | 已交付：17章4附录、15项真实InnoDB测试，含增强死锁与提交确认丢失探针；公开阅读和v1.0.0核验通过 | /Volumes/data/mysql-reliability-book | [GitHub](https://github.com/Aias00/mysql-reliability-book) · [阅读](https://aias00.github.io/mysql-reliability-book/) · [EPUB](https://aias00.github.io/mysql-reliability-book/downloads/mysql-reliability-book.epub) |
| 4 | AI 应用质量交付：从评测集到发布回归 | 已交付：16章4附录、17项流水线测试；v1.0.1线上/Release/CI同源核验通过 | /Volumes/data/ai-quality-book | [GitHub](https://github.com/Aias00/ai-quality-book) · [阅读](https://aias00.github.io/ai-quality-book/) · [EPUB](https://aias00.github.io/ai-quality-book/downloads/ai-quality-book.epub) |
| 5 | 企业知识库检索工程 | 已交付：16章4附录，24项测试含真实BGE，FTS5/权限/更新删除实验；v1.0.1发布 | /Volumes/data/knowledge-retrieval-book | [GitHub](https://github.com/Aias00/knowledge-retrieval-book) · [阅读](https://aias00.github.io/knowledge-retrieval-book/) · [EPUB](https://aias00.github.io/knowledge-retrieval-book/downloads/knowledge-retrieval-book.epub) |
| 6 | 从零开始学 Netty | 已交付：15章4附录、Java/EPUB/在线/Release与书架均核验 | /Volumes/data/netty-book | [阅读](https://aias00.github.io/netty-book-reader/) · [GitHub](https://github.com/Aias00/netty-book-reader)；原仓库保持私有 |
| 7 | Kafka 从零开始 | 已交付：14章4附录，真实4.1.2 KRaft回放/再均衡/重启、EPUB与公开阅读通过 | /Volumes/data/kafka-book | [GitHub](https://github.com/Aias00/kafka-book-reader) · [阅读](https://aias00.github.io/kafka-book-reader/) · [EPUB](https://aias00.github.io/kafka-book-reader/downloads/kafka-book-reader.epub)；原仓库私有 |
| 8 | 从零开始学 Kubernetes | 已交付：14章3附录，真实kind部署/探针/回滚/PVC/调度，公开阅读与v1.0.0核验通过 | /Volumes/data/k8s-book | [GitHub](https://github.com/Aias00/k8s-book-reader) · [阅读](https://aias00.github.io/k8s-book-reader/) · [EPUB](https://aias00.github.io/k8s-book-reader/downloads/k8s-book-reader.epub)；原仓库私有 |

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
- 本机无容器、Kubernetes、MySQL服务；依赖实验已在 GitHub Actions 的真实容器和kind环境运行并保存证据。Netty与Kafka也保留本机JDK/Maven及真实KRaft验证。
- Release直接采用成功CI产物，逐本比对公开Pages、Release与CI的EPUB；交付文档不触发出版重建。补丁版本保留旧Release，不覆盖既有附件。

## 完成审计

八本均已完成正文、实验、EPUB、GitHub源代码与在线阅读，合计125章正文、31个附录。[独立出版审计](docs/publication-audit-2026-10-21.json)的8本全部通过：164个公开阅读单元可读，各书Pages、Release与同次成功CI的EPUB逐字节相同。书架最后三本已纳入23本源数据，本地类型检查、构建和8项浏览器回归通过，正在完成线上部署复核。

各书 `DELIVERY.md` 记录实验前提与未测试范围：受控HTTP上游不等于真实模型API，合成评测不等于模型排名，单节点KRaft/kind不等于生产高可用，Outbox本地原子性不等于消息恰好一次。Netty、Kafka、Kubernetes的原维护仓库仍为私有，公开阅读仓库使用审查后的独立历史。
