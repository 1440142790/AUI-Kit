/**
 * Table 表格
 *
 * @example React
 * import { Table } from '@yaomingshan/react';
 * const columns = [{ key: 'name', title: '姓名', dataIndex: 'name' }];
 * <Table columns={columns} dataSource={data} bordered />
 *
 * @example Vue
 * <Table :columns="columns" :dataSource="data" bordered />
 */

import React, { useMemo } from 'react';
import { type TableProps, type TableColumn, cx } from '@yaomingshan/core';
import { Empty } from '../feedback/Empty';
import { Spin } from '../feedback/Spin';

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ columns = [], dataSource = [], bordered = false, striped = false, size = 'md', loading = false, emptyText, onRow, rowClassName, className, pagination, ...rest }, ref) => {
    const rowHeight = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11';
    const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

    return (
      <div className="w-full overflow-auto">
        <Spin spinning={loading}>
          <table
            ref={ref}
            className={cx(
              'w-full border-collapse',
              bordered ? 'border border-[#f0f0f0]' : '',
              className
            )}
            {...rest}
          >
            <thead>
              <tr className="bg-[#fafafa]">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={cx(
                      'text-left px-4 font-medium text-[#262626]',
                      textSize,
                      bordered ? 'border border-[#f0f0f0]' : 'border-b border-[#f0f0f0]',
                      col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : '',
                      col.fixed ? (col.fixed === 'left' ? 'sticky left-0 bg-[#fafafa] z-10' : 'sticky right-0 bg-[#fafafa] z-10') : '',
                    )}
                    style={{ width: col.width }}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataSource.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="p-0">
                    <Empty description={emptyText ?? '暂无数据'} />
                  </td>
                </tr>
              ) : (
                dataSource.map((record, index) => {
                  const rowProps = onRow?.(record, index) ?? {};
                  const rowClass = typeof rowClassName === 'function'
                    ? rowClassName(record, index)
                    : rowClassName ?? '';
                  return (
                    <tr
                      key={index}
                      className={cx(
                        rowHeight,
                        striped && index % 2 === 1 ? 'bg-[#fafafa]' : '',
                        'hover:bg-[#f5f5f5] transition-colors',
                        rowClass
                      )}
                      {...rowProps}
                    >
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className={cx(
                            'px-4 text-[#262626]',
                            textSize,
                            bordered ? 'border border-[#f0f0f0]' : '',
                            col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : '',
                          )}
                        >
                          {col.render
                            ? col.render(record[col.dataIndex ?? col.key] as unknown, record, index)
                            : (col.dataIndex ? String(record[col.dataIndex] ?? '') : '')}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </Spin>

        {pagination && pagination !== false && (
          <div className="flex items-center justify-end gap-2 mt-4 px-4 py-2">
            <span className="text-sm text-[#595959]">
              �?{pagination.total ?? dataSource.length} �?            </span>
            <div className="flex gap-1">
              {Array.from({ length: Math.ceil((pagination.total ?? dataSource.length) / (pagination.pageSize ?? 10)) }).map((_, i) => (
                <button
                  key={i}
                  className={cx(
                    'w-8 h-8 rounded text-sm border transition-colors',
                    (pagination.current ?? 1) === i + 1
                      ? 'bg-[#1677ff] text-white border-[#1677ff]'
                      : 'bg-white text-[#595959] border-[#d9d9d9] hover:border-[#1677ff]'
                  )}
                  onClick={() => pagination.onChange?.(i + 1, pagination.pageSize ?? 10)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Table.displayName = 'Table';
