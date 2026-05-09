# 设计令牌

AUI Kit 使用设计令牌来保证视觉一致性，所有令牌从 `@yaomingshan/core` 统一导出�?
## 颜色系统

```typescript
import { colors } from '@yaomingshan/core';

colors.primary.DEFAULT  // #1677ff
colors.primary.light     // #69b1ff
colors.primary.dark      // #0958d9

colors.success.DEFAULT  // #52c41a
colors.success.light    // #95de64
colors.success.dark     // #389e0d

colors.warning.DEFAULT  // #faad14
colors.warning.light    // #ffd666
colors.warning.dark     // #d48806

colors.danger.DEFAULT   // #ff4d4f
colors.danger.light     // #ff7875
colors.danger.dark      // #d9363e
```

## 间距系统

```typescript
import { spacing, spacingKeys } from '@yaomingshan/core';

// spacingKeys: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

spacing.xs   // '4px'
spacing.sm   // '8px'
spacing.md   // '16px'
spacing.lg   // '24px'
spacing.xl   // '32px'
spacing['2xl'] // '40px'
spacing['3xl'] // '48px'
```

## 圆角系统

```typescript
import { radius, radiusKeys } from '@yaomingshan/core';

radius.none   // '0'
radius.sm     // '2px'
radius.md     // '4px'
radius.lg     // '8px'
radius.xl     // '12px'
radius.full   // '9999px'（药丸形�?```

## 字号系统

```typescript
import { fontSize } from '@yaomingshan/core';

fontSize.xs    // 'text-[12px]'
fontSize.sm    // 'text-[12px]'
fontSize.base  // 'text-[14px]'
fontSize.lg    // 'text-[16px]'
fontSize.xl    // 'text-[18px]'
fontSize['2xl'] // 'text-[20px]'
fontSize['3xl'] // 'text-[24px]'
fontSize['4xl'] // 'text-[30px]'
```

## 阴影系统

```typescript
import { shadows } from '@yaomingshan/core';

shadows.sm    // 轻微阴影
shadows.md    // 中等阴影
shadows.lg    // 大阴�?shadows.xl    // 特大阴影
shadows.inner // 内阴�?shadows.none  // 无阴�?```

## 组件尺寸映射

```typescript
import { componentSizes, type Size } from '@yaomingshan/core';

const size = componentSizes.md;
// size.h   �?'h-10'
// size.text �?'text-base'
// size.px  �?'px-4'
```

## �?Tailwind 中使�?
所有令牌都设计为与 Tailwind CSS 配合使用�?
```tsx
import { colors, spacing } from '@yaomingshan/core';

<div
  className={cx(
    'flex items-center rounded-lg',
    colors.primary.light,
    spacing.md
  )}
>
  内容
</div>
```

## 自定�?Tailwind 配置

将令牌注册到 Tailwind 配置中：

```ts
// tailwind.config.ts
import { colors, spacing, radius } from '@yaomingshan/core';

export default {
  theme: {
    extend: {
      colors: {
        'aui-primary':   { DEFAULT: colors.primary.DEFAULT, light: colors.primary.light, dark: colors.primary.dark },
        'aui-success':   { DEFAULT: colors.success.DEFAULT, light: colors.success.light, dark: colors.success.dark },
        'aui-warning':   { DEFAULT: colors.warning.DEFAULT, light: colors.warning.light, dark: colors.warning.dark },
        'aui-danger':    { DEFAULT: colors.danger.DEFAULT, light: colors.danger.light, dark: colors.danger.dark },
      },
    },
  },
};
```
