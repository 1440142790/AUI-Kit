<script setup lang="ts">
/**
 * Drawer 抽屉
 */
import { watch } from 'vue';
import { type DrawerProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<DrawerProps>(), {
  visible: false, placement: 'right', size: 378, mask: true, maskClosable: true, showClose: true,
});

const emit = defineEmits<{ close: [] }>();

watch(() => props.visible, (v) => { document.body.style.overflow = v ? 'hidden' : ''; }, { immediate: true });

const sizeStyle = props.placement === 'left' || props.placement === 'right'
  ? { width: typeof props.size === 'number' ? `${props.size}px` : props.size, maxWidth: '90vw' }
  : { height: typeof props.size === 'number' ? `${props.size}px` : props.size, maxHeight: '90vh' };

const placementClass = { right: 'right-0 top-0 h-full', left: 'left-0 top-0 h-full', top: 'top-0 left-0 w-full', bottom: 'bottom-0 left-0 w-full' }[props.placement];
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed inset-0 z-[1200]">
      <div v-if="mask" class="absolute inset-0 bg-[rgba(0,0,0,0.45)]" @click="maskClosable && emit('close')" />
      <div :class="cx('absolute bg-white shadow-xl flex flex-col transition-transform duration-300', placementClass, props.className ?? '')" :style="sizeStyle">
        <div v-if="title || showClose" class="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] shrink-0">
          <span class="text-[16px] font-semibold text-[#262626]">{{ title }}</span>
          <button v-if="showClose" @click="emit('close')" class="text-[#8c8c8c] hover:text-[#595959] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/></svg>
          </button>
        </div>
        <div class="flex-1 overflow-auto px-6 py-4"><slot /></div>
        <div v-if="$slots.footer" class="px-6 py-4 border-t border-[#f0f0f0] shrink-0"><slot name="footer" /></div>
      </div>
    </div>
  </Teleport>
</template>
