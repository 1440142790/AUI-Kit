<script setup lang="ts">
/** Popconfirm 气泡确认框 */
import { ref } from 'vue';
import { type PopconfirmProps } from '../types/aui-types';
const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '确定执行此操作？',
  trigger: 'click',
  placement: 'top',
});
const emit = defineEmits<{ confirm: []; cancel: [] }>();
const visible = ref(false);
const toggle = () => { visible.value = !visible.value; };
const handleConfirm = () => { visible.value = false; emit('confirm'); };
const handleCancel = () => { visible.value = false; emit('cancel'); };
</script>

<template>
  <span class="relative inline-flex">
    <span @click="trigger === 'click' ? toggle() : undefined" @mouseenter="trigger === 'hover' ? visible = true : undefined" @mouseleave="trigger === 'hover' ? visible = false : undefined">
      <slot />
    </span>
    <Teleport to="body">
      <div v-if="visible" class="fixed inset-0 z-[1300]" @click="visible = false">
        <div class="absolute bg-white rounded-lg shadow-xl border border-[#f0f0f0] p-4 min-w-[200px] z-[1301]" :class="placement === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' : ''">
          <p class="text-[14px] text-[#262626] mb-3">{{ title }}</p>
          <div class="flex gap-2 justify-end">
            <button class="px-3 py-1 text-[14px] text-[#595959] hover:text-[#262626]" @click="handleCancel">取消</button>
            <button class="px-3 py-1 text-[14px] bg-[#1677ff] text-white rounded hover:bg-[#0958d9]" @click="handleConfirm">确定</button>
          </div>
        </div>
      </div>
    </Teleport>
  </span>
</template>
