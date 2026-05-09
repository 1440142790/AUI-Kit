# AUI Kit - AI 组件宪法

> AI 生成代码时必须遵守的规则。违反以下规则的代码将被拒绝�?
---

## 一、通用规则（所有框架必须遵守）

### 规则 1：强制使�?AUI 组件

**所�?UI 必须使用 `@yaomingshan/react` �?`@yaomingshan/vue` 组件，禁止使用原�?HTML 标签构建 UI�?*

正确�?```tsx
import { Page, Grid, Button, Input } from '@yaomingshan/react';

function UserForm() {
  return (
    <Page title="用户表单">
      <Grid cols={2} gap="md">
        <Input placeholder="姓名" />
        <Input placeholder="邮箱" />
        <div className="col-span-2">
          <Button type="primary">提交</Button>
        </div>
      </Grid>
    </Page>
  );
}
```

错误（禁止）�?```tsx
// �?禁止：使用原�?div 构建布局
function UserForm() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <input placeholder="姓名" />
        <input placeholder="邮箱" />
      </div>
      <button style={{ background: '#1677ff', color: 'white', padding: '8px 16px' }}>
        提交
      </button>
    </div>
  );
}
```

### 规则 2：禁止手�?CSS

**所有样式必须通过 Tailwind 类或设计令牌实现，禁止使用内�?style�?*

正确�?```tsx
<Button type="primary" className="bg-[#1677ff] text-white px-4 py-2">提交</Button>
```

错误�?```tsx
// �?禁止：内联样�?<button style={{ backgroundColor: '#1677ff', color: 'white', padding: '8px 16px' }}>
  提交
</button>
```

### 规则 3：表单必须用 Form + Form.Item 包裹

**所有输入组件必须包裹在 Form.Item 内，Form.Item 必须�?name 属性�?*

正确�?```tsx
<Form onFinish={handleSubmit}>
  <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '必填' }]}>
    <Input />
  </Form.Item>
  <Form.Item name="password" label="密码">
    <Input type="password" />
  </Form.Item>
  <Button type="primary" htmlType="submit">登录</Button>
</Form>
```

错误�?```tsx
// �?禁止：表单组件不包裹�?Form.Item �?<Form onFinish={handleSubmit}>
  <div>
    <span>邮箱</span>
    <Input />
  </div>
  <button type="submit">登录</button>
</Form>
```

### 规则 4：移动端适配

**�?Page 组件设置 `platform="mobile"`，其余自动适配�?*

```tsx
// 移动�?<Page title="用户列表" platform="mobile">
  <CardList dataSource={users} renderItem={renderUser} />
</Page>

// Web �?<Page title="用户列表">
  <Table columns={columns} dataSource={users} />
</Page>
```

### 规则 5：使用设计令�?
**禁止硬编码颜色值，使用 `@yaomingshan/core` 中的设计令牌�?*

正确�?```tsx
import { colors } from '@yaomingshan/core';
<div className={colors.primary.DEFAULT}>主色背景</div>
<div className={colors.danger.text}>危险色文�?/div>
```

错误�?```tsx
// �?禁止：硬编码颜色
<div style={{ backgroundColor: '#1677ff' }}>主色背景</div>
```

---

## 二、框架方言

### React 方言�?tsx/.jsx 文件�?
```tsx
// Props：camelCase
<Button type="primary" loading={isLoading} disabled={false} />

// 事件：onXxx={handler}
// <Input onChange={handleChange} onFocus={handleFocus} />
// <Button onClick={handleClick} />

// 布尔属性：必须显式传�?<Input disabled={true} />       // �?正确
<Input disabled />              // �?错误
<Input disabled={false} />      // �?正确
```

### Vue 方言�?vue 文件�?
```vue
<!-- Props：kebab-case �?v-bind -->
<Button type="primary" :loading="isLoading" />

<!-- 事件：@xxx="handler" -->
<Input @change="handleChange" @focus="handleFocus" />
<Button @click="handleClick" />

<!-- 布尔属性：必须使用 v-bind -->
<Input :disabled="true" />      <!-- �?正确 -->
<Input disabled />              <!-- �?错误 -->
<Input :disabled="false" />     <!-- �?正确 -->

<!-- 插槽：具名插�?#slotName -->
<Modal>
  <template #footer>自定义底�?/template>
</Modal>
```

---

