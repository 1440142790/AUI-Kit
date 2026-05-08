/**
 * Modal 对话框
 *
 * @fileoverview 模态对话框，支持自定义内容、确定/取消按钮
 * 移动端自动转为 BottomSheet
 *
 * @example React
 * import { Modal } from '@aui/react';
 *
 * <Modal
 *   visible={showModal}
 *   title="确认删除"
 *   onOk={handleOk}
 *   onCancel={() => setShowModal(false)}
 * >
 *   确定要删除这条数据吗？
 * </Modal>
 *
 * @example Vue
 * <Modal
 *   :visible="showModal"
 *   title="确认删除"
 *   @ok="handleOk"
 *   @cancel="showModal = false"
 * >
 *   确定要删除这条数据吗？
 * </Modal>
 */

import React, { useEffect, useMemo } from 'react';
import { type ModalProps, cx } from '@aui/core';
import { Button } from './Button';

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      visible = false,
      title,
      children,
      footer,
      onOk,
      onCancel,
      okText = '确定',
      cancelText = '取消',
      showOk = true,
      showCancel = true,
      width = 520,
      mask = true,
      maskClosable = true,
      closable = true,
      confirmLoading = false,
      bodyStyle,
      className,
      platform,
    },
    ref
  ) => {
    const isMobile = platform === 'mobile' || (typeof window !== 'undefined' && /android|iphone|ipad|ipod/i.test(navigator.userAgent));

    // 移动端自动渲染为底部抽屉
    if (isMobile) {
      return (
        <BottomSheetModal
          visible={visible}
          title={title}
          onClose={onCancel}
          footer={footer}
          showOk={showOk}
          showCancel={showCancel}
          okText={okText}
          cancelText={cancelText}
          onOk={onOk}
          confirmLoading={confirmLoading}
          bodyStyle={bodyStyle}
          className={className}
        />
      );
    }

    useEffect(() => {
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => { document.body.style.overflow = ''; };
    }, [visible]);

    const widthStyle = useMemo(() => ({
      maxWidth: typeof width === 'number' ? `${width}px` : width,
    }), [width]);

    if (!visible) return null;

    return (
      <div className="fixed inset-0 z-[1300] flex items-center justify-center p-4">
        {/* 遮罩 */}
        {mask && (
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.45)]"
            onClick={maskClosable ? onCancel : undefined}
          />
        )}

        {/* 内容 */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cx(
            'relative bg-white rounded-lg shadow-xl flex flex-col max-h-[85vh] z-10',
            'w-full',
            className
          )}
          style={widthStyle}
        >
          {/* 头部 */}
          {(title || closable) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
              <span className="text-[16px] font-semibold text-[#262626]">{title}</span>
              {closable && (
                <button
                  onClick={onCancel}
                  className="text-[#8c8c8c] hover:text-[#595959] transition-colors p-1"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/>
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* 身体 */}
          <div className="flex-1 overflow-auto px-6 py-4" style={bodyStyle}>
            {children}
          </div>

          {/* 底部 */}
          {footer !== undefined ? (
            footer
          ) : (
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#f0f0f0]">
              {showCancel && (
                <Button onClick={onCancel}>{cancelText}</Button>
              )}
              {showOk && (
                <Button type="primary" loading={confirmLoading} onClick={onOk}>
                  {okText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

// 移动端底部抽屉式 Modal
function BottomSheetModal(props: ModalProps) {
  const { visible, title, children, footer, onOk, onCancel, showOk, showCancel, okText, cancelText, onClose, confirmLoading, bodyStyle, className } = props;

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1300] flex flex-col justify-end">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" onClick={onClose} />
      <div className={cx('relative bg-white rounded-t-2xl max-h-[85vh] flex flex-col z-10', className)}>
        {/* 拖拽条 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-[#d9d9d9]" />
        </div>

        {title && (
          <div className="px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626]">
            {title}
          </div>
        )}

        <div className="flex-1 overflow-auto px-4 py-3" style={bodyStyle}>
          {children}
        </div>

        {footer !== undefined ? footer : (
          <div className="flex gap-3 px-4 py-4 border-t border-[#f0f0f0]">
            {showCancel && <Button className="flex-1" onClick={onCancel}>{cancelText}</Button>}
            {showOk && <Button type="primary" className="flex-1" loading={confirmLoading} onClick={onOk}>{okText}</Button>}
          </div>
        )}
      </div>
    </div>
  );
}
