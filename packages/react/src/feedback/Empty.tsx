/**
 * Empty 空状�? *
 * @example React
 * import { Empty } from '@yaomingshan/react';
 * <Empty description="暂无数据" />
 * <Empty image="simple" description="暂无内容" />
 *
 * @example Vue
 * <Empty description="暂无数据" />
 */

import React, { useMemo } from 'react';
import { type EmptyProps, cx } from '@yaomingshan/core';

const SimpleSVG = () => (
  <svg width="64" height="40" viewBox="0 0 64 40" fill="none">
    <path d="M8 8h48v24H8z" stroke="#d9d9d9" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M24 20h16M32 14v12" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ description = '暂无数据', image = 'default', imageSize, className, ...rest }, ref) => {
    const content = useMemo(() => {
      if (image === 'simple') return <SimpleSVG />;
      if (typeof image === 'string') return null;
      if (image) return image;
      return <SimpleSVG />;
    }, [image]);

    return (
      <div
        ref={ref}
        className={cx('flex flex-col items-center justify-center py-12 px-4', className)}
        {...rest}
      >
        <div style={imageSize ? { width: imageSize, height: imageSize } : {}} className="mb-4 opacity-60">
          {content}
        </div>
        {description && (
          <span className="text-[14px] text-[#8c8c8c]">{description}</span>
        )}
      </div>
    );
  }
);

Empty.displayName = 'Empty';
