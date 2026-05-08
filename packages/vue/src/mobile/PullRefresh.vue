<script setup lang="ts">
/** PullRefresh 下拉刷新 */
import { ref } from 'vue';
import { type PullRefreshProps } from '../types/aui-types';

const props = withDefaults(defineProps<PullRefreshProps>(), {
  refreshing: false,
  pullingText: '下拉刷新',
  refreshingText: '刷新中...',
});

const emit = defineEmits<{ refresh: [] }>();
const pulling = ref(false);
const pullDistance = ref(0);
const startY = ref(0);

const handleTouchStart = (e: TouchEvent) => {
  if (props.refreshing) return;
  const el = e.currentTarget as HTMLElement;
  if (el.scrollTop === 0) {
    startY.value = e.touches[0].clientY;
    pulling.value = true;
  }
};

const handleTouchMove = (e: TouchEvent) => {
  if (!pulling.value || props.refreshing) return;
  const diff = e.touches[0].clientY - startY.value;
  if (diff > 0) {
    e.preventDefault();
    pullDistance.value = Math.min(diff, 80);
  }
};

const handleTouchEnd = async () => {
  if (!pulling.value) return;
  pulling.value = false;
  if (pullDistance.value > 50) {
    pullDistance.value = 0;
    emit('refresh');
  } else {
    pullDistance.value = 0;
  }
};
</script>

<template>
  <div
    class="overflow-auto"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="flex items-center justify-center h-12 text-[14px] text-[#8c8c8c] transition-all" :style="{ height: pullDistance > 0 ? '60px' : '0' }">
      <template v-if="refreshing">
        <svg class="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        {{ refreshingText }}
      </template>
      <template v-else>{{ pullingText }}</template>
    </div>
    <slot />
  </div>
</template>
