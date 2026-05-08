<script setup lang="ts">
/**
 * Statistic 统计数值
 *
 * @example Vue
 * <Statistic title="用户总数" :value="1024" prefix="↑" suffix="人" />
 */
import { computed } from 'vue';
import { type StatisticProps } from '../types/aui-types';

const props = withDefaults(defineProps<StatisticProps>(), {
  value: 0,
});

const displayValue = computed(() => {
  if (props.formatter) return props.formatter(Number(props.value));
  if (typeof props.value === 'number' && props.precision !== undefined) {
    return (props.value as number).toFixed(props.precision);
  }
  return String(props.value ?? '');
});
</script>

<template>
  <div class="flex flex-col">
    <span v-if="title" class="text-[14px] text-[#8c8c8c] mb-1">{{ title }}</span>
    <div class="flex items-baseline gap-1">
      <span v-if="prefix" class="text-[24px] text-[#262626]">{{ prefix }}</span>
      <span class="text-[24px] font-bold text-[#262626]" :style="valueStyle">{{ displayValue }}</span>
      <span v-if="suffix" class="text-[14px] text-[#8c8c8c]">{{ suffix }}</span>
    </div>
  </div>
</template>
