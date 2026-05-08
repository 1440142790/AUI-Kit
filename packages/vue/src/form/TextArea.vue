<script setup lang="ts">
/** TextArea 文本域 */
import { ref } from 'vue';
import { type TextAreaProps } from '../types/aui-types';
const props = withDefaults(defineProps<TextAreaProps>(), { rows: 3, maxLength: 200, showCount: false });
const modelValue = defineModel<string>();
</script>

<template>
  <div class="relative">
    <textarea
      v-model="modelValue"
      :rows="typeof rows === 'string' ? parseInt(rows) : rows"
      :maxlength="maxLength"
      :placeholder="placeholder"
      class="w-full px-3 py-2 border border-[#d9d9d9] rounded-md text-[14px] text-[#262626] placeholder:text-[#bfbfbf] resize-y transition-colors focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)] focus:outline-none disabled:bg-[#f5f5f5]"
    />
    <span v-if="showCount && maxLength" class="absolute right-3 bottom-2 text-xs text-[#8c8c8c]">
      {{ (modelValue || '').length }}/{{ maxLength }}
    </span>
  </div>
</template>
