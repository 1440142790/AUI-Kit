/**
 * PullRefresh 下拉刷新
 *
 * @example React
 * import { PullRefresh } from '@yaomingshan/react';
 * <PullRefresh onRefresh={handleRefresh} refreshing={refreshing}>
 *   <List dataSource={data} />
 * </PullRefresh>
 */

import React, { useState, useRef } from 'react';
import { type PullRefreshProps, cx } from '@yaomingshan/core';

export const PullRefresh = React.forwardRef<HTMLDivElement, PullRefreshProps>(
  ({ onRefresh, refreshing = false, pullingText = '下拉刷新', refreshingText = '刷新�?..', completedText = '刷新完成', children, className, ...rest }, ref) => {
    const [pulling, setPulling] = useState(false);
    const [pullDistance, setPullDistance] = useState(0);
    const startYRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
      if (refreshing) return;
      if (containerRef.current && containerRef.current.scrollTop === 0) {
        startYRef.current = e.touches[0].clientY;
        setPulling(true);
      }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!pulling || refreshing) return;
      const diff = e.touches[0].clientY - startYRef.current;
      if (diff > 0) {
        e.preventDefault();
        setPullDistance(Math.min(diff, 80));
      }
    };

    const handleTouchEnd = async () => {
      if (!pulling) return;
      setPulling(false);
      if (pullDistance > 50) {
        setPullDistance(0);
        await onRefresh?.();
      } else {
        setPullDistance(0);
      }
    };

    return (
      <div
        ref={ref}
        className={cx('overflow-auto', className)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...rest}
      >
        {/* 刷新提示 */}
        <div
          className="flex items-center justify-center h-12 transition-all duration-200"
          style={{ height: pullDistance > 0 ? 60 : 0 }}
        >
          {refreshing ? (
            <div className="flex items-center gap-2 text-[14px] text-[#8c8c8c]">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {refreshingText}
            </div>
          ) : (
            <span className="text-[14px] text-[#8c8c8c]">{pullingText}</span>
          )}
        </div>

        <div ref={containerRef} className="min-h-0">
          {children}
        </div>
      </div>
    );
  }
);

PullRefresh.displayName = 'PullRefresh';
