<script setup lang="ts">
/**
 * Progress 进度条
 *
 * @example Vue
 * <Progress :percent="80" status="active" />
 */
import { computed } from 'vue';
import { type ProgressProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0,
  status: 'normal',
  type: 'line',
  showText: true,
  strokeWidth: 8,
  size: 'md',
});

const displayPercent = computed(() => Math.min(Math.max(props.percent ?? 0, 0), 100));

const statusColor: Record<string, string> = {
  normal: 'bg-[#1677ff]', active: 'bg-[#1677ff]',
  success: 'bg-[#52c41a]', error: 'bg-[#ff4d4f]',
};
</script>

<template>
  <div class="w-full">
    <div class="flex items-center gap-3">
      <div class="flex-1 rounded-full bg-[#f0f0f0] overflow-hidden" :style="{ height: typeof strokeWidth === 'number' ? strokeWidth + 'px' : '8px' }">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="statusColor[status]"
          :style="{ width: displayPercent + '%', backgroundColor: strokeColor }"
        />
      </div>
      <span v-if="showText" class="text-[14px] font-medium text-[#262626] shrink-0 w-10 text-right">
        {{ displayPercent }}%
      </span>
    </div>
  </div>
</template>
