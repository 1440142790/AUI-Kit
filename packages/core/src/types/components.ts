/**
 * AUI Kit - 所有组�?Props 类型定义
 *
 * 统一接口原则�? * - 所�?Props 类型以组件名命名（如 ButtonProps, GridProps�? * - 跨组件复用类型提取到公共类型（如 BaseComponentProps�? * - React �?Vue 使用完全相同�?Props 接口
 *
 * @example
 * // React
 * import type { ButtonProps } from '@yaomingshan/core';
 * const MyButton: ButtonProps = { type: 'primary', children: '提交' };
 *
 * // Vue
 * import type { ButtonProps } from '@yaomingshan/core';
 * const props: ButtonProps = { type: 'primary' };
 */

/** 框架无关�?ReactNode 类型（兼�?ReactNode �?Vue slot�?*/
type ReactNode = string | number | boolean | null | undefined | void | { render?: () => ReactNode } | ReactNode[];

// ============================================================
// 公共基础类型
// ============================================================

/** 平台类型 */
export type Platform = 'web' | 'mobile' | 'mini';

/** 尺寸枚举 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** 变体枚举 */
export type Variant = 'solid' | 'outline' | 'ghost' | 'link';

/** 颜色枚举 */
export type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';

/** 间距枚举 */
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

/** 圆角枚举 */
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/** 方向枚举 */
export type Direction = 'horizontal' | 'vertical';

/** 位置枚举 */
export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

/** 所有组件的基础 Props */
export interface BaseComponentProps {
  /** 自定义类�?*/
  className?: string;
  /** 自定义样�?*/
  style?: Record<string, string | number>;
  /** 组件 ID */
  id?: string;
  /** 平台类型（自动检测或手动指定�?*/
  platform?: Platform;
  /** 禁用状�?*/
  disabled?: boolean;
}

/** �?children 的组�?Props */
export interface BaseComponentWithChildrenProps extends BaseComponentProps {
  children?: ReactNode;
}

// ============================================================
// 布局组件
// ============================================================

/** Page 页面容器 */
export interface PageProps extends BaseComponentWithChildrenProps {
  /** 页面标题 */
  title?: string;
  /** 是否显示导航�?*/
  showNav?: boolean;
  /** 返回按钮回调 */
  onBack?: () => void;
  /** 页面背景�?*/
  background?: 'white' | 'gray' | 'transparent';
  /** 页面是否可滚�?*/
  scrollable?: boolean;
}

/** Grid 栅格布局 */
export interface GridProps extends BaseComponentWithChildrenProps {
  /** 列数�?-24�?*/
  cols?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** 间距 */
  gap?: Spacing | number;
  /** 垂直对齐方式 */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** 水平对齐方式 */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

/** Flex 弹性布局 */
export interface FlexProps extends BaseComponentWithChildrenProps {
  /** 排列方向 */
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  /** 是否换行 */
  wrap?: boolean | 'nowrap' | 'wrap' | 'wrap-reverse';
  /** 水平对齐 */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** 垂直对齐 */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Flex 增长系数 */
  grow?: boolean | number;
  /** Flex 收缩系数 */
  shrink?: boolean | number;
}

/** Spacer 留白 */
export interface SpacerProps extends BaseComponentProps {
  /** 尺寸 */
  size?: Spacing | number;
  /** 方向 */
  direction?: 'horizontal' | 'vertical';
}

/** Tabs 标签�?*/
export interface TabsProps extends BaseComponentWithChildrenProps {
  /** 选项列表 */
  items: TabItem[];
  /** 当前激活的 key */
  activeKey?: string;
  /** 切换回调 */
  onChange?: (key: string) => void;
  /** Tabs 类型 */
  type?: 'line' | 'card' | 'segment';
  /** Tab 位置 */
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** 是否可滑动（移动端） */
  scrollable?: boolean;
}

export interface TabItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
}

/** Drawer 抽屉 */
export interface DrawerProps extends BaseComponentWithChildrenProps {
  /** 是否显示 */
  visible?: boolean;
  /** 抽屉位置 */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /** 抽屉宽度/高度 */
  size?: number | string;
  /** 关闭回调 */
  onClose?: () => void;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 抽屉标题 */
  title?: ReactNode;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean;
  /** 底部操作区域 */
  footer?: ReactNode;
}

