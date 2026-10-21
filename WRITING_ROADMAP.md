# 技术电子书写作与发布路线

用户目标：按已推荐路线继续写书，提供 EPUB，提交至 Aias00 的 GitHub，并支持在线阅读。第一轮八本、第二轮三本及第三轮三本均已交付。第三轮逐本EPUB、GitHub、Release和公共阅读已通过审计，29本书架正在统一部署验收；既有26本的历史验收保持独立。

## 第三轮：已交付的三本

| 顺序 | 书籍 | 当前状态 | 本地目录 | GitHub仓库 |
| --- | --- | --- | --- | --- |
| 1 | Kubernetes 控制器与 Operator 工程：从协调循环到可靠运维 | 已交付v1.0.0：18章4附录；源码和独立ZIP各18pass，真实Envoy、kind API、冲突、RBAC和字段保留通过 | /Volumes/data/kubernetes-operator-book | [GitHub](https://github.com/Aias00/kubernetes-operator-book) · [阅读](https://aias00.github.io/kubernetes-operator-book/) · [EPUB](https://aias00.github.io/kubernetes-operator-book/downloads/kubernetes-operator-book.epub) |
| 2 | 业务数据同步工程：从 CDC 到可重建索引 | 已交付v1.0.0：18章4附录；源码和独立ZIP各22检查，真实快照交叠、SIGKILL恢复和6次完整对账通过 | /Volumes/data/cdc-data-pipeline-book | [GitHub](https://github.com/Aias00/cdc-data-pipeline-book) · [阅读](https://aias00.github.io/cdc-data-pipeline-book/) · [EPUB](https://aias00.github.io/cdc-data-pipeline-book/downloads/cdc-data-pipeline-book.epub) |
| 3 | MySQL 备份、复制与恢复演练：从数据保护到故障切换 | 已交付v1.0.0：18章4附录；源码和独立ZIP各10真实四实例场景，停源归档PITR与限权业务身份切换通过 | /Volumes/data/mysql-recovery-book | [GitHub](https://github.com/Aias00/mysql-recovery-book) · [阅读](https://aias00.github.io/mysql-recovery-book/) · [EPUB](https://aias00.github.io/mysql-recovery-book/downloads/mysql-recovery-book.epub) |

每本排除代码块后正文均超过25000中文汉字，提供完整解释、贯穿项目、练习、来源、实验代码及真实运行证据。[第三轮出版审计](docs/publication-audit-round3-2026-10-21.json)逐项核对[验收清单](docs/round3-publication-checklist.md)，三书全部PASS。书架配置共29本，待本轮主站实际部署验收后补充公网记录。

浏览器Agent、Linux排障、模型推理服务及数据分析Agent是后续储备；记忆与Sandbox改版另行安排，不替代或扩充本轮三书范围。

## 第二轮：已交付的三本

| 顺序 | 书籍 | 状态 | 本地目录 | 公开入口 |
| --- | --- | --- | --- | --- |
| 1 | 长任务 Agent 的可靠执行：状态、审批与故障恢复 | 已交付v1.0.0：18章26718正文汉字、4附录；真实PG28项、CPU模型、ZIP独立执行与完整出版CI39591665656通过，EPUB的CI/Pages/Release逐字节一致 | /Volumes/data/durable-agent-workflow-book | [阅读](https://aias00.github.io/durable-agent-workflow-book/) · [EPUB](https://aias00.github.io/durable-agent-workflow-book/downloads/durable-agent-workflow-book.epub) · [GitHub](https://github.com/Aias00/durable-agent-workflow-book) |
| 2 | 企业 Agent 工具接入：身份委托、授权与审计 | 已交付v1.0.1：18章25303正文汉字、2附录；真实HTTP/Keycloak、独立审阅与公开产物核验通过 | /Volumes/data/enterprise-agent-auth-book | [阅读](https://aias00.github.io/enterprise-agent-auth-book/) · [EPUB](https://aias00.github.io/enterprise-agent-auth-book/downloads/enterprise-agent-auth-book.epub) · [GitHub](https://github.com/Aias00/enterprise-agent-auth-book) |
| 3 | Go 服务工程：并发、资源管理与故障诊断 | 已交付v1.0.1：18章27153正文汉字、4附录；真实TCP/取消/SIGTERM/race/profile与公开产物核验通过 | /Volumes/data/go-service-engineering-book | [阅读](https://aias00.github.io/go-service-engineering-book/) · [EPUB](https://aias00.github.io/go-service-engineering-book/downloads/go-service-engineering-book.epub) · [GitHub](https://github.com/Aias00/go-service-engineering-book) |

第二轮三书已逐项完成下述交付条件。最新[选题分析](docs/next-book-topics-2026-10-21.md)中的前三本现已启动第三轮，第二轮既有产物和审计记录保持独立。

## 第一轮：已完成的八本

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

- 各书使用独立仓库；书稿：`book/chapters/*.md`，元数据：`book/metadata.json`；原生 SVG 封面。
- 实验源码与配置放在各书`lab/`等目录；第三轮分别使用真实kind API、真实CDC数据链路及真实MySQL多实例，不以替身或静态配置检查代替集成证据。
- 构建与网页：`scripts/`、`web/`、`epub/`；生成物不直接修改。
- 不冒称来自真实生产事故，不声称已经完成尚未运行的评测、集群或故障实验。
- 本机无容器、Kubernetes、MySQL服务；依赖实验已在 GitHub Actions 的真实容器和kind环境运行并保存证据。Netty与Kafka也保留本机JDK/Maven及真实KRaft验证。
- Release直接采用成功CI产物，逐本比对公开Pages、Release与CI的EPUB；交付文档不触发出版重建。补丁版本保留旧Release，不覆盖既有附件。

## 第一轮完成审计

八本均已完成正文、实验、EPUB、GitHub源代码与在线阅读，合计125章正文、31个附录。[独立出版审计](docs/publication-audit-2026-10-21.json)的8本全部通过：164个公开阅读单元可读，各书Pages、Release与同次成功CI的EPUB逐字节相同。

23本[公开书架](https://aias00.github.io/books/)已部署并复核，分类为后端12本、AI10本、开源1本。主页源提交 `d7c0419625b06a6374a897b0c347fa6f533c08c3` 的完整[CI 39581614746](https://github.com/Aias00/aias-homepage/actions/runs/39581614746)成功，发布仓库提交 `9eefbfc0051b4f8fb0725ec3e38d273f8f1e1ed3` 与该源提交对应。本地与CI均通过类型检查、构建和8项浏览器回归；公网三页320/390/820px布局、23书卡的46个链接与源数据一致、分类筛选、旧锚点和无JavaScript导航均通过，记录见[主页部署验收](docs/homepage-publication-2026-10-21.json)。第一轮八本写作与整理发布范围全部完成。

各书 `DELIVERY.md` 记录实验前提与未测试范围：受控HTTP上游不等于真实模型API，合成评测不等于模型排名，单节点KRaft/kind不等于生产高可用，Outbox本地原子性不等于消息恰好一次。Netty、Kafka、Kubernetes的原维护仓库仍为私有，公开阅读仓库使用审查后的独立历史。

## 第二轮完成审计

本轮三本共54章正文、10个附录、3篇前言，合计67个公开阅读单元，排除代码块后正文共79174中文汉字。[三书出版审计](docs/publication-audit-round2-2026-10-21.json)全部PASS：正文、实验、公开阅读、EPUBCheck、移动端和无JavaScript阅读均通过，各书EPUB的成功CI、Pages与Release逐字节相同。产品提交和后续证据提交分别记录，不以文档更新触发重建或替换已发布附件。

| 书籍 | 产品源提交 | 成功CI | Release | EPUB SHA256 |
| --- | --- | --- | --- | --- |
| 长任务Agent | `6ce0cbd3d713c7723858e8c858fbfb4be48155a8` | [39591665656](https://github.com/Aias00/durable-agent-workflow-book/actions/runs/39591665656) | v1.0.0 | `9e39bce14f69d085244050ea784ee77097b0acb98f1044d1bb1f98e346fc574d` |
| 企业工具授权 | `49b91ead9094e13554cbc700d12f33617b1d44a9` | [39588610889](https://github.com/Aias00/enterprise-agent-auth-book/actions/runs/39588610889) | v1.0.1 | `3c1f8dfede767cb72c84253fc65b23ce15b59cba40aa88e87df474f056547265` |
| Go服务工程 | `ee5e29d5ab69681e5d63e00ecc38a144e567a3fa` | [39588398529](https://github.com/Aias00/go-service-engineering-book/actions/runs/39588398529) | v1.0.1 | `71f1495f93770a6e6034a04aeda6ab1a7791c10ba6ff9d4c3809bc5389661c74` |

长任务书实测为单个业务副作用节点，包含真实PostgreSQL、HTTP、SIGKILL和两例真实CPU模型生成；工具授权书的真实Keycloak路径使用服务身份；Go书验证真实TCP、取消、有界并发、SIGTERM与诊断。这些证据不扩展为通用工作流高可用、完整用户登录或生产容量保证。审计JSON明确区分原始内容独立审阅、流水线修复执行者及另一位审阅者的最终CI/发布复核。

26本[公开书架](https://aias00.github.io/books/)的分类为后端13本、AI12本、开源1本。源码提交 `c0ff7ed064f4d8e2a68f7b427c7b2d9d6b802733` 的[CI 39592745232](https://github.com/Aias00/aias-homepage/actions/runs/39592745232)完成类型检查、构建和8项浏览器回归；发布仓库提交 `1cc65453b5a02c31432f128f141b910fbcebda5f` 的消息引用该完整源SHA。[本轮主页公网验收](docs/homepage-publication-round2-2026-10-21.json)核对三页320/390/820px、全部26张书卡的52个链接、各宽分类筛选与字号、48px阅读/下载按钮、三宽无脚本导航和29个旧锚点，全部通过。第一轮23本的验收JSON保留为历史记录。
