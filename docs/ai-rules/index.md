# AI 宪法

AUI Kit 的 AI 宪法是给 AI 编程工具看的规则文档。将此文件放入项目后，AI（Cursor、Copilot、Windsurf、v0 等）就能正确理解 AUI Kit 的使用方式。

## 获取方式

### 方式一：CLI 自动生成（推荐）

```bash
npx @aui/cli init --framework react --project my-app
# 自动生成 .cursorrules 文件
```

### 方式二：手动复制

将 `.cursorrules` 内容复制到项目根目录。

## 核心规则

### 规则 1：强制使用 AUI 组件

**所有 UI 必须使用 `@aui/react` 或 `@aui/vue` 组件，禁止使用原生 HTML 标签构建 UI。**

✅ 正确：
```tsx
import { Page, Grid, Button, Input } from '@aui/react';
<Page title="用户表单">
  <Grid cols={2} gap="md">
    <Input placeholder="姓名" />
    <Input placeholder="邮箱" />
  </Grid>
</Page>
```

❌ 错误：
```tsx
// 禁止使用原生 div/input 构建 UI
<div style={{ padding: 16 }}>
  <input placeholder="姓名" />
  <input placeholder="邮箱" />
</div>
```

### 规则 2：禁止手写 CSS

**所有样式必须通过 Tailwind 类实现，禁止内联 style。**

### 规则 3：表单必须用 Form + Form.Item

**所有输入组件必须包裹在 Form.Item 内，Form.Item 必须有 name 属性。**

### 规则 4：移动端适配

**在 Page 组件设置 `platform="mobile"`，其余自动适配。**

### 规则 5：组件速查表优先

**优先使用速查表中的组件，非必要不组合新样式。**

## 框架方言

### React 方言（.tsx/.jsx）

- Props：使用 camelCase
- 事件：`onXxx={handler}`
- 布尔属性：**必须显式传递** `loading={true}`，不能省略

### Vue 方言（.vue）

- Props：使用 kebab-case 或 v-bind
- 事件：`@xxx="handler"`
- 布尔属性：必须使用 v-bind 如 `:loading="true"`
- 插槽：具名插槽 `#slotName`

## 速查表

详见：[组件速查表 →](/ai-rules/cheatsheet)
