/**
 * Radio 单选框
 *
 * @example React
 * import { Radio } from '@aui/react';
 * const options = [{ label: '选项A', value: 'a' }, { label: '选项B', value: 'b' }];
 * <Radio options={options} value={selected} onChange={setSelected} />
 */

import React, { useState, useMemo } from 'react';
import { type RadioProps, cx } from '@aui/core';

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ options = [], value, defaultValue, direction = 'horizontal', onChange, disabled = false, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (val: string) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    return (
      <div
        ref={ref}
        className={cx(
          'flex',
          direction === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-2',
          className
        )}
        {...rest}
      >
        {options.map((opt) => {
          const checked = currentValue === opt.value;
          return (
            <label
              key={opt.value}
              className={cx(
                'flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]',
                (disabled || opt.disabled) ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#1677ff]'
              )}
            >
              <span className={cx(
                'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0',
                checked ? 'border-[#1677ff]' : 'border-[#d9d9d9]',
              )}>
                {checked && <span className="w-2 h-2 rounded-full bg-[#1677ff]" />}
              </span>
              <input
                type="radio"
                checked={checked}
                disabled={disabled || opt.disabled}
                onChange={() => handleChange(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
