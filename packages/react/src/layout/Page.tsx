/**
 * Page 页面容器
 *
 * @fileoverview 带导航栏的页面容器，自动处理平台适配
 *
 * @example React
 * import { Page } from '@aui/react';
 *
 * <Page title="用户详情" onBack={() => navigate(-1)}>
 *   <div>页面内容</div>
 * </Page>
 *
 * @example Vue
 * <Page title="用户详情" @back="navigateBack">
 *   <div>页面内容</div>
 * </Page>
 */

import React, { useMemo } from 'react';
import { type PageProps, cx } from '@aui/core';

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  (
    {
      title,
      showNav = true,
      onBack,
      background = 'white',
      scrollable = true,
      className,
      children,
    },
    ref
  ) => {
    const bgClass = useMemo(() => {
      const map = { white: 'bg-white', gray: 'bg-[#fafafa]', transparent: 'bg-transparent' };
      return map[background];
    }, [background]);

    return (
      <div ref={ref} className={cx('flex flex-col h-screen w-full', bgClass, className)}>
        {showNav && (
          <div className="flex items-center h-12 px-4 border-b border-[#f0f0f0] shrink-0 bg-white">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 -ml-2 rounded-md hover:bg-[#f5f5f5] transition-colors mr-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            )}
            <span className="text-[16px] font-semibold text-[#262626] truncate">{title}</span>
          </div>
        )}
        <div className={cx('flex-1 min-h-0', scrollable ? 'overflow-auto' : '')}>
          {children}
        </div>
      </div>
    );
  }
);

Page.displayName = 'Page';
