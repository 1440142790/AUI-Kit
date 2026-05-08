// src/tokens/colors.ts
var colors = {
  /** 主色 - 用于主要按钮、链接、强调 */
  primary: {
    DEFAULT: "bg-[#1677ff] text-white",
    light: "bg-[#69b1ff] text-white",
    dark: "bg-[#0958d9] text-white",
    text: "text-[#1677ff]",
    border: "border-[#1677ff]",
    hover: "hover:bg-[#4096ff]"
  },
  /** 成功色 - 用于成功状态、通过状态 */
  success: {
    DEFAULT: "bg-[#52c41a] text-white",
    light: "bg-[#95de64] text-[#389e0d]",
    dark: "bg-[#389e0d] text-white",
    text: "text-[#52c41a]",
    border: "border-[#52c41a]",
    bg: "bg-[#f6ffed]"
  },
  /** 警告色 - 用于警告状态、待处理 */
  warning: {
    DEFAULT: "bg-[#faad14] text-white",
    light: "bg-[#ffd666] text-[#d48806]",
    dark: "bg-[#d48806] text-white",
    text: "text-[#faad14]",
    border: "border-[#faad14]",
    bg: "bg-[#fffbe6]"
  },
  /** 危险色 - 用于错误、删除、危险操作 */
  danger: {
    DEFAULT: "bg-[#ff4d4f] text-white",
    light: "bg-[#ff7875] text-[#d9363e]",
    dark: "bg-[#d9363e] text-white",
    text: "text-[#ff4d4f]",
    border: "border-[#ff4d4f]",
    bg: "bg-[#fff2f0]"
  },
  /** 信息色 - 用于信息提示 */
  info: {
    DEFAULT: "bg-[#1677ff] text-white",
    light: "bg-[#69b1ff] text-white",
    dark: "bg-[#0958d9] text-white",
    text: "text-[#1677ff]",
    border: "border-[#1677ff]",
    bg: "bg-[#e6f4ff]"
  },
  /** 中性色 - 用于正文、辅助、边框 */
  gray: {
    50: "bg-[#fafafa] text-[#595959]",
    100: "bg-[#f5f5f5] text-[#595959]",
    200: "bg-[#f0f0f0] text-[#595959]",
    300: "bg-[#e8e8e8] text-[#595959]",
    400: "bg-[#d9d9d9] text-[#262626]",
    500: "bg-[#bfbfbf] text-[#262626]",
    600: "bg-[#8c8c8c] text-[#ffffff]",
    700: "bg-[#595959] text-[#ffffff]",
    800: "bg-[#434343] text-[#ffffff]",
    900: "bg-[#1f1f1f] text-[#ffffff]",
    border: "border-[#d9d9d9]",
    text: "text-[#595959]",
    textSecondary: "text-[#8c8c8c]",
    textTertiary: "text-[#bfbfbf]"
  },
  /** 文本颜色 */
  text: {
    primary: "text-[#262626]",
    secondary: "text-[#595959]",
    tertiary: "text-[#8c8c8c]",
    disabled: "text-[#bfbfbf]",
    inverse: "text-[#ffffff]"
  },
  /** 背景色 */
  bg: {
    layout: "bg-[#ffffff]",
    container: "bg-[#fafafa]",
    hover: "bg-[#f5f5f5]",
    active: "bg-[#e8e8e8]",
    mask: "bg-[rgba(0,0,0,0.45)]"
  },
  /** 边框颜色 */
  border: {
    default: "border-[#d9d9d9]",
    hover: "border-[#4096ff]",
    focus: "border-[#1677ff]",
    error: "border-[#ff4d4f]",
    success: "border-[#52c41a]"
  }
};

