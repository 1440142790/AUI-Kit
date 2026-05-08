# AUI Kit 组件速查表（40+ 组件）

> AI 生成代码时参考此文档，确保 React/Vue 双框架 API 完全一致。

---

## 一、布局与导航（7个）

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| **Page** | title, showNav, onBack, platform, background, scrollable | `<Page title="首页" onBack={goBack}>...</Page>` | `<Page title="首页" @back="goBack">...</Page>` |
| **Grid** | cols, gap, align, justify | `<Grid cols={2} gap="md">...</Grid>` | `<Grid cols="2" gap="md">...</Grid>` |
| **Flex** | direction, wrap, justify, align, grow, shrink | `<Flex direction="column">...</Flex>` | `<Flex direction="column">...</Flex>` |
| **Spacer** | size, direction | `<Spacer size="lg" />` | `<Spacer size="lg" />` |
| **Tabs** | items, activeKey, onChange, type, tabPosition | `<Tabs items={items} activeKey={k} onChange={setK} />` | `<Tabs :items="items" :activeKey="k" @change="setK" />` |
| **Drawer** | visible, placement, onClose, title, size, footer | `<Drawer visible={o} placement="right" onClose={close}>...</Drawer>` | `<Drawer :visible="o" placement="right" @close="close">...</Drawer>` |
| **Menu** | items, mode, activeKey, onChange, collapsed | `<Menu items={menuData} mode="inline" />` | `<Menu :items="menuData" mode="inline" />` |

---

## 二、数据展示（8个）

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| **Table** | columns, dataSource, pagination, onRow, bordered, striped | `<Table columns={cols} dataSource={data} bordered />` | `<Table :columns="cols" :dataSource="data" bordered />` |
| **CardList** | dataSource, renderItem, columns, gap, loading | `<CardList dataSource={list} renderItem={r} columns={2} />` | `<CardList :dataSource="list" :renderItem="r" :columns="2" />` |
| **Descriptions** | items, column, bordered, labelWidth | `<Descriptions items={info} column={2} bordered />` | `<Descriptions :items="info" :column="2" bordered />` |
| **Tag** | color, closable, onClose | `<Tag color="success">已完成</Tag>` | `<Tag color="success">已完成</Tag>` |
| **Badge** | count, dot, status, overflowCount | `<Badge count={5}><Icon /></Badge>` | `<Badge :count="5"><Icon /></Badge>` |
| **Avatar** | src, size, shape, text, color | `<Avatar src={url} size="lg" shape="circle" />` | `<Avatar :src="url" size="lg" shape="circle" />` |
| **Progress** | percent, status, type, showText, strokeWidth | `<Progress percent={80} status="active" />` | `<Progress :percent="80" status="active" />` |
| **Statistic** | title, value, prefix, suffix, valueStyle, precision | `<Statistic title="用户数" value={1024} prefix="↑" />` | `<Statistic title="用户数" :value="1024" prefix="↑" />` |

---

## 三、表单与输入（11个）

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| **Form** | initialValues, onFinish, layout, labelAlign | `<Form onFinish={submit} layout="vertical">...</Form>` | `<Form @finish="submit" layout="vertical">...</Form>` |
| **Form.Item** | name, label, rules, required, error, help | `<Form.Item name="email" label="邮箱" rules={rules}>...</Form.Item>` | `<Form.Item name="email" label="邮箱" :rules="rules">...</Form.Item>` |
| **Input** | placeholder, type, prefix, suffix, allowClear, maxLength, showCount | `<Input placeholder="用户名" allowClear />` | `<Input placeholder="用户名" :allowClear="true" />` |
| **TextArea** | rows, showCount, maxLength, autoSize | `<TextArea rows={4} showCount maxLength={200} />` | `<TextArea rows="4" showCount :maxLength="200" />` |
| **Select** | options, multiple, searchable, allowClear | `<Select options={cities} searchable />` | `<Select :options="cities" searchable />` |
| **DatePicker** | format, mode, onChange, placeholder | `<DatePicker format="YYYY-MM-DD" />` | `<DatePicker format="YYYY-MM-DD" />` |
| **Upload** | action, listType, maxCount, multiple, draggable | `<Upload action="/api/upload" listType="picture" />` | `<Upload action="/api/upload" listType="picture" />` |
| **Switch** | checked, onChange, loading, size | `<Switch checked={on} onChange={setOn} />` | `<Switch :checked="on" @change="setOn" />` |
| **Radio** | options, direction, onChange | `<Radio options={opts} direction="horizontal" />` | `<Radio :options="opts" direction="horizontal" />` |
| **Checkbox** | options, checkAll, onChange | `<Checkbox options={items} />` | `<Checkbox :options="items" />` |
| **Rate** | count, allowHalf, onChange | `<Rate count={5} allowHalf />` | `<Rate :count="5" :allowHalf="true" />` |

