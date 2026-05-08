/**
 * AUI Kit 设计令牌 - 颜色系统
 *
 * 所有组件必须使用以下颜色，禁止硬编码颜色值。
 * AI 生成代码时必须引用此处的令牌变量。
 *
 * @example
 * // React
 * import { colors } from '@aui/core';
 * <div className={colors.primary.DEFAULT}>主色文字</div>
 *
 * // Vue
 * import { colors } from '@aui/core';
 * <div :class="colors.primary.DEFAULT">主色文字</div>
 */
declare const colors: {
    /** 主色 - 用于主要按钮、链接、强调 */
    readonly primary: {
        readonly DEFAULT: "bg-[#1677ff] text-white";
        readonly light: "bg-[#69b1ff] text-white";
        readonly dark: "bg-[#0958d9] text-white";
        readonly text: "text-[#1677ff]";
        readonly border: "border-[#1677ff]";
        readonly hover: "hover:bg-[#4096ff]";
    };
    /** 成功色 - 用于成功状态、通过状态 */
    readonly success: {
        readonly DEFAULT: "bg-[#52c41a] text-white";
        readonly light: "bg-[#95de64] text-[#389e0d]";
        readonly dark: "bg-[#389e0d] text-white";
        readonly text: "text-[#52c41a]";
        readonly border: "border-[#52c41a]";
        readonly bg: "bg-[#f6ffed]";
    };
    /** 警告色 - 用于警告状态、待处理 */
    readonly warning: {
        readonly DEFAULT: "bg-[#faad14] text-white";
        readonly light: "bg-[#ffd666] text-[#d48806]";
        readonly dark: "bg-[#d48806] text-white";
        readonly text: "text-[#faad14]";
        readonly border: "border-[#faad14]";
        readonly bg: "bg-[#fffbe6]";
    };
    /** 危险色 - 用于错误、删除、危险操作 */
    readonly danger: {
        readonly DEFAULT: "bg-[#ff4d4f] text-white";
        readonly light: "bg-[#ff7875] text-[#d9363e]";
        readonly dark: "bg-[#d9363e] text-white";
        readonly text: "text-[#ff4d4f]";
        readonly border: "border-[#ff4d4f]";
        readonly bg: "bg-[#fff2f0]";
    };
    /** 信息色 - 用于信息提示 */
    readonly info: {
        readonly DEFAULT: "bg-[#1677ff] text-white";
        readonly light: "bg-[#69b1ff] text-white";
        readonly dark: "bg-[#0958d9] text-white";
        readonly text: "text-[#1677ff]";
        readonly border: "border-[#1677ff]";
        readonly bg: "bg-[#e6f4ff]";
    };
    /** 中性色 - 用于正文、辅助、边框 */
    readonly gray: {
        readonly 50: "bg-[#fafafa] text-[#595959]";
        readonly 100: "bg-[#f5f5f5] text-[#595959]";
        readonly 200: "bg-[#f0f0f0] text-[#595959]";
        readonly 300: "bg-[#e8e8e8] text-[#595959]";
        readonly 400: "bg-[#d9d9d9] text-[#262626]";
        readonly 500: "bg-[#bfbfbf] text-[#262626]";
        readonly 600: "bg-[#8c8c8c] text-[#ffffff]";
        readonly 700: "bg-[#595959] text-[#ffffff]";
        readonly 800: "bg-[#434343] text-[#ffffff]";
        readonly 900: "bg-[#1f1f1f] text-[#ffffff]";
        readonly border: "border-[#d9d9d9]";
        readonly text: "text-[#595959]";
        readonly textSecondary: "text-[#8c8c8c]";
        readonly textTertiary: "text-[#bfbfbf]";
    };
    /** 文本颜色 */
    readonly text: {
        readonly primary: "text-[#262626]";
        readonly secondary: "text-[#595959]";
        readonly tertiary: "text-[#8c8c8c]";
        readonly disabled: "text-[#bfbfbf]";
        readonly inverse: "text-[#ffffff]";
    };
    /** 背景色 */
    readonly bg: {
        readonly layout: "bg-[#ffffff]";
        readonly container: "bg-[#fafafa]";
        readonly hover: "bg-[#f5f5f5]";
        readonly active: "bg-[#e8e8e8]";
        readonly mask: "bg-[rgba(0,0,0,0.45)]";
    };
    /** 边框颜色 */
    readonly border: {
        readonly default: "border-[#d9d9d9]";
        readonly hover: "border-[#4096ff]";
        readonly focus: "border-[#1677ff]";
        readonly error: "border-[#ff4d4f]";
        readonly success: "border-[#52c41a]";
    };
};
type ColorKey = keyof typeof colors;
type ColorShade = 'DEFAULT' | 'light' | 'dark' | 'text' | 'border' | 'bg' | 'hover';

