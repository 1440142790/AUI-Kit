<script setup lang="ts">
/**
 * CardList 卡片列表（Table 的移动端替代）
 */
import { computed } from 'vue';
import { type CardListProps, type Spacing, cx } from '../types/aui-types';

const props = withDefaults(defineProps<CardListProps>(), {
  dataSource: () => [],
  columns: 1,
  gap: 'md',
  loading: false,
});

const gapMap: Record<Spacing, string> = {
  xs: 'gap-1', sm: 'gap-2', md: 'gap-4', lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-10', '3xl': 'gap-12',
};
</script>

<template>
  <div :class="cx('grid', gapMap[gap as Spacing] ?? gapMap.md)">
    <template v-if="loading">
      <div v-for="i in 3" :key="i" class="p-4 bg-gray-50 rounded-lg animate-pulse">
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div class="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </template>
    <template v-else>
      <slot v-for="(item, index) in dataSource" :key="index" :item="item" :index="index">
        <!-- fallback: 简单卡片 -->
        <div v-if="!$slots.default" class="p-4 border border-[#f0f0f0] rounded-lg">
          <pre class="text-xs text-gray-400">{{ JSON.stringify(item) }}</pre>
        </div>
      </slot>
    </template>
    <div v-if="!loading && dataSource.length === 0" class="col-span-full text-center py-8 text-gray-400">
      暂无数据
    </div>
  </div>
</template>
