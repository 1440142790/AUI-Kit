# Modal 对话�?
模态弹窗，用于需要用户确认或输入的场景。移动端自动转为 BottomSheet�?
## 基本用法

::: code-group

```tsx [React]
import { Modal, Button } from '@yaomingshan/react';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>打开弹窗</Button>
  <Modal
    title="提示"
    visible={open}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
  >
    <p>确定要执行此操作吗？</p>
  </Modal>
</>
```

```vue [Vue]
<script setup>
import { Modal, Button } from '@yaomingshan/vue';
const open = ref(false);
</script>

<template>
  <Button @click="open = true">打开弹窗</Button>
  <Modal
    title="提示"
    :visible="open"
    @ok="open = false"
    @cancel="open = false"
  >
    <p>确定要执行此操作吗？</p>
  </Modal>
</template>
```

:::

## 自定义底�?
```tsx
<Modal
  title="自定义底�?
  visible={open}
  :showOk="true"
  :showCancel="true"
  okText="确认"
  cancelText="取消"
  footer={
    <div class="flex gap-3">
      <Button onClick={() => setOpen(false)}>稍后再说</Button>
      <Button type="primary" onClick={handleConfirm}>确定</Button>
    </div>
  }
>
  <p>内容区域</p>
</Modal>
```

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `visible` | 是否显示 | `boolean` | `false` |
| `title` | 标题 | `ReactNode` | `-` |
| `footer` | 底部内容 | `ReactNode` | `默认按钮组` |
| `showOk` | 是否显示确定按钮 | `boolean` | `true` |
| `showCancel` | 是否显示取消按钮 | `boolean` | `true` |
| `okText` | 确定按钮文字 | `string` | `'确定'` |
| `cancelText` | 取消按钮文字 | `string` | `'取消'` |
| `confirmLoading` | 确定按钮加载状�?| `boolean` | `false` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `closable` | 是否显示关闭按钮 | `boolean` | `true` |
| `width` | 弹窗宽度 | `number \| string` | `520` |
| `onOk` | 点击确定回调 | `() => void` | `-` |
| `onCancel` | 点击取消/关闭回调 | `() => void` | `-` |

## 移动�?
移动端（`platform="mobile"`）时，Modal 自动渲染�?BottomSheet�?