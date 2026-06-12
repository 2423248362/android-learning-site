# Android 学习站

> 从后端到客户端 — 入职准备系统学习笔记

基于 [VitePress](https://vitepress.dev) 搭建的中文学习笔记站点，面向有后端经验的开发者，系统梳理 Android 客户端开发核心知识。

## 站点模块

| 模块 | 内容 | 页数 |
|------|------|------|
| 🟢 Kotlin | 基础语法、协程 Coroutines、Flow | 4 |
| 🤖 Android | 四大组件、UI 体系、Gradle 构建、调试 Profiler | 5 |
| ⚡ 性能优化 | 性能指标、播放器渲染、优化手段 | 4 |
| 🧠 AI Coding | Prompt Engineering、Code Agent、IDE 插件开发 | 4 |
| 🔗 KMP | Kotlin Multiplatform 基础概念 | 2 |

共 **19 篇**笔记，每篇包含核心概念、代码示例、Mermaid 流程图和踩坑经验。

## 特色

- **后端视角**：善用类比（如"类似 Java 的 XXX"），降低跨领域认知成本
- **Mermaid 图表**：关键架构和流程均配有可视化图解
- **中文友好**：中文叙述 + 英文术语保留原文，中英文之间规范空格
- **暗色模式**：支持明暗主题切换
- **全文搜索**：内置本地搜索，快速定位知识点

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态站点
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
learn/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 站点配置
│   │   └── theme/              # 自定义主题（Mermaid 插件、Hero 背景）
│   ├── public/                 # 静态资源（SVG 图标、图片）
│   ├── kotlin/                 # Kotlin 模块
│   ├── android/                # Android 模块
│   ├── performance/            # 性能优化模块
│   ├── ai-coding/              # AI Coding 模块
│   ├── kmp/                    # KMP 跨平台模块
│   ├── index.md                # 首页
│   └── 404.md                  # 404 页面
├── package.json
└── CLAUDE.md                   # Claude Code 项目指令
```

## 技术栈

- **VitePress** 1.6.4 — 静态站点生成
- **Mermaid** — 流程图 / 架构图渲染
- **Noto Sans SC** — 中文字体

## 效果展示

<table>
<tr>
<td align="center"><b>首页</b></td>
<td align="center"><b>Kotlin 协程</b></td>
</tr>
<tr>
<td><img src="docs/public/images/home.png" alt="首页" width="720" /></td>
<td><img src="docs/public/images/kotlin-coroutines.png" alt="Kotlin 协程" width="720" /></td>
</tr>
<tr>
<td align="center"><b>Android 学习路径</b></td>
<td align="center"><b>AI Coding 学习路径</b></td>
</tr>
<tr>
<td><img src="docs/public/images/android-index.png" alt="Android 学习路径" width="720" /></td>
<td><img src="docs/public/images/ai-coding-index.png" alt="AI Coding 学习路径" width="720" /></td>
</tr>
</table>
