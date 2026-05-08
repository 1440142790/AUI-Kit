<script setup lang="ts">
/**
 * Flex 弹性布局
 *
 * @example Vue
 * <Flex direction="column" gap="md">
 *   <div>上方</div>
 *   <div>中间</div>
 * </Flex>
 */
import { computed } from 'vue';
import { type FlexProps, type Spacing, cx } from '../types/aui-types';

const props = withDefaults(defineProps<FlexProps>(), {
  direction: 'row',
  className: '',
});

const gapMap: Record<Spacing, string> = {
  xs: 'gap-1', sm: 'gap-2', md: 'gap-4',
  lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-10', '3xl': 'gap-12',
};

const directionClass = computed(() => {
  const map: Record<string, string> = {
    'row': 'flex-row', 'col': 'flex-col',
    'row-reverse': 'flex-row-reverse', 'col-reverse': 'flex-col-reverse',
  };
  return map[props.direction] ?? 'flex-row';
});

const wrapClass = computed(() => {
  if (props.wrap === true) return 'flex-wrap';
  if (props.wrap === false) return 'flex-nowrap';
  if (typeof props.wrap === 'string') {
    const m: Record<string, string> = { nowrap: 'flex-nowrap', wrap: 'flex-wrap', 'wrap-reverse': 'flex-wrap-reverse' };
    return m[props.wrap] ?? '';
  }
  return '';
});

const justifyClass = computed(() => {
  const map: Record<string, string> = {
    start: 'justify-start', center: 'justify-center', end: 'justify-end',
    between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly',
  };
  return props.justify ? map[props.justify] : '';
});

const alignClass = computed(() => {
  const map: Record<string, string> = {
    start: 'items-start', center: 'items-center', end: 'items-end',
    stretch: 'items-stretch', baseline: 'items-baseline',
  };
  return props.align ? map[props.align] : '';
});
</script>

<template>
  <div
    :class="cx('flex', directionClass, wrapClass, justifyClass, alignClass, props.className)"
  >
    <slot />
  </div>
</template>
