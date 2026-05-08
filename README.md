# AUI Kit - AI 时代的跨框架、跨端 UI 组件体系

<p align="center">
  <img src="https://img.shields.io/npm/v/@aui/react?style=flat-square" alt="npm" />
  <img src="https://img.shields.io/npm/v/@aui/vue?style=flat-square" alt="npm" />
  <img src="https://img.shields.io/npm/v/@aui/core?style=flat-square" alt="npm" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="license" />
</p>

> **Slogan**: 开发者安装，AI 直接写出多平台一致的前端界面——无论你用 Vue 还是 React。

## 核心价值

AUI Kit 是一个给 **AI 编程工具**（Cursor、Copilot、Windsurf、v0 等）使用的，强约束、强类型、强示例的跨端组件体系。

- **统一接口**：组件名、Props、插槽语义在所有框架中完全一致
- **方言输出**：根据文件类型自动切换 React/Vue 语法
- **AI 优先**：每个组件源码头部有 JSDoc + 双框架示例，AI 读取即可学习
- **跨端适配**：Web、移动端、小程序自动切换组件

## 安装

```bash
# React 项目
npm install @aui/react @aui/core

# Vue 项目
npm install @aui/vue @aui/core
```

## 快速开始

### 方式一：使用 CLI 初始化（推荐）

```bash
# React 项目
npx @aui/cli init --framework react --project my-app

# Vue 项目
npx @aui/cli init --framework vue --project my-app
```

CLI 自动完成：
- 安装依赖
- 生成 `.cursorrules`（AI 宪法）
- 配置 Tailwind 设计令牌
- 生成组件速查表

### 方式二：手动安装

```bash
npm install @aui/react @aui/core tailwindcss
```

在 `tailwind.config.ts` 中扩展设计令牌：

```typescript
export default {
  content: ['./index.html', './src/**/*.{vue,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        'aui-primary': '#1677ff',
        'aui-success': '#52c41a',
      },
    },
  },
};
```

## 核心概念

### 1. 强约束

- 禁止手写 CSS，使用 Tailwind 类 + 设计令牌
- 禁止直接使用原生 HTML 标签
- 布局必须用 Grid/Flex/Spacer
- 表单必须 Form + Form.Item 包裹

### 2. 强类型

所有 Props 类型由 `@aui/core` 统一导出：

```typescript
import type { ButtonProps, InputProps, TableProps } from '@aui/core';
```

### 3. 强示例

每个组件源码头部同时包含 React 和 Vue 使用示例：

```typescript
/**
 * Button 按钮
 * @example React
 * <Button type="primary" loading={submitting} onClick={handleSubmit}>提交</Button>
 * @example Vue
 * <Button type="primary" :loading="submitting" @click="handleSubmit">提交</Button>
 */
```

## 组件速查

### 布局

| 组件 | 用途 | React | Vue |
|------|------|-------|-----|
| Page | 页面容器 | `<Page title="首页">...</Page>` | `<Page title="首页">...</Page>` |
| Grid | 栅格 | `<Grid cols={2} gap="md">...</Grid>` | `<Grid cols="2" gap="md">...</Grid>` |
| Flex | 弹性布局 | `<Flex direction="column">...</Flex>` | `<Flex direction="column">...</Flex>` |
| Spacer | 留白 | `<Spacer size="lg" />` | `<Spacer size="lg" />` |
| Tabs | 标签页 | `<Tabs items={items} activeKey={k} onChange={setK} />` | `<Tabs :items="items" :activeKey="k" @change="setK" />` |

### 表单

| 组件 | 用途 | React | Vue |
|------|------|-------|-----|
| Form | 表单容器 | `<Form onFinish={submit}>...</Form>` | `<Form @finish="submit">...</Form>` |
| Form.Item | 表单项 | `<Form.Item name="email" label="邮箱">...</Form.Item>` | `<Form.Item name="email" label="邮箱">...</Form.Item>` |
| Input | 输入框 | `<Input placeholder="用户名" />` | `<Input placeholder="用户名" />` |
| Select | 选择器 | `<Select options={opts} searchable />` | `<Select :options="opts" searchable />` |
| Switch | 开关 | `<Switch checked={on} onChange={setOn} />` | `<Switch :checked="on" @change="setOn" />` |

### 反馈

| 组件 | 用途 | React | Vue |
|------|------|-------|-----|
| Button | 按钮 | `<Button type="primary">提交</Button>` | `<Button type="primary">提交</Button>` |
| Modal | 对话框 | `<Modal visible={o} onOk={ok} onCancel={close}>...</Modal>` | `<Modal :visible="o" @ok="ok" @cancel="close">...</Modal>` |
| Toast | 轻提示 | `Toast.show({ content: '成功', type: 'success' })` | 同左侧 |
| Empty | 空状态 | `<Empty description="暂无数据" />` | `<Empty description="暂无数据" />` |
| Skeleton | 骨架屏 | `<Skeleton loading type="list" rows={3}>...</Skeleton>` | `<Skeleton :loading :rows="3">...</Skeleton>` |

## 文档

- 🌐 **[在线文档](https://aui-kit.github.io/aui-kit)** — 完整组件文档、示例、API 参考
- 🧭 [组件速查表](AUI-COMPONENT-REF.md)
- 🤖 [AI 宪法](AI-FRAMES.md)

## 路线图

AUI Kit 使用集中式的设计令牌系统，禁止硬编码颜色/尺寸：

```typescript
import { colors, spacing, radius } from '@aui/core';

// 颜色
colors.primary.DEFAULT   // #1677ff
colors.success.text      // text-[#52c41a]
colors.danger.bg         // bg-[#fff2f0]

// 间距
spacing.md  // 16px
spacing.lg // 24px

// 圆角
radius.md  // 4px
radius.lg // 8px
radius.full // 9999px
```

## 项目结构

```
aui-kit/
├── packages/
│   ├── core/        # @aui/core - 共享类型、设计令牌、工具函数
│   ├── react/       # @aui/react - React 18 + Tailwind 实现
│   ├── vue/         # @aui/vue - Vue 3 Composition API 实现
│   └── cli/         # @aui/cli - 项目初始化工具
├── docs/
│   ├── AI-FRAMES.md # AI 组件宪法
│   └── .cursorrules # Cursor AI 规则文件
└── examples/        # 示例项目
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 开发模式（监听变更）
pnpm dev

# 类型检查
pnpm typecheck
```

## 路线图

- [x] **Alpha**: React 核心 26 组件 + Vue 核心组件 + AI Rules + CLI + 文档站
- [ ] **Beta**: 完整 40+ 组件 + 移动端适配（Taro/uni-app）
- [ ] **1.0**: MCP Server + VSCode 插件 + 小程序/RN 目标

## 许可证

MIT