/** Menu 菜单 */
export interface MenuProps extends BaseComponentWithChildrenProps {
  /** 菜单数据 */
  items: MenuItem[];
  /** 菜单模式 */
  mode?: 'horizontal' | 'vertical' | 'inline';
  /** 是否折叠（inline 模式�?*/
  collapsed?: boolean;
  /** 当前选中�?key */
  activeKey?: string;
  /** 切换回调 */
  onChange?: (key: string) => void;
}

export interface MenuItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  children?: MenuItem[];
  disabled?: boolean;
}

// ============================================================
// 数据展示组件
// ============================================================

/** Table 表格 */
export interface TableProps extends BaseComponentWithChildrenProps {
  /** 列配�?*/
  columns: TableColumn[];
  /** 数据�?*/
  dataSource: Record<string, unknown>[];
  /** 分页配置 */
  pagination?: TablePagination | false;
  /** 行点击回�?*/
  onRow?: (record: Record<string, unknown>, index: number) => { onClick?: () => void };
  /** 是否带边�?*/
  bordered?: boolean;
  /** 是否带斑马纹 */
  striped?: boolean;
  /** 是否紧凑模式 */
  size?: 'sm' | 'md' | 'lg';
  /** 加载状�?*/
  loading?: boolean;
  /** 空数据描�?*/
  emptyText?: ReactNode;
  /** 行类�?*/
  rowClassName?: string | ((record: Record<string, unknown>, index: number) => string);
}

export interface TableColumn {
  key: string;
  title: ReactNode;
  dataIndex?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
  sortable?: boolean;
  render?: (value: unknown, record: Record<string, unknown>, index: number) => ReactNode;
}

export interface TablePagination {
  current?: number;
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  pageSizeOptions?: string[];
}

/** CardList 卡片列表（Table 的移动端替代�?*/
export interface CardListProps extends BaseComponentWithChildrenProps {
  /** 数据�?*/
  dataSource: Record<string, unknown>[];
  /** 渲染每个卡片 */
  renderItem: (item: Record<string, unknown>, index: number) => ReactNode;
  /** 列数 */
  columns?: number;
  /** 间距 */
  gap?: Spacing;
  /** 加载状�?*/
  loading?: boolean;
  /** 空数据描�?*/
  emptyText?: ReactNode;
}

/** Descriptions 描述列表 */
export interface DescriptionsProps extends BaseComponentWithChildrenProps {
  /** 描述�?*/
  items: DescriptionsItem[];
  /** 列数 */
  column?: number;
  /** 是否带边�?*/
  bordered?: boolean;
  /** 标签宽度 */
  labelWidth?: number | string;
}

export interface DescriptionsItem {
  key: string;
  label: ReactNode;
  value?: ReactNode;
  span?: number;
}

/** Tag 标签 */
export interface TagProps extends BaseComponentProps {
  /** 标签颜色 */
  color?: ColorType | string;
  /** 是否可关�?*/
  closable?: boolean;
  /** 关闭回调 */
  onClose?: (e: MouseEvent) => void;
  /** 标签内容 */
  children?: ReactNode;
}

/** Badge 徽标 */
export interface BadgeProps extends BaseComponentWithChildrenProps {
  /** 徽标数量 */
  count?: number;
  /** 是否显示小圆�?*/
  dot?: boolean;
  /** 最大数�?*/
  overflowCount?: number;
  /** 徽标状�?*/
  status?: 'success' | 'warning' | 'error' | 'default' | 'processing';
  /** 徽标文字 */
  text?: string;
}

/** Avatar 头像 */
export interface AvatarProps extends BaseComponentProps {
  /** 头像图片地址 */
  src?: string;
  /** 头像尺寸 */
  size?: Size | number;
  /** 头像形状 */
  shape?: 'circle' | 'square';
  /** 头像文字（图片加载失败时显示�?*/
  text?: string;
  /** 头像颜色 */
  color?: ColorType | string;
}

/** Progress 进度�?*/
export interface ProgressProps extends BaseComponentProps {
  /** 进度百分�?*/
  percent?: number;
  /** 进度状�?*/
  status?: 'normal' | 'active' | 'success' | 'error';
  /** 进度条类�?*/
  type?: 'line' | 'circle' | 'dashboard';
  /** 是否显示进度数�?*/
  showText?: boolean;
  /** 进度条宽�?*/
  strokeWidth?: number;
  /** 进度条颜�?*/
  strokeColor?: string;
  /** 圆形进度条尺�?*/
  size?: Size | number;
}

