/**
 * @yaomingshan/vue 本地类型声明
 *
 * 这些类型和函数来�?@yaomingshan/core，在 vue 包内做本地副�? * 以避�?Vue SFC 编译器无法解�?workspace 依赖的问题�? * @yaomingshan/core 的实际类型定义在 packages/core/src/types/components.ts
 */

import type { ExtractDefaultTypes, PropType } from 'vue';

// ============================================================
// 枚举类型
// ============================================================
export type Platform = 'web' | 'mobile' | 'mini';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
export type Variant = 'solid' | 'outline' | 'ghost' | 'link';
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type Direction = 'horizontal' | 'vertical';
export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

// ============================================================
// Props 接口（来�?@yaomingshan/core�?// ============================================================

export interface BaseComponentProps {
  className?: string;
  style?: Record<string, string | number>;
  id?: string;
  platform?: Platform;
}

export interface BaseComponentWithChildrenProps extends BaseComponentProps {
  children?: unknown;
}

// Layout
export interface PageProps extends BaseComponentWithChildrenProps {
  showNav?: boolean;
  title?: string;
  background?: string;
  safeArea?: boolean;
  onBack?: () => void;
}

export interface GridProps extends BaseComponentProps {
  columns?: number | string;
  gap?: Spacing | number;
  vertical?: boolean;
}

export interface FlexProps extends BaseComponentWithChildrenProps {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  gap?: Spacing | number;
  wrap?: boolean;
  justify?: string;
  align?: string;
  vertical?: boolean;
}

export interface SpacerProps extends BaseComponentProps {
  size?: Spacing | number;
}

export interface TabsProps extends BaseComponentWithChildrenProps {
  activeKey?: string;
  onChange?: (key: string) => void;
  type?: 'line' | 'card';
}

export interface DrawerProps extends BaseComponentProps {
  open?: boolean;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  width?: string | number;
  height?: string | number;
  children?: unknown;
  onClose?: () => void;
}

export interface MenuItem {
  key: string;
  label: string;
  icon?: unknown;
  disabled?: boolean;
  children?: MenuItem[];
}

export interface MenuProps extends BaseComponentProps {
  mode?: 'vertical' | 'horizontal' | 'inline';
  selectedKeys?: string[];
  onSelect?: (key: string) => void;
  items?: MenuItem[];
}

// Data
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  size?: Size | number;
  shape?: 'circle' | 'square';
  text?: string;
  color?: ColorType | string;
}

export interface TagProps extends BaseComponentProps {
  color?: ColorType | string;
  variant?: 'solid' | 'outline';
  size?: Size;
  closable?: boolean;
  onClose?: () => void;
  children?: unknown;
}

export interface BadgeProps extends BaseComponentProps {
  count?: number;
  dot?: boolean;
  overflowCount?: number;
  color?: string;
  children?: unknown;
}

export interface TableColumn {
  key: string;
  title: string;
  dataIndex?: string;
  width?: string | number;
  render?: (value: unknown, record: unknown, index: number) => unknown;
}

export interface TablePagination {
  current?: number;
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export interface TableProps extends BaseComponentWithChildrenProps {
  columns?: TableColumn[];
  dataSource?: Record<string, unknown>[];
  pagination?: TablePagination | boolean;
  rowKey?: string;
  loading?: boolean;
  onRow?: (record: Record<string, unknown>, index: number) => Record<string, unknown>;
}

export interface ProgressProps extends BaseComponentProps {
  percent?: number;
  size?: Size;
  strokeWidth?: number;
  color?: ColorType | string;
  trackColor?: string;
  showText?: boolean;
  format?: (percent: number) => unknown;
}

export interface StatisticProps extends BaseComponentProps {
  title?: string;
  value?: string | number;
  prefix?: unknown;
  suffix?: string;
  decimal?: string;
  groupSeparator?: string;
}

export interface CardListProps extends BaseComponentWithChildrenProps {
  dataSource?: Record<string, unknown>[];
  column?: number;
  gap?: Spacing;
  renderItem?: (item: Record<string, unknown>, index: number) => unknown;
}

export interface DescriptionsItem {
  label: string;
  value?: string;
  span?: number;
}

export interface DescriptionsProps extends BaseComponentProps {
  column?: number;
  items?: DescriptionsItem[];
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
}

// Form
export interface InputProps extends BaseComponentProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: Size;
  prefix?: unknown;
  suffix?: unknown;
  onChange?: (value: string) => void;
  onPressEnter?: (e: KeyboardEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
}

export interface TextAreaProps extends BaseComponentProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  rows?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  maxLength?: number;
  onChange?: (value: string) => void;
}

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends BaseComponentProps {
  value?: string | number | string[] | number[];
  defaultValue?: string | number | string[] | number[];
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  size?: Size;
  mode?: 'single' | 'multiple';
  onChange?: (value: string | number | string[] | number[]) => void;
}

