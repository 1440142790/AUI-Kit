/**
 * Rate 评分
 *
 * @example React
 * import { Rate } from '@yaomingshan/react';
 * <Rate count={5} value={rating} onChange={setRating} allowHalf />
 */

import React, { useState, useMemo } from 'react';
import { type RateProps, cx } from '@yaomingshan/core';

const StarSVG = ({ filled }: { filled: boolean | 'half' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {filled === 'half' ? (
      <>
        <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z" fill="#d9d9d9"/>
        <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14V2z" fill="#faad14"/>
      </>
    ) : (
      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z" fill={filled ? '#faad14' : '#d9d9d9'}/>
    )}
  </svg>
);

export const Rate = React.forwardRef<HTMLDivElement, RateProps>(
  ({ count = 5, value, defaultValue = 0, allowHalf = false, readOnly = false, onChange, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? (value ?? 0) : internalValue;

    const handleClick = (score: number) => {
      if (readOnly) return;
      if (!isControlled) setInternalValue(score);
      onChange?.(score);
    };

    return (
      <div ref={ref} className={cx('flex items-center gap-1', className)} {...rest}>
        {Array.from({ length: count }).map((_, i) => {
          const score = i + 1;
          const filled = currentValue >= score ? true : currentValue >= score - 0.5 && allowHalf ? 'half' : false;
          return (
            <span
              key={i}
              className={cx('cursor-pointer transition-transform hover:scale-110', readOnly ? 'cursor-default hover:scale-100' : '')}
              onClick={() => handleClick(score)}
            >
              <StarSVG filled={filled} />
            </span>
          );
        })}
      </div>
    );
  }
);

Rate.displayName = 'Rate';
