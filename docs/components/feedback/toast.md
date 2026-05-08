# Toast 轻提示

命令式调用的全局提示，用于展示操作反馈。

## 基本用法

::: code-group

```tsx [React]
import { Toast } from '@aui/react';

// 成功提示
Toast.success('保存成功！');

// 错误提示
Toast.error('网络错误，请重试');

// 警告提示
Toast.warning('内容过长，请精简');

// 信息提示
Toast.info('有新消息');

// 加载提示（需手动关闭）
Toast.loading('正在提交...');
```

```vue [Vue]
<!-- Vue 中同样调用 -->
import { Toast } from '@aui/core';

Toast.success('保存成功！');
```

:::

## 带回调

```tsx
Toast.show({
  content: '保存成功',
  type: 'success',
  duration: 2000,
  onClose: () => {
    console.log('Toast 关闭了');
  },
});
```

## 手动关闭

```tsx
// Toast.loading 返回后可以手动关闭
const hide = Toast.loading('正在提交...');

// 异步操作完成后
await saveData();
hide(); // 关闭 loading Toast

Toast.success('提交成功！');
```

## API

| 方法 | 说明 | 参数 |
|------|------|------|
| `Toast.show(options)` | 显示 Toast | `ToastOptions` |
| `Toast.success(content, duration?)` | 成功提示 | `content, duration=2000` |
| `Toast.error(content, duration?)` | 错误提示 | `content, duration=3000` |
| `Toast.warning(content, duration?)` | 警告提示 | `content, duration=2500` |
| `Toast.info(content, duration?)` | 信息提示 | `content, duration=2000` |
| `Toast.loading(content)` | 加载提示 | `content`（不自动关闭）|

## ToastOptions

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `content` | 提示内容 | `ReactNode` | **必填** |
| `type` | 类型 | `'success' \| 'error' \| 'warning' \| 'info' \| 'loading'` | `'info'` |
| `duration` | 显示时长（ms），0 不自动关闭 | `number` | `2000` |
| `mask` | 是否显示遮罩 | `boolean` | `false` |
| `onClose` | 关闭回调 | `() => void` | `-` |