export interface DatePickerProps extends BaseComponentProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  format?: string;
  onChange?: (value: string) => void;
}

export interface UploadFile {
  uid: string;
  name: string;
  url?: string;
  status?: 'uploading' | 'done' | 'error';
  percent?: number;
}

export interface UploadProps extends BaseComponentProps {
  action?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  fileList?: UploadFile[];
  onChange?: (fileList: UploadFile[]) => void;
  onSuccess?: (res: unknown, file: UploadFile) => void;
  onError?: (err: unknown, file: UploadFile) => void;
  children?: unknown;
}

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps extends BaseComponentProps {
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
  children?: unknown;
}

export interface CheckboxOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface CheckboxProps extends BaseComponentProps {
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (value: string | number) => void;
  children?: unknown;
}

export interface FormItemProps extends BaseComponentProps {
  label?: string;
  name?: string;
  required?: boolean;
  rules?: Record<string, unknown>[];
  children?: unknown;
}

export interface FormProps extends BaseComponentWithChildrenProps {
  layout?: 'horizontal' | 'vertical' | 'inline';
  labelWidth?: string | number;
}

export interface SwitchProps extends BaseComponentProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: Size;
  activeText?: string;
  inactiveText?: string;
  onChange?: (checked: boolean) => void;
}

export interface RateProps extends BaseComponentProps {
  value?: number;
  defaultValue?: number;
  count?: number;
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  tooltips?: string[];
  onChange?: (value: number) => void;
}

// Feedback
export interface ButtonProps extends BaseComponentWithChildrenProps {
  variant?: Variant;
  size?: Size;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: unknown;
  href?: string;
  target?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface ModalProps extends BaseComponentProps {
  open?: boolean;
  title?: string | unknown;
  children?: unknown;
  footer?: unknown;
  width?: string | number;
  maskClosable?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
}

export interface EmptyProps extends BaseComponentProps {
  description?: string;
  image?: string;
  imageStyle?: Record<string, string | number>;
}

export interface SkeletonProps extends BaseComponentProps {
  active?: boolean;
  avatar?: boolean;
  title?: boolean;
  paragraph?: boolean | { rows?: number; width?: string | number };
}

export interface SpinProps extends BaseComponentProps {
  spinning?: boolean;
  size?: Size;
  tip?: string;
  fullscreen?: boolean;
}

export interface ToastOptions {
  content: string | unknown;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  icon?: unknown;
  onClose?: () => void;
}

export interface PopconfirmProps extends BaseComponentProps {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  disabled?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: unknown;
}

// Mobile
export interface BottomSheetAction {
  key: string;
  label: string;
  color?: ColorType | string;
  onClick?: () => void;
}

export interface BottomSheetProps extends BaseComponentProps {
  open?: boolean;
  title?: string;
  actions?: BottomSheetAction[];
  onClose?: () => void;
  children?: unknown;
}

export interface SwiperProps extends BaseComponentWithChildrenProps {
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
  pagination?: boolean;
  initialIndex?: number;
  onChange?: (index: number) => void;
}

export interface PullRefreshProps extends BaseComponentWithChildrenProps {
  pullingText?: string;
  releaseText?: string;
  loadingText?: string;
  onRefresh?: () => Promise<void>;
}

export interface IndexBarItem {
  key: string;
  list: { name: string; id: string }[];
}

export interface IndexBarProps extends BaseComponentProps {
  indexList?: string[];
  onSelect?: (key: string) => void;
}

// ============================================================
// 工具函数
// ============================================================

/**
 * 类名拼接（来�?@yaomingshan/core/utils�? */
export function cx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
