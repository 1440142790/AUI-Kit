<script setup lang="ts">
/**
 * Table 表格
 */
import { computed } from 'vue';
import { type TableProps, type TableColumn, cx } from '../types/aui-types';

const props = withDefaults(defineProps<TableProps>(), {
  columns: () => [], dataSource: () => [],
  bordered: false, striped: false, size: 'md', loading: false,
});

const rowHeight = computed(() => props.size === 'sm' ? 'h-9' : props.size === 'lg' ? 'h-14' : 'h-11');
const textSize = computed(() => props.size === 'sm' ? 'text-xs' : props.size === 'lg' ? 'text-base' : 'text-sm');
</script>

<template>
  <div class="w-full overflow-auto">
    <table :class="cx('w-full border-collapse', bordered ? 'border border-[#f0f0f0]' : '')">
      <thead>
        <tr class="bg-[#fafafa]">
          <th v-for="col in columns" :key="col.key"
            :class="cx('text-left px-4 font-medium text-[#262626]', textSize, bordered ? 'border border-[#f0f0f0]' : 'border-b border-[#f0f0f0]', col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : '')"
            :style="{ width: col.width }">
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="dataSource.length === 0">
          <tr><td :colspan="columns.length" class="p-0"><slot name="empty"><div class="py-12 text-center text-[#8c8c8c]">暂无数据</div></slot></td></tr>
        </template>
        <template v-else>
          <tr v-for="(record, index) in dataSource" :key="index"
            :class="cx(rowHeight, striped && index % 2 === 1 ? 'bg-[#fafafa]' : '', 'hover:bg-[#f5f5f5] transition-colors')">
            <td v-for="col in columns" :key="col.key"
              :class="cx('px-4 text-[#262626]', textSize, bordered ? 'border border-[#f0f0f0]' : '')">
              <slot :name="`cell-${col.key}`" :row="record" :column="col" :index="index">
                {{ col.render ? col.render(record[col.dataIndex ?? col.key], record, index) : (col.dataIndex ? String(record[col.dataIndex] ?? '') : '') }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
