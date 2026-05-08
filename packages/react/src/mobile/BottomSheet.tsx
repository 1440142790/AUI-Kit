/**
 * BottomSheet 底部抽屉（移动端）
 *
 * @example React
 * import { BottomSheet } from '@aui/react';
 * const actions = [{ key: 'save', text: '保存', onClick: handleSave }];
 * <BottomSheet visible={show} actions={actions} title="操作" onClose={close} />
 *
 * @example Vue
 * <BottomSheet :visible="show" :actions="actions" title="操作" @close="close" />
 */

import React, { useEffect } from 'react';
import { type BottomSheetProps, type BottomSheetAction, cx } from '@aui/core';
import { Button } from '../feedback/Button';

export const BottomSheet = React.forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ visible = false, height = 300, actions = [], onClose, title, draggable = true, children, className, ...rest }, ref) => {
    useEffect(() => {
      document.body.style.overflow = visible ? 'hidden' : '';
      return () => { document.body.style.overflow = ''; };
    }, [visible]);

    if (!visible) return null;

    return (
      <div className="fixed inset-0 z-[1200] flex flex-col justify-end">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" onClick={onClose} />
        <div
          ref={ref}
          className={cx('relative bg-white rounded-t-2xl flex flex-col z-10 max-h-[85vh] transition-all duration-300', className)}
          style={{ height: typeof height === 'number' ? `${height}px` : height }}
          {...rest}
        >
          {/* 拖拽条 */}
          {draggable && (
            <div className="flex justify-center pt-3 pb-2 shrink-0">
              <div className="w-10 h-1 rounded-full bg-[#d9d9d9]" />
            </div>
          )}

          {title && (
            <div className="px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626] shrink-0">
              {title}
            </div>
          )}

          <div className="flex-1 overflow-auto px-4 py-3">
            {children}
          </div>

          {actions.length > 0 && (
            <div className="px-4 pb-8 pt-3 border-t border-[#f0f0f0] shrink-0">
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(actions.length, 3)}, 1fr)` }}>
                {actions.map((action) => (
                  <Button
                    key={action.key}
                    type={action.danger ? 'primary' : 'default'}
                    className={action.danger ? '!bg-[#ff4d4f] !text-white' : ''}
                    onClick={() => { action.onClick?.(); onClose?.(); }}
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';
