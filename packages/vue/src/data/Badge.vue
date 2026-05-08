<script setup lang="ts">
/**
 * Badge 徽标
 *
 * @example Vue
 * <Badge :count="5"><Icon /></Badge>
 * <Badge count="99" dot />
 */
import { computed } from 'vue';
import { type BadgeProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<BadgeProps>(), {
  count: 0,
  dot: false,
  overflowCount: 99,
});

const displayCount = computed(() => {
  if (props.dot) return null;
  return props.count > props.overflowCount ? `${props.overflowCount}+` : props.count;
});
</script>

<template>
  <div class="relative inline-flex">
    <slot />
    <span
      v-if="dot || (count > 0)"
      class="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#ff4d4f] text-white text-[10px] font-bold leading-none"
      :class="dot ? 'w-[8px] h-[8px] min-w-[8px] -right-1' : ''"
    >
      {{ dot ? '' : displayCount }}
    </span>
  </div>
</template>
