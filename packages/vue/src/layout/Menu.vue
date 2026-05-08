<script setup lang="ts">
/**
 * Menu 菜单
 *
 * @example Vue
 * <Menu :items="menuData" mode="inline" @change="handleChange" />
 */
import { ref } from 'vue';
import { type MenuProps, type MenuItem, cx } from '../types/aui-types';

const props = withDefaults(defineProps<MenuProps>(), {
  items: () => [],
  mode: 'inline',
  collapsed: false,
});

const emit = defineEmits<{ change: [key: string] }>();
const activeKey = ref(props.items[0]?.key ?? '');

const handleClick = (item: MenuItem) => {
  if (item.disabled) return;
  activeKey.value = item.key;
  emit('change', item.key);
};
</script>

<template>
  <nav
    :class="cx(
      mode === 'horizontal' ? 'flex items-center gap-1' : 'flex flex-col gap-1',
      mode === 'inline' && collapsed ? 'w-16' : '',
    )"
  >
    <div v-for="item in items" :key="item.key">
      <button
        :class="cx(
          'w-full flex items-center gap-2 px-3 py-2 text-[14px] rounded-md transition-colors',
          mode === 'horizontal' ? 'justify-center' : 'justify-start',
          activeKey === item.key ? 'bg-[#e6f4ff] text-[#1677ff] font-medium' : 'text-[#595959] hover:bg-[#f5f5f5] hover:text-[#262626]',
          item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          collapsed && mode === 'inline' ? 'justify-center px-2' : '',
        )"
        :disabled="item.disabled"
        @click="handleClick(item)"
      >
        <span v-if="item.icon" class="shrink-0">{{ item.icon }}</span>
        <span v-if="!collapsed || mode !== 'inline'">{{ item.label }}</span>
      </button>
      <!-- 子菜单 -->
      <div v-if="item.children && item.children.length && !collapsed" class="ml-4 mt-1 flex flex-col gap-1">
        <button
          v-for="child in item.children" :key="child.key"
          :class="cx(
            'w-full flex items-center gap-2 px-3 py-2 text-[14px] rounded-md transition-colors',
            activeKey === child.key ? 'bg-[#e6f4ff] text-[#1677ff]' : 'text-[#595959] hover:bg-[#f5f5f5]',
            child.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          )"
          :disabled="child.disabled"
          @click="handleClick(child)"
        >
          {{ child.label }}
        </button>
      </div>
    </div>
  </nav>
</template>
