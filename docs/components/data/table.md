# Table 表格

用于展示结构化数据，支持分页、排序、筛选�?
## 基本用法

::: code-group

```tsx [React]
import { Table } from '@yaomingshan/react';

const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'age', title: '年龄', dataIndex: 'age' },
  { key: 'address', title: '地址', dataIndex: 'address' },
];

const dataSource = [
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新�? },
];

<Table columns={columns} dataSource={dataSource} />
```

```vue [Vue]
<template>
  <Table :columns="columns" :dataSource="dataSource" />
</template>
```

:::

## 带分�?
```tsx
<Table
  columns={columns}
  dataSource={dataSource}
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100,
    onChange: (page, pageSize) => {
      console.log(page, pageSize);
    },
  }}
/>
```

## 自定义列渲染

```tsx
const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  {
    key: 'status',
    title: '状�?,
    render: (_, record) => (
      <Tag color={record.status === 'active' ? 'success' : 'default'}>
        {record.status === 'active' ? '启用' : '禁用'}
      </Tag>
    ),
  },
  {
    key: 'actions',
    title: '操作',
    render: (_, record) => (
      <Flex gap="sm">
        <Button size="sm" onClick={() => handleEdit(record)}>编辑</Button>
        <Button size="sm" danger onClick={() => handleDelete(record)}>删除</Button>
      </Flex>
    ),
  },
];
```

## Props

| 参数 | 说明 | 类型 | 默认�?|
|------|------|------|--------|
| `columns` | 列配�?| `TableColumn[]` | `[]` |
| `dataSource` | 数据�?| `Record<string, unknown>[]` | `[]` |
| `pagination` | 分页配置 | `TablePagination \| false` | `false` |
| `bordered` | 是否带边�?| `boolean` | `false` |
| `striped` | 是否斑马�?| `boolean` | `false` |
| `size` | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `loading` | 加载状�?| `boolean` | `false` |
| `emptyText` | 空数据文�?| `ReactNode` | `'暂无数据'` |

## TableColumn 类型

```typescript
interface TableColumn {
  key: string;              // 列唯一标识
  title: ReactNode;        // 列头文字
  dataIndex?: string;      // 数据字段�?  width?: number | string; // 列宽
  align?: 'left' | 'center' | 'right';  // 对齐方式
  fixed?: 'left' | 'right'; // 固定�?  sortable?: boolean;      // 是否可排�?  render?: (value, record, index) => ReactNode; // 自定义渲�?}
```

## 移动端适配

移动端（`platform="mobile"`）时，Table 自动渲染�?CardList，无需手动切换�?