## 三、组件速查�?
### 布局与导�?
| 组件 | React | Vue | 备注 |
|------|-------|-----|------|
| Page | `<Page title="标题" onBack={fn}>...</Page>` | `<Page title="标题" @back="fn">...</Page>` | 页面容器 |
| Grid | `<Grid cols={2} gap="md">...</Grid>` | `<Grid cols="2" gap="md">...</Grid>` | 栅格布局 |
| Flex | `<Flex direction="column" gap="md">...</Flex>` | `<Flex direction="column" gap="md">...</Flex>` | 弹性布局 |
| Spacer | `<Spacer size="lg" />` | `<Spacer size="lg" />` | 留白 |
| Tabs | `<Tabs items={items} activeKey={k} onChange={setK} />` | `<Tabs :items="items" :activeKey="k" @change="setK" />` | 标签�?|
| Drawer | `<Drawer visible={o} onClose={close}>...</Drawer>` | `<Drawer :visible="o" @close="close">...</Drawer>` | 抽屉 |

### 表单组件

| 组件 | React | Vue |
|------|-------|-----|
| Form | `<Form onFinish={fn} layout="vertical">...</Form>` | `<Form @finish="fn" layout="vertical">...</Form>` |
| Form.Item | `<Form.Item name="email" label="邮箱">...</Form.Item>` | `<Form.Item name="email" label="邮箱">...</Form.Item>` |
| Input | `<Input placeholder="请输�? allowClear />` | `<Input placeholder="请输�? :allowClear="true" />` |
| Select | `<Select options={opts} searchable />` | `<Select :options="opts" searchable />` |
| Switch | `<Switch checked={v} onChange={setV} />` | `<Switch :checked="v" @change="setV" />` |
| Radio | `<Radio options={opts} direction="horizontal" />` | `<Radio :options="opts" direction="horizontal" />` |

### 反馈组件

| 组件 | React | Vue |
|------|-------|-----|
| Button | `<Button type="primary" loading={l} onClick={click}>提交</Button>` | `<Button type="primary" :loading="l" @click="click">提交</Button>` |
| Modal | `<Modal visible={o} onOk={ok} onCancel={close}>...</Modal>` | `<Modal :visible="o" @ok="ok" @cancel="close">...</Modal>` |
| Toast | `Toast.show({ content: '成功', type: 'success' })` | 同左�?|
| Empty | `<Empty description="暂无数据" />` | `<Empty description="暂无数据" />` |
| Skeleton | `<Skeleton loading type="list" rows={3}>...</Skeleton>` | `<Skeleton :loading :rows="3">...</Skeleton>` |

---

## 四、类型安�?
**禁止使用 `any`，所�?Props 使用 `@yaomingshan/core` 导出的类型�?*

```typescript
// �?正确
import type { ButtonProps, InputProps } from '@yaomingshan/core';
function MyButton(props: ButtonProps) { ... }

// �?错误
function MyInput(props: any) { ... }
```

---

## 五、示例：完整页面

### React

```tsx
import { Page, Grid, Form, FormItem, Input, Button, Select } from '@yaomingshan/react';

function UserPage() {
  const cities = [
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' },
  ];

  const handleFinish = (values: Record<string, unknown>) => {
    console.log('提交:', values);
  };

  return (
    <Page title="用户管理" onBack={() => history.back()}>
      <Grid cols={1} gap="md" className="p-4">
        <Form onFinish={handleFinish} layout="vertical">
          <Grid cols={2} gap="md">
            <FormItem name="name" label="姓名" required>
              <Input placeholder="请输入姓�? />
            </FormItem>
            <FormItem name="city" label="城市">
              <Select options={cities} placeholder="请选择城市" />
            </FormItem>
          </Grid>
          <Button type="primary" htmlType="submit" block>保存</Button>
        </Form>
      </Grid>
    </Page>
  );
}
```

### Vue

```vue
<template>
  <Page title="用户管理" @back="goBack">
    <Grid :cols="1" gap="md" class="p-4">
      <Form @finish="handleFinish" layout="vertical">
        <Grid :cols="2" gap="md">
          <FormItem name="name" label="姓名" required>
            <Input v-model="form.name" placeholder="请输入姓�? />
          </FormItem>
          <FormItem name="city" label="城市">
            <Select v-model="form.city" :options="cities" placeholder="请选择城市" />
          </FormItem>
        </Grid>
        <Button type="primary" html-type="submit" block>保存</Button>
      </Form>
    </Grid>
  </Page>
</template>

<script setup lang="ts">
import { Page, Grid, Form, FormItem, Input, Select, Button } from '@yaomingshan/vue';

const cities = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
];
const form = reactive({ name: '', city: '' });

const handleFinish = (values: Record<string, unknown>) => {
  console.log('提交:', values);
};
const goBack = () => history.back();
</script>
```
