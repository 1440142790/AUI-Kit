<script setup lang="ts">
/** DatePicker 日期选择器 */
import { type DatePickerProps } from '../types/aui-types';
const props = withDefaults(defineProps<DatePickerProps>(), { format: 'YYYY-MM-DD', mode: 'date', placeholder: '请选择日期', disabled: false });
const modelValue = defineModel<string>();
</script>

<template>
  <input
    v-model="modelValue"
    type="date"
    :disabled="disabled"
    :placeholder="placeholder"
    class="h-[38px] px-3 border border-[#d9d9d9] rounded-md text-[14px] text-[#262626] focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)] focus:outline-none disabled:bg-[#f5f5f5]"
  />
</template>
