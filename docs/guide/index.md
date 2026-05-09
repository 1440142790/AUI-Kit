# 介绍

## 什么是 AUI Kit�?
**AUI Kit**（AI-optimized Universal UI Kit）是一个专�?AI 编程工具设计的跨框架、跨�?UI 组件体系�?
> 开发者安装，AI 直接写出多平台一致的前端界面——无论你�?Vue 还是 React�?
## 核心价�?
### 🤖 AI First

AUI Kit 从设计之初就考虑�?AI 编程工具的需求：
- **强约�?*：禁止手�?CSS，所有样式通过 Tailwind �?+ 设计令牌实现
- **强类�?*：所�?Props �?`@yaomingshan/core` 统一导出 TypeScript 接口，零 any
- **强示�?*：每个组件源码头部附�?JSDoc + React/Vue 双框架示�?
### 🎯 统一接口，方言输出

```
┌─────────────────────────────────────────────────�?�?             AUI Kit 组件体系                     �?�?                                                �?�?  组件名、Props、插槽语义、事件回调完全一�?       �?�?                                                �?�?  ┌──────────�?        ┌──────────�?            �?�?  �?@yaomingshan/react�? ←AI�? �? @yaomingshan/vue �?            �?�?  �? React 18 �?       �? Vue 3.4  �?            �?�?  �?+ Tailwind�?       �?+ Tailwind�?            �?�?  └──────────�?        └──────────�?            �?�?                                                �?�?  React 代码 ←同一套组件描述→ Vue 代码            �?└─────────────────────────────────────────────────�?```

### 📱 跨端自适应

```
<Page platform="mobile">
  <Table ... />    �?自动转为 <CardList ... />
  <Modal ... />   �?自动转为 <BottomSheet ... />
</Page>
```

## 技术架�?
```
@yaomingshan/core          共享类型定义、设计令牌、跨端规�?    ├── @yaomingshan/react    React 18 实现，基�?Tailwind CSS
    └── @yaomingshan/vue      Vue 3 实现，基�?Tailwind CSS

@aui/cli           项目初始化，AI 规则注入
@aui/mcp           MCP Server，给 Claude/Cursor 提供组件查询
```

## 与传统组件库的区�?
| 维度 | Ant Design / Element Plus | AUI Kit |
|------|--------------------------|---------|
| 设计目标 | 人类开发者使�?| AI + 人类开发�?|
| 样式方案 | Less/SCSS 内置样式 | Tailwind CSS（AI 可枚举）|
| 组件 API | 各框架独立设�?| 双框架统一 |
| AI 友好�?| 一�?| 专为 AI 设计 |
| 移动端适配 | 需手动切换组件 | 自动适配 |

## 适用场景

�?**AI 编程场景**：用 Cursor、Copilot、Windsurf、v0 等工具生成前端代�?�?**多框架项�?*：同时维�?React �?Vue 两个前端的项�?�?**快速原�?*：需要快速出 UI 原型的场�?�?**设计系统**：构建企业级设计系统的基础�?
## 组件清单�?0+�?
- **布局与导�?*：Page、Grid、Flex、Spacer、Tabs、Drawer、Menu
- **数据展示**：Table、CardList、Descriptions、Tag、Badge、Avatar、Progress、Statistic
- **表单与输�?*：Form、Form.Item、Input、TextArea、Select、DatePicker、Switch、Radio、Checkbox、Rate、Upload
- **反馈与交�?*：Button、Modal、Toast、Popconfirm、Empty、Skeleton、Spin
- **移动端增�?*：BottomSheet、Swiper、PullRefresh、IndexBar

## 下一�?
- [安装指南 →](/guide/installation)
- [快速上�?→](/guide/quick-start)
- [AI 集成 →](/guide/ai-integration)
