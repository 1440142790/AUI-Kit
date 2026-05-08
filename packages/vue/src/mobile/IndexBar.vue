<script setup lang="ts">
/** IndexBar 索引列表 */
import { type IndexBarProps } from '../types/aui-types';
const props = withDefaults(defineProps<IndexBarProps>(), { showAnchor: true });
const emit = defineEmits<{ select: [item: any] }>();
</script>

<template>
  <div class="flex">
    <!-- 索引内容 -->
    <div class="flex-1">
      <div v-for="group in data" :key="group.index" class="mb-4">
        <div class="px-4 py-1 bg-[#f5f5f5] text-[14px] font-medium text-[#8c8c8c] sticky top-0">{{ group.index }}</div>
        <div
          v-for="item in group.items" :key="item.key"
          class="px-4 py-3 border-b border-[#f0f0f0] flex items-center gap-3 cursor-pointer"
          @click="emit('select', item)"
        >
          <img v-if="item.avatar" :src="item.avatar" class="w-10 h-10 rounded-full object-cover" />
          <div class="flex-1">
            <div class="text-[14px] font-medium text-[#262626]">{{ item.title }}</div>
            <div v-if="item.description" class="text-[12px] text-[#8c8c8c] mt-0.5">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边索引 -->
    <div v-if="showAnchor" class="w-5 flex flex-col items-center justify-center gap-0.5 py-2 sticky top-0 h-fit">
      <button
        v-for="(group, i) in data" :key="group.index"
        class="text-[10px] text-[#595959] hover:text-[#1677ff] transition-colors"
        @click="emit('select', group.items[0])"
      >
        {{ group.index }}
      </button>
    </div>
  </div>
</template>
