/**
 * AUI Kit - 平台检测与适配
 *
 * @example
 * import { detectPlatform, isMobile, PlatformContext } from '@aui/core';
 *
 * // 检测当前平台
 * const platform = detectPlatform();
 * if (isMobile()) { ... }
 */

export type Platform = 'web' | 'mobile' | 'mini';

/** User Agent 模式匹配 */
const UA = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';

/** 微信小程序 webview */
const _isMiniProgram = /micromessenger/.test(UA) && /miniprogram/.test(UA);

/** 支付宝小程序 */
const isAlipay = /alipayclient/.test(UA) && /alipayminiprogram/.test(UA);

/** 通用小程序环境 */
export const isMini = _isMiniProgram || isAlipay;

/** 移动端检测 */
export const isMobileEnv = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(UA);

/**
 * 检测当前平台
 */
export function detectPlatform(override?: Platform): Platform {
  if (override) return override;
  if (isMini) return 'mini';
  if (isMobileEnv) return 'mobile';
  return 'web';
}

/**
 * 快捷判断：是否为移动端（不含小程序）
 */
export function isMobile(): boolean {
  return detectPlatform() === 'mobile';
}

/**
 * 快捷判断：是否为 Web 端
 */
export function isWeb(): boolean {
  return detectPlatform() === 'web';
}

/**
 * 快捷判断：是否为小程序
 */
export function isMiniProgram(): boolean {
  return detectPlatform() === 'mini';
}

/**
 * 根据平台返回不同的值
 */
export function platformMatch<T>(matchers: { web?: T; mobile?: T; mini?: T }, fallback: T): T {
  const platform = detectPlatform();
  return matchers[platform] ?? fallback;
}

/**
 * 生成平台特定的 className
 */
export function platformClass(platform: Platform, classes: Record<Platform, string>): string {
  return classes[platform] || classes.web;
}

/**
 * 移动端组件映射（Web 端替代组件）
 */
export const mobileComponentMap: Record<string, string> = {
  Table: 'CardList',     // 移动端用卡片列表替代表格
  Modal: 'BottomSheet',  // 移动端用底部抽屉替代对话框
};

/**
 * 检查某组件在当前平台是否需要替换
 */
export function shouldReplaceComponent(componentName: string, platform: Platform): string {
  if (platform === 'mobile' || platform === 'mini') {
    return mobileComponentMap[componentName] || componentName;
  }
  return componentName;
}
