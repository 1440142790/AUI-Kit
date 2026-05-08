/**
 * Upload 上传
 *
 * @example React
 * import { Upload } from '@aui/react';
 * <Upload action="/api/upload" listType="picture" maxCount={3} />
 */

import React, { useState, useRef } from 'react';
import { type UploadProps, type UploadFile, cx } from '@aui/core';

export const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  ({ action, listType = 'text', maxCount, fileList = [], defaultFileList = [], multiple = false, draggable = false, accept, onChange, beforeUpload, className, ...rest }, ref) => {
    const [internalList, setInternalList] = useState<UploadFile[]>(defaultFileList);
    const isControlled = fileList.length > 0;
    const currentList = isControlled ? fileList : internalList;
    const inputRef = useRef<HTMLInputElement>(null);

    const updateList = (newList: UploadFile[]) => {
      if (!isControlled) setInternalList(newList);
      onChange?.(newList);
    };

    const handleFiles = async (files: FileList) => {
      const arr = Array.from(files);
      const newFiles: UploadFile[] = [];

      for (const file of arr) {
        if (maxCount && currentList.length + newFiles.length >= maxCount) break;
        const uid = `file-${Date.now()}-${Math.random()}`;
        const item: UploadFile = { uid, name: file.name, status: 'uploading' };
        newFiles.push(item);
        updateList([...currentList, ...newFiles]);

        if (beforeUpload) {
          const result = await beforeUpload(file);
          if (result === false) {
            updateList(currentList.filter((f) => f.uid !== uid));
            continue;
          }
        }

        if (action) {
          try {
            // 模拟上传
            await new Promise((r) => setTimeout(r, 1000));
            updateList([
              ...currentList,
              ...newFiles.map((f) => f.uid === uid ? { ...f, status: 'done' as const, url: URL.createObjectURL(file) } : f),
            ]);
          } catch {
            updateList(currentList.map((f) => f.uid === uid ? { ...f, status: 'error' as const } : f));
          }
        } else {
          updateList(currentList.map((f) => f.uid === uid ? { ...f, status: 'done' as const, url: URL.createObjectURL(file) } : f));
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) handleFiles(e.target.files);
      e.target.value = '';
    };

    const handleRemove = (uid: string) => {
      updateList(currentList.filter((f) => f.uid !== uid));
    };

    return (
      <div ref={ref} className={cx('flex flex-col gap-2', className)} {...rest}>
        {/* 上传区域 */}
        {(!maxCount || currentList.length < maxCount) && (
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); }}
            onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files) handleFiles(e.dataTransfer.files); }}
            className={cx(
              'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
              listType === 'picture-card'
                ? 'w-24 h-24 flex items-center justify-center'
                : 'w-full',
              draggable ? 'border-[#1677ff] bg-[#e6f4ff]' : 'border-[#d9d9d9] hover:border-[#4096ff] hover:bg-[#f5f5f5]'
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-[#8c8c8c]">
              <path d="M12 4v12m0-12L7 9m5 5l5-5M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[14px] text-[#8c8c8c]">点击上传</span>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          className="hidden"
        />

        {/* 文件列表 */}
        {currentList.length > 0 && (
          <div className={cx('flex gap-2', listType === 'picture' || listType === 'picture-card' ? 'flex-wrap' : 'flex-col')}>
            {currentList.map((file) => (
              <div
                key={file.uid}
                className={cx(
                  'flex items-center gap-2 p-2 rounded border border-[#f0f0f0]',
                  listType === 'picture-card' ? 'flex-col w-24' : ''
                )}
              >
                {file.url && (listType === 'picture' || listType === 'picture-card') && (
                  <img src={file.url} alt={file.name} className={cx('object-cover rounded', listType === 'picture-card' ? 'w-20 h-16' : 'w-10 h-10')} />
                )}
                {listType === 'picture-card' && (
                  <span className="text-[10px] text-[#8c8c8c] truncate w-full text-center">{file.name}</span>
                )}
                {listType === 'text' && (
                  <span className="text-[14px] text-[#262626] truncate flex-1">{file.name}</span>
                )}
                {file.status === 'uploading' && (
                  <svg className="animate-spin w-4 h-4 text-[#1677ff]" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                )}
                {file.status === 'done' && (
                  <svg className="w-4 h-4 text-[#52c41a]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                )}
                {file.status === 'error' && (
                  <svg className="w-4 h-4 text-[#ff4d4f]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                  </svg>
                )}
                <button
                  type="button"
                  onClick={() => handleRemove(file.uid)}
                  className="text-[#8c8c8c] hover:text-[#ff4d4f] shrink-0"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm2 8L7 6.5 5.5 8 4.5 7l1.5-1.5L4.5 4l1-1 1.5 1.5L8.5 4l1 1-1.5 1.5L9.5 7z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Upload.displayName = 'Upload';