---

## 四、反馈与交互（7个）

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| **Button** | type, size, loading, block, danger, icon, onClick | `<Button type="primary" loading={s} block onClick={sub}>提交</Button>` | `<Button type="primary" :loading="s" block @click="sub">提交</Button>` |
| **Modal** | title, visible, onOk, onCancel, footer, width | `<Modal title="提示" visible={o} onOk={ok} onCancel={close}>内容</Modal>` | `<Modal title="提示" :visible="o" @ok="ok" @cancel="close">内容</Modal>` |
| **Toast** | API: Toast.show({ content, type, duration }) | `Toast.show({content:'成功', type:'success'})` | 同左侧 |
| **Popconfirm** | title, onConfirm, onCancel, placement | `<Popconfirm title="确定删除？" onConfirm={del}><Button>删除</Button></Popconfirm>` | `<Popconfirm title="确定删除？" @confirm="del"><Button>删除</Button></Popconfirm>` |
| **Empty** | description, image | `<Empty description="暂无数据" />` | `<Empty description="暂无数据" />` |
| **Skeleton** | loading, type, rows, animated | `<Skeleton loading type="list" rows={3}>...</Skeleton>` | `<Skeleton :loading :rows="3">...</Skeleton>` |
| **Spin** | spinning, tip, size, fullscreen | `<Spin spinning={loading} tip="加载中">...</Spin>` | `<Spin :spinning="loading" tip="加载中">...</Spin>` |

---

## 五、移动端增强（4个）

| 组件 | Props | React 示例 | Vue 示例 |
|------|-------|-----------|---------|
| **BottomSheet** | visible, height, actions, onClose, title, draggable | `<BottomSheet visible={s} actions={actions} onClose={close} />` | `<BottomSheet :visible="s" :actions="actions" @close="close" />` |
| **Swiper** | autoplay, dots, loop, onChange, interval | `<Swiper autoplay dots loop>{slides}</Swiper>` | `<Swiper autoplay dots loop>{{slides}}</Swiper>` |
| **PullRefresh** | onRefresh, refreshing, pullingText | `<PullRefresh onRefresh={refresh}><List /></PullRefresh>` | `<PullRefresh @refresh="refresh"><List /></PullRefresh>` |
| **IndexBar** | data, onSelect, showAnchor, indexes | `<IndexBar data={contacts} onSelect={sel} />` | `<IndexBar :data="contacts" @select="sel" />` |

---

## 设计令牌速查

```typescript
// 颜色
colors.primary.DEFAULT    // 主色
colors.success.text       // 成功文字
colors.danger.bg         // 危险背景
colors.warning.border     // 警告边框
colors.gray[50..900]      // 中性色

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
radius.xl    // 12px
radius.full  // 9999px（药丸形）
```

---

## Props 类型速查

所有 Props 类型统一从 `@aui/core` 导入：

```typescript
import type {
  ButtonProps,
  InputProps,
  FormProps,
  FormItemProps,
  SelectProps,
  TableProps,
  ModalProps,
  PageProps,
  GridProps,
} from '@aui/core';
```
