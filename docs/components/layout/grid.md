# Grid 栅格布局

基于 CSS Grid 的栅格布局组件�?
## 代码示例

::: code-group

```tsx [React]
import { Grid } from '@yaomingshan/react';

function Layout() {
  return (
    <Grid cols={3} gap="md">
      <div className="p-4 bg-blue-50 rounded">�?1</div>
      <div className="p-4 bg-blue-50 rounded">�?2</div>
      <div className="p-4 bg-blue-50 rounded">�?3</div>
    </Grid>
  );
}
```

```vue [Vue]
<template>
  <Grid :cols="3" gap="md">
    <div class="p-4 bg-blue-50 rounded">�?1</div>
    <div class="p-4 bg-blue-50 rounded">�?2</div>
    <div class="p-4 bg-blue-50 rounded">�?3</div>
  </Grid>
</template>
```

:::

## 响应式列�?
```tsx
// 响应式：xs=1列，sm=2列，lg=3�?<Grid cols={{ xs: 1, sm: 2, lg: 3 }} gap="md">
  {items.map(item => <Card key={item.id} item={item} />)}
</Grid>
```

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `cols` | 列数（支持响应式对象�?| `number \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }` | `1` |
| `gap` | 间距 | `Spacing` | `'md'` |
| `align` | 垂直对齐：`start` \| `center` \| `end` \| `stretch` | `Alignment` | `-` |
| `justify` | 水平对齐：`start` \| `center` \| `end` \| `between` \| `around` \| `evenly` | `JustifyContent` | `-` |

## 间距映射

| �?| CSS �?| 实际间距 |
|----|--------|---------|
| `xs` | `gap-1` | 4px |
| `sm` | `gap-2` | 8px |
| `md` | `gap-4` | 16px |
| `lg` | `gap-6` | 24px |
| `xl` | `gap-8` | 32px |
| `2xl` | `gap-10` | 40px |
| `3xl` | `gap-12` | 48px |
