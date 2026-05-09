/**
 * Tag 标签
 *
 * @example React
 * import { Tag } from '@yaomingshan/react';
 * <Tag color="success">已完�?/Tag>
 * <Tag color="#ff6b6b" closable onClose={handleClose}>自定义颜�?/Tag>
 *
 * @example Vue
 * <Tag color="success">已完�?/Tag>
 * <Tag color="#ff6b6b" closable @close="handleClose">自定义颜�?/Tag>
 */

import React, { useMemo } from 'react';
import { type TagProps, type ColorType, cx } from '@yaomingshan/core';

const colorMap: Record<ColorType, string> = {
  primary: 'bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]',
  success:  'bg-[#f6ffed] text-[#52c41a] border-[#52c41a]',
  warning:  'bg-[#fffbe6] text-[#faad14] border-[#faad14]',
  danger:   'bg-[#fff2f0] text-[#ff4d4f] border-[#ff4d4f]',
  info:     'bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]',
  gray:     'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]',
};

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ color, closable, onClose, children, className, ...rest }, ref) => {
    const classes = useMemo(() => {
      const base = 'inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded font-medium border';
      if (!color) return cx(base, 'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]', className);
      if (Object.keys(colorMap).includes(color)) return cx(base, colorMap[color as ColorType], className);
      // 自定义颜色（hex�?      return cx(base, 'border', className);
    }, [color, className]);

    const textColor = useMemo(() => {
      if (!color || Object.keys(colorMap).includes(color)) return {};
      return { color: color as string, borderColor: color as string };
    }, [color]);

    return (
      <span ref={ref} className={classes} style={textColor} {...rest}>
        {children}
        {closable && (
          <button
            onClick={(e) => { e.stopPropagation(); onClose?.(e); }}
            className="ml-1 hover:opacity-70 transition-opacity"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M5 0a5 5 0 100 10A5 5 0 005 0zm2 7L6 5l1 1 1-1-1-1-1 1-1-1 1-1 1 1 1 1z"/>
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
