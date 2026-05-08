/**
 * TextArea 文本域
 *
 * @example React
 * import { TextArea } from '@aui/react';
 * <TextArea rows={4} showCount maxLength={200} placeholder="请输入描述" />
 */

import React, { useState, useCallback, useMemo } from 'react';
import { type TextAreaProps, cx } from '@aui/core';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ rows = 4, maxLength, showCount = false, placeholder, value, defaultValue, onChange, autoSize, disabled = false, className, style, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value ?? '') : internalValue;
    const currentLength = String(currentValue).length;

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e.target.value);
    }, [isControlled, onChange]);

    return (
      <div className="relative">
        <textarea
          ref={ref}
          rows={rows}
          value={currentValue}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          onChange={handleChange}
          className={cx(
            'w-full border border-[#d9d9d9] rounded-md px-3 py-2 text-[14px] text-[#262626]',
            'outline-none transition-all duration-200 resize-none',
            'placeholder:text-[#bfbfbf]',
            'focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]',
            disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed text-[#bfbfbf]' : '',
            showCount ? 'pb-6' : '',
            className
          )}
          style={style}
          {...rest}
        />
        {showCount && maxLength && (
          <span className={cx(
            'absolute bottom-2 right-3 text-xs',
            currentLength >= maxLength ? 'text-[#ff4d4f]' : 'text-[#8c8c8c]'
          )}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
