/**
 * Skeleton 骨架�? *
 * @example React
 * import { Skeleton } from '@yaomingshan/react';
 * <Skeleton loading={true} type="list" rows={3}>
 *   <div>真实内容</div>
 * </Skeleton>
 *
 * @example Vue
 * <Skeleton :loading="true" type="list" :rows="3">
 *   <div>真实内容</div>
 * </Skeleton>
 */

import React, { useMemo } from 'react';
import { type SkeletonProps, cx } from '@yaomingshan/core';

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ loading = true, type = 'text', rows = 3, animated = true, width, height, className, children, ...rest }, ref) => {
    const skeletonClass = useMemo(() => {
      const base = cx(
        'bg-[#f0f0f0] rounded',
        animated ? 'animate-pulse' : ''
      );
      return base;
    }, [animated]);

    const renderContent = () => {
      if (type === 'text') {
        return (
          <div className="space-y-2 w-full">
            {Array.from({ length: rows }).map((_, i) => (
              <div
                key={i}
                className={cx(skeletonClass)}
                style={{
                  width: i === rows - 1 ? '60%' : '100%',
                  height: height ?? 16,
                }}
              />
            ))}
          </div>
        );
      }
      if (type === 'circle') {
        return <div className={cx(skeletonClass, 'rounded-full')} style={{ width: (width as number) || 40, height: (height as number) || 40 }} />;
      }
      if (type === 'rect') {
        return <div className={cx(skeletonClass)} style={{ width: width ?? '100%', height: height ?? 100 }} />;
      }
      if (type === 'card') {
        return (
          <div className="space-y-3 w-full">
            <div className={cx(skeletonClass, 'w-full h-40 rounded-lg')} />
            <div className={cx(skeletonClass, 'w-3/4 h-4')} />
            <div className={cx(skeletonClass, 'w-1/2 h-3')} />
          </div>
        );
      }
      if (type === 'list') {
        return (
          <div className="space-y-4 w-full">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={cx(skeletonClass, 'w-10 h-10 rounded-full shrink-0')} />
                <div className="flex-1 space-y-2">
                  <div className={cx(skeletonClass, 'w-1/2 h-4')} />
                  <div className={cx(skeletonClass, 'w-1/3 h-3')} />
                </div>
              </div>
            ))}
          </div>
        );
      }
      return null;
    };

    if (!loading) return <>{children}</>;

    return (
      <div ref={ref} className={cx(className)} {...rest}>
        {renderContent()}
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';
