/**
 * Descriptions 描述列表
 *
 * @example React
 * import { Descriptions } from '@aui/react';
 * const items = [
 *   { key: 'name', label: '姓名', value: '张三' },
 *   { key: 'email', label: '邮箱', value: 'zhang@example.com' },
 * ];
 * <Descriptions items={items} column={2} bordered />
 */

import React, { useMemo } from 'react';
import { type DescriptionsProps, cx } from '@aui/core';

export const Descriptions = React.forwardRef<HTMLDivElement, DescriptionsProps>(
  ({ items = [], column = 3, bordered = false, labelWidth, className, ...rest }, ref) => {
    const groupedItems = useMemo(() => {
      const groups: typeof items[] = [];
      for (let i = 0; i < items.length; i += column) {
        groups.push(items.slice(i, i + column));
      }
      return groups;
    }, [items, column]);

    return (
      <div ref={ref} className={cx('w-full', className)} {...rest}>
        {groupedItems.map((group, gi) => (
          <div key={gi} className={cx('flex', bordered ? 'border border-[#f0f0f0] rounded-lg overflow-hidden mb-3' : 'mb-2')}>
            {group.map((item, ii) => (
              <React.Fragment key={item.key}>
                <div
                  className={cx(
                    'px-4 py-3 text-[14px] bg-[#fafafa] text-[#8c8c8c] shrink-0',
                    bordered ? 'border-r border-[#f0f0f0]' : 'w-auto',
                  )}
                  style={labelWidth ? { width: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth } : {}}
                >
                  {item.label}
                </div>
                <div
                  className={cx('px-4 py-3 text-[14px] text-[#262626] flex-1', bordered ? 'border-r border-[#f0f0f0] last:border-r-0' : '')}
                  style={{ span: item.span }}
                >
                  {item.value ?? '-'}
                </div>
              </React.Fragment>
            ))}
            {group.length < column && Array.from({ length: column - group.length }).map((_, i) => (
              <React.Fragment key={`empty-${i}`}>
                <div className={cx('px-4 py-3 bg-[#fafafa]', bordered ? 'border-r border-[#f0f0f0]' : 'shrink-0 w-auto')} style={labelWidth ? { width: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth } : {}} />
                <div className={cx('px-4 py-3 flex-1', bordered ? 'border-r border-[#f0f0f0] last:border-r-0' : '')} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

Descriptions.displayName = 'Descriptions';
