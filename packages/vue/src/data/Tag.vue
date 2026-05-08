<script setup lang="ts">
/**
 * Tag 标签
 *
 * @example Vue
 * <Tag color="success">已完成</Tag>
 * <Tag color="#ff6b6b" closable @close="handleClose">自定义颜色</Tag>
 */
import { computed } from 'vue';
import { type TagProps, type ColorType, cx } from '../types/aui-types';

const props = withDefaults(defineProps<TagProps>(), {
  closable: false,
});

const emit = defineEmits<{
  close: [e: MouseEvent];
}>();

const colorMap: Record<ColorType, string> = {
  primary: 'bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]',
  success: 'bg-[#f6ffed] text-[#52c41a] border-[#52c41a]',
  warning: 'bg-[#fffbe6] text-[#faad14] border-[#faad14]',
  danger: 'bg-[#fff2f0] text-[#ff4d4f] border-[#ff4d4f]',
  info: 'bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]',
  gray: 'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]',
};

const classes = computed(() => {
  const base = 'inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded font-medium border';
  if (!props.color) return cx(base, 'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]', props.className ?? '');
  if (Object.keys(colorMap).includes(props.color as string)) {
    return cx(base, colorMap[props.color as ColorType], props.className ?? '');
  }
  return cx(base, 'border', props.className ?? '');
});

const textStyle = computed(() => {
  if (!props.color || Object.keys(colorMap).includes(props.color as string)) return {};
  return { color: props.color as string, borderColor: props.color as string };
});
</script>

<template>
  <span :class="classes" :style="textStyle">
    <slot />
    <button v-if="closable" class="ml-1 hover:opacity-70 transition-opacity" @click.stop="emit('close', $event)">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
        <path d="M5 0a5 5 0 100 10A5 5 0 005 0zm2 7L6 5l1 1 1-1-1-1-1 1-1-1 1-1 1 1 1 1z"/>
      </svg>
    </button>
  </span>
</template>
