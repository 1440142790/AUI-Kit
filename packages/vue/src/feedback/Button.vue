<script setup lang="ts">
/**
 * Button 按钮
 *
 * @fileoverview 按钮组件，Vue 3 实现，与 @yaomingshan/react Button Props 完全一�? *
 * @example Vue
 * <script setup>
 * import { Button } from '@yaomingshan/vue';
 * <Button type="primary" :loading="submitting" @click="handleSubmit">提交</Button>
 *
 * @example React (对照)
 * <Button type="primary" loading={submitting} onClick={handleSubmit}>提交</Button>
 */
import { computed } from 'vue';
import { type ButtonProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<ButtonProps & { htmlType?: 'button' | 'submit' | 'reset' }>(), {
  type: 'default',
  size: 'md',
  loading: false,
  block: false,
  danger: false,
  htmlType: 'button',
});

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();

const sizeClasses: Record<string, string> = {
  xs: 'h-6 px-2 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-6 text-lg gap-2',
  xl: 'h-14 px-8 text-xl gap-2',
};

const typeClasses: Record<string, string> = {
  primary: 'bg-[#1677ff] text-white hover:bg-[#4096ff] active:bg-[#0958d9] disabled:bg-[#e8e8e8] disabled:text-[#bfbfbf]',
  default: 'bg-white text-[#262626] border border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] active:border-[#0958d9] active:text-[#0958d9] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]',
  dashed: 'bg-white text-[#262626] border border-dashed border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]',
  text: 'bg-transparent text-[#262626] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] disabled:text-[#bfbfbf]',
  link: 'bg-transparent text-[#1677ff] hover:text-[#4096ff] active:text-[#0958d9] disabled:text-[#bfbfbf]',
};

const classes = computed(() => {
  const base = [
    'inline-flex items-center justify-center font-medium rounded-md',
    'transition-all duration-200 cursor-pointer select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    sizeClasses[props.size] ?? sizeClasses.md,
    props.block ? 'w-full' : '',
    props.className ?? '',
  ].filter(Boolean).join(' ');

  const typeClass = props.danger
    ? props.type === 'text' || props.type === 'link'
      ? 'text-[#ff4d4f] hover:text-[#ff7875] active:text-[#d9363e]'
      : 'bg-[#ff4d4f] hover:bg-[#ff7875] active:bg-[#d9363e] text-white'
    : typeClasses[props.type] ?? typeClasses.default;

  return cx(base, typeClass);
});

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e);
  }
};
</script>

<template>
  <button
    :type="htmlType"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- 加载图标 -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4 shrink-0 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    <!-- 图标 -->
    <span v-if="!loading && icon" class="shrink-0 mr-1">{{ icon }}</span>
    <!-- 内容 -->
    <span><slot /></span>
  </button>
</template>
