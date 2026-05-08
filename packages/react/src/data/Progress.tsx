/**
 * Progress 进度条
 *
 * @example React
 * import { Progress } from '@aui/react';
 * <Progress percent={80} status="active" />
 * <Progress percent={100} status="success" showText />
 * <Progress type="circle" percent={75} size={120} />
 *
 * @example Vue
 * <Progress :percent="80" status="active" />
 */

import React, { useMemo } from 'react';
import { type ProgressProps, cx } from '@aui/core';

const statusColor = {
  normal: 'bg-[#1677ff]',
  active: 'bg-[#1677ff]',
  success: 'bg-[#52c41a]',
  error: 'bg-[#ff4d4f]',
};

const statusClass = {
  normal: '',
  active: 'progress-active',
  success: '',
  error: '',
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ percent = 0, status = 'normal', type = 'line', showText = true, strokeWidth = 8, strokeColor, size = 'md', className }, ref) => {
    const displayPercent = Math.min(Math.max(percent, 0), 100);

    if (type === 'circle') {
      const r = 70;
      const circumference = 2 * Math.PI * r;
      const strokeDashoffset = circumference * (1 - displayPercent / 100);
      const sizeVal = typeof size === 'number' ? size : size === 'sm' ? 60 : size === 'lg' ? 160 : 120;

      return (
        <div ref={ref} className={cx('relative inline-flex items-center justify-center', className)} style={{ width: sizeVal, height: sizeVal }}>
          <svg width={sizeVal} height={sizeVal} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={r} fill="none" stroke="#f0f0f0" strokeWidth="8" />
            <circle
              cx="50" cy="50" r={r}
              fill="none"
              stroke={strokeColor ?? statusColor[status]}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dashoffset 0.3s' }}
            />
          </svg>
          {showText && (
            <span className="absolute text-[14px] font-medium text-[#262626]">
              {displayPercent}%
            </span>
          )}
        </div>
      );
    }

    return (
      <div ref={ref} className={cx('w-full', className)}>
        <div className="flex items-center gap-3">
          <div
            className={cx(
              'flex-1 rounded-full bg-[#f0f0f0] overflow-hidden',
            )}
            style={{ height: typeof strokeWidth === 'number' ? strokeWidth : 8 }}
          >
            <div
              className={cx('h-full rounded-full transition-all duration-300', statusColor[status])}
              style={{
                width: `${displayPercent}%`,
                backgroundColor: strokeColor,
              }}
            />
          </div>
          {showText && (
            <span className="text-[14px] font-medium text-[#262626] shrink-0 w-10 text-right">
              {displayPercent}%
            </span>
          )}
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
