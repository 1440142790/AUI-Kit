/**
 * Spin 加载�? *
 * @example React
 * import { Spin } from '@yaomingshan/react';
 * <Spin spinning={loading} tip="加载�?..">
 *   <div>内容</div>
 * </Spin>
 *
 * @example Vue
 * <Spin :spinning="loading" tip="加载�?..">
 *   <div>内容</div>
 * </Spin>
 */

import React, { useMemo } from 'react';
import { type SpinProps, type Size, cx } from '@yaomingshan/core';

const spinSizeMap: Record<Size, string> = {
  xs:  'w-4 h-4 border-[2px]',
  sm:  'w-6 h-6 border-[2px]',
  md:  'w-10 h-10 border-[3px]',
  lg:  'w-14 h-14 border-[4px]',
  xl:  'w-20 h-20 border-[5px]',
};

export const Spin = React.forwardRef<HTMLDivElement, SpinProps>(
  ({ spinning = true, tip, size = 'md', fullscreen = false, indicator, className, children, ...rest }, ref) => {
    const spinnerClass = useMemo(() => {
      return cx(
        'rounded-full border-[#d9d9d9] border-t-[#1677ff]',
        spinSizeMap[size]
      );
    }, [size]);

    if (fullscreen) {
      if (!spinning) return null;
      return (
        <div className="fixed inset-0 z-[1500] flex items-center justify-center bg-[rgba(255,255,255,0.8)]">
          <div className="flex flex-col items-center gap-3">
            <div className={cx(spinnerClass, 'animate-spin')} />
            {tip && <span className="text-[14px] text-[#595959]">{tip}</span>}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cx('relative inline-flex', className)} {...rest}>
        <div className={cx(spinning ? 'opacity-50 pointer-events-none' : '', 'transition-opacity')}>
          {children}
        </div>
        {spinning && !children && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className={cx(spinnerClass, 'animate-spin')} />
              {tip && <span className="text-[12px] text-[#8c8c8c]">{tip}</span>}
            </div>
          </div>
        )}
        {spinning && children && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60">
            <div className="flex flex-col items-center gap-2">
              <div className={cx(spinnerClass, 'animate-spin')} />
              {tip && <span className="text-[12px] text-[#8c8c8c]">{tip}</span>}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Spin.displayName = 'Spin';
