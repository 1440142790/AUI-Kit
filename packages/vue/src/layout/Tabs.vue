<script setup lang="ts">
/**
 * Tabs 标签页
 *
 * @example Vue
 * <Tabs :items="tabItems" v-model:activeKey="activeTab" @change="setActiveTab" />
 */
import { ref, computed } from 'vue';
import { type TabsProps, type TabItem, cx } from '../types/aui-types';

const props = withDefaults(defineProps<TabsProps>(), {
  items: () => [],
  type: 'line',
  tabPosition: 'top',
});

const emit = defineEmits<{
  'update:activeKey': [key: string];
  change: [key: string];
}>();

const internalActive = ref(props.items[0]?.key ?? '');
const currentActive = computed(() => props.activeKey ?? internalActive.value);

const handleTabClick = (key: string, item: TabItem) => {
  if (item.disabled) return;
  if (props.activeKey === undefined) internalActive.value = key;
  emit('update:activeKey', key);
  emit('change', key);
};
</script>

<template>
  <div :class="cx('flex', tabPosition === 'left' || tabPosition === 'right' ? 'flex-row' : 'flex-col', props.className ?? '')">
    <!-- Tab 头部 -->
    <div :class="cx('flex shrink-0 border-b border-[#f0f0f0]', tabPosition === 'left' || tabPosition === 'right' ? 'flex-col border-b-0 border-r border-[#f0f0f0] min-w-[100px]' : '')">
      <button
        v-for="item in items"
        :key="item.key"
        :class="cx(
          'px-4 py-2.5 text-[14px] transition-colors relative whitespace-nowrap',
          tabPosition === 'left' || tabPosition === 'right' ? 'justify-start text-left' : '',
          currentActive === item.key
            ? 'text-[#1677ff] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1677ff]'
            : 'text-[#595959] hover:text-[#262626]',
          item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        )"
        :disabled="item.disabled"
        @click="handleTabClick(item.key, item)"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- Tab 内容 -->
    <div class="flex-1 min-h-0 overflow-auto">
      <template v-for="item in items" :key="item.key">
        <div v-if="currentActive === item.key" class="h-full">
          <component :is="() => item.children" />
        </div>
      </template>
    </div>
  </div>
</template>
