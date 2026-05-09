/**
 * Avatar Â§¥ÂÉè
 *
 * @example React
 * import { Avatar } from '@yaomingshan/react';
 * <Avatar src="https://example.com/avatar.jpg" size="lg" />
 * <Avatar text="Êù? size={64} color="primary" />
 *
 * @example Vue
 * <Avatar src="https://example.com/avatar.jpg" size="lg" />
 * <Avatar text="Êù? :size="64" color="primary" />
 */

import React, { useState } from 'react';
import { type AvatarProps, type ColorType, type Size, cx } from '@yaomingshan/core';

const sizeMap: Record<Size, string> = {
  xs:  'w-6 h-6 text-xs',
  sm:  'w-8 h-8 text-sm',
  md:  'w-10 h-10 text-base',
  lg:  'w-12 h-12 text-lg',
  xl:  'w-14 h-14 text-xl',
};

const colorMap: Record<ColorType, string> = {
  primary: 'bg-[#1677ff]',
  success: 'bg-[#52c41a]',
  warning: 'bg-[#faad14]',
  danger:  'bg-[#ff4d4f]',
  info:    'bg-[#1677ff]',
  gray:    'bg-[#8c8c8c]',
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, size = 'md', shape = 'circle', text, color = 'primary', className, ...rest }, ref) => {
    const [imgError, setImgError] = useState(false);
    const showText = !src || imgError;

    const sizeClass = typeof size === 'number' ? '' : sizeMap[size as Size];
    const sizeStyle = typeof size === 'number' ? { width: size, height: size } : {};
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

    const bgClass = typeof color === 'string' && !Object.keys(colorMap).includes(color)
      ? '' : colorMap[color as ColorType] || colorMap.primary;

    return (
      <div
        ref={ref}
        className={cx(
          'flex items-center justify-center overflow-hidden font-medium text-white shrink-0 select-none',
          sizeClass, shapeClass, !showText || text ? bgClass : '', className
        )}
        style={sizeStyle}
        {...rest}
      >
        {showText ? (
          <span>{text?.[0]?.toUpperCase() ?? '?'}</span>
        ) : (
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
