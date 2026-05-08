<script setup lang="ts">
/**
 * Page 页面容器
 *
 * @example Vue
 * <Page title="用户详情" @back="navigateBack">
 *   <div>页面内容</div>
 * </Page>
 */
import { type PageProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<PageProps>(), {
  showNav: true,
  background: 'white',
  scrollable: true,
});

const emit = defineEmits<{
  back: [];
}>();

const bgClass: Record<string, string> = {
  white: 'bg-white',
  gray: 'bg-[#fafafa]',
  transparent: 'bg-transparent',
};
</script>

<template>
  <div :class="cx('flex flex-col h-screen w-full', bgClass[background], props.className ?? '')">
    <!-- 导航栏 -->
    <div
      v-if="showNav"
      class="flex items-center h-12 px-4 border-b border-[#f0f0f0] shrink-0 bg-white"
    >
      <!-- 返回按钮 -->
      <button
        v-if="$attrs.onBack || true"
        class="flex items-center justify-center w-8 h-8 -ml-2 rounded-md hover:bg-[#f5f5f5] transition-colors mr-2"
        @click="emit('back')"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <!-- 标题 -->
      <span class="text-[16px] font-semibold text-[#262626] truncate">{{ title }}</span>
    </div>

    <!-- 内容区域 -->
    <div :class="cx('flex-1 min-h-0', scrollable ? 'overflow-auto' : '')">
      <slot />
    </div>
  </div>
</template>
