/**
 * Flex 弹性布局
 *
 * @fileoverview 基于 Flexbox 的弹性布局容器
 *
 * @example React
 * import { Flex } from '@aui/react';
 *
 * <Flex direction="column" gap="md">
 *   <div>上方</div>
 *   <div>中间</div>
 *   <div>下方</div>
 * </Flex>
 *
 * <Flex wrap justify="between" align="center">
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Flex>
 *
 * @example Vue
 * <Flex direction="column" gap="md">
 *   <div>上方</div>
 *   <div>中间</div>
 * </Flex>
 */

import React, { useMemo } from 'react';
import { type FlexProps, type Spacing, cx } from '@aui/core';

const gapMap: Record<Spacing, string> = {
  xs:   'gap-1',
  sm:   'gap-2',
  md:   'gap-4',
  lg:   'gap-6',
  xl:   'gap-8',
  '2xl': 'gap-10',
  '3xl': 'gap-12',
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ direction = 'row', wrap, justify, align, grow, shrink, className, children, ...rest }, ref) => {
    const directionClass = useMemo(() => {
      const map: Record<string, string> = {
        'row': 'flex-row', 'col': 'flex-col',
        'row-reverse': 'flex-row-reverse', 'col-reverse': 'flex-col-reverse',
      };
      return map[direction] || 'flex-row';
    }, [direction]);

    const wrapClass = useMemo(() => {
      if (wrap === true) return 'flex-wrap';
      if (wrap === false) return 'flex-nowrap';
      if (typeof wrap === 'string') {
        const map: Record<string, string> = {
          nowrap: 'flex-nowrap', wrap: 'flex-wrap', 'wrap-reverse': 'flex-wrap-reverse',
        };
        return map[wrap] || '';
      }
      return '';
    }, [wrap]);

    const justifyClass = useMemo(() => {
      const map: Record<string, string> = {
        start: 'justify-start', center: 'justify-center', end: 'justify-end',
        between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly',
      };
      return justify ? map[justify] : '';
    }, [justify]);

    const alignClass = useMemo(() => {
      const map: Record<string, string> = {
        start: 'items-start', center: 'items-center', end: 'items-end',
        stretch: 'items-stretch', baseline: 'items-baseline',
      };
      return align ? map[align] : '';
    }, [align]);

    const growClass = useMemo(() => {
      if (grow === true) return 'grow';
      if (typeof grow === 'number') return `grow-${grow}`;
      return '';
    }, [grow]);

    const shrinkClass = useMemo(() => {
      if (shrink === true) return 'shrink';
      if (typeof shrink === 'number') return `shrink-${shrink}`;
      return '';
    }, [shrink]);

    return (
      <div
        ref={ref}
        className={cx('flex', directionClass, wrapClass, justifyClass, alignClass, growClass, shrinkClass, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';
