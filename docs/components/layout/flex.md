# Flex 弹性布局

基于 CSS Flexbox 的弹性布局组件。

## 代码示例

::: code-group

```tsx [React]
import { Flex, Spacer } from '@aui/react';

// 垂直排列
<Flex direction="column" gap="md">
  <div>顶部</div>
  <Spacer />
  <div>底部（自动撑满剩余空间）</div>
</Flex>

// 水平排列，两端对齐
<Flex justify="between" align="center">
  <span>左侧</span>
  <span>右侧</span>
</Flex>
```

```vue [Vue]
<template>
  <Flex direction="column" gap="md">
    <div>顶部</div>
    <Spacer />
    <div>底部</div>
  </Flex>
</template>
```

:::

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `direction` | 排列方向 | `'row' \| 'col' \| 'row-reverse' \| 'col-reverse'` | `'row'` |
| `wrap` | 是否换行 | `boolean \| 'nowrap' \| 'wrap' \| 'wrap-reverse'` | `false` |
| `justify` | 主轴对齐 | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `-` |
| `align` | 交叉轴对齐 | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `-` |
| `grow` | 增长系数 | `boolean \| number` | `false` |
| `shrink` | 收缩系数 | `boolean \| number` | `false` |
