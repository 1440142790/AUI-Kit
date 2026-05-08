<script setup lang="ts">
/** Checkbox 多选框 */
import { type CheckboxProps } from '../types/aui-types';
const props = withDefaults(defineProps<CheckboxProps>(), { options: () => [], direction: 'horizontal', checkAll: false });
const modelValue = defineModel<string[]>();
</script>

<template>
  <div :class="direction === 'horizontal' ? 'flex flex-row gap-4' : 'flex flex-col gap-2'">
    <label
      v-for="opt in options" :key="opt.value"
      class="flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]"
      :class="opt.disabled ? 'opacity-50 cursor-not-allowed' : ''"
    >
      <input
        type="checkbox"
        :value="opt.value"
        :disabled="opt.disabled"
        v-model="modelValue"
        class="w-4 h-4 accent-[#1677ff]"
      />
      {{ opt.label }}
    </label>
  </div>
</template>
