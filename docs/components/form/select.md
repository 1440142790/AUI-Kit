# Select 选择�?
下拉选择器，用于从多个选项中选择�?
## 基本用法

::: code-group

```tsx [React]
import { Select } from '@yaomingshan/react';

const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '深圳', value: 'shenzhen' },
];

<Select options={options} placeholder="请选择城市" />
```

```vue [Vue]
<script setup>
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '深圳', value: 'shenzhen' },
];
</script>

<template>
  <Select :options="options" placeholder="请选择城市" />
</template>
```

:::

## 可搜�?
```tsx
<Select
  options={options}
  searchable
  placeholder="搜索选项..."
/>
```

## 多�?
```tsx
<Select
  options={options}
  multiple
  placeholder="请选择（可多选）"
/>
```

## 可清�?
```tsx
<Select
  options={options}
  allowClear
  placeholder="选择后可清除"
/>
```

## 受控模式

::: code-group

```tsx [React]
import { Select } from '@yaomingshan/react';
const [city, setCity] = useState('');

<Select
  value={city}
  onChange={setCity}
  options={options}
  placeholder="请选择城市"
/>
```

```vue [Vue]
<template>
  <Select v-model="city" :options="options" placeholder="请选择城市" />
</template>
```

:::

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `options` | 选项列表 | `SelectOption[]` | `[]` |
| `value` | 当前值（受控�?| `string \| string[]` | `-` |
| `defaultValue` | 默认�?| `string \| string[]` | `-` |
| `placeholder` | 占位文本 | `string` | `-` |
| `multiple` | 是否多�?| `boolean` | `false` |
| `searchable` | 是否可搜�?| `boolean` | `false` |
| `allowClear` | 是否可清�?| `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `onChange` | 变化回调 | `(value: string \| string[]) => void` | `-` |

## SelectOption 类型

```typescript
interface SelectOption {
  label: string;      // 显示文本
  value: string;      // 唯一�?  disabled?: boolean; // 是否禁用
  children?: SelectOption[]; // 子选项（分组）
}
```
