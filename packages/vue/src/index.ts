/**
 * AUI Kit - Vue 3 组件库统一导出
 *
 * @example
 * import { Button, Input, Select, Table, Modal } from '@aui/vue';
 */

// ============================================================
// 布局组件
// ============================================================
export { default as Page }  from './layout/Page.vue';
export { default as Grid }  from './layout/Grid.vue';
export { default as Flex }  from './layout/Flex.vue';
export { default as Spacer } from './layout/Spacer.vue';
export { default as Tabs }  from './layout/Tabs.vue';
export { default as Drawer } from './layout/Drawer.vue';
// Menu 组件（待实现）
export { default as Menu }  from './layout/Menu.vue';

// ============================================================
// 数据展示组件
// ============================================================
export { default as Table } from './data/Table.vue';
export { default as Tag } from './data/Tag.vue';
export { default as Avatar } from './data/Avatar.vue';
export { default as Progress } from './data/Progress.vue';
export { default as Statistic } from './data/Statistic.vue';
// CardList、Descriptions、Badge（待实现）
export { default as CardList } from './data/CardList.vue';
export { default as Descriptions } from './data/Descriptions.vue';
export { default as Badge } from './data/Badge.vue';

// ============================================================
// 表单组件
// ============================================================
export { default as Input } from './feedback/Input.vue';
export { default as Select } from './form/Select.vue';
export { default as Switch } from './form/Switch.vue';
// Form、TextArea、DatePicker、Upload、Radio、Checkbox、Rate（待实现）
export { default as Form } from './form/Form.vue';
export { default as TextArea } from './form/TextArea.vue';
export { default as DatePicker } from './form/DatePicker.vue';
export { default as Upload } from './form/Upload.vue';
export { default as Radio } from './form/Radio.vue';
export { default as Checkbox } from './form/Checkbox.vue';
export { default as Rate } from './form/Rate.vue';

// ============================================================
// 反馈组件
// ============================================================
export { default as Button } from './feedback/Button.vue';
export { default as Modal } from './feedback/Modal.vue';
export { default as Empty } from './feedback/Empty.vue';
export { default as Skeleton } from './feedback/Skeleton.vue';
export { default as Spin } from './feedback/Spin.vue';
// Toast、Popconfirm（待实现）
export { default as Popconfirm } from './feedback/Popconfirm.vue';

// ============================================================
// 移动端增强组件
// ============================================================
export { default as BottomSheet } from './mobile/BottomSheet.vue';
// Swiper、PullRefresh、IndexBar（待实现）
export { default as Swiper } from './mobile/Swiper.vue';
export { default as PullRefresh } from './mobile/PullRefresh.vue';
export { default as IndexBar } from './mobile/IndexBar.vue';
