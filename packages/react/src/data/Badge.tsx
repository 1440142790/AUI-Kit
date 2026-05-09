/**
 * Badge 徽标
 *
 * @example React
 * import { Badge } from '@yaomingshan/react';
 * <Badge count={5}><Icon /></Badge>
 * <Badge dot status="success" />
 *
 * @example Vue
 * <Badge :count="5"><Icon /></Badge>
 */

import React, { useMemo } from 'react';
import { type BadgeProps, cx } from '@yaomingshan/core';

const statusColor = {
  success: 'bg-[#52c41a]',
  warning: 'bg-[#faad14]',
  error:   'bg-[#ff4d4f]',
  default: 'bg-[#8c8c8c]',
  processing: 'bg-[#1677ff]',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ count, dot = false, overflowCount = 99, status, text, className, children, ...rest }, ref) => {
    const badgeClass = useMemo(() => {
      if (dot) return cx('w-2 h-2 rounded-full', statusColor[status ?? 'default'] ?? statusColor.default);
      return cx(
        'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full',
        'text-[10px] font-medium text-white',
        statusColor[status ?? 'default'] ?? 'bg-[#ff4d4f]'
      );
    }, [dot, status]);

    const displayCount = useMemo(() => {
      if (dot) return null;
      if (typeof count !== 'number') return null;
      return count > overflowCount ? `${overflowCount}+` : count;
    }, [count, dot, overflowCount]);

    return (
      <span ref={ref} className={cx('relative inline-flex', className)} {...rest}>
        {children}
        {displayCount !== null && (
          <span className={cx('absolute -top-1 -right-1', badgeClass)}>
            {displayCount > 0 ? displayCount : null}
          </span>
        )}
        {dot && (
          <span className={cx('absolute -top-1 -right-1', badgeClass)} />
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
