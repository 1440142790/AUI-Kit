/**
 * Popconfirm 气泡确认框
 *
 * @example React
 * import { Popconfirm, Button } from '@aui/react';
 * <Popconfirm title="确定删除？" onConfirm={handleDelete}>
 *   <Button danger>删除</Button>
 * </Popconfirm>
 */

import React, { useState, useRef, useEffect } from 'react';
import { type PopconfirmProps, type Placement, cx } from '@aui/core';

const placementMap: Record<Placement, string> = {
  top:         'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom:      'top-full left-1/2 -translate-x-1/2 mt-2',
  left:        'right-full top-1/2 -translate-y-1/2 mr-2',
  right:       'left-full top-1/2 -translate-y-1/2 ml-2',
  topLeft:     'bottom-full left-0 mb-2',
  topRight:    'bottom-full right-0 mb-2',
  bottomLeft:  'top-full left-0 mt-2',
  bottomRight: 'top-full right-0 mt-2',
};

export const Popconfirm = React.forwardRef<HTMLDivElement, PopconfirmProps>(
  ({ title, description, onConfirm, onCancel, okText = '确定', cancelText = '取消', okType = 'primary', trigger = 'hover', placement = 'top', className, children, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!visible) return;
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setVisible(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [visible]);

    const handleConfirm = () => {
      onConfirm?.();
      setVisible(false);
    };

    const handleCancel = () => {
      onCancel?.();
      setVisible(false);
    };

    return (
      <div ref={ref} className={cx('relative inline-flex', className)} {...rest}>
        <div
          onClick={trigger === 'click' ? () => setVisible(!visible) : undefined}
          onMouseEnter={trigger === 'hover' ? () => setVisible(true) : undefined}
          onMouseLeave={trigger === 'hover' ? () => setVisible(false) : undefined}
        >
          {children}
        </div>

        {visible && (
          <div className={cx('absolute z-[1400] w-52 bg-white rounded-lg shadow-lg border border-[#f0f0f0] p-3', placementMap[placement])}>
            {title && <div className="text-[14px] font-medium text-[#262626] mb-1">{title}</div>}
            {description && <div className="text-[12px] text-[#8c8c8c] mb-3">{description}</div>}
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="px-3 py-1 text-xs rounded border border-[#d9d9d9] text-[#595959] hover:border-[#4096ff] hover:text-[#4096ff] transition-colors"
              >
                {cancelText}
              </button>
              <button
                onClick={handleConfirm}
                className={cx(
                  'px-3 py-1 text-xs rounded text-white transition-colors',
                  okType === 'primary' ? 'bg-[#1677ff] hover:bg-[#4096ff]' : 'bg-[#ff4d4f] hover:bg-[#ff7875]'
                )}
              >
                {okText}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Popconfirm.displayName = 'Popconfirm';
