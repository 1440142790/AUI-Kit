/**
 * Input 输入�? *
 * @fileoverview 单行文本输入框，支持前缀/后缀图标、清除按�? *
 * @example React
 * import { Input } from '@yaomingshan/react';
 *
 * // 基本用法
 * <Input placeholder="请输入用户名" />
 *
 * // 带前缀图标
 * <Input placeholder="请输入用户名" prefix={<UserIcon />} />
 *
 * // 带清除按�? * <Input allowClear placeholder="可清除的输入" />
 *
 * // 受控模式
 * const [value, setValue] = useState('');
 * <Input value={value} onChange={(v) => setValue(v)} />
 *
 * @example Vue
 * <script setup>
 * import { Input } from '@yaomingshan/vue';
 * const username = ref('');
 * </script>
 * <template>
 *   <Input v-model="username" placeholder="请输入用户名" />
 * </template>
 */

import React, { useState, useCallback, useMemo } from 'react';
import { type InputProps, cx } from '@yaomingshan/core';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      defaultValue,
      onChange,
      prefix,
      suffix,
      allowClear = false,
      maxLength,
      showCount = false,
      readOnly = false,
      disabled = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const [focused, setFocused] = useState(false);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value ?? '') : internalValue;
    const currentLength = String(currentValue).length;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e.target.value);
      },
      [isControlled, onChange]
    );

    const handleClear = useCallback(() => {
      if (!isControlled) setInternalValue('');
      onChange?.('');
    }, [isControlled, onChange]);

    const wrapperClasses = useMemo(
      () =>
        cx(
          'flex items-center rounded-md border transition-all duration-200 bg-white',
          'focus-within:border-[#1677ff] focus-within:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]',
          disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed' : 'border-[#d9d9d9] hover:border-[#4096ff]',
          className
        ),
      [disabled, className]
    );

    return (
      <div className={cx('relative inline-flex w-full', wrapperClasses)} style={{ height: '38px', ...style }}>
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0">
            {prefix}
          </span>
        )}

        <input
          ref={ref}
          type={type}
          value={currentValue}
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          className={cx(
            'flex-1 min-w-0 border-none outline-none bg-transparent text-[14px] text-[#262626]',
            'placeholder:text-[#bfbfbf]',
            'disabled:text-[#bfbfbf] disabled:cursor-not-allowed',
            prefix ? 'pl-10' : 'pl-3',
            (suffix || allowClear || showCount) ? 'pr-10' : 'pr-3'
          )}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />

        {allowClear && currentValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] hover:text-[#595959]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/>
            </svg>
          </button>
        )}

        {suffix && !allowClear && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0">{suffix}</span>
        )}

        {showCount && maxLength && (
          <span className={cx(
            'absolute right-3 top-1/2 -translate-y-1/2 text-xs',
            currentLength >= maxLength ? 'text-[#ff4d4f]' : 'text-[#8c8c8c]'
          )}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
