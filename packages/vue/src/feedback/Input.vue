<script setup lang="ts">
/**
 * Input 输入框
 *
 * @example Vue
 * <Input v-model="username" placeholder="请输入用户名" />
 *
 * @example React
 * <Input value={username} onChange={setUsername} placeholder="请输入用户名" />
 */
import { ref, computed, watch } from 'vue';
import { type InputProps, cx } from '../types/aui-types';

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  allowClear: false,
  readOnly: false,
  disabled: false,
  showCount: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [value: string];
}>();

const internalValue = ref(props.defaultValue ?? '');
const isFocused = ref(false);
const currentValue = computed(() =>
  props.modelValue !== undefined ? props.modelValue : internalValue.value
);

const handleInput = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  if (props.modelValue === undefined) internalValue.value = val;
  emit('update:modelValue', val);
  emit('change', val);
};

const handleClear = () => {
  if (props.modelValue === undefined) internalValue.value = '';
  emit('update:modelValue', '');
  emit('change', '');
};

const wrapperClasses = computed(() =>
  cx(
    'flex items-center rounded-md border transition-all duration-200 bg-white',
    'focus-within:border-[#1677ff] focus-within:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]',
    props.disabled ? 'bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed' : 'border-[#d9d9d9] hover:border-[#4096ff]',
  )
);

const currentLength = computed(() => String(currentValue.value).length);
</script>

<template>
  <div :class="cx('relative inline-flex w-full', wrapperClasses)" :style="{ height: '38px' }">
    <!-- 前缀 -->
    <span v-if="prefix" class="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0">
      {{ prefix }}
    </span>

    <!-- 输入框 -->
    <input
      :type="type"
      :value="currentValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :readonly="readOnly"
      :disabled="disabled"
      :class="cx(
        'flex-1 min-w-0 border-none outline-none bg-transparent text-[14px] text-[#262626]',
        'placeholder:text-[#bfbfbf]',
        'disabled:text-[#bfbfbf] disabled:cursor-not-allowed',
        prefix ? 'pl-10' : 'pl-3',
        (suffix || allowClear || showCount) ? 'pr-10' : 'pr-3',
        'py-2'
      )"
      @input="handleInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <!-- 清除按钮 -->
    <button
      v-if="allowClear && currentValue && !disabled"
      type="button"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] hover:text-[#595959]"
      @click="handleClear"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z"/>
      </svg>
    </button>

    <!-- 后缀 -->
    <span v-if="suffix && !allowClear" class="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0">
      {{ suffix }}
    </span>

    <!-- 字数统计 -->
    <span
      v-if="showCount && maxLength"
      :class="cx('absolute right-3 top-1/2 -translate-y-1/2 text-xs', currentLength >= maxLength ? 'text-[#ff4d4f]' : 'text-[#8c8c8c]')"
    >
      {{ currentLength }}/{{ maxLength }}
    </span>
  </div>
</template>
