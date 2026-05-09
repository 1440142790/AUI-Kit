/**
 * IndexBar 索引列表（移动端�? *
 * @example React
 * import { IndexBar } from '@yaomingshan/react';
 * const data = [{ index: 'A', items: [{ key: '1', title: '张三' }] }];
 * <IndexBar data={data} onSelect={(item) => console.log(item)} />
 */

import React, { useState } from 'react';
import { type IndexBarProps, type IndexBarItem, cx } from '@yaomingshan/core';

export const IndexBar = React.forwardRef<HTMLDivElement, IndexBarProps>(
  ({ data = [], onSelect, showAnchor = true, indexes, className, ...rest }, ref) => {
    const [activeIndex, setActiveIndex] = useState('');
    const allIndexes = indexes ?? data.map((d) => d.index);

    const handleSelect = (item: IndexBarItem['items'][0]) => {
      onSelect?.(item as any);
      setActiveIndex(item.title);
    };

    return (
      <div ref={ref} className={cx('flex h-full', className)} {...rest}>
        {/* 主内�?*/}
        <div className="flex-1 overflow-auto px-4">
          {data.map((group) => (
            <div key={group.index} className="mb-4">
              <div className="sticky top-0 bg-white py-2 text-[12px] font-medium text-[#8c8c8c] z-10">
                {group.index}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <div
                    key={item.key}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                  >
                    {item.avatar && (
                      <img src={item.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                    )}
                    <div>
                      <div className="text-[14px] text-[#262626]">{item.title}</div>
                      {item.description && (
                        <div className="text-[12px] text-[#8c8c8c]">{item.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 侧边索引 */}
        {showAnchor && (
          <div className="flex flex-col items-center justify-center gap-1 px-1 py-4">
            {allIndexes.map((idx) => (
              <button
                key={idx}
                className={cx(
                  'w-4 h-4 text-[10px] font-medium rounded flex items-center justify-center transition-colors',
                  activeIndex === idx ? 'bg-[#1677ff] text-white' : 'text-[#8c8c8c] hover:text-[#1677ff]'
                )}
                onClick={() => {
                  const el = document.getElementById(`index-${idx}`);
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setActiveIndex(idx);
                }}
              >
                {idx}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

IndexBar.displayName = 'IndexBar';