/** Statistic 统计数�?*/
export interface StatisticProps extends BaseComponentProps {
  /** 标题 */
  title?: ReactNode;
  /** 数�?*/
  value?: number | string;
  /** 前缀 */
  prefix?: ReactNode;
  /** 后缀 */
  suffix?: ReactNode;
  /** 数值样�?*/
  valueStyle?: Record<string, string | number>;
  /** 小数位数 */
  precision?: number;
  /** 数值格式化 */
  formatter?: (value: number) => ReactNode;
}

// ============================================================
// 表单组件
// ============================================================

/** Form 表单 */
export interface FormProps extends BaseComponentWithChildrenProps {
  /** 表单初始�?*/
  initialValues?: Record<string, unknown>;
  /** 表单提交回调 */
  onFinish?: (values: Record<string, unknown>) => void;
  /** 表单提交失败回调 */
  onFinishFailed?: (values: Record<string, unknown>, errors: Record<string, string>) => void;
  /** 表单布局 */
  layout?: 'horizontal' | 'vertical' | 'inline';
  /** 标签对齐方式 */
  labelAlign?: 'left' | 'right';
  /** 标签宽度 */
  labelWidth?: number | string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示必填星号 */
  requiredMark?: boolean;
}

/** Form.Item 表单�?*/
export interface FormItemProps extends BaseComponentWithChildrenProps {
  /** 字段�?*/
  name?: string;
  /** 标签 */
  label?: ReactNode;
  /** 校验规则 */
  rules?: FormRule[];
  /** 是否必填 */
  required?: boolean;
  /** 错误信息 */
  error?: string;
  /** 提示信息 */
  help?: ReactNode;
  /** 栅格占位 */
  span?: number;
  /** 标签宽度 */
  labelWidth?: number | string;
}

export interface FormRule {
  required?: boolean;
  message?: string;
  type?: 'string' | 'number' | 'email' | 'url' | 'phone';
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (value: unknown) => boolean | string;
}

/** Input 输入�?*/
export interface InputProps extends BaseComponentProps {
  /** 输入框类�?*/
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  /** 占位文本 */
  placeholder?: string;
  /** 输入框�?*/
  value?: string;
  /** 默认�?*/
  defaultValue?: string;
  /** 输入变化回调 */
  onChange?: (value: string) => void;
  /** 前缀图标 */
  prefix?: ReactNode;
  /** 后缀图标 */
  suffix?: ReactNode;
  /** 是否可清�?*/
  allowClear?: boolean;
  /** 最大长�?*/
  maxLength?: number;
  /** 是否显示字数统计 */
  showCount?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
}

/** TextArea 文本�?*/
export interface TextAreaProps extends BaseComponentProps {
  /** 行数 */
  rows?: number;
  /** 最大长�?*/
  maxLength?: number;
  /** 是否显示字数统计 */
  showCount?: boolean;
  /** 占位文本 */
  placeholder?: string;
  /** �?*/
  value?: string;
  /** 默认�?*/
  defaultValue?: string;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 是否可自动调整高�?*/
  autoSize?: boolean | { minRows?: number; maxRows?: number };
}

/** Select 选择�?*/
export interface SelectProps extends BaseComponentProps {
  /** 选项列表 */
  options: SelectOption[];
  /** 当前�?*/
  value?: string | string[];
  /** 默认�?*/
  defaultValue?: string | string[];
  /** 占位文本 */
  placeholder?: string;
  /** 是否多�?*/
  multiple?: boolean;
  /** 是否可搜�?*/
  searchable?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 变化回调 */
  onChange?: (value: string | string[]) => void;
  /** 是否可清�?*/
  allowClear?: boolean;
  /** 下拉菜单最大高�?*/
  maxHeight?: number;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  children?: SelectOption[];
}

/** DatePicker 日期选择�?*/
export interface DatePickerProps extends BaseComponentProps {
  /** 日期格式 */
  format?: string;
  /** 选择模式 */
  mode?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  /** 当前�?*/
  value?: string;
  /** 默认�?*/
  defaultValue?: string;
  /** 占位文本 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 变化回调 */
  onChange?: (value: string, date: Date) => void;
  /** 可选的最大日�?*/
  maxDate?: Date;
  /** 可选的最小日�?*/
  minDate?: Date;
}

