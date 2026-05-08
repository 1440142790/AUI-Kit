/**
 * Drawer 抽屉
 *
 * @example React
 * import { Drawer } from '@aui/react';
 * <Drawer visible={open} placement="right" onClose={close} title="设置">
 *   <div>抽屉内容</div>
 * </Drawer>
 *
 * @example Vue
 * <Drawer :visible="open" placement="right" @close="close" title="设置">
 *   <div>抽屉内容</div>
 * </Drawer>
 */

import React, { useEffect } from 'react';
import { type DrawerProps, cx } from '@aui/core';

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ visible = false, placement = 'right', size = 378, onClose, showClose = true, title, children, mask = true, maskClosable = true, footer, className }, ref) => {
    useEffect(() => {
      document.body.style.overflow = visible ? 'hidden' : '';
      return () => { document.body.style.overflow = ''; };
    }, [visible]);

    if (!visible) return null;

    const sizeStyle = placement === 'left' || placement === 'right'
      ? { width: typeof size === 'number' ? `${size}px` : size, maxWidth: '90vw' }
      : { height: typeof size === 'number' ? `${size}px` : size, maxHeight: '90vh' };

    const placementClass = {
      right: 'right-0 top-0 h-full',
      left:  'left-0 top-0 h-full',
      top:   'top-0 left-0 w-full',
      bottom:'bottom-0 left-0 w-full',
    }[placement];

    return (
      <div className="fixed inset-0 z-[1200]">
        {mask && <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" onClick={maskClosable ? onClose : undefined} />}
        <div
          ref={ref}
          className={cx(
            'absolute bg-white shadow-xl flex flex-col transition-transform duration-300',
            placementClass,
            className
          )}
          style={sizeStyle}
        >
          {(title || showClose) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] shrink-0">
              <span className="text-[16px] font-semibold text-[#262626]">{title}</span>
              {showClose && (
                <button onClick={onClose} className="text-[#8c8c8c] hover:text-[#595959] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/>
                  </svg>
                </button>
              )}
            </div>
          )}
          <div className="flex-1 overflow-auto px-6 py-4">{children}</div>
          {footer && <div className="px-6 py-4 border-t border-[#f0f0f0] shrink-0">{footer}</div>}
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';
