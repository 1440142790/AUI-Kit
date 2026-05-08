# 介绍

## 什么是 AUI Kit？

**AUI Kit**（AI-optimized Universal UI Kit）是一个专为 AI 编程工具设计的跨框架、跨端 UI 组件体系。

> 开发者安装，AI 直接写出多平台一致的前端界面——无论你用 Vue 还是 React。

## 核心价值

### 🤖 AI First

AUI Kit 从设计之初就考虑了 AI 编程工具的需求：
- **强约束**：禁止手写 CSS，所有样式通过 Tailwind 类 + 设计令牌实现
- **强类型**：所有 Props 由 `@aui/core` 统一导出 TypeScript 接口，零 any
- **强示例**：每个组件源码头部附带 JSDoc + React/Vue 双框架示例

### 🎯 统一接口，方言输出

```
┌─────────────────────────────────────────────────┐
│              AUI Kit 组件体系                     │
│                                                 │
│   组件名、Props、插槽语义、事件回调完全一致        │
│                                                 │
│   ┌──────────┐         ┌──────────┐             │
│   │ @aui/react│  ←AI→  │  @aui/vue │             │
│   │  React 18 │        │  Vue 3.4  │             │
│   │ + Tailwind│        │ + Tailwind│             │
│   └──────────┘         └──────────┘             │
│                                                 │
│   React 代码 ←同一套组件描述→ Vue 代码            │
└─────────────────────────────────────────────────┘
```

### 📱 跨端自适应

```
<Page platform="mobile">
  <Table ... />    → 自动转为 <CardList ... />
  <Modal ... />   → 自动转为 <BottomSheet ... />
</Page>
```

## 技术架构

```
@aui/core          共享类型定义、设计令牌、跨端规则
    ├── @aui/react    React 18 实现，基于 Tailwind CSS
    └── @aui/vue      Vue 3 实现，基于 Tailwind CSS

@aui/cli           项目初始化，AI 规则注入
@aui/mcp           MCP Server，给 Claude/Cursor 提供组件查询
```

## 与传统组件库的区别

| 维度 | Ant Design / Element Plus | AUI Kit |
|------|--------------------------|---------|
| 设计目标 | 人类开发者使用 | AI + 人类开发者 |
| 样式方案 | Less/SCSS 内置样式 | Tailwind CSS（AI 可枚举）|
| 组件 API | 各框架独立设计 | 双框架统一 |
| AI 友好度 | 一般 | 专为 AI 设计 |
| 移动端适配 | 需手动切换组件 | 自动适配 |

## 适用场景

✅ **AI 编程场景**：用 Cursor、Copilot、Windsurf、v0 等工具生成前端代码
✅ **多框架项目**：同时维护 React 和 Vue 两个前端的项目
✅ **快速原型**：需要快速出 UI 原型的场景
✅ **设计系统**：构建企业级设计系统的基础层

## 组件清单（40+）

- **布局与导航**：Page、Grid、Flex、Spacer、Tabs、Drawer、Menu
- **数据展示**：Table、CardList、Descriptions、Tag、Badge、Avatar、Progress、Statistic
- **表单与输入**：Form、Form.Item、Input、TextArea、Select、DatePicker、Switch、Radio、Checkbox、Rate、Upload
- **反馈与交互**：Button、Modal、Toast、Popconfirm、Empty、Skeleton、Spin
- **移动端增强**：BottomSheet、Swiper、PullRefresh、IndexBar

## 下一步

- [安装指南 →](/guide/installation)
- [快速上手 →](/guide/quick-start)
- [AI 集成 →](/guide/ai-integration)
