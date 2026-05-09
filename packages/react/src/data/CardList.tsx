/**
 * CardList 卡片列表（Table 的移动端替代�? *
 * @example React
 * import { CardList } from '@yaomingshan/react';
 * <CardList
 *   dataSource={list}
 *   columns={2}
 *   renderItem={(item) => <Card>{item.name}</Card>}
 * />
 */

import React from 'react';
import { type CardListProps, type Spacing, cx } from '@yaomingshan/core';
import { Empty } from '../feedback/Empty';
import { Skeleton } from '../feedback/Skeleton';

const gapMap: Record<Spacing, string> = {
  xs:   'gap-1', sm: 'gap-2', md: 'gap-4',
  lg:   'gap-6', xl: 'gap-8', '2xl': 'gap-10', '3xl': 'gap-12',
};

export const CardList = React.forwardRef<HTMLDivElement, CardListProps>(
  ({ dataSource = [], renderItem, columns = 1, gap = 'md', loading = false, emptyText, className, ...rest }, ref) => {
    if (loading) {
      return (
        <div ref={ref} className={cx('grid', gapMap[gap as Spacing], className)} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }} {...rest}>
          {Array.from({ length: columns * 2 }).map((_, i) => (
            <Skeleton key={i} type="card" loading />
          ))}
        </div>
      );
    }

    if (dataSource.length === 0) {
      return <Empty description={emptyText ?? '暂无数据'} />;
    }

    return (
      <div ref={ref} className={cx('grid', gapMap[gap as Spacing], className)} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }} {...rest}>
        {dataSource.map((item, index) => (
          <div key={(item as Record<string, unknown>).id ?? index}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }
);

CardList.displayName = 'CardList';
