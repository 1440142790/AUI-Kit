<script setup lang="ts">
/**
 * Avatar 头像
 *
 * @example Vue
 * <Avatar src="https://example.com/avatar.jpg" size="lg" />
 */
import { ref, computed } from 'vue';
import { type AvatarProps, type ColorType, type Size, cx } from '../types/aui-types';

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
});

const imgError = ref(false);
const showText = computed(() => !props.src || imgError.value);

const sizeMap: Record<Size, string> = {
  xs: 'w-6 h-6 text-xs', sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base', lg: 'w-12 h-12 text-lg', xl: 'w-14 h-14 text-xl',
};

const colorMap: Record<ColorType, string> = {
  primary: 'bg-[#1677ff]', success: 'bg-[#52c41a]',
  warning: 'bg-[#faad14]', danger: 'bg-[#ff4d4f]',
  info: 'bg-[#1677ff]', gray: 'bg-[#8c8c8c]',
};

const sizeClass = computed(() => typeof props.size === 'number' ? '' : sizeMap[props.size as Size] ?? sizeMap.md);
const sizeStyle = computed(() => typeof props.size === 'number' ? { width: props.size, height: props.size } : {});
const bgClass = computed(() => {
  if (typeof props.color === 'string' && !Object.keys(colorMap).includes(props.color)) return '';
  return colorMap[props.color as ColorType] ?? colorMap.primary;
});
</script>

<template>
  <div
    :class="cx(
      'flex items-center justify-center overflow-hidden font-medium text-white shrink-0 select-none',
      sizeClass,
      shape === 'circle' ? 'rounded-full' : 'rounded-lg',
      bgClass,
      props.className ?? ''
    )"
    :style="sizeStyle"
  >
    <img v-if="src && !imgError" :src="src" alt="" class="w-full h-full object-cover" @error="imgError = true" />
    <span v-else>{{ text?.[0]?.toUpperCase() ?? '?' }}</span>
  </div>
</template>