/**
 * AUI Kit 设计令牌 - 尺寸与间距系统
 *
 * @example
 * // React
 * import { spacing, radius } from '@aui/core';
 * <div style={{ padding: spacing.md, borderRadius: radius.md }}>内容</div>
 *
 * // Vue
 * import { spacing, radius } from '@aui/core';
 * <div :style="{ padding: spacing.md, borderRadius: radius.md }">内容</div>
 */
/** 间距尺寸 */
declare const spacing: {
    readonly xs: "4px";
    readonly sm: "8px";
    readonly md: "16px";
    readonly lg: "24px";
    readonly xl: "32px";
    readonly '2xl': "40px";
    readonly '3xl': "48px";
};
/** 间距枚举值（用于 Props） */
declare const spacingKeys: readonly ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
type SpacingKey = typeof spacingKeys[number];
/** 圆角尺寸 */
declare const radius: {
    readonly none: "0";
    readonly sm: "2px";
    readonly md: "4px";
    readonly lg: "8px";
    readonly xl: "12px";
    readonly '2xl': "16px";
    readonly full: "9999px";
};
/** 圆角枚举值 */
declare const radiusKeys: readonly ["none", "sm", "md", "lg", "xl", "2xl", "full"];
type RadiusKey = typeof radiusKeys[number];
/** 字号 */
declare const fontSize: {
    readonly xs: "text-[12px]";
    readonly sm: "text-[12px]";
    readonly base: "text-[14px]";
    readonly lg: "text-[16px]";
    readonly xl: "text-[18px]";
    readonly '2xl': "text-[20px]";
    readonly '3xl': "text-[24px]";
    readonly '4xl': "text-[30px]";
};
/** 字体粗细 */
declare const fontWeight: {
    readonly normal: "font-normal";
    readonly medium: "font-medium";
    readonly semibold: "font-semibold";
    readonly bold: "font-bold";
};
/** 行高 */
declare const lineHeight: {
    readonly none: "leading-none";
    readonly tight: "leading-tight";
    readonly snug: "leading-snug";
    readonly normal: "leading-normal";
    readonly relaxed: "leading-relaxed";
    readonly loose: "leading-loose";
};
/** 阴影 */
declare const shadows: {
    readonly sm: "shadow-[0_1px_2px_0_rgba(0,0,0,0.03),0_1px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_0_rgba(0,0,0,0.02)]";
    readonly md: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]";
    readonly lg: "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]";
    readonly xl: "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]";
    readonly inner: "shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]";
    readonly none: "shadow-none";
};
/** 过渡动画时长 */
declare const transitions: {
    readonly fast: "transition-all duration-150";
    readonly normal: "transition-all duration-200";
    readonly slow: "transition-all duration-300";
};
/** Z-Index 层级 */
declare const zIndex: {
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly fixed: 1200;
    readonly modal: 1300;
    readonly popover: 1400;
    readonly toast: 1500;
};
/** 组件尺寸枚举 */
declare const sizeKeys: readonly ["xs", "sm", "md", "lg", "xl"];
type SizeKey = typeof sizeKeys[number];
/** 组件尺寸映射 */
declare const componentSizes: {
    readonly xs: {
        readonly h: "h-6";
        readonly text: "text-xs";
        readonly px: "px-2";
    };
    readonly sm: {
        readonly h: "h-8";
        readonly text: "text-sm";
        readonly px: "px-3";
    };
    readonly md: {
        readonly h: "h-10";
        readonly text: "text-base";
        readonly px: "px-4";
    };
    readonly lg: {
        readonly h: "h-12";
        readonly text: "text-lg";
        readonly px: "px-6";
    };
    readonly xl: {
        readonly h: "h-14";
        readonly text: "text-xl";
        readonly px: "px-8";
    };
};
/** 边框宽度 */
declare const borderWidth: {
    readonly none: "border-0";
    readonly sm: "border";
    readonly md: "border-2";
    readonly lg: "border-[3px]";
};

