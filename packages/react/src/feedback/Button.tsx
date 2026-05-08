/**
 * Button 按钮
 *
 * @fileoverview 按钮组件，支持多种类型、尺寸和状态
 *
 * @example React
 * import { Button } from '@aui/react';
 *
 * // 基本用法
 * <Button>默认按钮</Button>
 *
 * // 主要按钮
 * <Button type="primary">提交</Button>
 *
 * // 加载状态
 * <Button type="primary" loading={submitting} onClick={handleSubmit}>提交</Button>
 *
 * // 危险操作
 * <Button type="primary" danger onClick={handleDelete}>删除</Button>
 *
 * @example Vue
 * <script setup>
 * import { Button } from '@aui/vue';
 * const submitting = ref(false);
 * </script>
 * <template>
 *   <Button type="primary" :loading="submitting" @click="handleSubmit">提交</Button>
 * </template>
 */

import React, { useMemo } from 'react';
import { type ButtonProps, type Size } from '@aui/core';
import { cx } from '@aui/core';

/** 按钮类型到 Tailwind 类名的映射 */
const typeClasses = {
  primary: 'bg-[#1677ff] text-white hover:bg-[#4096ff] active:bg-[#0958d9] disabled:bg-[#e8e8e8] disabled:text-[#bfbfbf]',
  default: 'bg-white text-[#262626] border border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] active:border-[#0958d9] active:text-[#0958d9] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]',
  dashed:  'bg-white text-[#262626] border border-dashed border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]',
  text:    'bg-transparent text-[#262626] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] disabled:text-[#bfbfbf]',
  link:    'bg-transparent text-[#1677ff] hover:text-[#4096ff] active:text-[#0958d9] disabled:text-[#bfbfbf]',
};

/** 尺寸映射 */
const sizeClasses: Record<Size, string> = {
  xs: 'h-6 px-2 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-6 text-lg gap-2',
  xl: 'h-14 px-8 text-xl gap-2',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'default',
      size = 'md',
      loading = false,
      block = false,
      danger = false,
      icon,
      onClick,
      disabled,
      className,
      children,
      htmlType = 'button',
      ...rest
    },
    ref
  ) => {
    const classes = useMemo(() => {
      return cx(
        'inline-flex items-center justify-center font-medium rounded-md',
        'transition-all duration-200 cursor-pointer select-none',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed',
        sizeClasses[size],
        block ? 'w-full' : '',
        className
      );
    }, [size, block, className]);

    const typeClass = danger
      ? type === 'text' || type === 'link'
        ? 'text-[#ff4d4f] hover:text-[#ff7875] active:text-[#d9363e]'
        : 'bg-[#ff4d4f] hover:bg-[#ff7875] active:bg-[#d9363e] text-white'
      : typeClasses[type];

    return (
      <button
        ref={ref}
        type={htmlType as 'button' | 'submit' | 'reset'}
        className={cx(classes, typeClass)}
        disabled={disabled || loading}
        onClick={onClick}
        {...rest}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && <span className="shrink-0 mr-1">{icon}</span>}
        {children && <span>{children}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
