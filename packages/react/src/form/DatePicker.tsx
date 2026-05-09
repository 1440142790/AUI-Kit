/**
 * DatePicker 日期选择�? *
 * @example React
 * import { DatePicker } from '@yaomingshan/react';
 * <DatePicker format="YYYY-MM-DD" mode="date" onChange={(val) => console.log(val)} />
 */

import React, { useState } from 'react';
import { type DatePickerProps, cx } from '@yaomingshan/core';

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ format = 'YYYY-MM-DD', mode = 'date', value, defaultValue, placeholder = '请选择日期', disabled = false, onChange, className, ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;

    const formatDate = (d: Date) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    const handleConfirm = () => {
      const val = selected || formatDate(new Date());
      if (!isControlled) setSelected(val);
      onChange?.(val, new Date(val));
      setOpen(false);
    };

    const displayValue = isControlled ? (value ?? '') : selected;

    return (
      <div ref={ref} className={cx('relative inline-flex w-full', className)}>
        <div
          onClick={() => !disabled && setOpen(!open)}
          className={cx(
            'flex items-center justify-between w-full h-10 px-3 rounded-md border cursor-pointer transition-all duration-200',
            disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed' : 'border-[#d9d9d9] hover:border-[#4096ff]',
            open ? 'border-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.1)]' : ''
          )}
        >
          <span className={displayValue ? 'text-[14px] text-[#262626]' : 'text-[14px] text-[#bfbfbf]'}>
            {displayValue || placeholder}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-[#8c8c8c] shrink-0">
            <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm2.5 7.5L7 10V3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {open && (
          <div className="absolute top-full left-0 mt-1 bg-white rounded-lg border border-[#f0f0f0] shadow-lg z-[1000] p-4 min-w-[280px]">
            <input
              type="date"
              value={displayValue}
              onChange={(e) => {
                if (!isControlled) setSelected(e.target.value);
              }}
              className="w-full border border-[#d9d9d9] rounded px-3 py-2 text-[14px] outline-none focus:border-[#1677ff]"
            />
            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 text-sm rounded border border-[#d9d9d9] text-[#595959]"
              >取消</button>
              <button
                onClick={handleConfirm}
                className="px-3 py-1 text-sm rounded bg-[#1677ff] text-white"
              >确定</button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
