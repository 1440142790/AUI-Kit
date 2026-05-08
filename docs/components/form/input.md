# Input 输入框

单行文本输入框，支持前缀/后缀图标、清除按钮等。

## 基本用法

::: code-group

```tsx [React]
import { Input } from '@aui/react';

<Input placeholder="请输入用户名" />
<Input placeholder="禁用状态" disabled />
<Input placeholder="只读" readOnly value="不可编辑" />
```

```vue [Vue]
<Input placeholder="请输入用户名" />
<Input placeholder="禁用状态" :disabled="true" />
```

:::

## 带图标

::: code-group

```tsx [React]
import { Input } from '@aui/react';

// 前缀
<Input placeholder="请输入用户名" prefix={<UserIcon />} />

// 后缀
<Input placeholder="请输入金额" suffix="元" />

// 搜索框
<Input type="search" placeholder="搜索..." />
```

```vue [Vue]
<Input placeholder="请输入用户名" prefix="👤" />
<Input placeholder="请输入金额" suffix="元" />
```

:::

## 可清除

```tsx
<Input
  placeholder="可清除的输入"
  allowClear
  defaultValue="初始内容"
/>
```

## 字数统计

```tsx
<Input
  placeholder="最多50字"
  maxLength={50}
  showCount
/>
```

## 密码输入

```tsx
<Input type="password" placeholder="请输入密码" />
```

## 受控模式

::: code-group

```tsx [React]
import { Input } from '@aui/react';
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={setValue}
  placeholder="受控输入"
/>
```

```vue [Vue]
<script setup>
const value = ref('');
</script>

<template>
  <Input v-model="value" placeholder="受控输入" />
</template>
```

:::

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `type` | 输入框类型 | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` |
| `placeholder` | 占位文本 | `string` | `-` |
| `value` | 输入值（受控） | `string` | `-` |
| `defaultValue` | 默认值（非受控） | `string` | `-` |
| `prefix` | 前缀图标/文字 | `ReactNode` | `-` |
| `suffix` | 后缀图标/文字 | `ReactNode` | `-` |
| `allowClear` | 是否可清除 | `boolean` | `false` |
| `maxLength` | 最大长度 | `number` | `-` |
| `showCount` | 是否显示字数统计 | `boolean` | `false` |
| `readOnly` | 是否只读 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `onChange` | 输入变化回调 | `(value: string) => void` | `-` |
