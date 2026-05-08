/**
 * Statistic 统计数值
 *
 * @example React
 * import { Statistic } from '@aui/react';
 * <Statistic title="用户总数" value={1024} prefix="↑" suffix="人" />
 *
 * @example Vue
 * <Statistic title="用户总数" :value="1024" prefix="↑" suffix="人" />
 */

import React, { useMemo } from 'react';
import { type StatisticProps, cx } from '@aui/core';

export const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  ({ title, value, prefix, suffix, valueStyle, precision, formatter, className, ...rest }, ref) => {
    const displayValue = useMemo(() => {
      if (formatter) return formatter(typeof value === 'number' ? value : parseFloat(String(value)));
      if (typeof value === 'number' && precision !== undefined) {
        return value.toFixed(precision);
      }
      return String(value ?? '');
    }, [value, precision, formatter]);

    return (
      <div ref={ref} className={cx('flex flex-col', className)} {...rest}>
        {title && <span className="text-[14px] text-[#8c8c8c] mb-1">{title}</span>}
        <div className="flex items-baseline gap-1">
          {prefix && <span className="text-[24px] text-[#262626]">{prefix}</span>}
          <span className="text-[24px] font-bold text-[#262626]" style={valueStyle}>
            {displayValue}
          </span>
          {suffix && <span className="text-[14px] text-[#8c8c8c]">{suffix}</span>}
        </div>
      </div>
    );
  }
);

Statistic.displayName = 'Statistic';
