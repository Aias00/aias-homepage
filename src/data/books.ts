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
    "title": "Agent 记忆：从概念到工程设计",
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
    "id": "opensource",
    "topic": "opensource",
    "topicLabel": "OPEN SOURCE",
    "title": "从零参与 Apache 开源",
    "description": "从选项目与第一个 PR 开始，了解持续贡献、发布协作与开源社区治理。",
    "scale": "13 章",
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
