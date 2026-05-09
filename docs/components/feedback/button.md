# Button 按钮

最常用的交互组件，支持多种类型、尺寸和状态�?
## 基本用法

::: code-group

```tsx [React]
import { Button } from '@yaomingshan/react';

<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button type="text">文字按钮</Button>
<Button type="link">链接按钮</Button>
```

```vue [Vue]
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button type="text">文字按钮</Button>
```

:::

## 尺寸

::: code-group

```tsx [React]
<Button size="xs">超小</Button>
<Button size="sm">�?/Button>
<Button size="md">�?/Button>
<Button size="lg">�?/Button>
<Button size="xl">特大</Button>
```

```vue [Vue]
<Button size="xs">超小</Button>
<Button size="sm">�?/Button>
<Button size="md">�?/Button>
<Button size="lg">�?/Button>
```

:::

## 状�?
::: code-group

```tsx [React]
// 加载状�?<Button type="primary" loading={isLoading}>提交</Button>

// 危险按钮
<Button danger>删除</Button>

// 块级按钮
<Button type="primary" block>全宽按钮</Button>

// 禁用状�?<Button disabled>禁用</Button>

// 图标按钮
<Button icon={<SaveIcon />}>保存</Button>
```

```vue [Vue]
<Button type="primary" :loading="isLoading">提交</Button>
<Button danger>删除</Button>
<Button type="primary" block>全宽按钮</Button>
<Button :disabled="true">禁用</Button>
```

:::

## 完整示例

```tsx
import { Button, Grid } from '@yaomingshan/react';

function Demo() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
  };

  return (
    <Grid cols={3} gap="md">
      <Button type="primary" onClick={handleClick} loading={loading}>
        {loading ? '保存�?..' : '保存'}
      </Button>
      <Button type="default" onClick={() => history.back()}>取消</Button>
      <Button danger onClick={handleDelete}>删除</Button>
    </Grid>
  );
}
```

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `type` | 按钮类型 | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| `size` | 按钮尺寸 | `Size` | `'md'` |
| `loading` | 加载状�?| `boolean` | `false` |
| `disabled` | 禁用状�?| `boolean` | `false` |
| `block` | 是否为块级按�?| `boolean` | `false` |
| `danger` | 危险按钮 | `boolean` | `false` |
| `icon` | 图标 | `ReactNode` | `-` |
| `htmlType` | 原生 button type | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `onClick` | 点击回调 | `(e: MouseEvent) => void` | `-` |
