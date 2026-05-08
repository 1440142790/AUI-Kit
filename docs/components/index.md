# 组件总览

AUI Kit 提供 **40+** 开箱即用的跨端 UI 组件，覆盖布局、表单、数据展示、反馈和移动端增强五大类。

## 组件分类

### 布局组件

| 组件 | 说明 | 文档 |
|------|------|------|
| [Page](./layout/page) | 页面容器，自动处理安全区 | ✅ |
| [Grid](./layout/grid) | 响应式栅格布局 | ✅ |
| [Flex](./layout/flex) | 弹性盒子布局 | ✅ |
| Spacer | 留白占位组件 | 🔜 |
| Tabs | 标签页切换 | 🔜 |
| Drawer | 抽屉侧边栏 | 🔜 |
| Menu | 导航菜单 | 🔜 |

### 反馈组件

| 组件 | 说明 | 文档 |
|------|------|------|
| [Button](./feedback/button) | 按钮 | ✅ |
| [Modal](./feedback/modal) | 对话框 | ✅ |
| [Toast](./feedback/toast) | 轻提示 | ✅ |
| Empty | 空状态 | 🔜 |
| Skeleton | 骨架屏 | 🔜 |
| Spin | 加载中 | 🔜 |

### 表单组件

| 组件 | 说明 | 文档 |
|------|------|------|
| [Form](./form/form) | 表单容器 | ✅ |
| [Input](./form/input) | 输入框 | ✅ |
| [Select](./form/select) | 选择器 | ✅ |
| Switch | 开关 | 🔜 |
| DatePicker | 日期选择器 | 🔜 |
| Upload | 文件上传 | 🔜 |
| Radio | 单选框 | 🔜 |
| Checkbox | 多选框 | 🔜 |
| Rate | 评分 | 🔜 |

### 数据展示

| 组件 | 说明 | 文档 |
|------|------|------|
| [Table](./data/table) | 表格（Web）/ 卡片列表（Mobile） | ✅ |
| [Tag](./data/tag) | 标签 | ✅ |
| Badge | 微标 | 🔜 |
| Avatar | 头像 | 🔜 |
| Progress | 进度条 | 🔜 |
| Statistic | 统计数值 | 🔜 |
| CardList | 卡片列表 | 🔜 |
| Descriptions | 描述列表 | 🔜 |

### 移动端增强

| 组件 | 说明 | 文档 |
|------|------|------|
| BottomSheet | 底部弹出层 | 🔜 |
| Swiper | 轮播图 | 🔜 |
| PullRefresh | 下拉刷新 | 🔜 |
| IndexBar | 索引栏 | 🔜 |

> 🔜 = 文档待补充

## 设计原则

- **原子化样式**：所有组件使用 Tailwind CSS，无手写 CSS
- **跨框架一致**：React 和 Vue 拥有完全相同的 Props 接口
- **跨平台适配**：Web / Mobile / Mini 三端自动适配
- **强类型保障**：所有 Props 接口在 `@aui/core` 统一定义

## 快速开始

```bash
# 安装核心包
npm install @aui/core

# 安装 React 版
npm install @aui/react

# 安装 Vue 版
npm install @aui/vue
```
