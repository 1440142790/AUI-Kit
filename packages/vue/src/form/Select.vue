<script setup lang="ts">
/**
 * Select 选择器
 */
import { ref, computed } from 'vue';
import { type SelectProps, type SelectOption, cx } from '../types/aui-types';
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [], placeholder: '请选择', multiple: false, searchable: false, disabled: false, allowClear: false,
});
const emit = defineEmits<{ change: [value: string | string[]]; 'update:modelValue': [value: string | string[]] }>();
const open = ref(false);
const search = ref('');
const internalValue = ref(props.multiple ? [] : '');
const currentValue = computed(() => props.modelValue !== undefined ? props.modelValue : internalValue.value);
const filteredOptions = computed(() => props.searchable && search.value
  ? props.options.filter(o => o.label.toLowerCase().includes(search.value.toLowerCase()))
  : props.options
);
const selectedLabels = computed(() => {
  if (props.multiple) {
    return (currentValue.value as string[]).map(v => props.options.find(o => o.value === v)?.label).filter(Boolean);
  }
  return props.options.find(o => o.value === currentValue.value)?.label ?? '';
});
const handleSelect = (opt: SelectOption) => {
  if (props.multiple) {
    const arr = [...(currentValue.value as string[])];
    const idx = arr.indexOf(opt.value);
    if (idx === -1) arr.push(opt.value); else arr.splice(idx, 1);
    if (props.modelValue === undefined) internalValue.value = arr;
    emit('update:modelValue', arr); emit('change', arr);
  } else {
    if (props.modelValue === undefined) internalValue.value = opt.value;
    emit('update:modelValue', opt.value); emit('change', opt.value);
    open.value = false; search.value = '';
  }
};
const isSelected = (optValue: string) => props.multiple
  ? (currentValue.value as string[]).includes(optValue)
  : currentValue.value === optValue;
</script>

<template>
  <div class="relative inline-flex w-full">
    <div @click="!disabled && (open = !open)"
      :class="cx('flex items-center justify-between w-full rounded-md border cursor-pointer transition-all duration-200 bg-white px-3', disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed' : 'border-[#d9d9d9] hover:border-[#4096ff]', open ? 'border-[#1677ff]' : '')">
      <span :class="cx('text-[14px] truncate', selectedLabels ? 'text-[#262626]' : 'text-[#bfbfbf]')">
        {{ multiple && selectedLabels.length > 0 ? `已选 ${selectedLabels.length} 项` : (selectedLabels || placeholder) }}
      </span>
      <svg :class="cx('shrink-0 transition-transform', open ? 'rotate-180' : '')" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4 6 8.825z"/>
      </svg>
    </div>
    <div v-if="open" class="absolute top-full left-0 right-0 mt-1 bg-white rounded-md border border-[#d9d9d9] shadow-lg z-[1000] max-h-60 overflow-auto">
      <div v-if="searchable" class="p-2 border-b border-[#f0f0f0]">
        <input v-model="search" type="text" placeholder="搜索..." class="w-full px-2 py-1 text-sm border border-[#d9d9d9] rounded focus:outline-none focus:border-[#1677ff]" autofocus />
      </div>
      <div v-for="opt in filteredOptions" :key="opt.value"
        @click="!opt.disabled && handleSelect(opt)"
        :class="cx('px-3 py-2 text-[14px] cursor-pointer flex items-center justify-between', opt.disabled ? 'text-[#bfbfbf] cursor-not-allowed' : 'text-[#262626] hover:bg-[#f5f5f5]', isSelected(opt.value) ? 'bg-[#e6f4ff] text-[#1677ff]' : '')">
        <span>{{ opt.label }}</span>
        <svg v-if="isSelected(opt.value)" width="12" height="12" viewBox="0 0 12 12" fill="#1677ff">
          <path d="M10.28 2.28L4.5 8.063 1.72 5.28a.75.75 0 00-1.06 1.06l3.25 3.25a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06z"/>
        </svg>
      </div>
    </div>
  </div>
</template>
