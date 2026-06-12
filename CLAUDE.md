# Android 学习站 — VitePress 笔记站点

## 项目概况

VitePress 驱动的中文学习笔记站点，面向 Android 客户端开发的入职准备。

- 主线：AI Coding 基础设施建设
- 副线：端侧性能优化

## 技术栈

- VitePress 1.6.4，中文站点（`lang: zh-CN`）
- 所有内容为 Markdown 文件，放在 `docs/` 目录下
- 配置文件：`docs/.vitepress/config.mts`

## 开发命令

- `npm run docs:dev` — 本地开发服务器
- `npm run docs:build` — 构建静态站点
- `npm run docs:preview` — 预览构建结果

## 内容写作规范

### 笔记风格

- 面向有后端经验的读者，善用类比（如"类似 Java 的 XXX"、"相当于前端的 YYY"）
- 精简实用，不要写教科书式的大段解释
- 每个知识点：简短说明 → 代码示例 → 一句话要点
- 适当使用 `> tip` 和 `> warning` 等 VitePress 容器突出关键信息

### 中英文混排

- 中英文之间加空格（如 `Kotlin 协程`，而非 `Kotlin协程`）
- 英文术语保留原文，不强行翻译（如 Coroutine、Flow、Dispatcher）
- 代码注释使用中文

### 代码示例

- 代码块必须标注语言（如 ```kotlin）
- 代码力求简短、可独立理解，不需要完整类定义
- 注释只写"为什么"，不写"是什么"

### 页面结构模板

每篇笔记遵循统一结构：

```
# 标题（英文术语 + 中文翻译）

## 核心概念
（关键知识点，每个配代码示例）

## 在 Android 中的典型用法
（实战场景）

## 常见的坑
（踩坑经验）

## TODO
- [ ] 待补充的主题
```

### 站点导航

- 新增页面后，必须在 `docs/.vitepress/config.mts` 的 sidebar 中注册
- 侧边栏按模块分组，每组含「学习路径」（index.md）+ 具体主题页

## 内容优先级

当前进度：Kotlin 模块（basics、coroutines 已完成，flow 待写）

待创建模块（按优先级）：
1. Kotlin → flow.md
2. Android → 全部 5 篇
3. 性能优化 → 全部 4 篇
4. AI Coding → 全部 4 篇
5. KMP → 全部 2 篇
