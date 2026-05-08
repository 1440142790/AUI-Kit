<script setup lang="ts">
/**
 * Descriptions 描述列表
 */
import { computed } from 'vue';
import { type DescriptionsProps } from '../types/aui-types';

const props = withDefaults(defineProps<DescriptionsProps>(), {
  items: () => [],
  column: 3,
  bordered: false,
});
</script>

<template>
  <div class="w-full">
    <div
      v-for="(item, idx) in items"
      :key="item.key"
      :class="cx('flex', bordered ? 'border border-[#f0f0f0] rounded mb-2 last:mb-0' : 'mb-2')"
    >
      <div
        :class="cx('px-4 py-3 text-[14px] bg-[#fafafa] text-[#8c8c8c] shrink-0', bordered ? 'border-r border-[#f0f0f0] w-32' : 'w-32')"
      >
        {{ item.label }}
      </div>
      <div :class="cx('px-4 py-3 text-[14px] text-[#262626] flex-1', bordered ? 'border-r border-[#f0f0f0] last:border-r-0' : '')">
        {{ item.value ?? '-' }}
      </div>
    </div>
  </div>
</template>
