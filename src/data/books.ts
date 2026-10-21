export const topics = [
  { id: 'backend', label: '后端与基础设施' },
  { id: 'agents', label: 'AI 与智能体' },
  { id: 'opensource', label: '开源实践' },
] as const;

export interface Book {
  id: string;
  topic: (typeof topics)[number]['id'];
  topicLabel: string;
  title: string;
  description: string;
  scale: string;
  level: string;
  readUrl: string;
  epubUrl: string;
  coverColor: string;
  coverInk: string;
  coverLines: string[];
  coverSubtitle: string;
  coverArt: string;
}

// Book order, category counts and shelf totals are generated from this data.
export const books = [
  {
    "id": "java",
    "topic": "backend",
    "topicLabel": "JAVA & JVM",
    "title": "从零开始学 Java 高并发",
    "description": "以 Java 21 为基础，从线程安全、并发工具到系统场景，用实验理解并发。",
    "scale": "18 章 · 5 个实验",
    "level": "基础入门",
    "readUrl": "https://aias00.github.io/opensource-book-site/java-concurrency/",
    "epubUrl": "https://aias00.github.io/opensource-book-site/java-concurrency/book.epub",
    "coverColor": "#b8c6df",
    "coverInk": "#29374b",
    "coverLines": [
      "Java",
      "高并发"
    ],
    "coverSubtitle": "从线程安全到系统实践",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"M10 9h63M10 25h63M10 41h63\"/><circle cx=\"25\" cy=\"9\" r=\"4\"/><circle cx=\"43\" cy=\"25\" r=\"4\"/><circle cx=\"60\" cy=\"41\" r=\"4\"/><path d=\"m69 5 4 4-4 4m0 8 4 4-4 4m0 8 4 4-4 4\"/></svg>"
  },
  {
    "id": "jvm",
    "topic": "backend",
    "topicLabel": "JAVA & JVM",
    "title": "JVM 线上故障排查实战",
    "description": "用十个教学案例，练习从症状、证据到根因、修复与复盘，建立排障思路。",
    "scale": "10 个教学案例",
    "level": "排障实践",
    "readUrl": "https://aias00.github.io/jvm-bug-book-reader/",
    "epubUrl": "https://aias00.github.io/jvm-bug-book-reader/book.epub",
    "coverColor": "#c3b6ce",
    "coverInk": "#3b2b47",
    "coverLines": [
      "JVM",
      "故障排查"
    ],
    "coverSubtitle": "从症状到证据与根因",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"M4 28h15l6-15 9 28 9-36 9 26h26M5 46h72M5 5v41\"/><circle cx=\"61\" cy=\"31\" r=\"4\"/></svg>"
  },
  {
    "id": "netty",
    "topic": "backend",
    "topicLabel": "NETWORK PROGRAMMING",
    "title": "从零开始学 Netty",
    "description": "从 TCP 行协议出发，学习 Pipeline、ByteBuf、消息边界与连接生命周期，用 Java 工程验证网络编程。",
    "scale": "15 章 · 4 个附录",
    "level": "网络编程入门",
    "readUrl": "https://aias00.github.io/netty-book-reader/",
    "epubUrl": "https://aias00.github.io/netty-book-reader/downloads/netty-book-reader.epub",
    "coverColor": "#b6cdd5",
    "coverInk": "#2c4351",
    "coverLines": ["Netty", "网络编程"],
    "coverSubtitle": "从 TCP 到异步网络服务",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"4\" y=\"17\" width=\"18\" height=\"20\" rx=\"2\"/><rect x=\"60\" y=\"17\" width=\"18\" height=\"20\" rx=\"2\"/><path d=\"M22 22h38m-7-5 7 5-7 5M60 32H22m7-5-7 5 7 5\"/><circle cx=\"41\" cy=\"22\" r=\"3\"/></svg>"
  },
  {
    "id": "redis",
    "topic": "backend",
    "topicLabel": "MIDDLEWARE",
    "title": "Redis 学习手册",
    "description": "以 Redis 7.2 为实验基线，从数据建模、可靠性到库存预留，逐步走向生产实践。",
    "scale": "20 章",
    "level": "基础到实践",
    "readUrl": "https://aias00.github.io/redis-book/",
    "epubUrl": "https://aias00.github.io/redis-book/downloads/redis-learning-handbook.epub",
    "coverColor": "#d8a18b",
    "coverInk": "#4f3027",
    "coverLines": [
      "Redis",
      "学习手册"
    ],
    "coverSubtitle": "从数据结构到生产实践",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><ellipse cx=\"41\" cy=\"10\" rx=\"28\" ry=\"8\"/><path d=\"M13 10v14c0 11 56 11 56 0V10M13 24v14c0 11 56 11 56 0V24\"/><path d=\"M13 22c0 11 56 11 56 0M13 35c0 11 56 11 56 0\"/></svg>"
  },
  {
    "id": "mysql",
    "topic": "backend",
    "topicLabel": "DATABASE ENGINEERING",
    "title": "MySQL 事务、并发控制与故障排查",
    "description": "用真实 InnoDB 实验理解快照、锁与事务恢复，围绕库存、幂等订单和提交结果未知建立排障方法。",
    "scale": "17 章 · 4 个附录",
    "level": "事务与并发实践",
    "readUrl": "https://aias00.github.io/mysql-reliability-book/",
    "epubUrl": "https://aias00.github.io/mysql-reliability-book/downloads/mysql-reliability-book.epub",
    "coverColor": "#b7cbdc",
    "coverInk": "#293f54",
    "coverLines": ["MySQL", "事务与并发"],
    "coverSubtitle": "从隔离级别到业务一致性",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><ellipse cx=\"31\" cy=\"10\" rx=\"22\" ry=\"7\"/><path d=\"M9 10v25c0 9 44 9 44 0V10M9 23c0 9 44 9 44 0M9 34c0 9 44 9 44 0M57 18h17m-5-5 5 5-5 5M74 37H57m5-5-5 5 5 5\"/></svg>"
  },
  {
    "id": "rocketmq",
    "topic": "backend",
    "topicLabel": "MESSAGING SYSTEMS",
    "title": "RocketMQ：从消息模型到可靠系统",
    "description": "围绕订单系统，学习消息可靠性、幂等、顺序、事务与 Outbox，连接 Java 实验和生产运维。",
    "scale": "17 章 · 2 个附录",
    "level": "消息系统实战",
    "readUrl": "https://aias00.github.io/rocketmq-book/",
    "epubUrl": "https://aias00.github.io/rocketmq-book/rocketmq-book.epub",
    "coverColor": "#c6bfdc",
    "coverInk": "#3b3554",
    "coverLines": ["RocketMQ", "可靠消息"],
    "coverSubtitle": "从消息模型到可靠系统",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"23\" y=\"12\" width=\"36\" height=\"30\" rx=\"3\"/><path d=\"M32 20v14m9-14v14m9-14v14M3 27h20m36 0h20m-7-6 7 6-7 6\"/><circle cx=\"7\" cy=\"27\" r=\"3\"/></svg>"
  },
  {
    "id": "kafka",
    "topic": "backend",
    "topicLabel": "EVENT LOG & STREAMS",
    "title": "Kafka 从零开始",
    "description": "从单节点 KRaft 实验开始，理解持久日志、分区、独立消费进度、再均衡、回放与保留策略。",
    "scale": "14 章 · 4 个附录",
    "level": "日志与消费实践",
    "readUrl": "https://aias00.github.io/kafka-book-reader/",
    "epubUrl": "https://aias00.github.io/kafka-book-reader/downloads/kafka-book-reader.epub",
    "coverColor": "#d8c5a5",
    "coverInk": "#4a3a28",
    "coverLines": ["Kafka", "从零开始"],
    "coverSubtitle": "日志 · 消费 · 回放",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"M5 11h72M5 27h72M5 43h72\"/><rect x=\"13\" y=\"6\" width=\"12\" height=\"10\"/><rect x=\"32\" y=\"22\" width=\"12\" height=\"10\"/><rect x=\"52\" y=\"38\" width=\"12\" height=\"10\"/><path d=\"m70 6 7 5-7 5m0 6 7 5-7 5m0 6 7 5-7 5\"/></svg>"
  },
  {
    "id": "kubernetes",
    "topic": "backend",
    "topicLabel": "CONTAINER ORCHESTRATION",
    "title": "从零开始学 Kubernetes",
    "description": "从 Pod、Deployment 与 Service 出发，用真实 kind 集群练习配置、健康检查、发布回滚、持久卷和调度排错。",
    "scale": "14 章 · 3 个附录",
    "level": "容器编排入门",
    "readUrl": "https://aias00.github.io/k8s-book-reader/",
    "epubUrl": "https://aias00.github.io/k8s-book-reader/downloads/k8s-book-reader.epub",
    "coverColor": "#b8c6e1",
    "coverInk": "#2d3b58",
    "coverLines": ["Kubernetes", "从零开始"],
    "coverSubtitle": "概念 · 部署 · 故障演练",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"m41 3 23 13v26L41 53 18 42V16Z\"/><circle cx=\"41\" cy=\"27\" r=\"9\"/><path d=\"M41 3v15m0 18v16M18 16l15 7m16 8 15 11M18 42l15-11m16-8 15-7\"/><circle cx=\"41\" cy=\"27\" r=\"2\"/></svg>"
  },
  {
    "id": "envoy",
    "topic": "backend",
    "topicLabel": "CLOUD NATIVE",
    "title": "从零读懂 Envoy",
    "description": "从一次 HTTP 请求出发，理解 Envoy、Go xDS 控制平面与 Kubernetes 网关。",
    "scale": "26 章 · 3 个实验",
    "level": "网关入门",
    "readUrl": "https://aias00.github.io/envoy-learning-book/",
    "epubUrl": "https://github.com/Aias00/envoy-learning-book/releases/download/v1.0.0/envoy-learning-book.epub",
    "coverColor": "#a9cddc",
    "coverInk": "#264958",
    "coverLines": [
      "读懂",
      "Envoy"
    ],
    "coverSubtitle": "代理 · 控制平面 · 网关",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"28\" y=\"14\" width=\"25\" height=\"24\" rx=\"2\"/><path d=\"M4 26h24m25 0h24M40 14V3m0 35v11M4 10h12v8m49 16v8h12\"/><path d=\"m70 21 7 5-7 5M35 8l5-5 5 5\"/></svg>"
  },
  {
    "id": "gateway",
    "topic": "backend",
    "topicLabel": "GATEWAY ENGINEERING",
    "title": "API 网关设计与实现",
    "description": "以 Apache ShenYu 为主线，对照多种网关，理解架构、扩展机制与工程实现。",
    "scale": "20 章 · 5 个附录",
    "level": "工程进阶",
    "readUrl": "https://aias00.github.io/api-gateway-book-reader/",
    "epubUrl": "https://aias00.github.io/api-gateway-book-reader/book.epub",
    "coverColor": "#a7becb",
    "coverInk": "#283e4a",
    "coverLines": [
      "API 网关",
      "设计与实现"
    ],
    "coverSubtitle": "从原理走向工程设计",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"31\" y=\"16\" width=\"20\" height=\"21\" rx=\"2\"/><path d=\"M8 9h13v16h10M8 43h13V27h10M51 26h13V9h11M64 26v17h11\"/><circle cx=\"8\" cy=\"9\" r=\"3\"/><circle cx=\"8\" cy=\"43\" r=\"3\"/><circle cx=\"75\" cy=\"9\" r=\"3\"/><circle cx=\"75\" cy=\"43\" r=\"3\"/></svg>"
  },
  {
    "id": "ai-gateway",
    "topic": "backend",
    "topicLabel": "AI GATEWAY ENGINEERING",
    "title": "AI 网关与模型路由实战",
    "description": "围绕真实 HTTP 实验，理解能力路由、流式输出、取消、租户预算与故障边界，连接网关和 Agent 工程。",
    "scale": "17 章 · 4 个附录",
    "level": "协议与工程实践",
    "readUrl": "https://aias00.github.io/ai-gateway-book/",
    "epubUrl": "https://aias00.github.io/ai-gateway-book/downloads/ai-gateway-book.epub",
    "coverColor": "#bac6ef",
    "coverInk": "#2b3d69",
    "coverLines": ["AI 网关", "模型路由"],
    "coverSubtitle": "流式协议 · 预算 · 故障恢复",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"28\" y=\"16\" width=\"23\" height=\"23\" rx=\"3\"/><path d=\"M3 27h25m23 0h13V8h11M64 27v19h11\"/><circle cx=\"75\" cy=\"8\" r=\"4\"/><circle cx=\"75\" cy=\"46\" r=\"4\"/><path d=\"m35 28 4 4 7-10\"/></svg>"
  },
  {
    "id": "observability",
    "topic": "backend",
    "topicLabel": "OBSERVABILITY",
    "title": "全链路可观测性：从一次慢请求到故障定位",
    "description": "从 Java、Redis 与 RocketMQ 真实链路出发，学习 OpenTelemetry、指标与日志关联、采样、SLO 和故障定位。",
    "scale": "16 章 · 4 个附录",
    "level": "故障定位与实践",
    "readUrl": "https://aias00.github.io/observability-book/",
    "epubUrl": "https://aias00.github.io/observability-book/downloads/observability-book.epub",
    "coverColor": "#a9cbdc",
    "coverInk": "#294557",
    "coverLines": ["全链路", "可观测性"],
    "coverSubtitle": "从一次慢请求到故障定位",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"M6 45h70M6 8v37m8-23h13v13h13V15h13v13h17\"/><circle cx=\"27\" cy=\"22\" r=\"3\"/><circle cx=\"40\" cy=\"35\" r=\"3\"/><circle cx=\"53\" cy=\"15\" r=\"3\"/><path d=\"m65 23 5 5-5 5\"/></svg>"
  },
  {
    "id": "agent",
    "topic": "agents",
    "topicLabel": "AI & AGENTS",
    "title": "Agent 工程入门与实战：Java 开发者学习指南",
    "description": "围绕可测试的知识库助手，学习工具调用、检索、工作流与 MCP，走向评测和工程维护。",
    "scale": "16 章 · 附录",
    "level": "Java 开发者入门",
    "readUrl": "https://aias00.github.io/agent-book/",
    "epubUrl": "https://aias00.github.io/agent-book/downloads/agent-engineering-java.epub",
    "coverColor": "#b3c7ef",
    "coverInk": "#253b62",
    "coverLines": [
      "Agent",
      "工程实战"
    ],
    "coverSubtitle": "Java 开发者学习指南",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"27\" y=\"17\" width=\"28\" height=\"20\" rx=\"4\"/><path d=\"M41 7v10M41 37v10M7 27h20m28 0h20M14 10l13 10m28 14 13 10M14 44l13-10m28-14 13-10\"/><circle cx=\"36\" cy=\"27\" r=\"2\"/><circle cx=\"46\" cy=\"27\" r=\"2\"/></svg>"
  },
  {
    "id": "knowledge-retrieval",
    "topic": "agents",
    "topicLabel": "KNOWLEDGE RETRIEVAL",
    "title": "企业知识库检索工程",
    "description": "从文档版本、分块和权限出发，学习全文、向量与混合检索，用可核查的引用处理更新、撤权和删除。",
    "scale": "16 章 · 4 个附录",
    "level": "检索与证据实践",
    "readUrl": "https://aias00.github.io/knowledge-retrieval-book/",
    "epubUrl": "https://aias00.github.io/knowledge-retrieval-book/downloads/knowledge-retrieval-book.epub",
    "coverColor": "#c6cce0",
    "coverInk": "#333d5a",
    "coverLines": ["企业知识库", "检索工程"],
    "coverSubtitle": "从文档与权限到可核查的证据",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"M9 6h27l9 9v32H9ZM36 6v9h9M16 23h20M16 31h15M16 39h17\"/><circle cx=\"59\" cy=\"25\" r=\"12\"/><path d=\"m67 34 10 12m-25-21 5 5 9-10\"/></svg>"
  },
  {
    "id": "sandbox",
    "topic": "agents",
    "topicLabel": "AI & AGENTS",
    "title": "Agent Sandbox：从零开始",
    "description": "从执行边界与 Docker 实验，走向沙箱选型、代表工程源码和底层技术导读。",
    "scale": "27 章",
    "level": "概念到工程",
    "readUrl": "https://aias00.github.io/agent-sandbox-book-online/",
    "epubUrl": "https://aias00.github.io/agent-sandbox-book-online/Agent-Sandbox-3.0.epub",
    "coverColor": "#a6d8e5",
    "coverInk": "#234b58",
    "coverLines": [
      "Agent",
      "Sandbox"
    ],
    "coverSubtitle": "理解智能体的执行边界",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><path d=\"m41 3 26 13v24L41 52 15 40V16L41 3Zm0 25 26-12M41 28 15 16m26 12v24\"/><path d=\"m41 11 17 9v15l-17 9-17-9V20l17-9Z\" stroke-dasharray=\"2 3\"/></svg>"
  },
  {
    "id": "memory",
    "topic": "agents",
    "topicLabel": "AI & MEMORY",
    "title": "Agent 记忆：从概念到可落地的工程设计",
    "description": "从记忆的概念与组织方式出发，梳理可落地的工程方案，连接研究与系统设计。",
    "scale": "5 章正文",
    "level": "研究与设计",
    "readUrl": "https://aias00.github.io/agent-memory-book/",
    "epubUrl": "https://aias00.github.io/agent-memory-book/agent-memory.epub",
    "coverColor": "#b9c8e6",
    "coverInk": "#2a3c5a",
    "coverLines": [
      "Agent",
      "记忆"
    ],
    "coverSubtitle": "从概念到工程设计",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><circle cx=\"41\" cy=\"27\" r=\"6\"/><circle cx=\"15\" cy=\"12\" r=\"4\"/><circle cx=\"69\" cy=\"12\" r=\"4\"/><circle cx=\"15\" cy=\"43\" r=\"4\"/><circle cx=\"69\" cy=\"43\" r=\"4\"/><path d=\"m19 14 17 10m10 0 19-10M19 41l17-11m10 0 19 11M15 16v23M69 16v23M19 12h46M19 43h46\" stroke-dasharray=\"2 2\"/></svg>"
  },
  {
    "id": "codex",
    "topic": "agents",
    "topicLabel": "AGENT ENGINEERING",
    "title": "从零读懂 Codex 工程",
    "description": "从终端与 Git 基础出发，理解代理循环、工具执行、权限与沙箱，用练习读懂 Codex 工程。",
    "scale": "14 章 · 2 个附录",
    "level": "源码与工程",
    "readUrl": "https://aias00.github.io/codex-engineering-book/",
    "epubUrl": "https://aias00.github.io/codex-engineering-book/downloads/codex-engineering-book.epub",
    "coverColor": "#b7cbd1",
    "coverInk": "#293f48",
    "coverLines": [
      "Codex",
      "工程导读"
    ],
    "coverSubtitle": "AI 编程助手的工程导读",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"27\" y=\"17\" width=\"28\" height=\"20\" rx=\"4\"/><path d=\"M41 7v10M41 37v10M7 27h20m28 0h20M14 10l13 10m28 14 13 10M14 44l13-10m28-14 13-10\"/><circle cx=\"36\" cy=\"27\" r=\"2\"/><circle cx=\"46\" cy=\"27\" r=\"2\"/></svg>"
  },
  {
    "id": "pi",
    "topic": "agents",
    "topicLabel": "AGENT ENGINEERING",
    "title": "从零读懂 Pi：AI 编程助手的工程入门",
    "description": "沿着输入、工具调用和 Agent 循环认识 Pi，逐步学习会话、扩展机制与开发测试。",
    "scale": "16 章 · 3 个附录",
    "level": "编程助手入门",
    "readUrl": "https://aias00.github.io/pi-beginner-book-zh/",
    "epubUrl": "https://aias00.github.io/pi-beginner-book-zh/downloads/pi-beginner.epub",
    "coverColor": "#dbc6a4",
    "coverInk": "#493a29",
    "coverLines": [
      "Pi",
      "工程入门"
    ],
    "coverSubtitle": "AI 编程助手的工程导读",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"27\" y=\"17\" width=\"28\" height=\"20\" rx=\"4\"/><path d=\"M41 7v10M41 37v10M7 27h20m28 0h20M14 10l13 10m28 14 13 10M14 44l13-10m28-14 13-10\"/><circle cx=\"36\" cy=\"27\" r=\"2\"/><circle cx=\"46\" cy=\"27\" r=\"2\"/></svg>"
  },
  {
    "id": "harness",
    "topic": "agents",
    "topicLabel": "AGENT ENGINEERING",
    "title": "从零认识 DeepSeek Harness",
    "description": "从项目用途与任务流程入门，认识插件协作、工程目录和排错方法，建立源码阅读地图。",
    "scale": "12 章",
    "level": "工程导读",
    "readUrl": "https://aias00.github.io/deepseek-harness-book/",
    "epubUrl": "https://aias00.github.io/deepseek-harness-book/deepseek-harness-book.epub",
    "coverColor": "#b7bdd7",
    "coverInk": "#30394e",
    "coverLines": [
      "DeepSeek",
      "Harness"
    ],
    "coverSubtitle": "AI 编程助手的工程导读",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"27\" y=\"17\" width=\"28\" height=\"20\" rx=\"4\"/><path d=\"M41 7v10M41 37v10M7 27h20m28 0h20M14 10l13 10m28 14 13 10M14 44l13-10m28-14 13-10\"/><circle cx=\"36\" cy=\"27\" r=\"2\"/><circle cx=\"46\" cy=\"27\" r=\"2\"/></svg>"
  },
  {
    "id": "claude-code",
    "topic": "agents",
    "topicLabel": "SOURCE CODE READING",
    "title": "Claude Code 源码阅读",
    "description": "围绕 Claude Code 2.1.88 快照，梳理启动、对话、工具与权限，结合源码建立阅读路径。",
    "scale": "12 章导读 · 源码附录",
    "level": "架构与源码",
    "readUrl": "https://aias00.github.io/claude-code-source-book/",
    "epubUrl": "https://aias00.github.io/claude-code-source-book/downloads/claude-code-source-book.epub",
    "coverColor": "#e0bdac",
    "coverInk": "#51372e",
    "coverLines": ["Claude Code", "源码阅读"],
    "coverSubtitle": "架构导读与完整源码",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"9\" y=\"7\" width=\"64\" height=\"40\" rx=\"3\"/><path d=\"M9 17h64m-43 8-8 7 8 7m22-14 8 7-8 7m-7-16-7 18\"/><circle cx=\"16\" cy=\"12\" r=\"1\"/><circle cx=\"22\" cy=\"12\" r=\"1\"/></svg>"
  },
  {
    "id": "agent-harness",
    "topic": "agents",
    "topicLabel": "HARNESS ENGINEERING",
    "title": "AI 编程代理工程",
    "description": "对照 Claude Code、DeepSeek Harness、Pi 和 Codex，理解代理工程的共同问题，并实现可测试的 Harness。",
    "scale": "26 章 · 5 个附录",
    "level": "对照阅读与实验",
    "readUrl": "https://aias00.github.io/agent-harness-engineering-book-zh/",
    "epubUrl": "https://aias00.github.io/agent-harness-engineering-book-zh/downloads/agent-harness-engineering.epub",
    "coverColor": "#afcddb",
    "coverInk": "#283f59",
    "coverLines": ["AI 编程", "代理工程"],
    "coverSubtitle": "从四套实现到自己的 Harness",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"31\" y=\"17\" width=\"20\" height=\"20\" rx=\"3\"/><path d=\"M18 9h46v36H18V9Zm4 4 9 8m20 12 9 8M22 41l9-8m20-12 9-8\"/><circle cx=\"18\" cy=\"9\" r=\"5\"/><circle cx=\"64\" cy=\"9\" r=\"5\"/><circle cx=\"18\" cy=\"45\" r=\"5\"/><circle cx=\"64\" cy=\"45\" r=\"5\"/></svg>"
  },
  {
    "id": "ai-quality",
    "topic": "agents",
    "topicLabel": "EVALUATION & DELIVERY",
    "title": "AI 应用质量交付：从评测集到发布回归",
    "description": "用版本化样本、真实产物和可运行流水线，学习评分校准、逐样本回归、配对统计、预算与发布门槛。",
    "scale": "16 章 · 4 个附录",
    "level": "评测与发布实践",
    "readUrl": "https://aias00.github.io/ai-quality-book/",
    "epubUrl": "https://aias00.github.io/ai-quality-book/downloads/ai-quality-book.epub",
    "coverColor": "#c7c3e2",
    "coverInk": "#393351",
    "coverLines": ["AI 应用", "质量交付"],
    "coverSubtitle": "从评测集到发布回归",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><rect x=\"11\" y=\"7\" width=\"28\" height=\"40\" rx=\"2\"/><path d=\"m17 18 3 3 5-6m-8 15 3 3 5-6m4-7h5m-5 12h5M39 27h17\"/><circle cx=\"65\" cy=\"27\" r=\"13\"/><path d=\"m58 27 5 5 9-11\"/></svg>"
  },
  {
    "id": "opensource",
    "topic": "opensource",
    "topicLabel": "OPEN SOURCE",
    "title": "从零参与 Apache 开源",
    "description": "从选项目与第一个 PR 开始，了解持续贡献、发布协作与开源社区治理。",
    "scale": "13 章 · 4 个附录",
    "level": "贡献者入门",
    "readUrl": "https://aias00.github.io/opensource-book-site/",
    "epubUrl": "https://aias00.github.io/opensource-book-site/book.epub",
    "coverColor": "#d7c18b",
    "coverInk": "#4c3c1e",
    "coverLines": [
      "Apache",
      "开源入门"
    ],
    "coverSubtitle": "从第一个 PR 开始",
    "coverArt": "<svg viewBox=\"0 0 82 54\"><circle cx=\"41\" cy=\"26\" r=\"8\"/><circle cx=\"16\" cy=\"10\" r=\"4\"/><circle cx=\"67\" cy=\"10\" r=\"4\"/><circle cx=\"16\" cy=\"43\" r=\"4\"/><circle cx=\"67\" cy=\"43\" r=\"4\"/><path d=\"m20 12 15 10m12 0 16-10M20 41l15-10m12 0 16 10M41 3v15m0 16v16\"/></svg>"
  }
] satisfies Book[];
