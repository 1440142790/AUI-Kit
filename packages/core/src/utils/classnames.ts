/**
 * AUI Kit - 工具函数
 */

/**
 * 合并 className（支持多参数）
 * @example
 * cx('text-sm', 'px-4', isActive && 'bg-blue-500')
 */
export function cx(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 生成唯一 ID
 */
let idCounter = 0;
export function generateId(prefix = 'aui'): string {
  return `${prefix}-${Date.now()}-${++idCounter}`;
}

/**
 * 对象转 className 字符串
 * @example
 * cx({ 'text-sm': true, 'px-4': false }) // 'text-sm'
 */
export function cxObject(obj: Record<string, boolean | undefined>): string {
  return Object.entries(obj).filter(([, v]) => v).map(([k]) => k).join(' ');
}

/**
 * 深度合并对象
 */
export function merge<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] !== undefined) {
        target[key] = source[key] as T[Extract<keyof T, string>];
      }
    }
  }
  return target;
}

/**
 * 判断值是否为空（null, undefined, ''）
 */
export function isEmpty(value: unknown): boolean {
  return value === null || value === undefined || value === '';
}

/**
 * 限制数值在范围内
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let last = 0;
  return ((...args: unknown[]) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  }) as T;
}

/**
 * 将 camelCase 转为 kebab-case
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 将 kebab-case 转为 camelCase
 */
export function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * 首字母大写
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
