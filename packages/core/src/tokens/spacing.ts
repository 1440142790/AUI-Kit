/**
 * AUI Kit 设计令牌 - 尺寸与间距系统
 *
 * @example
 * // React
 * import { spacing, radius } from '@aui/core';
 * <div style={{ padding: spacing.md, borderRadius: radius.md }}>内容</div>
 *
 * // Vue
 * import { spacing, radius } from '@aui/core';
 * <div :style="{ padding: spacing.md, borderRadius: radius.md }">内容</div>
 */

/** 间距尺寸 */
export const spacing = {
  xs:   '4px',
  sm:   '8px',
  md:   '16px',
  lg:   '24px',
  xl:   '32px',
  '2xl': '40px',
  '3xl': '48px',
} as const;

/** 间距枚举值（用于 Props） */
export const spacingKeys = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
export type SpacingKey = typeof spacingKeys[number];

/** 圆角尺寸 */
export const radius = {
  none:   '0',
  sm:     '2px',
  md:     '4px',
  lg:     '8px',
  xl:     '12px',
  '2xl':  '16px',
  full:   '9999px',
} as const;

/** 圆角枚举值 */
export const radiusKeys = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;
export type RadiusKey = typeof radiusKeys[number];

/** 字号 */
export const fontSize = {
  xs:   'text-[12px]',
  sm:   'text-[12px]',
  base: 'text-[14px]',
  lg:   'text-[16px]',
  xl:   'text-[18px]',
  '2xl': 'text-[20px]',
  '3xl': 'text-[24px]',
  '4xl': 'text-[30px]',
} as const;

/** 字体粗细 */
export const fontWeight = {
  normal:   'font-normal',
  medium:   'font-medium',
  semibold: 'font-semibold',
  bold:     'font-bold',
} as const;

/** 行高 */
export const lineHeight = {
  none:    'leading-none',
  tight:   'leading-tight',
  snug:    'leading-snug',
  normal:  'leading-normal',
  relaxed: 'leading-relaxed',
  loose:   'leading-loose',
} as const;

/** 阴影 */
export const shadows = {
  sm:    'shadow-[0_1px_2px_0_rgba(0,0,0,0.03),0_1px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_0_rgba(0,0,0,0.02)]',
  md:    'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]',
  lg:    'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]',
  xl:    'shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]',
  inner: 'shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]',
  none:  'shadow-none',
} as const;

/** 过渡动画时长 */
export const transitions = {
  fast:   'transition-all duration-150',
  normal: 'transition-all duration-200',
  slow:   'transition-all duration-300',
} as const;

/** Z-Index 层级 */
export const zIndex = {
  dropdown: 1000,
  sticky:   1100,
  fixed:    1200,
  modal:    1300,
  popover:  1400,
  toast:    1500,
} as const;

/** 组件尺寸枚举 */
export const sizeKeys = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type SizeKey = typeof sizeKeys[number];

/** 组件尺寸映射 */
export const componentSizes = {
  xs:  { h: 'h-6',  text: 'text-xs',  px: 'px-2'  },
  sm:  { h: 'h-8',  text: 'text-sm',  px: 'px-3'  },
  md:  { h: 'h-10', text: 'text-base', px: 'px-4' },
  lg:  { h: 'h-12', text: 'text-lg',  px: 'px-6'  },
  xl:  { h: 'h-14', text: 'text-xl',  px: 'px-8'  },
} as const;

/** 边框宽度 */
export const borderWidth = {
  none: 'border-0',
  sm:   'border',
  md:   'border-2',
  lg:   'border-[3px]',
} as const;
