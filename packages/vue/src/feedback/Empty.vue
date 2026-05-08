<script setup lang="ts">
/**
 * Empty 空状态
 */
import { type EmptyProps, cx } from '../types/aui-types';
const props = withDefaults(defineProps<EmptyProps>(), { description: '暂无数据' });
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12 px-4">
    <svg width="64" height="40" viewBox="0 0 64 40" fill="none" class="mb-4 opacity-60">
      <path d="M8 8h48v24H8z" stroke="#d9d9d9" strokeWidth="2" strokeDasharray="4 2"/>
      <path d="M24 20h16M32 14v12" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span class="text-[14px] text-[#8c8c8c]">{{ description }}</span>
  </div>
</template>
