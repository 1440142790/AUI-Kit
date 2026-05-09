/**
 * Grid 栅格布局
 *
 * @fileoverview 基于 CSS Grid 的响应式栅格布局
 *
 * @example React
 * import { Grid } from '@yaomingshan/react';
 *
 * <Grid cols={2} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 * </Grid>
 *
 * // 响应式列�? * <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap="lg">
 *   {items.map(item => <div key={item.id}>{item.name}</div>)}
 * </Grid>
 *
 * @example Vue
 * <Grid cols="2" gap="md">
 *   <div v-for="item in items" :key="item.id">{{ item.name }}</div>
 * </Grid>
 */

import React, { useMemo } from 'react';
import { type GridProps, type Spacing, cx } from '@yaomingshan/core';

const gapMap: Record<Spacing, string> = {
  xs:   'gap-1',
  sm:   'gap-2',
  md:   'gap-4',
  lg:   'gap-6',
  xl:   'gap-8',
  '2xl': 'gap-10',
  '3xl': 'gap-12',
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 1, gap = 'md', align, justify, className, children, ...rest }, ref) => {
    const gridStyle = useMemo(() => {
      const colsValue = typeof cols === 'number' ? cols : 1;
      return { gridTemplateColumns: `repeat(${colsValue}, minmax(0, 1fr))` };
    }, [cols]);

    const alignClass = useMemo(() => {
      const map: Record<string, string> = {
        start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch',
      };
      return align ? map[align] : '';
    }, [align]);

    const justifyClass = useMemo(() => {
      const map: Record<string, string> = {
        start: 'justify-start', center: 'justify-center', end: 'justify-end',
        between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly',
      };
      return justify ? map[justify] : '';
    }, [justify]);

    return (
      <div
        ref={ref}
        className={cx('grid', gapMap[gap as Spacing] || gapMap.md, alignClass, justifyClass, className)}
        style={gridStyle}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
