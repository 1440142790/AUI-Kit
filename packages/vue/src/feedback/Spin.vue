<script setup lang="ts">
/** Spin 加载中 */
import { type SpinProps } from '../types/aui-types';

const props = withDefaults(defineProps<SpinProps>(), {
  spinning: true,
  size: 'md',
  fullscreen: false,
});

const sizeClass = {
  xs: 'w-4 h-4 border-[2px]',
  sm: 'w-6 h-6 border-[2px]',
  md: 'w-10 h-10 border-[3px]',
  lg: 'w-14 h-14 border-[4px]',
  xl: 'w-20 h-20 border-[5px]',
};
</script>

<template>
  <!-- 全屏模式 -->
  <Teleport to="body">
    <div v-if="fullscreen && spinning" class="fixed inset-0 z-[1500] flex items-center justify-center bg-white/80">
      <div class="flex flex-col items-center gap-3">
        <div :class="cx('rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin', sizeClass[size])" />
        <span v-if="tip" class="text-[14px] text-[#595959]">{{ tip }}</span>
      </div>
    </div>
  </Teleport>

  <!-- 普通模式 -->
  <div v-if="!fullscreen" class="relative inline-flex">
    <div :class="spinning ? 'opacity-50 pointer-events-none' : ''">
      <slot />
    </div>
    <div v-if="spinning && !!$slots.default" class="absolute inset-0 flex items-center justify-center bg-white/60">
      <div class="flex flex-col items-center gap-2">
        <div :class="cx('rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin', sizeClass[size])" />
        <span v-if="tip" class="text-[12px] text-[#8c8c8c]">{{ tip }}</span>
      </div>
    </div>
    <div v-if="spinning && !$slots.default" class="absolute inset-0 flex items-center justify-center">
      <div class="flex flex-col items-center gap-2">
        <div :class="cx('rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin', sizeClass[size])" />
        <span v-if="tip" class="text-[12px] text-[#8c8c8c]">{{ tip }}</span>
      </div>
    </div>
  </div>
</template>
