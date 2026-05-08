#!/usr/bin/env node

/**
 * AUI Kit CLI - 项目初始化工具
 *
 * 用法：
 *   npx @aui/cli init --framework react
 *   npx @aui/cli init --framework vue
 *   npx @aui/cli init --framework react --project my-app
 */

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import pc from 'picocolors';

const program = new Command();

program
  .name('aui')
  .description('AUI Kit CLI - AI 时代的跨框架 UI 组件体系初始化工具')
  .version('0.1.0-alpha');

program
  .command('init')
  .description('初始化 AUI Kit 项目')
  .requiredOption('-f, --framework <framework>', '框架类型：react 或 vue')
  .option('-p, --project <name>', '项目名称', 'my-aui-app')
  .option('-t, --typescript', '使用 TypeScript', true)
  .action(async (options) => {
    const { framework, project, typescript } = options;
    if (!['react', 'vue'].includes(framework)) {
      console.error(pc.red(`✖ 不支持的框架: ${framework}，请使用 react 或 vue`));
      process.exit(1);
    }

    const targetDir = path.resolve(process.cwd(), project);
    if (await fs.pathExists(targetDir)) {
      console.error(pc.red(`✖ 目录已存在: ${project}`));
      process.exit(1);
    }

    console.log(pc.cyan(`\n🚀 正在创建 AUI Kit 项目: ${project}`));
    console.log(pc.cyan(`📦 框架: ${framework} + TypeScript\n`));

    await fs.ensureDir(targetDir);

    // 1. 生成 package.json
    const pkg = {
      name: project,
      version: '0.1.0',
      private: true,
      scripts: {
        dev: framework === 'react' ? 'vite' : 'vite',
        build: framework === 'react' ? 'vite build' : 'vite build',
        preview: 'vite preview',
      },
      dependencies: framework === 'react'
        ? { react: '^18.3.0', 'react-dom': '^18.3.0', '@aui/react': 'workspace:*', '@aui/core': 'workspace:*' }
        : { vue: '^3.4.0', '@aui/vue': 'workspace:*', '@aui/core': 'workspace:*' },
      devDependencies: {
        typescript: '^5.4.0',
        vite: '^5.0.0',
        '@aui/core': 'workspace:*',
        tailwindcss: '^3.4.0',
        autoprefixer: '^10.4.0',
        postcss: '^8.4.0',
      },
    };
    await fs.writeFile(path.join(targetDir, 'package.json'), JSON.stringify(pkg, null, 2));
    console.log(pc.green('✓ package.json'));

    // 2. 生成 tailwind.config.ts
    const tailwindConfig = `import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        'aui-primary':   { DEFAULT: '#1677ff', light: '#69b1ff', dark: '#0958d9' },
        'aui-success':   { DEFAULT: '#52c41a', light: '#95de64', dark: '#389e0d' },
        'aui-warning':   { DEFAULT: '#faad14', light: '#ffd666', dark: '#d48806' },
        'aui-danger':    { DEFAULT: '#ff4d4f', light: '#ff7875', dark: '#d9363e' },
      },
    },
  },
  plugins: [],
} satisfies Config;
`;
    await fs.writeFile(path.join(targetDir, 'tailwind.config.ts'), tailwindConfig);
    console.log(pc.green('✓ tailwind.config.ts'));

    // 3. 生成 postcss.config.js
    await fs.writeFile(path.join(targetDir, 'postcss.config.js'), `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`);
    console.log(pc.green('✓ postcss.config.js'));

    // 4. 生成 AI 宪法 .cursorrules
    const cursorRules = `\
# AUI Kit - AI 组件宪法 (.cursorrules)

## 核心原则

你是一个 AUI Kit 专家，负责为用户生成高质量、跨平台一致的前端界面。

## 通用规则（所有框架必须遵守）

1. **强制使用 AUI 组件**
   - 所有 UI 必须使用 \`@aui/react\` 或 \`@aui/vue\` 组件
   - 禁止使用原生 HTML 标签（div, span, button 等）构建 UI
   - 唯一例外：布局容器（page、grid、flex 已覆盖的场景）

2. **禁止手写 CSS**
   - 所有样式必须通过 Tailwind 类实现
   - 使用设计令牌颜色（primary, success, warning, danger, info, gray）
   - 使用尺寸令牌（xs, sm, md, lg, xl）

3. **表单必须包裹在 Form + Form.Item 内**
   - 所有输入组件必须包裹在 \`<Form.Item>\` 内
   - Form.Item 必须有 \`name\` 属性对应字段名

4. **移动端适配**
   - 在 Page 组件设置 \`platform="mobile"\`
   - Modal 在移动端自动转为 BottomSheet
   - Table 在移动端自动转为 CardList

5. **组件速查表优先**
   - 优先使用速查表中的组件
   - 非必要不组合新样式

## React 方言（.tsx/.jsx 文件）
- 使用 JSX 语法
- Props 属性使用 camelCase
- 事件处理：\`onClick={handler}\`，\`onChange={handler}\`
- 布尔属性：\`loading={true}\`（不能省略）
- 样式：通过 Tailwind 类或 style 属性

## Vue 方言（.vue 文件）
- 使用 \`<template>\` 语法
- Props 属性使用 kebab-case 或 camelCase
- 事件处理：\`@click="handler"\`，\`@change="handler"\`
- 布尔属性：\`:loading="true"\`（不能省略 v-bind 前缀）
- v-model：\`v-model="value"\`

## 组件速查表

| 组件      | 用途       | React 片段                                      | Vue 片段                                           |
|-----------|------------|-------------------------------------------------|----------------------------------------------------|
| Page      | 页面容器   | \`<Page title="首页"><Content /></Page>\`         | \`<Page title="首页"><Content /></Page>\`           |
| Grid      | 栅格       | \`<Grid cols={2} gap="md">...</Grid>\`            | \`<Grid cols="2" gap="md">...</Grid>\`              |
| Table     | 表格       | \`<Table columns={cols} dataSource={data} />\`   | \`<Table :columns="cols" :dataSource="data" />\`    |
| Form      | 表单       | \`<Form onFinish={submit}>...</Form>\`            | \`<Form @finish="submit">...</Form>\`               |
| Form.Item | 表单项     | \`<Form.Item name="email" label="邮箱">...</Form.Item>\` | \`<Form.Item name="email" label="邮箱">...</Form.Item>\` |
| Button    | 按钮       | \`<Button type="primary" onClick={save}>保存</Button>\` | \`<Button type="primary" @click="save">保存</Button>\` |
| Modal     | 弹窗       | \`<Modal visible={open} onOk={submit}>...</Modal>\` | \`<Modal :visible="open" @ok="submit">...</Modal>\`  |
| Input     | 输入框     | \`<Input placeholder="用户名" />\`               | \`<Input placeholder="用户名" />\`                  |
| Select    | 选择器     | \`<Select options={opts} />\`                     | \`<Select :options="opts" />\`                      |
| Tag       | 标签       | \`<Tag color="success">完成</Tag>\`               | \`<Tag color="success">完成</Tag>\`                |
| Badge     | 徽标       | \`<Badge count={5}><Icon /></Badge>\`            | \`<Badge :count="5"><Icon /></Badge>\`             |
| Avatar    | 头像       | \`<Avatar src={url} size="lg" />\`               | \`<Avatar :src="url" size="lg" />\`               |
| Empty     | 空状态     | \`<Empty description="暂无数据" />\`             | \`<Empty description="暂无数据" />\`               |
| Skeleton  | 骨架屏     | \`<Skeleton loading type="list" rows={3} />\`    | \`<Skeleton :loading type="list" :rows="3" />\`    |
| Spin      | 加载       | \`<Spin spinning={loading} tip="加载中" />\`    | \`<Spin :spinning="loading" tip="加载中" />\`      |

## 输出规范

生成代码时：
1. 优先使用 \`@aui/react\` 或 \`@aui/vue\` 的组件
2. 禁止手写 CSS，使用 Tailwind 类
3. Props 保持 React/Vue 双版本一致
4. 每个组件包含完整 Props 类型定义
5. 移除所有 \`any\` 类型，使用正确类型
`;
    await fs.writeFile(path.join(targetDir, '.cursorrules'), cursorRules);
    console.log(pc.green('✓ .cursorrules (AI 宪法)'));

    // 5. 生成组件速查表文档
    const componentRef = `# AUI Kit 组件速查表

> AI 生成代码时参考此文档，确保 React/Vue 双框架 API 完全一致。

## 布局与导航

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| Page | title, showNav, onBack | \`<Page title="用户" onBack={goBack}>...</Page>\` | \`<Page title="用户" @back="goBack">...</Page>\` |
| Grid | cols, gap, align | \`<Grid cols={2} gap="md">...</Grid>\` | \`<Grid cols="2" gap="md">...</Grid>\` |
| Flex | direction, wrap, justify, align | \`<Flex direction="column">...</Flex>\` | \`<Flex direction="column">...</Flex>\` |
| Spacer | size | \`<Spacer size="lg" />\` | \`<Spacer size="lg" />\` |
| Tabs | items, activeKey, onChange | \`<Tabs items={items} activeKey={k} onChange={setK} />\` | \`<Tabs :items="items" :activeKey="k" @change="setK" />\` |
| Drawer | visible, placement, onClose | \`<Drawer visible={o} placement="right" onClose={close}>...</Drawer>\` | \`<Drawer :visible="o" placement="right" @close="close">...</Drawer>\` |
| Menu | items, mode, activeKey | \`<Menu items={data} mode="inline" />\` | \`<Menu :items="data" mode="inline" />\` |

## 数据展示

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| Table | columns, dataSource, pagination | \`<Table columns={cols} dataSource={data} />\` | \`<Table :columns="cols" :dataSource="data" />\` |
| CardList | dataSource, renderItem, columns | \`<CardList dataSource={list} renderItem={render} />\` | \`<CardList :dataSource="list" :renderItem="render" />\` |
| Descriptions | items, column, bordered | \`<Descriptions items={info} column={2} bordered />\` | \`<Descriptions :items="info" :column="2" bordered />\` |
| Tag | color, closable, onClose | \`<Tag color="success">已完成</Tag>\` | \`<Tag color="success">已完成</Tag>\` |
| Badge | count, dot, status | \`<Badge count={5}><Icon /></Badge>\` | \`<Badge :count="5"><Icon /></Badge>\` |
| Avatar | src, size, shape | \`<Avatar src={url} size="lg" shape="circle" />\` | \`<Avatar :src="url" size="lg" shape="circle" />\` |
| Progress | percent, status, type | \`<Progress percent={80} status="active" />\` | \`<Progress :percent="80" status="active" />\` |
| Statistic | title, value, prefix, suffix | \`<Statistic title="用户数" value={1024} prefix="↑" />\` | \`<Statistic title="用户数" :value="1024" prefix="↑" />\` |

## 表单与输入

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| Form | initialValues, onFinish, layout | \`<Form onFinish={submit} layout="vertical">...</Form>\` | \`<Form @finish="submit" layout="vertical">...</Form>\` |
| Form.Item | name, label, rules, required | \`<Form.Item name="email" label="邮箱" rules={rules}><Input /></Form.Item>\` | \`<Form.Item name="email" label="邮箱" :rules="rules"><Input /></Form.Item>\` |
| Input | placeholder, type, prefix, allowClear | \`<Input placeholder="用户名" allowClear />\` | \`<Input placeholder="用户名" :allowClear="true" />\` |
| TextArea | rows, showCount, maxLength | \`<TextArea rows={4} showCount maxLength={200} />\` | \`<TextArea rows="4" showCount :maxLength="200" />\` |
| Select | options, multiple, searchable | \`<Select options={cities} searchable />\` | \`<Select :options="cities" searchable />\` |
| DatePicker | format, mode, onChange | \`<DatePicker format="YYYY-MM-DD" />\` | \`<DatePicker format="YYYY-MM-DD" />\` |
| Upload | action, listType, maxCount | \`<Upload action="/api/upload" listType="picture" />\` | \`<Upload action="/api/upload" listType="picture" />\` |
| Switch | checked, onChange, loading | \`<Switch checked={on} onChange={setOn} />\` | \`<Switch :checked="on" @change="setOn" />\` |
| Radio | options, direction, onChange | \`<Radio options={opts} direction="horizontal" />\` | \`<Radio :options="opts" direction="horizontal" />\` |
| Checkbox | options, checkAll, onChange | \`<Checkbox options={items} />\` | \`<Checkbox :options="items" />\` |
| Rate | count, allowHalf, onChange | \`<Rate count={5} allowHalf />\` | \`<Rate :count="5" :allowHalf="true" />\` |

## 反馈与交互

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| Button | type, loading, block, onClick | \`<Button type="primary" loading={s} block onClick={sub}>提交</Button>\` | \`<Button type="primary" :loading="s" block @click="sub">提交</Button>\` |
| Modal | title, visible, onOk, onCancel | \`<Modal title="提示" visible={o} onOk={ok} onCancel={close}>内容</Modal>\` | \`<Modal title="提示" :visible="o" @ok="ok" @cancel="close">内容</Modal>\` |
| Toast | API: Toast.show({ content, type, duration }) | \`Toast.show({content:'成功', type:'success'})\` | 同左侧 |
| Popconfirm | title, onConfirm, onCancel | \`<Popconfirm title="确定删除？" onConfirm={del}><Button>删除</Button></Popconfirm>\` | \`<Popconfirm title="确定删除？" @confirm="del"><Button>删除</Button></Popconfirm>\` |
| Empty | description, image | \`<Empty description="暂无数据" />\` | \`<Empty description="暂无数据" />\` |
| Skeleton | loading, type, rows, animated | \`<Skeleton loading type="list" rows={3}><Content /></Skeleton>\` | \`<Skeleton :loading :type="\\'list\\'" :rows="3"><Content /></Skeleton>\` |
| Spin | spinning, tip, fullscreen | \`<Spin spinning={loading} tip="加载中" />\` | \`<Spin :spinning="loading" tip="加载中" />\` |

## 移动端增强

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| BottomSheet | visible, height, actions, onClose | \`<BottomSheet visible={s} actions={actions} />\` | \`<BottomSheet :visible="s" :actions="actions" />\` |
| Swiper | autoplay, dots, loop, onChange | \`<Swiper autoplay dots loop>{slides}</Swiper>\` | \`<Swiper autoplay dots loop>{{ slides }}</Swiper>\` |
| PullRefresh | onRefresh, refreshing | \`<PullRefresh onRefresh={refresh}><List /></PullRefresh>\` | \`<PullRefresh @refresh="refresh"><List /></PullRefresh>\` |
| IndexBar | data, onSelect, showAnchor | \`<IndexBar data={contacts} onSelect={sel} />\` | \`<IndexBar :data="contacts" @select="sel" />\` |
`;
    await fs.writeFile(path.join(targetDir, 'AUI-COMPONENT-REF.md'), componentRef);
    console.log(pc.green('✓ AUI-COMPONENT-REF.md'));

    // 6. 生成 src 目录结构
    await fs.ensureDir(path.join(targetDir, 'src'));
    if (framework === 'react') {
      await fs.writeFile(path.join(targetDir, 'src/main.tsx'),
        `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './index.css';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`
      );
      await fs.writeFile(path.join(targetDir, 'src/App.tsx'),
        `import { Page, Grid, Button, Input, Select } from '@aui/react';

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
];

function App() {
  return (
    <Page title="AUI Kit React 示例">
      <Grid cols={2} gap="md" className="p-4">
        <Input placeholder="请输入内容" />
        <Select options={options} placeholder="请选择" />
        <div className="col-span-2 flex gap-3">
          <Button type="primary">主要按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
        </div>
      </Grid>
    </Page>
  );
}

export default App;\n`
      );
      await fs.writeFile(path.join(targetDir, 'src/index.css'), '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
    } else {
      await fs.writeFile(path.join(targetDir, 'src/main.ts'),
        `import { createApp } from 'vue';
nimport App from './App.vue';
nimport './style.css';
n\ncreateApp(App).mount('#app');\n`
      );
      await fs.writeFile(path.join(targetDir, 'src/App.vue'),
        `<script setup lang="ts">
import { Page, Grid, Button, Input, Select } from '@aui/vue';

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
];
</script>

<template>
  <Page title="AUI Kit Vue 示例">
    <Grid :cols="2" gap="md" class="p-4">
      <Input placeholder="请输入内容" />
      <Select :options="options" placeholder="请选择" />
      <div class="col-span-2 flex gap-3">
        <Button type="primary">主要按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
      </div>
    </Grid>
  </Page>
</template>\n`
      );
      await fs.writeFile(path.join(targetDir, 'src/style.css'), '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
    }
    console.log(pc.green('✓ src/'));

    // 7. 生成 index.html
    await fs.writeFile(path.join(targetDir, 'index.html'),
      `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${project}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.${framework === 'react' ? 'tsx' : 'ts'}"></script>
  </body>
</html>\n`
    );
    console.log(pc.green('✓ index.html'));

    // 8. 生成 vite.config.ts
    await fs.writeFile(path.join(targetDir, 'vite.config.ts'),
      `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@aui/core': '${framework === 'react' ? '@aui/react' : '@aui/vue'}',
    },
  },
});
`
    );
    console.log(pc.green('✓ vite.config.ts'));

    console.log(`\n${pc.green('✨')} 项目创建完成！\n`);
    console.log(`  ${pc.bold('cd ' + project)}`);
    console.log(`  ${pc.bold('pnpm install')}`);
    console.log(`  ${pc.bold('pnpm dev')}\n`);
    console.log(`查看 AI 宪法: ${pc.cyan(project + '/.cursorrules')}`);
    console.log(`组件速查表: ${pc.cyan(project + '/AUI-COMPONENT-REF.md')}\n`);
  });

program.parse();
