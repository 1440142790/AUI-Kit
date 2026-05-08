<script setup lang="ts">
/**
 * Grid 栅格布局
 *
 * @example Vue
 * <Grid :cols="2" gap="md">
 *   <div v-for="item in items" :key="item.id">{{ item.name }}</div>
 * </Grid>
 */
import { computed } from 'vue';
import { type GridProps, type Spacing, cx } from '../types/aui-types';

const props = withDefaults(defineProps<GridProps>(), {
  cols: 1,
  gap: 'md',
});

const gapMap: Record<Spacing, string> = {
  xs: 'gap-1', sm: 'gap-2', md: 'gap-4',
  lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-10', '3xl': 'gap-12',
};

const alignClass = computed(() => {
  const map: Record<string, string> = {
    start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch',
  };
  return props.align ? map[props.align] : '';
});

const justifyClass = computed(() => {
  const map: Record<string, string> = {
    start: 'justify-start', center: 'justify-center', end: 'justify-end',
    between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly',
  };
  return props.justify ? map[props.justify] : '';
});

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${typeof props.cols === 'number' ? props.cols : 1}, minmax(0, 1fr))`,
}));
</script>

<template>
  <div
    :class="cx('grid', gapMap[gap as Spacing] ?? gapMap.md, alignClass, justifyClass, props.className ?? '')"
    :style="gridStyle"
  >
    <slot />
  </div>
</template>
