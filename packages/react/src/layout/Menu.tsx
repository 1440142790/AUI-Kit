/**
 * Menu 菜单
 *
 * @example React
 * import { Menu } from '@aui/react';
 * const items = [{ key: 'home', label: '首页' }, { key: 'user', label: '用户', children: [...] }];
 * <Menu items={items} mode="inline" activeKey={active} onChange={setActive} />
 */

import React, { useState } from 'react';
import { type MenuProps, type MenuItem, cx } from '@aui/core';

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ items = [], mode = 'inline', collapsed = false, activeKey, onChange, className, ...rest }, ref) => {
    const [internalActive, setInternalActive] = useState(items[0]?.key ?? '');
    const currentActive = activeKey !== undefined ? activeKey : internalActive;

    const handleClick = (key: string) => {
      if (activeKey === undefined) setInternalActive(key);
      onChange?.(key);
    };

    const renderItem = (item: MenuItem, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isActive = currentActive === item.key;
      const isParentActive = hasChildren && item.children!.some((c) => c.key === currentActive);

      return (
        <div key={item.key}>
          <button
            onClick={() => !hasChildren && handleClick(item.key)}
            disabled={item.disabled}
            className={cx(
              'w-full flex items-center gap-2 px-3 py-2 text-[14px] transition-colors rounded-md',
              mode === 'horizontal' ? 'justify-center' : 'justify-start',
              isActive ? 'bg-[#e6f4ff] text-[#1677ff]' : 'text-[#595959] hover:bg-[#f5f5f5] hover:text-[#262626]',
              item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
              collapsed && mode === 'inline' ? 'justify-center px-2' : '',
            )}
          >
            {item.icon && <span className="shrink-0">{item.icon}</span>}
            {(!collapsed || mode !== 'inline') && <span className="truncate">{item.label}</span>}
          </button>
          {hasChildren && (!collapsed || mode !== 'inline') && (
            <div className={cx('ml-4', mode === 'horizontal' ? 'absolute top-full left-0 mt-1 min-w-[160px] bg-white rounded-lg shadow-lg border border-[#f0f0f0] py-1' : '')}>
              {item.children!.map((child) => renderItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    const containerClass = cx(
      mode === 'horizontal' ? 'flex items-center gap-1' : '',
      mode === 'inline' ? 'flex flex-col gap-1' : '',
      mode === 'vertical' ? 'flex flex-col gap-1 border-r border-[#f0f0f0] pr-4' : '',
      className
    );

    return (
      <div ref={ref} className={containerClass} {...rest}>
        {items.map((item) => renderItem(item))}
      </div>
    );
  }
);

Menu.displayName = 'Menu';
