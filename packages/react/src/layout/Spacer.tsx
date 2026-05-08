/**
 * Spacer 留白组件
 *
 * @fileoverview Flex 布局中的留白组件
 *
 * @example React
 * import { Flex, Spacer } from '@aui/react';
 *
 * <Flex>
 *   <Button>左侧</Button>
 *   <Spacer size="lg" />
 *   <Button type="primary">右侧</Button>
 * </Flex>
 *
 * @example Vue
 * <Flex>
 *   <Button>左侧</Button>
 *   <Spacer size="lg" />
 *   <Button type="primary">右侧</Button>
 * </Flex>
 */

import React, { useMemo } from 'react';
import { type SpacerProps, type Spacing, cx } from '@aui/core';

const sizeMap: Record<Spacing, string> = {
  xs:   'w-1 h-1',
  sm:   'w-2 h-2',
  md:   'w-4 h-4',
  lg:   'w-6 h-6',
  xl:   'w-8 h-8',
  '2xl': 'w-10 h-10',
  '3xl': 'w-12 h-12',
};

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = 'md', direction = 'horizontal', className, ...rest }, ref) => {
    const classes = useMemo(() => {
      const base = sizeMap[size as Spacing] || sizeMap.md;
      return direction === 'horizontal' ? base : '';
    }, [size, direction]);

    return (
      <div
        ref={ref}
        className={cx(direction === 'horizontal' ? classes : '', direction === 'vertical' ? baseClasses(size) : '', className)}
        {...rest}
      />
    );
  }
);

function baseClasses(size: Spacing | number) {
  const map: Record<Spacing, string> = {
    xs:   'w-1 h-1',
    sm:   'w-2 h-2',
    md:   'w-4 h-4',
    lg:   'w-6 h-6',
    xl:   'w-8 h-8',
    '2xl': 'w-10 h-10',
    '3xl': 'w-12 h-12',
  };
  return map[size as Spacing] || map.md;
}

Spacer.displayName = 'Spacer';