/** Upload 上传 */
export interface UploadProps extends BaseComponentProps {
  /** 上传地址 */
  action?: string;
  /** 接受的文件类�?*/
  accept?: string;
  /** 文件列表类型 */
  listType?: 'text' | 'picture' | 'picture-card';
  /** 最大文件数 */
  maxCount?: number;
  /** 文件列表 */
  fileList?: UploadFile[];
  /** 默认文件列表 */
  defaultFileList?: UploadFile[];
  /** 是否多�?*/
  multiple?: boolean;
  /** 是否可拖拽上�?*/
  draggable?: boolean;
  /** 上传变化回调 */
  onChange?: (fileList: UploadFile[]) => void;
  /** 上传前回�?*/
  beforeUpload?: (file: File) => boolean | Promise<void>;
}

export interface UploadFile {
  uid: string;
  name: string;
  status: 'uploading' | 'done' | 'error';
  url?: string;
  thumbUrl?: string;
  response?: unknown;
  error?: string;
}

/** Switch 开�?*/
export interface SwitchProps extends BaseComponentProps {
  /** 是否选中 */
  checked?: boolean;
  /** 默认是否选中 */
  defaultChecked?: boolean;
  /** 变化回调 */
  onChange?: (checked: boolean) => void;
  /** 加载状�?*/
  loading?: boolean;
  /** 选中时的内容 */
  checkedChildren?: ReactNode;
  /** 未选中时的内容 */
  unCheckedChildren?: ReactNode;
  /** 尺寸 */
  size?: 'sm' | 'md';
}

/** Radio 单选框 */
export interface RadioProps extends BaseComponentProps {
  /** 选项列表 */
  options: RadioOption[];
  /** 当前�?*/
  value?: string;
  /** 默认�?*/
  defaultValue?: string;
  /** 排列方向 */
  direction?: 'horizontal' | 'vertical';
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 是否禁用 */
  disabled?: boolean;
}

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/** Checkbox 多选框 */
export interface CheckboxProps extends BaseComponentProps {
  /** 选项列表 */
  options: CheckboxOption[];
  /** 当前�?*/
  value?: string[];
  /** 默认�?*/
  defaultValue?: string[];
  /** 是否全�?*/
  checkAll?: boolean;
  /** 排列方向 */
  direction?: 'horizontal' | 'vertical';
  /** 变化回调 */
  onChange?: (value: string[]) => void;
  /** 是否禁用 */
  disabled?: boolean;
}

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/** Rate 评分 */
export interface RateProps extends BaseComponentProps {
  /** 星数 */
  count?: number;
  /** 当前�?*/
  value?: number;
  /** 默认�?*/
  defaultValue?: number;
  /** 是否允许半星 */
  allowHalf?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 变化回调 */
  onChange?: (value: number) => void;
  /** 自定义字�?*/
  character?: ReactNode;
}

// ============================================================
// 反馈组件
// ============================================================

/** Button 按钮 */
export interface ButtonProps extends BaseComponentProps {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  /** 按钮尺寸 */
  size?: Size;
  /** 加载状�?*/
  loading?: boolean;
  /** 是否为块级按�?*/
  block?: boolean;
  /** 危险按钮 */
  danger?: boolean;
  /** 图标 */
  icon?: ReactNode;
  /** 点击回调 */
  onClick?: (e: MouseEvent) => void;
  /** 按钮内容 */
  children?: ReactNode;
  /** HTML 类型 */
  htmlType?: 'button' | 'submit' | 'reset';
}

/** Modal 对话�?*/
export interface ModalProps extends BaseComponentWithChildrenProps {
  /** 是否显示 */
  visible?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 底部内容 */
  footer?: ReactNode;
  /** 确定按钮回调 */
  onOk?: () => void;
  /** 取消按钮回调 */
  onCancel?: () => void;
  /** 确定按钮文本 */
  okText?: string;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 是否显示确定按钮 */
  showOk?: boolean;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 模态框宽度 */
  width?: number | string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean;
  /** 是否可关�?*/
  closable?: boolean;
  /** 加载状�?*/
  confirmLoading?: boolean;
  /** 弹窗内容区域样式 */
  bodyStyle?: Record<string, string | number>;
}