/**
 * AUI Kit - 所有组件 Props 类型定义
 *
 * 统一接口原则：
 * - 所有 Props 类型以组件名命名（如 ButtonProps, GridProps）
 * - 跨组件复用类型提取到公共类型（如 BaseComponentProps）
 * - React 和 Vue 使用完全相同的 Props 接口
 *
 * @example
 * // React
 * import type { ButtonProps } from '@aui/core';
 * const MyButton: ButtonProps = { type: 'primary', children: '提交' };
 *
 * // Vue
 * import type { ButtonProps } from '@aui/core';
 * const props: ButtonProps = { type: 'primary' };
 */
/** 框架无关的 ReactNode 类型（兼容 ReactNode 和 Vue slot） */
type ReactNode = string | number | boolean | null | undefined | void | {
    render?: () => ReactNode;
} | ReactNode[];
/** 平台类型 */
type Platform$1 = 'web' | 'mobile' | 'mini';
/** 尺寸枚举 */
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** 变体枚举 */
type Variant = 'solid' | 'outline' | 'ghost' | 'link';
/** 颜色枚举 */
type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
/** 间距枚举 */
type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
/** 圆角枚举 */
type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
/** 方向枚举 */
type Direction = 'horizontal' | 'vertical';
/** 位置枚举 */
type Placement = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
/** 所有组件的基础 Props */
interface BaseComponentProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: Record<string, string | number>;
    /** 组件 ID */
    id?: string;
    /** 平台类型（自动检测或手动指定） */
    platform?: Platform$1;
    /** 禁用状态 */
    disabled?: boolean;
}
/** 带 children 的组件 Props */
interface BaseComponentWithChildrenProps extends BaseComponentProps {
    children?: ReactNode;
}
/** Page 页面容器 */
interface PageProps extends BaseComponentWithChildrenProps {
    /** 页面标题 */
    title?: string;
    /** 是否显示导航栏 */
    showNav?: boolean;
    /** 返回按钮回调 */
    onBack?: () => void;
    /** 页面背景色 */
    background?: 'white' | 'gray' | 'transparent';
    /** 页面是否可滚动 */
    scrollable?: boolean;
}
/** Grid 栅格布局 */
interface GridProps extends BaseComponentWithChildrenProps {
    /** 列数（1-24） */
    cols?: number | {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /** 间距 */
    gap?: Spacing | number;
    /** 垂直对齐方式 */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /** 水平对齐方式 */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
/** Flex 弹性布局 */
interface FlexProps extends BaseComponentWithChildrenProps {
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
interface SpacerProps extends BaseComponentProps {
    /** 尺寸 */
    size?: Spacing | number;
    /** 方向 */
    direction?: 'horizontal' | 'vertical';
}
/** Tabs 标签页 */
interface TabsProps extends BaseComponentWithChildrenProps {
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
interface TabItem {
    key: string;
    label: ReactNode;
    children?: ReactNode;
    disabled?: boolean;
}
/** Drawer 抽屉 */
interface DrawerProps extends BaseComponentWithChildrenProps {
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
interface MenuProps extends BaseComponentWithChildrenProps {
    /** 菜单数据 */
    items: MenuItem[];
    /** 菜单模式 */
    mode?: 'horizontal' | 'vertical' | 'inline';
    /** 是否折叠（inline 模式） */
    collapsed?: boolean;
    /** 当前选中的 key */
    activeKey?: string;
    /** 切换回调 */
    onChange?: (key: string) => void;
}
interface MenuItem {
    key: string;
    label: ReactNode;
    icon?: ReactNode;
    children?: MenuItem[];
    disabled?: boolean;
}
/** Table 表格 */
interface TableProps extends BaseComponentWithChildrenProps {
    /** 列配置 */
    columns: TableColumn[];
    /** 数据源 */
    dataSource: Record<string, unknown>[];
    /** 分页配置 */
    pagination?: TablePagination | false;
    /** 行点击回调 */
    onRow?: (record: Record<string, unknown>, index: number) => {
        onClick?: () => void;
    };
    /** 是否带边框 */
    bordered?: boolean;
    /** 是否带斑马纹 */
    striped?: boolean;
    /** 是否紧凑模式 */
    size?: 'sm' | 'md' | 'lg';
    /** 加载状态 */
    loading?: boolean;
    /** 空数据描述 */
    emptyText?: ReactNode;
    /** 行类名 */
    rowClassName?: string | ((record: Record<string, unknown>, index: number) => string);
}
interface TableColumn {
    key: string;
    title: ReactNode;
    dataIndex?: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
    fixed?: 'left' | 'right';
    sortable?: boolean;
    render?: (value: unknown, record: Record<string, unknown>, index: number) => ReactNode;
}
interface TablePagination {
    current?: number;
    pageSize?: number;
    total?: number;
    onChange?: (page: number, pageSize: number) => void;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    pageSizeOptions?: string[];
}
/** CardList 卡片列表（Table 的移动端替代） */
interface CardListProps extends BaseComponentWithChildrenProps {
    /** 数据源 */
    dataSource: Record<string, unknown>[];
    /** 渲染每个卡片 */
    renderItem: (item: Record<string, unknown>, index: number) => ReactNode;
    /** 列数 */
    columns?: number;
    /** 间距 */
    gap?: Spacing;
    /** 加载状态 */
    loading?: boolean;
    /** 空数据描述 */
    emptyText?: ReactNode;
}
/** Descriptions 描述列表 */
interface DescriptionsProps extends BaseComponentWithChildrenProps {
    /** 描述项 */
    items: DescriptionsItem[];
    /** 列数 */
    column?: number;
    /** 是否带边框 */
    bordered?: boolean;
    /** 标签宽度 */
    labelWidth?: number | string;
}
interface DescriptionsItem {
    key: string;
    label: ReactNode;
    value?: ReactNode;
    span?: number;
}
/** Tag 标签 */
interface TagProps extends BaseComponentProps {
    /** 标签颜色 */
    color?: ColorType | string;
    /** 是否可关闭 */
    closable?: boolean;
    /** 关闭回调 */
    onClose?: (e: MouseEvent) => void;
    /** 标签内容 */
    children?: ReactNode;
}
/** Badge 徽标 */
interface BadgeProps extends BaseComponentWithChildrenProps {
    /** 徽标数量 */
    count?: number;
    /** 是否显示小圆点 */
    dot?: boolean;
    /** 最大数字 */
    overflowCount?: number;
    /** 徽标状态 */
    status?: 'success' | 'warning' | 'error' | 'default' | 'processing';
    /** 徽标文字 */
    text?: string;
}
/** Avatar 头像 */
interface AvatarProps extends BaseComponentProps {
    /** 头像图片地址 */
    src?: string;
    /** 头像尺寸 */
    size?: Size | number;
    /** 头像形状 */
    shape?: 'circle' | 'square';
    /** 头像文字（图片加载失败时显示） */
    text?: string;
    /** 头像颜色 */
    color?: ColorType | string;
}
/** Progress 进度条 */
interface ProgressProps extends BaseComponentProps {
    /** 进度百分比 */
    percent?: number;
    /** 进度状态 */
    status?: 'normal' | 'active' | 'success' | 'error';
    /** 进度条类型 */
    type?: 'line' | 'circle' | 'dashboard';
    /** 是否显示进度数值 */
    showText?: boolean;
    /** 进度条宽度 */
    strokeWidth?: number;
    /** 进度条颜色 */
    strokeColor?: string;
    /** 圆形进度条尺寸 */
    size?: Size | number;
}
/** Statistic 统计数值 */
interface StatisticProps extends BaseComponentProps {
    /** 标题 */
    title?: ReactNode;
    /** 数值 */
    value?: number | string;
    /** 前缀 */
    prefix?: ReactNode;
    /** 后缀 */
    suffix?: ReactNode;
    /** 数值样式 */
    valueStyle?: Record<string, string | number>;
    /** 小数位数 */
    precision?: number;
    /** 数值格式化 */
    formatter?: (value: number) => ReactNode;
}
/** Form 表单 */
interface FormProps extends BaseComponentWithChildrenProps {
    /** 表单初始值 */
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
/** Form.Item 表单项 */
interface FormItemProps extends BaseComponentWithChildrenProps {
    /** 字段名 */
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
interface FormRule {
    required?: boolean;
    message?: string;
    type?: 'string' | 'number' | 'email' | 'url' | 'phone';
    min?: number;
    max?: number;
    pattern?: RegExp;
    validator?: (value: unknown) => boolean | string;
}
/** Input 输入框 */
interface InputProps extends BaseComponentProps {
    /** 输入框类型 */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
    /** 占位文本 */
    placeholder?: string;
    /** 输入框值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 输入变化回调 */
    onChange?: (value: string) => void;
    /** 前缀图标 */
    prefix?: ReactNode;
    /** 后缀图标 */
    suffix?: ReactNode;
    /** 是否可清除 */
    allowClear?: boolean;
    /** 最大长度 */
    maxLength?: number;
    /** 是否显示字数统计 */
    showCount?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
}
/** TextArea 文本域 */
interface TextAreaProps extends BaseComponentProps {
    /** 行数 */
    rows?: number;
    /** 最大长度 */
    maxLength?: number;
    /** 是否显示字数统计 */
    showCount?: boolean;
    /** 占位文本 */
    placeholder?: string;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 变化回调 */
    onChange?: (value: string) => void;
    /** 是否可自动调整高度 */
    autoSize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
}
/** Select 选择器 */
interface SelectProps extends BaseComponentProps {
    /** 选项列表 */
    options: SelectOption[];
    /** 当前值 */
    value?: string | string[];
    /** 默认值 */
    defaultValue?: string | string[];
    /** 占位文本 */
    placeholder?: string;
    /** 是否多选 */
    multiple?: boolean;
    /** 是否可搜索 */
    searchable?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 变化回调 */
    onChange?: (value: string | string[]) => void;
    /** 是否可清除 */
    allowClear?: boolean;
    /** 下拉菜单最大高度 */
    maxHeight?: number;
}
interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    children?: SelectOption[];
}
/** DatePicker 日期选择器 */
interface DatePickerProps extends BaseComponentProps {
    /** 日期格式 */
    format?: string;
    /** 选择模式 */
    mode?: 'date' | 'week' | 'month' | 'quarter' | 'year';
    /** 当前值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 占位文本 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 变化回调 */
    onChange?: (value: string, date: Date) => void;
    /** 可选的最大日期 */
    maxDate?: Date;
    /** 可选的最小日期 */
    minDate?: Date;
}
/** Upload 上传 */
interface UploadProps extends BaseComponentProps {
    /** 上传地址 */
    action?: string;
    /** 接受的文件类型 */
    accept?: string;
    /** 文件列表类型 */
    listType?: 'text' | 'picture' | 'picture-card';
    /** 最大文件数 */
    maxCount?: number;
    /** 文件列表 */
    fileList?: UploadFile[];
    /** 默认文件列表 */
    defaultFileList?: UploadFile[];
    /** 是否多选 */
    multiple?: boolean;
    /** 是否可拖拽上传 */
    draggable?: boolean;
    /** 上传变化回调 */
    onChange?: (fileList: UploadFile[]) => void;
    /** 上传前回调 */
    beforeUpload?: (file: File) => boolean | Promise<void>;
}
interface UploadFile {
    uid: string;
    name: string;
    status: 'uploading' | 'done' | 'error';
    url?: string;
    thumbUrl?: string;
    response?: unknown;
    error?: string;
}
/** Switch 开关 */
interface SwitchProps extends BaseComponentProps {
    /** 是否选中 */
    checked?: boolean;
    /** 默认是否选中 */
    defaultChecked?: boolean;
    /** 变化回调 */
    onChange?: (checked: boolean) => void;
    /** 加载状态 */
    loading?: boolean;
    /** 选中时的内容 */
    checkedChildren?: ReactNode;
    /** 未选中时的内容 */
    unCheckedChildren?: ReactNode;
    /** 尺寸 */
    size?: 'sm' | 'md';
}
/** Radio 单选框 */
interface RadioProps extends BaseComponentProps {
    /** 选项列表 */
    options: RadioOption[];
    /** 当前值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 排列方向 */
    direction?: 'horizontal' | 'vertical';
    /** 变化回调 */
    onChange?: (value: string) => void;
    /** 是否禁用 */
    disabled?: boolean;
}
interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
/** Checkbox 多选框 */
interface CheckboxProps extends BaseComponentProps {
    /** 选项列表 */
    options: CheckboxOption[];
    /** 当前值 */
    value?: string[];
    /** 默认值 */
    defaultValue?: string[];
    /** 是否全选 */
    checkAll?: boolean;
    /** 排列方向 */
    direction?: 'horizontal' | 'vertical';
    /** 变化回调 */
    onChange?: (value: string[]) => void;
    /** 是否禁用 */
    disabled?: boolean;
}
interface CheckboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}
/** Rate 评分 */
interface RateProps extends BaseComponentProps {
    /** 星数 */
    count?: number;
    /** 当前值 */
    value?: number;
    /** 默认值 */
    defaultValue?: number;
    /** 是否允许半星 */
    allowHalf?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 变化回调 */
    onChange?: (value: number) => void;
    /** 自定义字符 */
    character?: ReactNode;
}
/** Button 按钮 */
interface ButtonProps extends BaseComponentProps {
    /** 按钮类型 */
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    /** 按钮尺寸 */
    size?: Size;
    /** 加载状态 */
    loading?: boolean;
    /** 是否为块级按钮 */
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
/** Modal 对话框 */
interface ModalProps extends BaseComponentWithChildrenProps {
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
    /** 是否可关闭 */
    closable?: boolean;
    /** 加载状态 */
    confirmLoading?: boolean;
    /** 弹窗内容区域样式 */
    bodyStyle?: Record<string, string | number>;
}
/** Toast 轻提示 */
interface ToastOptions {
    /** 内容 */
    content: ReactNode;
    /** 类型 */
    type?: 'success' | 'error' | 'warning' | 'info' | 'loading';
    /** 持续时间（毫秒），0 表示不自动关闭 */
    duration?: number;
    /** 是否显示遮罩 */
    mask?: boolean;
    /** 关闭回调 */
    onClose?: () => void;
}
/** Popconfirm 气泡确认框 */
interface PopconfirmProps extends BaseComponentWithChildrenProps {
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
/** Empty 空状态 */
interface EmptyProps extends BaseComponentProps {
    /** 描述文本 */
    description?: ReactNode;
    /** 图片 */
    image?: ReactNode | 'simple';
    /** 图片尺寸 */
    imageSize?: number;
}
/** Skeleton 骨架屏 */
interface SkeletonProps extends BaseComponentWithChildrenProps {
    /** 加载状态 */
    loading?: boolean;
    /** 骨架屏类型 */
    type?: 'text' | 'rect' | 'circle' | 'card' | 'list';
    /** 行数 */
    rows?: number;
    /** 是否显示动画 */
    animated?: boolean;
    /** 自定义宽度 */
    width?: number | string;
    /** 自定义高度 */
    height?: number | string;
}
/** Spin 加载中 */
interface SpinProps extends BaseComponentWithChildrenProps {
    /** 加载状态 */
    spinning?: boolean;
    /** 提示文字 */
    tip?: string;
    /** 加载指示器大小 */
    size?: Size;
    /** 是否全屏加载 */
    fullscreen?: boolean;
    /** 自定义加载图标 */
    indicator?: ReactNode;
}
/** BottomSheet 底部抽屉 */
interface BottomSheetProps extends BaseComponentWithChildrenProps {
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
    /** 是否可拖拽关闭 */
    draggable?: boolean;
}
interface BottomSheetAction {
    key: string;
    text: string;
    icon?: ReactNode;
    color?: ColorType | string;
    onClick?: () => void;
    danger?: boolean;
}
/** Swiper 轮播 */
interface SwiperProps extends BaseComponentWithChildrenProps {
    /** 是否自动播放 */
    autoplay?: boolean;
    /** 是否显示指示点 */
    dots?: boolean;
    /** 是否循环播放 */
    loop?: boolean;
    /** 指示点位置 */
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
interface PullRefreshProps extends BaseComponentWithChildrenProps {
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
interface IndexBarProps extends BaseComponentProps {
    /** 索引数据 */
    data: IndexBarItem[];
    /** 选中回调 */
    onSelect?: (item: IndexBarItem) => void;
    /** 是否显示索引锚点 */
    showAnchor?: boolean;
    /** 索引列表 */
    indexes?: string[];
}
interface IndexBarItem {
    /** 索引字母 */
    index: string;
    /** 该索引下的数据 */
    items: {
        key: string;
        title: string;
        avatar?: string;
        description?: string;
    }[];
}

/**
 * AUI Kit - 平台检测与适配
 *
 * @example
 * import { detectPlatform, isMobile, PlatformContext } from '@aui/core';
 *
 * // 检测当前平台
 * const platform = detectPlatform();
 * if (isMobile()) { ... }
 */
type Platform = 'web' | 'mobile' | 'mini';
/** 通用小程序环境 */
declare const isMini: boolean;
/** 移动端检测 */
declare const isMobileEnv: boolean;
/**
 * 检测当前平台
 */
declare function detectPlatform(override?: Platform): Platform;
/**
 * 快捷判断：是否为移动端（不含小程序）
 */
declare function isMobile(): boolean;
/**
 * 快捷判断：是否为 Web 端
 */
declare function isWeb(): boolean;
/**
 * 快捷判断：是否为小程序
 */
declare function isMiniProgram(): boolean;
/**
 * 根据平台返回不同的值
 */
declare function platformMatch<T>(matchers: {
    web?: T;
    mobile?: T;
    mini?: T;
}, fallback: T): T;
/**
 * 生成平台特定的 className
 */
declare function platformClass(platform: Platform, classes: Record<Platform, string>): string;
/**
 * 移动端组件映射（Web 端替代组件）
 */
declare const mobileComponentMap: Record<string, string>;
/**
 * 检查某组件在当前平台是否需要替换
 */
declare function shouldReplaceComponent(componentName: string, platform: Platform): string;

/**
 * AUI Kit - 工具函数
 */
/**
 * 合并 className（支持多参数）
 * @example
 * cx('text-sm', 'px-4', isActive && 'bg-blue-500')
 */
declare function cx(...classes: (string | boolean | undefined | null)[]): string;
declare function generateId(prefix?: string): string;
/**
 * 对象转 className 字符串
 * @example
 * cx({ 'text-sm': true, 'px-4': false }) // 'text-sm'
 */
declare function cxObject(obj: Record<string, boolean | undefined>): string;
/**
 * 深度合并对象
 */
declare function merge<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T;
/**
 * 判断值是否为空（null, undefined, ''）
 */
declare function isEmpty(value: unknown): boolean;
/**
 * 限制数值在范围内
 */
declare function clamp(value: number, min: number, max: number): number;
/**
 * 防抖函数
 */
declare function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T;
/**
 * 节流函数
 */
declare function throttle<T extends (...args: unknown[]) => void>(fn: T, delay: number): T;
/**
 * 将 camelCase 转为 kebab-case
 */
declare function kebabCase(str: string): string;
/**
 * 将 kebab-case 转为 camelCase
 */
declare function camelCase(str: string): string;
/**
 * 首字母大写
 */
declare function capitalize(str: string): string;

export { type AvatarProps, type BadgeProps, type BaseComponentProps, type BaseComponentWithChildrenProps, type BottomSheetAction, type BottomSheetProps, type ButtonProps, type CardListProps, type CheckboxOption, type CheckboxProps, type ColorKey, type ColorShade, type ColorType, type DatePickerProps, type DescriptionsItem, type DescriptionsProps, type Direction, type DrawerProps, type EmptyProps, type FlexProps, type FormItemProps, type FormProps, type FormRule, type GridProps, type IndexBarItem, type IndexBarProps, type InputProps, type MenuItem, type MenuProps, type ModalProps, type PageProps, type Placement, type Platform, type PopconfirmProps, type ProgressProps, type PullRefreshProps, type RadioOption, type RadioProps, type Radius, type RadiusKey, type RateProps, type SelectOption, type SelectProps, type Size, type SizeKey, type SkeletonProps, type SpacerProps, type Spacing, type SpacingKey, type SpinProps, type StatisticProps, type SwiperProps, type SwitchProps, type TabItem, type TableColumn, type TablePagination, type TableProps, type TabsProps, type TagProps, type TextAreaProps, type ToastOptions, type UploadFile, type UploadProps, type Variant, borderWidth, camelCase, capitalize, clamp, colors, componentSizes, cx, cxObject, debounce, detectPlatform, fontSize, fontWeight, generateId, isEmpty, isMini, isMiniProgram, isMobile, isMobileEnv, isWeb, kebabCase, lineHeight, merge, mobileComponentMap, platformClass, platformMatch, radius, radiusKeys, shadows, shouldReplaceComponent, sizeKeys, spacing, spacingKeys, throttle, transitions, zIndex };
