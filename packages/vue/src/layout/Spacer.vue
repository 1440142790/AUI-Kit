<script setup lang="ts">
/**
 * Spacer 留白组件
 *
 * @example Vue
 * <Flex>
 *   <Button>左侧</Button>
 *   <Spacer size="lg" />
 *   <Button type="primary">右侧</Button>
 * </Flex>
 */
import { computed } from 'vue';
import { type SpacerProps, type Spacing, cx } from '../types/aui-types';

const props = withDefaults(defineProps<SpacerProps>(), {
  size: 'md',
  direction: 'horizontal',
});

const sizeMap: Record<Spacing, string> = {
  xs: 'w-1 h-1', sm: 'w-2 h-2', md: 'w-4 h-4',
  lg: 'w-6 h-6', xl: 'w-8 h-8', '2xl': 'w-10 h-10', '3xl': 'w-12 h-12',
};
</script>

<template>
  <div :class="cx(sizeMap[size as Spacing] ?? sizeMap.md, props.className ?? '')" />
</template>
