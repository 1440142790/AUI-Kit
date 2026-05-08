/**
 * Tabs 标签页
 *
 * @example React
 * import { Tabs } from '@aui/react';
 * const items = [
 *   { key: 'tab1', label: 'Tab 1', children: <div>内容1</div> },
 *   { key: 'tab2', label: 'Tab 2', children: <div>内容2</div> },
 * ];
 * <Tabs items={items} activeKey={activeTab} onChange={setActiveTab} />
 *
 * @example Vue
 * <Tabs :items="tabItems" :activeKey="activeTab" @change="setActiveTab" />
 */

import React, { useState } from 'react';
import { type TabsProps, cx } from '@aui/core';

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ items = [], activeKey, onChange, type = 'line', tabPosition = 'top', className, ...rest }, ref) => {
    const [internalActive, setInternalActive] = useState(items[0]?.key ?? '');
    const currentActive = activeKey !== undefined ? activeKey : internalActive;

    const handleTabClick = (key: string) => {
      if (activeKey === undefined) setInternalActive(key);
      onChange?.(key);
    };

    return (
      <div ref={ref} className={cx('flex', tabPosition === 'left' || tabPosition === 'right' ? 'flex-row' : 'flex-col', className)} {...rest}>
        <div className={cx(
          'flex shrink-0 border-b border-[#f0f0f0]',
          tabPosition === 'left' || tabPosition === 'right' ? 'flex-col border-b-0 border-r border-[#f0f0f0] min-w-[100px]' : '',
        )}>
          {items.map((item) => {
            const isActive = currentActive === item.key;
            return (
              <button
                key={item.key}
                onClick={() => !item.disabled && handleTabClick(item.key)}
                className={cx(
                  'px-4 py-2.5 text-[14px] transition-colors relative whitespace-nowrap',
                  'disabled:text-[#bfbfbf] disabled:cursor-not-allowed',
                  tabPosition === 'left' || tabPosition === 'right' ? 'text-left justify-start' : '',
                  type === 'line' ? isActive
                    ? 'text-[#1677ff] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1677ff]'
                    : 'text-[#595959] hover:text-[#262626]'
                    : '',
                  type === 'card' ? isActive
                    ? 'bg-white text-[#1677ff] rounded-t-lg -mb-px border-t border-l border-r border-white z-10'
                    : 'text-[#595959] hover:text-[#262626]'
                    : '',
                  type === 'segment' ? isActive
                    ? 'bg-white text-[#1677ff] rounded-md shadow-sm'
                    : 'text-[#595959] hover:text-[#262626]'
                    : '',
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="flex-1 min-h-0 overflow-auto">
          {items.map((item) => (
            <div key={item.key} className={cx('h-full', currentActive !== item.key ? 'hidden' : '')}>
              {item.children}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
