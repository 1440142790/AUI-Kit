<script setup lang="ts">
/**
 * Modal 对话框
 *
 * @example Vue
 * <Modal :visible="showModal" title="确认删除" @ok="handleOk" @cancel="showModal = false">
 *   确定要删除这条数据吗？
 * </Modal>
 */
import { computed, watch } from 'vue';
import { type ModalProps, cx } from '../types/aui-types';
import Button from './Button.vue';

const props = withDefaults(defineProps<ModalProps>(), {
  visible: false,
  showOk: true,
  showCancel: true,
  okText: '确定',
  cancelText: '取消',
  width: 520,
  mask: true,
  maskClosable: true,
  closable: true,
  confirmLoading: false,
});

const emit = defineEmits<{
  ok: [];
  cancel: [];
  close: [];
}>();

watch(() => props.visible, (v) => {
  document.body.style.overflow = v ? 'hidden' : '';
}, { immediate: true });

const widthStyle = computed(() => ({
  maxWidth: typeof props.width === 'number' ? `${props.width}px` : props.width,
}));
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed inset-0 z-[1300] flex items-center justify-center p-4">
      <!-- 遮罩 -->
      <div v-if="mask" class="absolute inset-0 bg-[rgba(0,0,0,0.45)]" @click="maskClosable && emit('cancel')" />

      <!-- 内容 -->
      <div
        :class="cx('relative bg-white rounded-lg shadow-xl flex flex-col max-h-[85vh] z-10 w-full', props.className ?? '')"
        :style="widthStyle"
      >
        <!-- 头部 -->
        <div v-if="title || closable" class="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
          <span class="text-[16px] font-semibold text-[#262626]">{{ title }}</span>
          <button v-if="closable" @click="emit('cancel')" class="text-[#8c8c8c] hover:text-[#595959] transition-colors p-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/>
            </svg>
          </button>
        </div>

        <!-- 身体 -->
        <div class="flex-1 overflow-auto px-6 py-4">
          <slot />
        </div>

        <!-- 底部 -->
        <div v-if="$slots.footer !== undefined" class="px-6 py-4 border-t border-[#f0f0f0]">
          <slot name="footer" />
        </div>
        <div v-else class="flex justify-end gap-3 px-6 py-4 border-t border-[#f0f0f0]">
          <Button v-if="showCancel" @click="emit('cancel')">{{ cancelText }}</Button>
          <Button v-if="showOk" type="primary" :loading="confirmLoading" @click="emit('ok')">{{ okText }}</Button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
