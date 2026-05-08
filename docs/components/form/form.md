# Form 表单

表单容器组件，所有表单项必须在 Form 内使用。

## 基本用法

::: code-group

```tsx [React]
import { Form, FormItem, Input, Select, Button } from '@aui/react';

const cities = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
];

function LoginForm() {
  const handleFinish = (values) => {
    console.log('表单值:', values);
  };

  return (
    <Form onFinish={handleFinish} layout="vertical">
      <FormItem name="email" label="邮箱" required>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem name="city" label="城市">
        <Select options={cities} placeholder="请选择" />
      </FormItem>
      <Button type="primary" htmlType="submit">提交</Button>
    </Form>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { Form, FormItem, Input, Select, Button } from '@aui/vue';

const cities = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
];

const handleFinish = (values) => {
  console.log('表单值:', values);
};
</script>

<template>
  <Form @finish="handleFinish" layout="vertical">
    <FormItem name="email" label="邮箱" required>
      <Input v-model="form.email" placeholder="请输入邮箱" />
    </FormItem>
    <FormItem name="city" label="城市">
      <Select v-model="form.city" :options="cities" placeholder="请选择" />
    </FormItem>
    <Button type="primary" html-type="submit">提交</Button>
  </Form>
</template>
```

:::

## 校验规则

```tsx
const emailRules = [
  { required: true, message: '请输入邮箱' },
  { type: 'email', message: '邮箱格式不正确' },
];

const passwordRules = [
  { required: true, message: '请输入密码' },
  { min: 6, message: '密码至少6位' },
];

<Form onFinish={handleFinish}>
  <FormItem name="email" label="邮箱" :rules="emailRules" required>
    <Input />
  </FormItem>
  <FormItem name="password" label="密码" :rules="passwordRules" required>
    <Input type="password" />
  </FormItem>
</Form>
```

## Form Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `initialValues` | 表单初始值 | `Record<string, unknown>` | `{}` |
| `onFinish` | 表单提交回调 | `(values) => void` | `-` |
| `onFinishFailed` | 提交失败回调 | `(values, errors) => void` | `-` |
| `layout` | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| `labelAlign` | 标签对齐 | `'left' \| 'right'` | `'right'` |
| `labelWidth` | 标签宽度 | `number \| string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `requiredMark` | 是否显示必填标记 | `boolean` | `true` |

## Form.Item Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `name` | 字段名（必填） | `string` | `-` |
| `label` | 标签 | `ReactNode` | `-` |
| `rules` | 校验规则 | `FormRule[]` | `[]` |
| `required` | 是否必填 | `boolean` | `false` |
| `error` | 错误信息 | `string` | `-` |
| `help` | 提示信息 | `ReactNode` | `-` |

## FormRule 类型

```typescript
interface FormRule {
  required?: boolean;        // 是否必填
  message?: string;          // 错误信息
  type?: 'string' | 'number' | 'email' | 'url' | 'phone';
  min?: number;              // 最小长度/值
  max?: number;              // 最大长度/值
  pattern?: RegExp;          // 正则校验
  validator?: (value) => boolean | string; // 自定义校验
}
```
