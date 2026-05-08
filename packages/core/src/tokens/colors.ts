/**
 * AUI Kit 设计令牌 - 颜色系统
 *
 * 所有组件必须使用以下颜色，禁止硬编码颜色值。
 * AI 生成代码时必须引用此处的令牌变量。
 *
 * @example
 * // React
 * import { colors } from '@aui/core';
 * <div className={colors.primary.DEFAULT}>主色文字</div>
 *
 * // Vue
 * import { colors } from '@aui/core';
 * <div :class="colors.primary.DEFAULT">主色文字</div>
 */
export const colors = {
  /** 主色 - 用于主要按钮、链接、强调 */
  primary: {
    DEFAULT: 'bg-[#1677ff] text-white',
    light:   'bg-[#69b1ff] text-white',
    dark:    'bg-[#0958d9] text-white',
    text:    'text-[#1677ff]',
    border:  'border-[#1677ff]',
    hover:   'hover:bg-[#4096ff]',
  } as const,

  /** 成功色 - 用于成功状态、通过状态 */
  success: {
    DEFAULT: 'bg-[#52c41a] text-white',
    light:   'bg-[#95de64] text-[#389e0d]',
    dark:    'bg-[#389e0d] text-white',
    text:    'text-[#52c41a]',
    border:  'border-[#52c41a]',
    bg:      'bg-[#f6ffed]',
  } as const,

  /** 警告色 - 用于警告状态、待处理 */
  warning: {
    DEFAULT: 'bg-[#faad14] text-white',
    light:   'bg-[#ffd666] text-[#d48806]',
    dark:    'bg-[#d48806] text-white',
    text:    'text-[#faad14]',
    border:  'border-[#faad14]',
    bg:      'bg-[#fffbe6]',
  } as const,

  /** 危险色 - 用于错误、删除、危险操作 */
  danger: {
    DEFAULT: 'bg-[#ff4d4f] text-white',
    light:   'bg-[#ff7875] text-[#d9363e]',
    dark:    'bg-[#d9363e] text-white',
    text:    'text-[#ff4d4f]',
    border:  'border-[#ff4d4f]',
    bg:      'bg-[#fff2f0]',
  } as const,

  /** 信息色 - 用于信息提示 */
  info: {
    DEFAULT: 'bg-[#1677ff] text-white',
    light:   'bg-[#69b1ff] text-white',
    dark:    'bg-[#0958d9] text-white',
    text:    'text-[#1677ff]',
    border:  'border-[#1677ff]',
    bg:      'bg-[#e6f4ff]',
  } as const,

  /** 中性色 - 用于正文、辅助、边框 */
  gray: {
    50:  'bg-[#fafafa] text-[#595959]',
    100: 'bg-[#f5f5f5] text-[#595959]',
    200: 'bg-[#f0f0f0] text-[#595959]',
    300: 'bg-[#e8e8e8] text-[#595959]',
    400: 'bg-[#d9d9d9] text-[#262626]',
    500: 'bg-[#bfbfbf] text-[#262626]',
    600: 'bg-[#8c8c8c] text-[#ffffff]',
    700: 'bg-[#595959] text-[#ffffff]',
    800: 'bg-[#434343] text-[#ffffff]',
    900: 'bg-[#1f1f1f] text-[#ffffff]',
    border: 'border-[#d9d9d9]',
    text: 'text-[#595959]',
    textSecondary: 'text-[#8c8c8c]',
    textTertiary: 'text-[#bfbfbf]',
  } as const,

  /** 文本颜色 */
  text: {
    primary:   'text-[#262626]',
    secondary: 'text-[#595959]',
    tertiary:  'text-[#8c8c8c]',
    disabled:  'text-[#bfbfbf]',
    inverse:   'text-[#ffffff]',
  } as const,

  /** 背景色 */
  bg: {
    layout:    'bg-[#ffffff]',
    container: 'bg-[#fafafa]',
    hover:     'bg-[#f5f5f5]',
    active:    'bg-[#e8e8e8]',
    mask:      'bg-[rgba(0,0,0,0.45)]',
  } as const,

  /** 边框颜色 */
  border: {
    default: 'border-[#d9d9d9]',
    hover:   'border-[#4096ff]',
    focus:   'border-[#1677ff]',
    error:   'border-[#ff4d4f]',
    success: 'border-[#52c41a]',
  } as const,
} as const;

export type ColorKey = keyof typeof colors;
export type ColorShade = 'DEFAULT' | 'light' | 'dark' | 'text' | 'border' | 'bg' | 'hover';
