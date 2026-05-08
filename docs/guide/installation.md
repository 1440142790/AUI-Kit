# 安装

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0（推荐）或 npm >= 9.0.0

## 安装方式

### React 项目

```bash
# 使用 pnpm（推荐）
pnpm add @aui/react @aui/core

# 或使用 npm
npm install @aui/react @aui/core
```

### Vue 项目

```bash
pnpm add @aui/vue @aui/core
```

## 使用 CLI 初始化（推荐）

使用 `@aui/cli` 可以一键初始化完整项目，包含 AI 宪法和组件速查表：

```bash
# React 项目
npx @aui/cli init --framework react --project my-react-app

# Vue 项目
npx @aui/cli init --framework vue --project my-vue-app
```

CLI 会自动完成：
- 安装 `@aui/react @aui/core` 或 `@aui/vue @aui/core`
- 生成 `.cursorrules`（AI 宪法文件）
- 配置 `tailwind.config.ts`（扩展 AUI 设计令牌）
- 生成 `AUI-COMPONENT-REF.md`（组件速查表）
- 创建项目骨架代码

## 手动配置

### 1. 安装 Tailwind CSS

AUI Kit 依赖 Tailwind CSS 作为样式方案：

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```

### 2. 配置 tailwind.config.ts

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        // AUI 设计令牌颜色
        'aui-primary': { DEFAULT: '#1677ff', light: '#69b1ff', dark: '#0958d9' },
        'aui-success': { DEFAULT: '#52c41a', light: '#95de64', dark: '#389e0d' },
        'aui-warning': { DEFAULT: '#faad14', light: '#ffd666', dark: '#d48806' },
        'aui-danger':  { DEFAULT: '#ff4d4f', light: '#ff7875', dark: '#d9363e' },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 3. 配置 Vite（React）

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@aui/react': '@aui/react',
      '@aui/core': '@aui/core',
    },
  },
});
```

### 4. 配置 Vite（Vue）

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@aui/vue': '@aui/vue',
      '@aui/core': '@aui/core',
    },
  },
});
```

## Hello World

### React

```tsx
// src/App.tsx
import { Page, Button, Input } from '@aui/react';

function App() {
  return (
    <Page title="我的第一个 AUI 页面">
      <div className="p-4 space-y-4">
        <Input placeholder="请输入你的名字" />
        <Button type="primary">提交</Button>
      </div>
    </Page>
  );
}

export default App;
```

### Vue

```vue
<!-- src/App.vue -->
<script setup lang="ts">
import { Page, Button, Input } from '@aui/vue';
</script>

<template>
  <Page title="我的第一个 AUI 页面">
    <div class="p-4 space-y-4">
      <Input placeholder="请输入你的名字" />
      <Button type="primary">提交</Button>
    </div>
  </Page>
</template>
```

::: tip 下一步
查看 [快速上手](/guide/quick-start) 了解更多组件用法。
:::
