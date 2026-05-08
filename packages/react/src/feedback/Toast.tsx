/**
 * Toast 轻提示
 *
 * @fileoverview 命令式调用的全局 Toast 服务
 *
 * @example React
 * import { Toast } from '@aui/react';
 * Toast.show({ content: '保存成功', type: 'success' });
 * Toast.success('保存成功！');
 * Toast.error('网络错误');
 * Toast.loading('提交中...');
 *
 * @example Vue
 * import { Toast } from '@aui/react';
 * Toast.success('保存成功！');
 */

import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import type { ToastOptions } from '@aui/core';
import { cx } from '@aui/core';

// ============================================================
// Toast Root Container（单例）
// ============================================================

let toastContainer: HTMLDivElement | null = null;
let toastRoot: ReturnType<typeof createRoot> | null = null;

function getOrCreateToastContainer(): HTMLDivElement {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'aui-toast-root';
    document.body.appendChild(toastContainer);
    toastRoot = createRoot(toastContainer);
  }
  return toastContainer;
}

// ============================================================
// Icon SVGs
// ============================================================

const icons = {
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#52c41a"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#ff4d4f"/>
      <path d="M7.5 7.5l5 5m0-5l-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L1.5 17h17L10 2z" fill="#faad14"/>
      <path d="M10 8v3m0 2.5v.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#1677ff"/>
      <path d="M10 9v5m0-7.5v.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  loading: (
    <svg className="animate-spin" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="10" cy="10" r="8" stroke="#1677ff" strokeWidth="3"/>
      <path className="opacity-75" fill="#1677ff" d="M4 10a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  ),
};

// ============================================================
// Toast Container Component
// ============================================================

interface ToastItem {
  id: number;
  content: React.ReactNode;
  type: 'success' | 'error' | 'warning' | 'info' | 'loading';
  duration: number;
  onClose?: () => void;
}

function ToastContainer({ list }: { list: ToastItem[] }) {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[1500] flex flex-col items-center gap-2 pointer-events-none">
      {list.map((toast) => (
        <div
          key={toast.id}
          className={cx(
            'flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg pointer-events-auto',
            'min-w-[120px] max-w-[300px]',
            'animate-[fadeInDown_0.3s_ease-out]'
          )}
          style={{ animation: 'fadeInDown 0.3s ease-out', background: '#1f1f1f', color: '#fff' }}
        >
          {icons[toast.type]}
          <span className="text-[14px]">{toast.content}</span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Toast Service
// ============================================================

let toastList: ToastItem[] = [];
let timerIds: Map<number, ReturnType<typeof setTimeout>> = new Map();

function renderToast() {
  if (toastRoot) {
    toastRoot.render(<ToastContainer list={toastList} />);
  }
}

function scheduleRemove(id: number, duration: number, onClose?: () => void) {
  if (duration > 0) {
    const timer = setTimeout(() => {
      toastList = toastList.filter((t) => t.id !== id);
      timerIds.delete(id);
      onClose?.();
      renderToast();
    }, duration);
    timerIds.set(id, timer);
  }
}

export const Toast = {
  show(options: ToastOptions) {
    const id = Date.now() + Math.random();
    const item: ToastItem = {
      id,
      content: options.content ?? '',
      type: options.type ?? 'info',
      duration: options.duration ?? 2000,
      onClose: options.onClose,
    };

    getOrCreateToastContainer();
    toastList = [...toastList, item];
    renderToast();
    scheduleRemove(id, item.duration, item.onClose);
  },

  success(content: React.ReactNode, duration = 2000) {
    this.show({ content, type: 'success', duration });
  },

  error(content: React.ReactNode, duration = 3000) {
    this.show({ content, type: 'error', duration });
  },

  warning(content: React.ReactNode, duration = 2500) {
    this.show({ content, type: 'warning', duration });
  },

  info(content: React.ReactNode, duration = 2000) {
    this.show({ content, type: 'info', duration });
  },

  loading(content: React.ReactNode) {
    this.show({ content, type: 'loading', duration: 0 });
  },

  hide() {
    // 清除所有定时器
    timerIds.forEach((timer) => clearTimeout(timer));
    timerIds.clear();
    toastList = [];
    renderToast();
  },
};
