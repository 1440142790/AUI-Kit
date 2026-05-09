# AI 集成

## 如何�?AI 理解 AUI Kit

AUI Kit 的核心价值之一是让 AI 编程工具（Cursor、Copilot、Windsurf、v0 等）能够生成高质量、多框架一致的前端代码�?
## 方法一：使�?CLI 初始化（推荐�?
```bash
npx @aui/cli init --framework react --project my-app
```

CLI 会自动在项目中生成：
- `.cursorrules` �?Cursor AI 宪法
- `AUI-COMPONENT-REF.md` �?组件速查�?
## 方法二：手动复制 AI 宪法

将以下内容添加到 `.cursorrules` 文件中：

```markdown
# AUI Kit AI 宪法

## 规则
1. 所�?UI 必须使用 @yaomingshan/react �?@yaomingshan/vue 组件
2. 禁止手写 CSS，使�?Tailwind �?3. 表单必须包裹�?Form + Form.Item �?4. 移动端在 Page 设置 platform="mobile"
5. 优先使用组件速查表中的组�?
## React 方言
- Props: camelCase
- 事件: onXxx={handler}
- 布尔属�? loading={true}

## Vue 方言
- Props: kebab-case
- 事件: @xxx="handler"
- 布尔属�? :loading="true"
```

## 方法三：使用 MCP Server

```bash
npx @aui/mcp
```

MCP Server �?AI 提供以下工具�?- `aui_search_component` �?搜索组件
- `aui_get_props` �?获取组件 Props 定义
- `aui_generate_code` �?生成组件代码
- `aui_list_examples` �?查看使用示例

## AI 对话示例

### 用户：请�?AUI 做一个登录页

**AI 输出（React）：**

```tsx
import { Page, Grid, Form, FormItem, Input, Button, Toast } from '@yaomingshan/react';

function LoginPage() {
  const handleFinish = (values: { email: string; password: string }) => {
    if (!values.email || !values.password) {
      Toast.error('请填写所有字�?);
      return;
    }
    // 登录逻辑
  };

  return (
    <Page title="登录" showNav={false}>
      <Grid cols={1} gap="lg" className="max-w-md mx-auto mt-16 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">登录到系�?/h1>
        <Form onFinish={handleFinish} layout="vertical">
          <FormItem name="email" label="邮箱" required>
            <Input type="email" placeholder="请输入邮�? />
          </FormItem>
          <FormItem name="password" label="密码" required>
            <Input type="password" placeholder="请输入密�? />
          </FormItem>
          <Button type="primary" htmlType="submit" block>登录</Button>
        </Form>
      </Grid>
    </Page>
  );
}
```

**AI 输出（Vue）：**

```vue
<script setup lang="ts">
import { Page, Grid, Form, FormItem, Input, Button, Toast } from '@yaomingshan/vue';

const form = reactive({ email: '', password: '' });

const handleFinish = () => {
  if (!form.email || !form.password) {
    Toast.error('请填写所有字�?);
    return;
  }
};

const emailRules = [
  { required: true, message: '请输入邮�? },
  { type: 'email', message: '邮箱格式不正�? },
];
</script>

<template>
  <Page title="登录" :showNav="false">
    <Grid :cols="1" gap="lg" class="max-w-md mx-auto mt-16 px-4">
      <h1 class="text-2xl font-bold text-center mb-8">登录到系�?/h1>
      <Form @finish="handleFinish" layout="vertical">
        <FormItem name="email" label="邮箱" :rules="emailRules" required>
          <Input v-model="form.email" type="email" placeholder="请输入邮�? />
        </FormItem>
        <FormItem name="password" label="密码" required>
          <Input v-model="form.password" type="password" placeholder="请输入密�? />
        </FormItem>
        <Button type="primary" html-type="submit" block>登录</Button>
      </Form>
    </Grid>
  </Page>
</template>
```

## AI 提示词模�?
�?AI 更好地使�?AUI Kit�?
```
请使�?AUI Kit (@yaomingshan/react) 构建以下界面�?
要求�?1. 使用 @yaomingshan/react 组件，禁止使用原�?HTML 标签
2. 禁止手写 CSS，使�?Tailwind �?3. 所有表单必须用 Form + Form.Item 包裹
4. 组件参考：AUI-COMPONENT-REF.md

[在这里描述你的需求]
```

## AI 宪法（完整版�?
详见 [AI 宪法页面 →](/ai-rules/)