// src/tokens/spacing.ts
var spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
  "3xl": "48px"
};
var spacingKeys = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
var radius = {
  none: "0",
  sm: "2px",
  md: "4px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  full: "9999px"
};
var radiusKeys = ["none", "sm", "md", "lg", "xl", "2xl", "full"];
var fontSize = {
  xs: "text-[12px]",
  sm: "text-[12px]",
  base: "text-[14px]",
  lg: "text-[16px]",
  xl: "text-[18px]",
  "2xl": "text-[20px]",
  "3xl": "text-[24px]",
  "4xl": "text-[30px]"
};
var fontWeight = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};
var lineHeight = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose"
};
var shadows = {
  sm: "shadow-[0_1px_2px_0_rgba(0,0,0,0.03),0_1px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_0_rgba(0,0,0,0.02)]",
  md: "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
  lg: "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]",
  xl: "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]",
  inner: "shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]",
  none: "shadow-none"
};
var transitions = {
  fast: "transition-all duration-150",
  normal: "transition-all duration-200",
  slow: "transition-all duration-300"
};
var zIndex = {
  dropdown: 1e3,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500
};
var sizeKeys = ["xs", "sm", "md", "lg", "xl"];
var componentSizes = {
  xs: { h: "h-6", text: "text-xs", px: "px-2" },
  sm: { h: "h-8", text: "text-sm", px: "px-3" },
  md: { h: "h-10", text: "text-base", px: "px-4" },
  lg: { h: "h-12", text: "text-lg", px: "px-6" },
  xl: { h: "h-14", text: "text-xl", px: "px-8" }
};
var borderWidth = {
  none: "border-0",
  sm: "border",
  md: "border-2",
  lg: "border-[3px]"
};

// src/platform.ts
var UA = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
var _isMiniProgram = /micromessenger/.test(UA) && /miniprogram/.test(UA);
var isAlipay = /alipayclient/.test(UA) && /alipayminiprogram/.test(UA);
var isMini = _isMiniProgram || isAlipay;
var isMobileEnv = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(UA);
function detectPlatform(override) {
  if (override) return override;
  if (isMini) return "mini";
  if (isMobileEnv) return "mobile";
  return "web";
}
function isMobile() {
  return detectPlatform() === "mobile";
}
function isWeb() {
  return detectPlatform() === "web";
}
function isMiniProgram() {
  return detectPlatform() === "mini";
}
function platformMatch(matchers, fallback) {
  const platform = detectPlatform();
  return matchers[platform] ?? fallback;
}
function platformClass(platform, classes) {
  return classes[platform] || classes.web;
}
var mobileComponentMap = {
  Table: "CardList",
  // 移动端用卡片列表替代表格
  Modal: "BottomSheet"
  // 移动端用底部抽屉替代对话框
};
function shouldReplaceComponent(componentName, platform) {
  if (platform === "mobile" || platform === "mini") {
    return mobileComponentMap[componentName] || componentName;
  }
  return componentName;
}

// src/utils/classnames.ts
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
var idCounter = 0;
function generateId(prefix = "aui") {
  return `${prefix}-${Date.now()}-${++idCounter}`;
}
function cxObject(obj) {
  return Object.entries(obj).filter(([, v]) => v).map(([k]) => k).join(" ");
}
function merge(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] !== void 0) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
function isEmpty(value) {
  return value === null || value === void 0 || value === "";
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function debounce(fn, delay) {
  let timer;
  return ((...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  });
}
function throttle(fn, delay) {
  let last = 0;
  return ((...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  });
}
function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function camelCase(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export {
  borderWidth,
  camelCase,
  capitalize,
  clamp,
  colors,
  componentSizes,
  cx,
  cxObject,
  debounce,
  detectPlatform,
  fontSize,
  fontWeight,
  generateId,
  isEmpty,
  isMini,
  isMiniProgram,
  isMobile,
  isMobileEnv,
  isWeb,
  kebabCase,
  lineHeight,
  merge,
  mobileComponentMap,
  platformClass,
  platformMatch,
  radius,
  radiusKeys,
  shadows,
  shouldReplaceComponent,
  sizeKeys,
  spacing,
  spacingKeys,
  throttle,
  transitions,
  zIndex
};
//# sourceMappingURL=index.js.map