# AI 组件速查表

> AI 生成代码时参考此文档，确保 React/Vue 双框架 API 完全一致。

## 布局与导航

| 组件 | 用途 | React 示例 | Vue 示例 |
|------|------|-----------|---------|
| **Page** | 页面容器 | `<Page title="首页" onBack={goBack}>...</Page>` | `<Page title="首页" @back="goBack">...</Page>` |
| **Grid** | 栅格布局 | `<Grid cols={2} gap="md">...</Grid>` | `<Grid cols="2" gap="md">...</Grid>` |
| **Flex** | 弹性布局 | `<Flex direction="column" gap="md">...</Flex>` | `<Flex direction="column" gap="md">...</Flex>` |
| **Spacer** | 留白 | `<Spacer size="lg" />` | `<Spacer size="lg" />` |
| **Tabs** | 标签页 | `<Tabs items={items} activeKey={k} onChange={setK} />` | `<Tabs :items="items" :activeKey="k" @change="setK" />` |
| **Drawer** | 抽屉 | `<Drawer visible={o} onClose={close}>...</Drawer>` | `<Drawer :visible="o" @close="close">...</Drawer>` |
| **Menu** | 菜单 | `<Menu items={data} mode="inline" />` | `<Menu :items="data" mode="inline" />` |

## 数据展示

| 组件 | 用途 | React 示例 | Vue 示例 |
|------|------|-----------|---------|
| **Table** | 表格 | `<Table columns={cols} dataSource={data} bordered />` | `<Table :columns="cols" :dataSource="data" bordered />` |
| **CardList** | 卡片列表 | `<CardList dataSource={list} renderItem={r} />` | `<CardList :dataSource="list" :renderItem="r" />` |
| **Descriptions** | 描述列表 | `<Descriptions items={info} column={2} bordered />` | `<Descriptions :items="info" :column="2" bordered />` |
| **Tag** | 标签 | `<Tag color="success">已完成</Tag>` | `<Tag color="success">已完成</Tag>` |
| **Badge** | 徽标 | `<Badge count={5}><Icon /></Badge>` | `<Badge :count="5"><Icon /></Badge>` |
| **Avatar** | 头像 | `<Avatar src={url} size="lg" shape="circle" />` | `<Avatar :src="url" size="lg" shape="circle" />` |
| **Progress** | 进度条 | `<Progress percent={80} status="active" />` | `<Progress :percent="80" status="active" />` |
| **Statistic** | 统计数值 | `<Statistic title="用户数" value={1024} prefix="↑" />` | `<Statistic title="用户数" :value="1024" prefix="↑" />` |

## 表单与输入

| 组件 | 用途 | React 示例 | Vue 示例 |
|------|------|-----------|---------|
| **Form** | 表单容器 | `<Form onFinish={submit} layout="vertical">...</Form>` | `<Form @finish="submit" layout="vertical">...</Form>` |
| **Form.Item** | 表单项 | `<Form.Item name="email" label="邮箱" required>...</Form.Item>` | `<Form.Item name="email" label="邮箱" required>...</Form.Item>` |
| **Input** | 输入框 | `<Input placeholder="请输入" allowClear />` | `<Input placeholder="请输入" :allowClear="true" />` |
| **TextArea** | 文本域 | `<TextArea rows={4} showCount maxLength={200} />` | `<TextArea rows="4" showCount :maxLength="200" />` |
| **Select** | 选择器 | `<Select options={cities} searchable />` | `<Select :options="cities" searchable />` |
| **DatePicker** | 日期选择 | `<DatePicker format="YYYY-MM-DD" />` | `<DatePicker format="YYYY-MM-DD" />` |
| **Switch** | 开关 | `<Switch checked={on} onChange={setOn} />` | `<Switch :checked="on" @change="setOn" />` |
| **Radio** | 单选框 | `<Radio options={opts} direction="horizontal" />` | `<Radio :options="opts" direction="horizontal" />` |
| **Checkbox** | 多选框 | `<Checkbox options={items} />` | `<Checkbox :options="items" />` |
| **Rate** | 评分 | `<Rate count={5} allowHalf />` | `<Rate :count="5" :allowHalf="true" />` |
| **Upload** | 上传 | `<Upload action="/api/upload" listType="picture" />` | `<Upload action="/api/upload" listType="picture" />` |

## 反馈与交互

| 组件 | 用途 | React 示例 | Vue 示例 |
|------|------|-----------|---------|
| **Button** | 按钮 | `<Button type="primary" loading={s} onClick={click}>提交</Button>` | `<Button type="primary" :loading="s" @click="click">提交</Button>` |
| **Modal** | 弹窗 | `<Modal visible={o} onOk={ok} onCancel={close}>...</Modal>` | `<Modal :visible="o" @ok="ok" @cancel="close">...</Modal>` |
| **Toast** | 轻提示 | `Toast.show({content:'成功', type:'success'})` | 同左侧 |
| **Popconfirm** | 气泡确认 | `<Popconfirm title="确定删除？" onConfirm={del}><Button>删除</Button></Popconfirm>` | `<Popconfirm title="确定删除？" @confirm="del"><Button>删除</Button></Popconfirm>` |
| **Empty** | 空状态 | `<Empty description="暂无数据" />` | `<Empty description="暂无数据" />` |
| **Skeleton** | 骨架屏 | `<Skeleton loading type="list" rows={3}>...</Skeleton>` | `<Skeleton :loading :rows="3">...</Skeleton>` |
| **Spin** | 加载中 | `<Spin spinning={loading} tip="加载中">...</Spin>` | `<Spin :spinning="loading" tip="加载中">...</Spin>` |

## 移动端增强

| 组件 | 用途 | React 示例 | Vue 示例 |
|------|------|-----------|---------|
| **BottomSheet** | 底部抽屉 | `<BottomSheet visible={s} actions={actions} onClose={close} />` | `<BottomSheet :visible="s" :actions="actions" @close="close" />` |
| **Swiper** | 轮播 | `<Swiper autoplay dots loop>{slides}</Swiper>` | `<Swiper autoplay dots loop>{{slides}}</Swiper>` |
| **PullRefresh** | 下拉刷新 | `<PullRefresh onRefresh={refresh}><List /></PullRefresh>` | `<PullRefresh @refresh="refresh"><List /></PullRefresh>` |
| **IndexBar** | 索引列表 | `<IndexBar data={contacts} onSelect={sel} />` | `<IndexBar :data="contacts" @select="sel" />` |

## 设计令牌速查

```typescript
// 颜色
colors.primary.DEFAULT    // #1677ff
colors.success.DEFAULT    // #52c41a
colors.warning.DEFAULT    // #faad14
colors.danger.DEFAULT     // #ff4d4f

// 间距
spacing.xs  // 4px
spacing.sm  // 8px
spacing.md  // 16px
spacing.lg  // 24px
spacing.xl  // 32px

// 圆角
radius.sm    // 2px
radius.md    // 4px
radius.lg    // 8px
radius.full  // 9999px（药丸形）
```
