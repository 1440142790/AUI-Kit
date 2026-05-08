<script setup lang="ts">
/**
 * Switch 开关
 */
import { computed } from 'vue';
import { type SwitchProps, cx } from '../types/aui-types';
const props = withDefaults(defineProps<SwitchProps>(), {
  defaultChecked: false, loading: false, size: 'md',
});
const emit = defineEmits<{ change: [checked: boolean] }>();
const internalChecked = ref(props.defaultChecked);
const isOn = computed(() => props.checked !== undefined ? props.checked : internalChecked.value);
const handleClick = () => {
  if (props.disabled || props.loading) return;
  const next = !isOn.value;
  if (props.checked === undefined) internalChecked.value = next;
  emit('change', next);
};
</script>

<template>
  <button type="button" role="switch" :aria-checked="isOn" @click="handleClick"
    :class="cx('relative inline-flex items-center rounded-full transition-all duration-200 cursor-pointer', size === 'sm' ? 'w-9 h-5' : 'w-11 h-6', isOn ? 'bg-[#1677ff]' : 'bg-[#d9d9d9]', (disabled || loading) ? 'opacity-50 cursor-not-allowed' : '')"
    :disabled="disabled || loading">
    <span :class="cx('absolute bg-white rounded-full shadow transition-transform duration-200', size === 'sm' ? 'w-4 h-4' : 'w-5 h-5', isOn ? (size === 'sm' ? 'translate-x-4' : 'translate-x-5') : 'translate-x-0.5')" />
  </button>
</template>