/** Toast 轻提�?*/
export interface ToastOptions {
  /** 内容 */
  content: ReactNode;
  /** 类型 */
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading';
  /** 持续时间（毫秒）�? 表示不自动关�?*/
  duration?: number;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 关闭回调 */
  onClose?: () => void;
}

/** Popconfirm 气泡确认�?*/
export interface PopconfirmProps extends BaseComponentWithChildrenProps {
  /** 确认标题 */
  title?: ReactNode;
  /** 确认描述 */
  description?: ReactNode;
  /** 确认回调 */
  onConfirm?: () => void;
  /** 取消回调 */
  onCancel?: () => void;
  /** 确认按钮文本 */
  okText?: string;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 确认按钮类型 */
  okType?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  /** 触发方式 */
  trigger?: 'hover' | 'click' | 'focus';
  /** 位置 */
  placement?: Placement;
}

/** Empty 空状�?*/
export interface EmptyProps extends BaseComponentProps {
  /** 描述文本 */
  description?: ReactNode;
  /** 图片 */
  image?: ReactNode | 'simple';
  /** 图片尺寸 */
  imageSize?: number;
}

/** Skeleton 骨架�?*/
export interface SkeletonProps extends BaseComponentWithChildrenProps {
  /** 加载状�?*/
  loading?: boolean;
  /** 骨架屏类�?*/
  type?: 'text' | 'rect' | 'circle' | 'card' | 'list';
  /** 行数 */
  rows?: number;
  /** 是否显示动画 */
  animated?: boolean;
  /** 自定义宽�?*/
  width?: number | string;
  /** 自定义高�?*/
  height?: number | string;
}

/** Spin 加载�?*/
export interface SpinProps extends BaseComponentWithChildrenProps {
  /** 加载状�?*/
  spinning?: boolean;
  /** 提示文字 */
  tip?: string;
  /** 加载指示器大�?*/
  size?: Size;
  /** 是否全屏加载 */
  fullscreen?: boolean;
  /** 自定义加载图�?*/
  indicator?: ReactNode;
}

// ============================================================
// 移动端增强组�?// ============================================================

/** BottomSheet 底部抽屉 */
export interface BottomSheetProps extends BaseComponentWithChildrenProps {
  /** 是否显示 */
  visible?: boolean;
  /** 高度 */
  height?: number | string;
  /** 操作按钮列表 */
  actions?: BottomSheetAction[];
  /** 关闭回调 */
  onClose?: () => void;
  /** 标题 */
  title?: ReactNode;
  /** 是否可拖拽关�?*/
  draggable?: boolean;
}

export interface BottomSheetAction {
  key: string;
  text: string;
  icon?: ReactNode;
  color?: ColorType | string;
  onClick?: () => void;
  danger?: boolean;
}

/** Swiper 轮播 */
export interface SwiperProps extends BaseComponentWithChildrenProps {
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 是否显示指示�?*/
  dots?: boolean;
  /** 是否循环播放 */
  loop?: boolean;
  /** 指示点位�?*/
  dotsPosition?: 'left' | 'center' | 'right';
  /** 自动播放间隔（毫秒） */
  interval?: number;
  /** 变化回调 */
  onChange?: (index: number) => void;
  /** 当前索引 */
  currentIndex?: number;
  /** 是否无缝滚动 */
  seamless?: boolean;
}

/** PullRefresh 下拉刷新 */
export interface PullRefreshProps extends BaseComponentWithChildrenProps {
  /** 下拉刷新回调 */
  onRefresh: () => void | Promise<void>;
  /** 是否正在刷新 */
  refreshing?: boolean;
  /** 下拉提示文字 */
  pullingText?: string;
  /** 正在刷新提示文字 */
  refreshingText?: string;
  /** 完成提示文字 */
  completedText?: string;
}

/** IndexBar 索引列表 */
export interface IndexBarProps extends BaseComponentProps {
  /** 索引数据 */
  data: IndexBarItem[];
  /** 选中回调 */
  onSelect?: (item: IndexBarItem) => void;
  /** 是否显示索引锚点 */
  showAnchor?: boolean;
  /** 索引列表 */
  indexes?: string[];
}

export interface IndexBarItem {
  /** 索引字母 */
  index: string;
  /** 该索引下的数�?*/
  items: {
    key: string;
    title: string;
    avatar?: string;
    description?: string;
  }[];
}
