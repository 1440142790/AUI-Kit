<script setup lang="ts">
/**
 * Skeleton 骨架屏
 */
import { computed } from 'vue';
import { type SkeletonProps, cx } from '../types/aui-types';
const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: true, type: 'text', rows: 3, animated: true,
});
const skeletonClass = computed(() => cx('bg-[#f0f0f0] rounded', props.animated ? 'animate-pulse' : ''));
</script>

<template>
  <div v-if="loading" class="space-y-2">
    <div v-for="i in rows" :key="i" :class="skeletonClass"
      :style="{ width: i === rows ? '60%' : '100%', height: height ?? 16 }" />
  </div>
  <slot v-else />
</template>
