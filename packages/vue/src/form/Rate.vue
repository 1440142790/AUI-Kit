<script setup lang="ts">
/** Rate 评分 */
import { computed } from 'vue';
import { type RateProps } from '../types/aui-types';

const props = withDefaults(defineProps<RateProps>(), {
  count: 5,
  defaultValue: 0,
  allowHalf: false,
  readOnly: false,
});

const emit = defineEmits<{ change: [value: number] }>();
const modelValue = defineModel<number>();

const currentValue = computed(() => modelValue.value ?? props.defaultValue);

const handleClick = (score: number) => {
  if (props.readOnly) return;
  modelValue.value = score;
  emit('change', score);
};
</script>

<template>
  <div class="flex items-center gap-1">
    <span
      v-for="i in count" :key="i"
      class="cursor-pointer transition-transform hover:scale-110"
      :class="readOnly ? 'cursor-default hover:scale-100' : ''"
      @click="handleClick(i)"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z"
          :fill="currentValue >= i ? '#faad14' : '#d9d9d9'"
        />
      </svg>
    </span>
  </div>
</template>
