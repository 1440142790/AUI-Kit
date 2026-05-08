# Page 页面容器

页面级容器组件，自动处理导航栏、返回按钮、平台适配。

## 使用场景

- 作为页面根组件使用
- 需要显示标题栏和返回按钮时
- 移动端适配时自动切换样式

## 代码示例

::: code-group

```tsx [React]
import { Page, Grid, Button } from '@aui/react';

function UserPage() {
  return (
    <Page
      title="用户中心"
      showNav={true}
      onBack={() => history.back()}
    >
      <div className="p-4">
        <p>页面内容</p>
      </div>
    </Page>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { Page } from '@aui/vue';
const goBack = () => history.back();
</script>

<template>
  <Page
    title="用户中心"
    :showNav="true"
    @back="goBack"
  >
    <div class="p-4">
      <p>页面内容</p>
    </div>
  </Page>
</template>
```

:::

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `title` | 页面标题 | `string` | `-` |
| `showNav` | 是否显示导航栏 | `boolean` | `true` |
| `onBack` | 返回按钮点击回调 | `() => void` | `-` |
| `platform` | 平台类型：`web` \| `mobile` \| `mini` | `Platform` | `自动检测` |
| `background` | 背景色：`white` \| `gray` \| `transparent` | `'white' \| 'gray' \| 'transparent'` | `'white'` |
| `scrollable` | 页面是否可滚动 | `boolean` | `true` |

## 移动端适配

移动端时，Page 会自动应用更紧凑的导航栏样式：

```tsx
// 设置 platform="mobile" 启用移动端样式
<Page title="移动端页面" platform="mobile">
  <BottomSheet ... />
</Page>
```

## 平台自动检测

```tsx
// 自动检测（根据 userAgent 判断）
<Page title="自动适配" />

// 强制指定
<Page title="强制移动端" platform="mobile" />
<Page title="强制PC端" platform="web" />
```
