# Tag 标签

用于标记和分类�?
## 基本用法

::: code-group

```tsx [React]
import { Tag } from '@yaomingshan/react';

<Tag>默认</Tag>
<Tag color="primary">主要</Tag>
<Tag color="success">成功</Tag>
<Tag color="warning">警告</Tag>
<Tag color="danger">危险</Tag>
<Tag color="info">信息</Tag>
```

```vue [Vue]
<Tag>默认</Tag>
<Tag color="primary">主要</Tag>
<Tag color="success">成功</Tag>
<Tag color="warning">警告</Tag>
<Tag color="danger">危险</Tag>
```

:::

## 可关闭标�?
::: code-group

```tsx [React]
const [tags, setTags] = useState(['标签一', '标签�?]);

const handleClose = (tag) => {
  setTags(tags.filter(t => t !== tag));
};

<Flex gap="sm" wrap>
  {tags.map(tag => (
    <Tag key={tag} closable onClose={() => handleClose(tag)}>
      {tag}
    </Tag>
  ))}
</Flex>
```

```vue [Vue]
<script setup>
const tags = ref(['标签一', '标签�?]);
const handleClose = (tag) => {
  tags.value = tags.value.filter(t => t !== tag);
};
</script>

<template>
  <Flex gap="sm" wrap>
    <Tag v-for="tag in tags" :key="tag" closable @close="handleClose(tag)">
      {{ tag }}
    </Tag>
  </Flex>
</template>
```

:::

## 自定义颜�?
```tsx
// 使用预设颜色
<Tag color="success">绿色</Tag>

// 使用自定义颜�?<Tag color="#ff6b6b">自定义红</Tag>
<Tag color="rgb(22, 119, 255)">RGB �?/Tag>
```

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `color` | 颜色 | `ColorType \| string` | `gray` |
| `closable` | 是否可关�?| `boolean` | `false` |
| `onClose` | 关闭回调 | `(e: MouseEvent) => void` | `-` |
