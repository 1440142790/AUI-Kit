/**
 * Select 选择�? *
 * @fileoverview 下拉选择器，支持单�?多选、搜�? *
 * @example React
 * import { Select } from '@yaomingshan/react';
 * const options = [{ label: '北京', value: 'beijing' }, { label: '上海', value: 'shanghai' }];
 * <Select options={options} placeholder="请选择城市" />
 *
 * @example Vue
 * <Select :options="cities" placeholder="请选择城市" v-model="selectedCity" />
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { type SelectProps, type SelectOption, cx } from '@yaomingshan/core';

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options = [],
      value,
      defaultValue,
      placeholder = '请选择',
      multiple = false,
      searchable = false,
      disabled = false,
      allowClear = false,
      onChange,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string | string[]>(
      multiple ? (defaultValue as string[]) ?? [] : (defaultValue as string) ?? ''
    );
    const [search, setSearch] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value ?? (multiple ? [] : '')) : internalValue;

    const selectedLabels = useMemo(() => {
      if (multiple) {
        return (currentValue as string[])
          .map((v) => options.find((o) => o.value === v)?.label)
          .filter(Boolean);
      }
      return options.find((o) => o.value === currentValue)?.label ?? '';
    }, [currentValue, options, multiple]);

    const filteredOptions = useMemo(() => {
      if (!search) return options;
      return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));
    }, [options, search]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
          setSearch('');
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (opt: SelectOption) => {
      if (multiple) {
        const arr = [...(currentValue as string[])];
        const idx = arr.indexOf(opt.value);
        if (idx === -1) arr.push(opt.value);
        else arr.splice(idx, 1);
        if (!isControlled) setInternalValue(arr);
        onChange?.(arr);
      } else {
        if (!isControlled) setInternalValue(opt.value);
        onChange?.(opt.value);
        setOpen(false);
        setSearch('');
      }
    };

    const isSelected = (optValue: string) =>
      multiple ? (currentValue as string[]).includes(optValue) : currentValue === optValue;

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, filteredOptions.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && highlightedIndex >= 0) {
        e.preventDefault();
        handleSelect(filteredOptions[highlightedIndex]);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    const displayText = multiple
      ? selectedLabels.length > 0
        ? `已�?${selectedLabels.length} 项`
        : placeholder
      : selectedLabels || placeholder;

    return (
      <div ref={ref} className={cx('relative inline-flex w-full', className)} onKeyDown={handleKeyDown}>
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          onClick={() => !disabled && setOpen(!open)}
          className={cx(
            'flex items-center justify-between w-full rounded-md border cursor-pointer transition-all duration-200',
            'bg-white px-3',
            disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed' : 'border-[#d9d9d9] hover:border-[#4096ff]',
            open ? 'border-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.1)]' : ''
          )}
          style={{ minHeight: '38px' }}
        >
          <span className={cx('text-[14px] truncate', selectedLabels ? 'text-[#262626]' : 'text-[#bfbfbf]')}>
            {displayText as string}
          </span>
          <svg className={cx('shrink-0 transition-transform', open ? 'rotate-180' : '')} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4 6 8.825z"/>
          </svg>
        </div>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md border border-[#d9d9d9] shadow-lg z-[1000] max-h-60 overflow-auto">
            {searchable && (
              <div className="p-2 border-b border-[#f0f0f0]">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜索..."
                  className="w-full px-2 py-1 text-sm border border-[#d9d9d9] rounded focus:outline-none focus:border-[#1677ff]"
                  autoFocus
                />
              </div>
            )}
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-[#8c8c8c] text-sm">无匹配选项</div>
            ) : (
              filteredOptions.map((opt, idx) => (
                <div
                  key={opt.value}
                  onClick={() => !opt.disabled && handleSelect(opt)}
                  className={cx(
                    'px-3 py-2 text-[14px] cursor-pointer flex items-center justify-between',
                    opt.disabled ? 'text-[#bfbfbf] cursor-not-allowed' : 'text-[#262626] hover:bg-[#f5f5f5]',
                    isSelected(opt.value) ? 'bg-[#e6f4ff] text-[#1677ff]' : '',
                    highlightedIndex === idx ? 'bg-[#f5f5f5]' : ''
                  )}
                >
                  <span>{opt.label}</span>
                  {isSelected(opt.value) && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#1677ff">
                      <path d="M10.28 2.28L4.5 8.063 1.72 5.28a.75.75 0 00-1.06 1.06l3.25 3.25a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06z"/>
                    </svg>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
