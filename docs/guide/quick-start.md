# 快速上�?
## 组件使用示例

### 布局示例

```tsx
import { Page, Grid, Flex, Spacer, Tabs } from '@yaomingshan/react';

// 栅格布局
<Grid cols={3} gap="md">
  <div>第一�?/div>
  <div>第二�?/div>
  <div>第三�?/div>
</Grid>

// 弹性布局
<Flex direction="column" gap="md">
  <div>�?/div>
  <Spacer size="lg" />
  <div>下（留白占位�?/div>
</Flex>

// 标签�?const items = [
  { key: '1', label: 'Tab 1', children: <div>内容1</div> },
  { key: '2', label: 'Tab 2', children: <div>内容2</div> },
];
<Tabs items={items} activeKey={activeTab} onChange={setActiveTab} />
```

### 表单示例

```tsx
import { Form, FormItem, Input, Select, Button } from '@yaomingshan/react';

const cities = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
];

<Form onFinish={handleSubmit} layout="vertical">
  <Grid cols={2} gap="md">
    <FormItem name="name" label="姓名" required>
      <Input placeholder="请输入姓�? allowClear />
    </FormItem>
    <FormItem name="city" label="城市">
      <Select options={cities} placeholder="请选择" searchable />
    </FormItem>
  </Grid>
  <Button type="primary" htmlType="submit" block>提交</Button>
</Form>
```

### 弹窗示例

```tsx
import { Modal, Button } from '@yaomingshan/react';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>打开弹窗</Button>
  <Modal
    title="确认操作"
    visible={open}
    onOk={handleOk}
    onCancel={() => setOpen(false)}
    okText="确定"
    cancelText="取消"
  >
    <p>确定要执行此操作吗？</p>
  </Modal>
</>
```

### Toast 提示

```tsx
import { Toast, Button } from '@yaomingshan/react';

// 成功提示
<Button onClick={() => Toast.success('保存成功�?)}>保存</Button>

// 错误提示
<Button onClick={() => Toast.error('网络错误，请重试')}>提交</Button>

// 加载提示（不自动关闭�?<Button onClick={() => Toast.loading('正在提交...')}>提交</Button>
```

### 数据展示

```tsx
import { Table, Tag, Badge, Avatar } from '@yaomingshan/react';

const columns = [
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'status', title: '状�?, render: (_, r) =>
    <Tag color={r.status === 'active' ? 'success' : 'gray'}>
      {r.status === 'active' ? '启用' : '禁用'}
    </Tag>
  },
  { key: 'role', title: '角色', render: (_, r) =>
    <Badge count={r.roleCount} dot>
      <Avatar text={r.name} />
    </Badge>
  },
];

<Table columns={columns} dataSource={users} bordered pagination={{ pageSize: 10 }} />
```

### 移动端适配

```tsx
import { Page, CardList, BottomSheet } from '@yaomingshan/react';

// 移动�?Page，自动将 Table 转为 CardList
<Page title="用户列表" platform="mobile">
  <CardList
    dataSource={users}
    renderItem={(user) => (
      <div className="p-4 border-b border-gray-100">
        <Avatar src={user.avatar} text={user.name} />
        <span>{user.name}</span>
      </div>
    )}
  />
</Page>

// 底部操作�?<BottomSheet
  visible={showActions}
  actions={[
    { key: 'edit', text: '编辑', onClick: handleEdit },
    { key: 'delete', text: '删除', danger: true, onClick: handleDelete },
  ]}
  onClose={() => setShowActions(false)}
/>
```

## Props 速查

```tsx
// Button
<Button type="primary" size="md" loading={false} danger={false} block={false}>
  按钮文字
</Button>

// Input
<Input
  type="text"
  placeholder="请输�?
  prefix={<SearchIcon />}
  suffix={<ClearIcon />}
  allowClear
  maxLength={100}
  showCount
/>

// Select
<Select
  options={options}
  placeholder="请选择"
  multiple={false}
  searchable={false}
  allowClear={false}
/>
```

## 下一�?
- [设计令牌 →](/guide/tokens)
- [组件文档 →](/components/)
- [AI 宪法 →](/ai-rules/)
