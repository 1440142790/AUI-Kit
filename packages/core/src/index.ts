/**
 * AUI Kit - 核心包统一导出
 *
 * @example
 * // React
 * import { colors, sizeKeys, type ButtonProps } from '@aui/core';
 *
 * // Vue
 * import { colors, sizeKeys, type ButtonProps } from '@aui/core';
 */

// 设计令牌
export * from './tokens';

// 类型定义（全部组件 Props 接口）
export type * from './types/components';

// 平台检测
export {
  detectPlatform,
  isMobile,
  isWeb,
  isMiniProgram,
  platformMatch,
  platformClass,
  shouldReplaceComponent,
  mobileComponentMap,
  isMobileEnv,
  isMini,
} from './platform';
export type { Platform } from './platform';

// 工具函数
export { cx, generateId, cxObject, merge, isEmpty, clamp, debounce, throttle, kebabCase, camelCase, capitalize } from './utils';
