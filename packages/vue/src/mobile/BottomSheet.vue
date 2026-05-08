<script setup lang="ts">
/**
 * BottomSheet 底部抽屉（移动端）
 */
import { watch } from 'vue';
import { type BottomSheetProps, cx } from '../types/aui-types';
import Button from '../feedback/Button.vue';

const props = withDefaults(defineProps<BottomSheetProps>(), {
  visible: false, height: 300, actions: () => [], draggable: true,
});

const emit = defineEmits<{ close: [] }>();

watch(() => props.visible, (v) => { document.body.style.overflow = v ? 'hidden' : ''; }, { immediate: true });
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed inset-0 z-[1200] flex flex-col justify-end">
      <div class="absolute inset-0 bg-[rgba(0,0,0,0.45)]" @click="emit('close')" />
      <div :class="cx('relative bg-white rounded-t-2xl flex flex-col z-10 max-h-[85vh]')"
        :style="{ height: typeof height === 'number' ? height + 'px' : height }">
        <div v-if="draggable" class="flex justify-center pt-3 pb-2 shrink-0">
          <div class="w-10 h-1 rounded-full bg-[#d9d9d9]" />
        </div>
        <div v-if="title" class="px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626] shrink-0">{{ title }}</div>
        <div class="flex-1 overflow-auto px-4 py-3"><slot /></div>
        <div v-if="actions.length > 0" class="px-4 pb-8 pt-3 border-t border-[#f0f0f0] shrink-0">
          <div class="grid gap-3" :style="{ gridTemplateColumns: `repeat(${Math.min(actions.length, 3)}, 1fr)` }">
            <Button v-for="action in actions" :key="action.key"
              :type="action.danger ? 'primary' : 'default'"
              :class="action.danger ? '!bg-[#ff4d4f] !text-white' : ''"
              @click="action.onClick?.(); emit('close')">
              {{ action.text }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
