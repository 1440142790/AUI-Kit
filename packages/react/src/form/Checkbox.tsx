/**
 * Checkbox 多选框
 *
 * @example React
 * import { Checkbox } from '@aui/react';
 * const options = [{ label: '苹果', value: 'apple' }, { label: '香蕉', value: 'banana' }];
 * <Checkbox options={options} value={selected} onChange={setSelected} />
 */

import React, { useState, useMemo } from 'react';
import { type CheckboxProps, cx } from '@aui/core';

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ options = [], value, defaultValue = [], direction = 'horizontal', onChange, disabled = false, checkAll = false, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? []);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value ?? []) : internalValue;

    const handleChange = (val: string) => {
      const arr = [...(currentValue as string[])];
      const idx = arr.indexOf(val);
      if (idx === -1) arr.push(val);
      else arr.splice(idx, 1);
      if (!isControlled) setInternalValue(arr);
      onChange?.(arr);
    };

    const allChecked = useMemo(() =>
      options.length > 0 && options.every((o) => (currentValue as string[]).includes(o.value)),
      [options, currentValue]
    );

    const handleCheckAll = () => {
      if (allChecked) {
        if (!isControlled) setInternalValue([]);
        onChange?.([]);
      } else {
        const allValues = options.filter((o) => !o.disabled).map((o) => o.value);
        if (!isControlled) setInternalValue(allValues);
        onChange?.(allValues);
      }
    };

    return (
      <div
        ref={ref}
        className={cx('flex', direction === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-2', className)}
        {...rest}
      >
        {checkAll && (
          <label className={cx('flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]', disabled ? 'opacity-50 cursor-not-allowed' : '')}>
            <span
              className={cx(
                'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0',
                allChecked ? 'bg-[#1677ff] border-[#1677ff]' : 'border-[#d9d9d9]',
              )}
              onClick={handleCheckAll}
            >
              {allChecked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <input type="checkbox" checked={allChecked} disabled={disabled} onChange={handleCheckAll} className="sr-only" />
            全选
          </label>
        )}
        {options.map((opt) => {
          const checked = (currentValue as string[]).includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cx('flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]', (disabled || opt.disabled) ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#1677ff]')}
            >
              <span
                className={cx(
                  'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0',
                  checked ? 'bg-[#1677ff] border-[#1677ff]' : 'border-[#d9d9d9]',
                )}
                onClick={() => handleChange(opt.value)}
              >
                {checked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
              <input type="checkbox" checked={checked} disabled={disabled || opt.disabled} onChange={() => handleChange(opt.value)} className="sr-only" />
              {opt.label}
            </label>
          );
        })}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
