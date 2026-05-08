// src/layout/Page.tsx
import React, { useMemo } from "react";
import { cx } from "@aui/core";
import { jsx, jsxs } from "react/jsx-runtime";
var Page = React.forwardRef(
  ({
    title,
    showNav = true,
    onBack,
    background = "white",
    scrollable = true,
    className,
    children
  }, ref) => {
    const bgClass = useMemo(() => {
      const map = { white: "bg-white", gray: "bg-[#fafafa]", transparent: "bg-transparent" };
      return map[background];
    }, [background]);
    return /* @__PURE__ */ jsxs("div", { ref, className: cx("flex flex-col h-screen w-full", bgClass, className), children: [
      showNav && /* @__PURE__ */ jsxs("div", { className: "flex items-center h-12 px-4 border-b border-[#f0f0f0] shrink-0 bg-white", children: [
        onBack && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBack,
            className: "flex items-center justify-center w-8 h-8 -ml-2 rounded-md hover:bg-[#f5f5f5] transition-colors mr-2",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M11.5 3.5L6 9l5.5 5.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[16px] font-semibold text-[#262626] truncate", children: title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: cx("flex-1 min-h-0", scrollable ? "overflow-auto" : ""), children })
    ] });
  }
);
Page.displayName = "Page";

// src/layout/Grid.tsx
import React2, { useMemo as useMemo2 } from "react";
import { cx as cx2 } from "@aui/core";
import { jsx as jsx2 } from "react/jsx-runtime";
var gapMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-10",
  "3xl": "gap-12"
};
var Grid = React2.forwardRef(
  ({ cols = 1, gap = "md", align, justify, className, children, ...rest }, ref) => {
    const gridStyle = useMemo2(() => {
      const colsValue = typeof cols === "number" ? cols : 1;
      return { gridTemplateColumns: `repeat(${colsValue}, minmax(0, 1fr))` };
    }, [cols]);
    const alignClass = useMemo2(() => {
      const map = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch"
      };
      return align ? map[align] : "";
    }, [align]);
    const justifyClass = useMemo2(() => {
      const map = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return justify ? map[justify] : "";
    }, [justify]);
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cx2("grid", gapMap[gap] || gapMap.md, alignClass, justifyClass, className),
        style: gridStyle,
        ...rest,
        children
      }
    );
  }
);
Grid.displayName = "Grid";

// src/layout/Flex.tsx
import React3, { useMemo as useMemo3 } from "react";
import { cx as cx3 } from "@aui/core";
import { jsx as jsx3 } from "react/jsx-runtime";
var Flex = React3.forwardRef(
  ({ direction = "row", wrap, justify, align, grow, shrink, className, children, ...rest }, ref) => {
    const directionClass = useMemo3(() => {
      const map = {
        "row": "flex-row",
        "col": "flex-col",
        "row-reverse": "flex-row-reverse",
        "col-reverse": "flex-col-reverse"
      };
      return map[direction] || "flex-row";
    }, [direction]);
    const wrapClass = useMemo3(() => {
      if (wrap === true) return "flex-wrap";
      if (wrap === false) return "flex-nowrap";
      if (typeof wrap === "string") {
        const map = {
          nowrap: "flex-nowrap",
          wrap: "flex-wrap",
          "wrap-reverse": "flex-wrap-reverse"
        };
        return map[wrap] || "";
      }
      return "";
    }, [wrap]);
    const justifyClass = useMemo3(() => {
      const map = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return justify ? map[justify] : "";
    }, [justify]);
    const alignClass = useMemo3(() => {
      const map = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      };
      return align ? map[align] : "";
    }, [align]);
    const growClass = useMemo3(() => {
      if (grow === true) return "grow";
      if (typeof grow === "number") return `grow-${grow}`;
      return "";
    }, [grow]);
    const shrinkClass = useMemo3(() => {
      if (shrink === true) return "shrink";
      if (typeof shrink === "number") return `shrink-${shrink}`;
      return "";
    }, [shrink]);
    return /* @__PURE__ */ jsx3(
      "div",
      {
        ref,
        className: cx3("flex", directionClass, wrapClass, justifyClass, alignClass, growClass, shrinkClass, className),
        ...rest,
        children
      }
    );
  }
);
Flex.displayName = "Flex";

// src/layout/Spacer.tsx
import React4, { useMemo as useMemo4 } from "react";
import { cx as cx4 } from "@aui/core";
import { jsx as jsx4 } from "react/jsx-runtime";
var sizeMap = {
  xs: "w-1 h-1",
  sm: "w-2 h-2",
  md: "w-4 h-4",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10",
  "3xl": "w-12 h-12"
};
var Spacer = React4.forwardRef(
  ({ size = "md", direction = "horizontal", className, ...rest }, ref) => {
    const classes = useMemo4(() => {
      const base = sizeMap[size] || sizeMap.md;
      return direction === "horizontal" ? base : "";
    }, [size, direction]);
    return /* @__PURE__ */ jsx4(
      "div",
      {
        ref,
        className: cx4(direction === "horizontal" ? classes : "", direction === "vertical" ? baseClasses(size) : "", className),
        ...rest
      }
    );
  }
);
function baseClasses(size) {
  const map = {
    xs: "w-1 h-1",
    sm: "w-2 h-2",
    md: "w-4 h-4",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
    "3xl": "w-12 h-12"
  };
  return map[size] || map.md;
}
Spacer.displayName = "Spacer";

// src/layout/Tabs.tsx
import React5, { useState } from "react";
import { cx as cx5 } from "@aui/core";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Tabs = React5.forwardRef(
  ({ items = [], activeKey, onChange, type = "line", tabPosition = "top", className, ...rest }, ref) => {
    const [internalActive, setInternalActive] = useState(items[0]?.key ?? "");
    const currentActive = activeKey !== void 0 ? activeKey : internalActive;
    const handleTabClick = (key) => {
      if (activeKey === void 0) setInternalActive(key);
      onChange?.(key);
    };
    return /* @__PURE__ */ jsxs2("div", { ref, className: cx5("flex", tabPosition === "left" || tabPosition === "right" ? "flex-row" : "flex-col", className), ...rest, children: [
      /* @__PURE__ */ jsx5("div", { className: cx5(
        "flex shrink-0 border-b border-[#f0f0f0]",
        tabPosition === "left" || tabPosition === "right" ? "flex-col border-b-0 border-r border-[#f0f0f0] min-w-[100px]" : ""
      ), children: items.map((item) => {
        const isActive = currentActive === item.key;
        return /* @__PURE__ */ jsx5(
          "button",
          {
            onClick: () => !item.disabled && handleTabClick(item.key),
            className: cx5(
              "px-4 py-2.5 text-[14px] transition-colors relative whitespace-nowrap",
              "disabled:text-[#bfbfbf] disabled:cursor-not-allowed",
              tabPosition === "left" || tabPosition === "right" ? "text-left justify-start" : "",
              type === "line" ? isActive ? "text-[#1677ff] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1677ff]" : "text-[#595959] hover:text-[#262626]" : "",
              type === "card" ? isActive ? "bg-white text-[#1677ff] rounded-t-lg -mb-px border-t border-l border-r border-white z-10" : "text-[#595959] hover:text-[#262626]" : "",
              type === "segment" ? isActive ? "bg-white text-[#1677ff] rounded-md shadow-sm" : "text-[#595959] hover:text-[#262626]" : ""
            ),
            children: item.label
          },
          item.key
        );
      }) }),
      /* @__PURE__ */ jsx5("div", { className: "flex-1 min-h-0 overflow-auto", children: items.map((item) => /* @__PURE__ */ jsx5("div", { className: cx5("h-full", currentActive !== item.key ? "hidden" : ""), children: item.children }, item.key)) })
    ] });
  }
);
Tabs.displayName = "Tabs";

// src/layout/Drawer.tsx
import React6, { useEffect } from "react";
import { cx as cx6 } from "@aui/core";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var Drawer = React6.forwardRef(
  ({ visible = false, placement = "right", size = 378, onClose, showClose = true, title, children, mask = true, maskClosable = true, footer, className }, ref) => {
    useEffect(() => {
      document.body.style.overflow = visible ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [visible]);
    if (!visible) return null;
    const sizeStyle = placement === "left" || placement === "right" ? { width: typeof size === "number" ? `${size}px` : size, maxWidth: "90vw" } : { height: typeof size === "number" ? `${size}px` : size, maxHeight: "90vh" };
    const placementClass = {
      right: "right-0 top-0 h-full",
      left: "left-0 top-0 h-full",
      top: "top-0 left-0 w-full",
      bottom: "bottom-0 left-0 w-full"
    }[placement];
    return /* @__PURE__ */ jsxs3("div", { className: "fixed inset-0 z-[1200]", children: [
      mask && /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-[rgba(0,0,0,0.45)]", onClick: maskClosable ? onClose : void 0 }),
      /* @__PURE__ */ jsxs3(
        "div",
        {
          ref,
          className: cx6(
            "absolute bg-white shadow-xl flex flex-col transition-transform duration-300",
            placementClass,
            className
          ),
          style: sizeStyle,
          children: [
            (title || showClose) && /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] shrink-0", children: [
              /* @__PURE__ */ jsx6("span", { className: "text-[16px] font-semibold text-[#262626]", children: title }),
              showClose && /* @__PURE__ */ jsx6("button", { onClick: onClose, className: "text-[#8c8c8c] hover:text-[#595959] transition-colors", children: /* @__PURE__ */ jsx6("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", children: /* @__PURE__ */ jsx6("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" }) }) })
            ] }),
            /* @__PURE__ */ jsx6("div", { className: "flex-1 overflow-auto px-6 py-4", children }),
            footer && /* @__PURE__ */ jsx6("div", { className: "px-6 py-4 border-t border-[#f0f0f0] shrink-0", children: footer })
          ]
        }
      )
    ] });
  }
);
Drawer.displayName = "Drawer";

// src/layout/Menu.tsx
import React7, { useState as useState2 } from "react";
import { cx as cx7 } from "@aui/core";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var Menu = React7.forwardRef(
  ({ items = [], mode = "inline", collapsed = false, activeKey, onChange, className, ...rest }, ref) => {
    const [internalActive, setInternalActive] = useState2(items[0]?.key ?? "");
    const currentActive = activeKey !== void 0 ? activeKey : internalActive;
    const handleClick = (key) => {
      if (activeKey === void 0) setInternalActive(key);
      onChange?.(key);
    };
    const renderItem = (item, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isActive = currentActive === item.key;
      const isParentActive = hasChildren && item.children.some((c) => c.key === currentActive);
      return /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsxs4(
          "button",
          {
            onClick: () => !hasChildren && handleClick(item.key),
            disabled: item.disabled,
            className: cx7(
              "w-full flex items-center gap-2 px-3 py-2 text-[14px] transition-colors rounded-md",
              mode === "horizontal" ? "justify-center" : "justify-start",
              isActive ? "bg-[#e6f4ff] text-[#1677ff]" : "text-[#595959] hover:bg-[#f5f5f5] hover:text-[#262626]",
              item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
              collapsed && mode === "inline" ? "justify-center px-2" : ""
            ),
            children: [
              item.icon && /* @__PURE__ */ jsx7("span", { className: "shrink-0", children: item.icon }),
              (!collapsed || mode !== "inline") && /* @__PURE__ */ jsx7("span", { className: "truncate", children: item.label })
            ]
          }
        ),
        hasChildren && (!collapsed || mode !== "inline") && /* @__PURE__ */ jsx7("div", { className: cx7("ml-4", mode === "horizontal" ? "absolute top-full left-0 mt-1 min-w-[160px] bg-white rounded-lg shadow-lg border border-[#f0f0f0] py-1" : ""), children: item.children.map((child) => renderItem(child, level + 1)) })
      ] }, item.key);
    };
    const containerClass = cx7(
      mode === "horizontal" ? "flex items-center gap-1" : "",
      mode === "inline" ? "flex flex-col gap-1" : "",
      mode === "vertical" ? "flex flex-col gap-1 border-r border-[#f0f0f0] pr-4" : "",
      className
    );
    return /* @__PURE__ */ jsx7("div", { ref, className: containerClass, ...rest, children: items.map((item) => renderItem(item)) });
  }
);
Menu.displayName = "Menu";

// src/data/Table.tsx
import React10 from "react";
import { cx as cx10 } from "@aui/core";

// src/feedback/Empty.tsx
import React8, { useMemo as useMemo5 } from "react";
import { cx as cx8 } from "@aui/core";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var SimpleSVG = () => /* @__PURE__ */ jsxs5("svg", { width: "64", height: "40", viewBox: "0 0 64 40", fill: "none", children: [
  /* @__PURE__ */ jsx8("path", { d: "M8 8h48v24H8z", stroke: "#d9d9d9", strokeWidth: "2", strokeDasharray: "4 2" }),
  /* @__PURE__ */ jsx8("path", { d: "M24 20h16M32 14v12", stroke: "#d9d9d9", strokeWidth: "2", strokeLinecap: "round" })
] });
var Empty = React8.forwardRef(
  ({ description = "\u6682\u65E0\u6570\u636E", image = "default", imageSize, className, ...rest }, ref) => {
    const content = useMemo5(() => {
      if (image === "simple") return /* @__PURE__ */ jsx8(SimpleSVG, {});
      if (typeof image === "string") return null;
      if (image) return image;
      return /* @__PURE__ */ jsx8(SimpleSVG, {});
    }, [image]);
    return /* @__PURE__ */ jsxs5(
      "div",
      {
        ref,
        className: cx8("flex flex-col items-center justify-center py-12 px-4", className),
        ...rest,
        children: [
          /* @__PURE__ */ jsx8("div", { style: imageSize ? { width: imageSize, height: imageSize } : {}, className: "mb-4 opacity-60", children: content }),
          description && /* @__PURE__ */ jsx8("span", { className: "text-[14px] text-[#8c8c8c]", children: description })
        ]
      }
    );
  }
);
Empty.displayName = "Empty";

// src/feedback/Spin.tsx
import React9, { useMemo as useMemo6 } from "react";
import { cx as cx9 } from "@aui/core";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var spinSizeMap = {
  xs: "w-4 h-4 border-[2px]",
  sm: "w-6 h-6 border-[2px]",
  md: "w-10 h-10 border-[3px]",
  lg: "w-14 h-14 border-[4px]",
  xl: "w-20 h-20 border-[5px]"
};
var Spin = React9.forwardRef(
  ({ spinning = true, tip, size = "md", fullscreen = false, indicator, className, children, ...rest }, ref) => {
    const spinnerClass = useMemo6(() => {
      return cx9(
        "rounded-full border-[#d9d9d9] border-t-[#1677ff]",
        spinSizeMap[size]
      );
    }, [size]);
    if (fullscreen) {
      if (!spinning) return null;
      return /* @__PURE__ */ jsx9("div", { className: "fixed inset-0 z-[1500] flex items-center justify-center bg-[rgba(255,255,255,0.8)]", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsx9("div", { className: cx9(spinnerClass, "animate-spin") }),
        tip && /* @__PURE__ */ jsx9("span", { className: "text-[14px] text-[#595959]", children: tip })
      ] }) });
    }
    return /* @__PURE__ */ jsxs6("div", { ref, className: cx9("relative inline-flex", className), ...rest, children: [
      /* @__PURE__ */ jsx9("div", { className: cx9(spinning ? "opacity-50 pointer-events-none" : "", "transition-opacity"), children }),
      spinning && !children && /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsx9("div", { className: cx9(spinnerClass, "animate-spin") }),
        tip && /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#8c8c8c]", children: tip })
      ] }) }),
      spinning && children && /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 flex items-center justify-center bg-white/60", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsx9("div", { className: cx9(spinnerClass, "animate-spin") }),
        tip && /* @__PURE__ */ jsx9("span", { className: "text-[12px] text-[#8c8c8c]", children: tip })
      ] }) })
    ] });
  }
);
Spin.displayName = "Spin";

// src/data/Table.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var Table = React10.forwardRef(
  ({ columns = [], dataSource = [], bordered = false, striped = false, size = "md", loading = false, emptyText, onRow, rowClassName, className, pagination, ...rest }, ref) => {
    const rowHeight = size === "sm" ? "h-9" : size === "lg" ? "h-14" : "h-11";
    const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
    return /* @__PURE__ */ jsxs7("div", { className: "w-full overflow-auto", children: [
      /* @__PURE__ */ jsx10(Spin, { spinning: loading, children: /* @__PURE__ */ jsxs7(
        "table",
        {
          ref,
          className: cx10(
            "w-full border-collapse",
            bordered ? "border border-[#f0f0f0]" : "",
            className
          ),
          ...rest,
          children: [
            /* @__PURE__ */ jsx10("thead", { children: /* @__PURE__ */ jsx10("tr", { className: "bg-[#fafafa]", children: columns.map((col) => /* @__PURE__ */ jsx10(
              "th",
              {
                className: cx10(
                  "text-left px-4 font-medium text-[#262626]",
                  textSize,
                  bordered ? "border border-[#f0f0f0]" : "border-b border-[#f0f0f0]",
                  col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "",
                  col.fixed ? col.fixed === "left" ? "sticky left-0 bg-[#fafafa] z-10" : "sticky right-0 bg-[#fafafa] z-10" : ""
                ),
                style: { width: col.width },
                children: col.title
              },
              col.key
            )) }) }),
            /* @__PURE__ */ jsx10("tbody", { children: dataSource.length === 0 ? /* @__PURE__ */ jsx10("tr", { children: /* @__PURE__ */ jsx10("td", { colSpan: columns.length, className: "p-0", children: /* @__PURE__ */ jsx10(Empty, { description: emptyText ?? "\u6682\u65E0\u6570\u636E" }) }) }) : dataSource.map((record, index) => {
              const rowProps = onRow?.(record, index) ?? {};
              const rowClass = typeof rowClassName === "function" ? rowClassName(record, index) : rowClassName ?? "";
              return /* @__PURE__ */ jsx10(
                "tr",
                {
                  className: cx10(
                    rowHeight,
                    striped && index % 2 === 1 ? "bg-[#fafafa]" : "",
                    "hover:bg-[#f5f5f5] transition-colors",
                    rowClass
                  ),
                  ...rowProps,
                  children: columns.map((col) => /* @__PURE__ */ jsx10(
                    "td",
                    {
                      className: cx10(
                        "px-4 text-[#262626]",
                        textSize,
                        bordered ? "border border-[#f0f0f0]" : "",
                        col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : ""
                      ),
                      children: col.render ? col.render(record[col.dataIndex ?? col.key], record, index) : col.dataIndex ? String(record[col.dataIndex] ?? "") : ""
                    },
                    col.key
                  ))
                },
                index
              );
            }) })
          ]
        }
      ) }),
      pagination && pagination !== false && /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-end gap-2 mt-4 px-4 py-2", children: [
        /* @__PURE__ */ jsxs7("span", { className: "text-sm text-[#595959]", children: [
          "\u5171 ",
          pagination.total ?? dataSource.length,
          " \u6761"
        ] }),
        /* @__PURE__ */ jsx10("div", { className: "flex gap-1", children: Array.from({ length: Math.ceil((pagination.total ?? dataSource.length) / (pagination.pageSize ?? 10)) }).map((_, i) => /* @__PURE__ */ jsx10(
          "button",
          {
            className: cx10(
              "w-8 h-8 rounded text-sm border transition-colors",
              (pagination.current ?? 1) === i + 1 ? "bg-[#1677ff] text-white border-[#1677ff]" : "bg-white text-[#595959] border-[#d9d9d9] hover:border-[#1677ff]"
            ),
            onClick: () => pagination.onChange?.(i + 1, pagination.pageSize ?? 10),
            children: i + 1
          },
          i
        )) })
      ] })
    ] });
  }
);
Table.displayName = "Table";

// src/data/CardList.tsx
import React12 from "react";
import { cx as cx12 } from "@aui/core";

// src/feedback/Skeleton.tsx
import React11, { useMemo as useMemo8 } from "react";
import { cx as cx11 } from "@aui/core";
import { Fragment, jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var Skeleton = React11.forwardRef(
  ({ loading = true, type = "text", rows = 3, animated = true, width, height, className, children, ...rest }, ref) => {
    const skeletonClass = useMemo8(() => {
      const base = cx11(
        "bg-[#f0f0f0] rounded",
        animated ? "animate-pulse" : ""
      );
      return base;
    }, [animated]);
    const renderContent = () => {
      if (type === "text") {
        return /* @__PURE__ */ jsx11("div", { className: "space-y-2 w-full", children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsx11(
          "div",
          {
            className: cx11(skeletonClass),
            style: {
              width: i === rows - 1 ? "60%" : "100%",
              height: height ?? 16
            }
          },
          i
        )) });
      }
      if (type === "circle") {
        return /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "rounded-full"), style: { width: width || 40, height: height || 40 } });
      }
      if (type === "rect") {
        return /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass), style: { width: width ?? "100%", height: height ?? 100 } });
      }
      if (type === "card") {
        return /* @__PURE__ */ jsxs8("div", { className: "space-y-3 w-full", children: [
          /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-full h-40 rounded-lg") }),
          /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-3/4 h-4") }),
          /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-1/2 h-3") })
        ] });
      }
      if (type === "list") {
        return /* @__PURE__ */ jsx11("div", { className: "space-y-4 w-full", children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-10 h-10 rounded-full shrink-0") }),
          /* @__PURE__ */ jsxs8("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-1/2 h-4") }),
            /* @__PURE__ */ jsx11("div", { className: cx11(skeletonClass, "w-1/3 h-3") })
          ] })
        ] }, i)) });
      }
      return null;
    };
    if (!loading) return /* @__PURE__ */ jsx11(Fragment, { children });
    return /* @__PURE__ */ jsx11("div", { ref, className: cx11(className), ...rest, children: renderContent() });
  }
);
Skeleton.displayName = "Skeleton";

// src/data/CardList.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var gapMap2 = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-10",
  "3xl": "gap-12"
};
var CardList = React12.forwardRef(
  ({ dataSource = [], renderItem, columns = 1, gap = "md", loading = false, emptyText, className, ...rest }, ref) => {
    if (loading) {
      return /* @__PURE__ */ jsx12("div", { ref, className: cx12("grid", gapMap2[gap], className), style: { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }, ...rest, children: Array.from({ length: columns * 2 }).map((_, i) => /* @__PURE__ */ jsx12(Skeleton, { type: "card", loading: true }, i)) });
    }
    if (dataSource.length === 0) {
      return /* @__PURE__ */ jsx12(Empty, { description: emptyText ?? "\u6682\u65E0\u6570\u636E" });
    }
    return /* @__PURE__ */ jsx12("div", { ref, className: cx12("grid", gapMap2[gap], className), style: { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }, ...rest, children: dataSource.map((item, index) => /* @__PURE__ */ jsx12("div", { children: renderItem(item, index) }, item.id ?? index)) });
  }
);
CardList.displayName = "CardList";

// src/data/Descriptions.tsx
import React13, { useMemo as useMemo9 } from "react";
import { cx as cx13 } from "@aui/core";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var Descriptions = React13.forwardRef(
  ({ items = [], column = 3, bordered = false, labelWidth, className, ...rest }, ref) => {
    const groupedItems = useMemo9(() => {
      const groups = [];
      for (let i = 0; i < items.length; i += column) {
        groups.push(items.slice(i, i + column));
      }
      return groups;
    }, [items, column]);
    return /* @__PURE__ */ jsx13("div", { ref, className: cx13("w-full", className), ...rest, children: groupedItems.map((group, gi) => /* @__PURE__ */ jsxs9("div", { className: cx13("flex", bordered ? "border border-[#f0f0f0] rounded-lg overflow-hidden mb-3" : "mb-2"), children: [
      group.map((item, ii) => /* @__PURE__ */ jsxs9(React13.Fragment, { children: [
        /* @__PURE__ */ jsx13(
          "div",
          {
            className: cx13(
              "px-4 py-3 text-[14px] bg-[#fafafa] text-[#8c8c8c] shrink-0",
              bordered ? "border-r border-[#f0f0f0]" : "w-auto"
            ),
            style: labelWidth ? { width: typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth } : {},
            children: item.label
          }
        ),
        /* @__PURE__ */ jsx13(
          "div",
          {
            className: cx13("px-4 py-3 text-[14px] text-[#262626] flex-1", bordered ? "border-r border-[#f0f0f0] last:border-r-0" : ""),
            style: { span: item.span },
            children: item.value ?? "-"
          }
        )
      ] }, item.key)),
      group.length < column && Array.from({ length: column - group.length }).map((_, i) => /* @__PURE__ */ jsxs9(React13.Fragment, { children: [
        /* @__PURE__ */ jsx13("div", { className: cx13("px-4 py-3 bg-[#fafafa]", bordered ? "border-r border-[#f0f0f0]" : "shrink-0 w-auto"), style: labelWidth ? { width: typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth } : {} }),
        /* @__PURE__ */ jsx13("div", { className: cx13("px-4 py-3 flex-1", bordered ? "border-r border-[#f0f0f0] last:border-r-0" : "") })
      ] }, `empty-${i}`))
    ] }, gi)) });
  }
);
Descriptions.displayName = "Descriptions";

// src/data/Tag.tsx
import React14, { useMemo as useMemo10 } from "react";
import { cx as cx14 } from "@aui/core";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var colorMap = {
  primary: "bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]",
  success: "bg-[#f6ffed] text-[#52c41a] border-[#52c41a]",
  warning: "bg-[#fffbe6] text-[#faad14] border-[#faad14]",
  danger: "bg-[#fff2f0] text-[#ff4d4f] border-[#ff4d4f]",
  info: "bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]",
  gray: "bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]"
};
var Tag = React14.forwardRef(
  ({ color, closable, onClose, children, className, ...rest }, ref) => {
    const classes = useMemo10(() => {
      const base = "inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded font-medium border";
      if (!color) return cx14(base, "bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]", className);
      if (Object.keys(colorMap).includes(color)) return cx14(base, colorMap[color], className);
      return cx14(base, "border", className);
    }, [color, className]);
    const textColor = useMemo10(() => {
      if (!color || Object.keys(colorMap).includes(color)) return {};
      return { color, borderColor: color };
    }, [color]);
    return /* @__PURE__ */ jsxs10("span", { ref, className: classes, style: textColor, ...rest, children: [
      children,
      closable && /* @__PURE__ */ jsx14(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            onClose?.(e);
          },
          className: "ml-1 hover:opacity-70 transition-opacity",
          children: /* @__PURE__ */ jsx14("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "currentColor", children: /* @__PURE__ */ jsx14("path", { d: "M5 0a5 5 0 100 10A5 5 0 005 0zm2 7L6 5l1 1 1-1-1-1-1 1-1-1 1-1 1 1 1 1z" }) })
        }
      )
    ] });
  }
);
Tag.displayName = "Tag";

// src/data/Badge.tsx
import React15, { useMemo as useMemo11 } from "react";
import { cx as cx15 } from "@aui/core";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var statusColor = {
  success: "bg-[#52c41a]",
  warning: "bg-[#faad14]",
  error: "bg-[#ff4d4f]",
  default: "bg-[#8c8c8c]",
  processing: "bg-[#1677ff]"
};
var Badge = React15.forwardRef(
  ({ count, dot = false, overflowCount = 99, status, text, className, children, ...rest }, ref) => {
    const badgeClass = useMemo11(() => {
      if (dot) return cx15("w-2 h-2 rounded-full", statusColor[status ?? "default"] ?? statusColor.default);
      return cx15(
        "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full",
        "text-[10px] font-medium text-white",
        statusColor[status ?? "default"] ?? "bg-[#ff4d4f]"
      );
    }, [dot, status]);
    const displayCount = useMemo11(() => {
      if (dot) return null;
      if (typeof count !== "number") return null;
      return count > overflowCount ? `${overflowCount}+` : count;
    }, [count, dot, overflowCount]);
    return /* @__PURE__ */ jsxs11("span", { ref, className: cx15("relative inline-flex", className), ...rest, children: [
      children,
      displayCount !== null && /* @__PURE__ */ jsx15("span", { className: cx15("absolute -top-1 -right-1", badgeClass), children: displayCount > 0 ? displayCount : null }),
      dot && /* @__PURE__ */ jsx15("span", { className: cx15("absolute -top-1 -right-1", badgeClass) })
    ] });
  }
);
Badge.displayName = "Badge";

// src/data/Avatar.tsx
import React16, { useState as useState3 } from "react";
import { cx as cx16 } from "@aui/core";
import { jsx as jsx16 } from "react/jsx-runtime";
var sizeMap2 = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-14 h-14 text-xl"
};
var colorMap2 = {
  primary: "bg-[#1677ff]",
  success: "bg-[#52c41a]",
  warning: "bg-[#faad14]",
  danger: "bg-[#ff4d4f]",
  info: "bg-[#1677ff]",
  gray: "bg-[#8c8c8c]"
};
var Avatar = React16.forwardRef(
  ({ src, size = "md", shape = "circle", text, color = "primary", className, ...rest }, ref) => {
    const [imgError, setImgError] = useState3(false);
    const showText = !src || imgError;
    const sizeClass = typeof size === "number" ? "" : sizeMap2[size];
    const sizeStyle = typeof size === "number" ? { width: size, height: size } : {};
    const shapeClass = shape === "circle" ? "rounded-full" : "rounded-lg";
    const bgClass = typeof color === "string" && !Object.keys(colorMap2).includes(color) ? "" : colorMap2[color] || colorMap2.primary;
    return /* @__PURE__ */ jsx16(
      "div",
      {
        ref,
        className: cx16(
          "flex items-center justify-center overflow-hidden font-medium text-white shrink-0 select-none",
          sizeClass,
          shapeClass,
          !showText || text ? bgClass : "",
          className
        ),
        style: sizeStyle,
        ...rest,
        children: showText ? /* @__PURE__ */ jsx16("span", { children: text?.[0]?.toUpperCase() ?? "?" }) : /* @__PURE__ */ jsx16(
          "img",
          {
            src,
            alt: "",
            className: "w-full h-full object-cover",
            onError: () => setImgError(true)
          }
        )
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/data/Progress.tsx
import React17 from "react";
import { cx as cx17 } from "@aui/core";
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
var statusColor2 = {
  normal: "bg-[#1677ff]",
  active: "bg-[#1677ff]",
  success: "bg-[#52c41a]",
  error: "bg-[#ff4d4f]"
};
var Progress = React17.forwardRef(
  ({ percent = 0, status = "normal", type = "line", showText = true, strokeWidth = 8, strokeColor, size = "md", className }, ref) => {
    const displayPercent = Math.min(Math.max(percent, 0), 100);
    if (type === "circle") {
      const r = 70;
      const circumference = 2 * Math.PI * r;
      const strokeDashoffset = circumference * (1 - displayPercent / 100);
      const sizeVal = typeof size === "number" ? size : size === "sm" ? 60 : size === "lg" ? 160 : 120;
      return /* @__PURE__ */ jsxs12("div", { ref, className: cx17("relative inline-flex items-center justify-center", className), style: { width: sizeVal, height: sizeVal }, children: [
        /* @__PURE__ */ jsxs12("svg", { width: sizeVal, height: sizeVal, viewBox: "0 0 100 100", children: [
          /* @__PURE__ */ jsx17("circle", { cx: "50", cy: "50", r, fill: "none", stroke: "#f0f0f0", strokeWidth: "8" }),
          /* @__PURE__ */ jsx17(
            "circle",
            {
              cx: "50",
              cy: "50",
              r,
              fill: "none",
              stroke: strokeColor ?? statusColor2[status],
              strokeWidth: "8",
              strokeLinecap: "round",
              strokeDasharray: circumference,
              strokeDashoffset,
              transform: "rotate(-90 50 50)",
              style: { transition: "stroke-dashoffset 0.3s" }
            }
          )
        ] }),
        showText && /* @__PURE__ */ jsxs12("span", { className: "absolute text-[14px] font-medium text-[#262626]", children: [
          displayPercent,
          "%"
        ] })
      ] });
    }
    return /* @__PURE__ */ jsx17("div", { ref, className: cx17("w-full", className), children: /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx17(
        "div",
        {
          className: cx17(
            "flex-1 rounded-full bg-[#f0f0f0] overflow-hidden"
          ),
          style: { height: typeof strokeWidth === "number" ? strokeWidth : 8 },
          children: /* @__PURE__ */ jsx17(
            "div",
            {
              className: cx17("h-full rounded-full transition-all duration-300", statusColor2[status]),
              style: {
                width: `${displayPercent}%`,
                backgroundColor: strokeColor
              }
            }
          )
        }
      ),
      showText && /* @__PURE__ */ jsxs12("span", { className: "text-[14px] font-medium text-[#262626] shrink-0 w-10 text-right", children: [
        displayPercent,
        "%"
      ] })
    ] }) });
  }
);
Progress.displayName = "Progress";

// src/data/Statistic.tsx
import React18, { useMemo as useMemo13 } from "react";
import { cx as cx18 } from "@aui/core";
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
var Statistic = React18.forwardRef(
  ({ title, value, prefix, suffix, valueStyle, precision, formatter, className, ...rest }, ref) => {
    const displayValue = useMemo13(() => {
      if (formatter) return formatter(typeof value === "number" ? value : parseFloat(String(value)));
      if (typeof value === "number" && precision !== void 0) {
        return value.toFixed(precision);
      }
      return String(value ?? "");
    }, [value, precision, formatter]);
    return /* @__PURE__ */ jsxs13("div", { ref, className: cx18("flex flex-col", className), ...rest, children: [
      title && /* @__PURE__ */ jsx18("span", { className: "text-[14px] text-[#8c8c8c] mb-1", children: title }),
      /* @__PURE__ */ jsxs13("div", { className: "flex items-baseline gap-1", children: [
        prefix && /* @__PURE__ */ jsx18("span", { className: "text-[24px] text-[#262626]", children: prefix }),
        /* @__PURE__ */ jsx18("span", { className: "text-[24px] font-bold text-[#262626]", style: valueStyle, children: displayValue }),
        suffix && /* @__PURE__ */ jsx18("span", { className: "text-[14px] text-[#8c8c8c]", children: suffix })
      ] })
    ] });
  }
);
Statistic.displayName = "Statistic";

// src/form/Form.tsx
import React19, { createContext, useContext, useState as useState4, useCallback, useMemo as useMemo14 } from "react";
import { cx as cx19 } from "@aui/core";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
var FormContext = createContext(null);
function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used within Form");
  return ctx;
}
var Form = React19.forwardRef(
  ({ initialValues = {}, onFinish, onFinishFailed, layout = "vertical", labelWidth, children, className, ...rest }, ref) => {
    const [values, setValues] = useState4(initialValues);
    const [errors, setErrors] = useState4({});
    const setFieldValue = useCallback((name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }, []);
    const validateField = useCallback(async (name, rules) => {
      if (!rules || rules.length === 0) return true;
      const value = values[name];
      for (const rule of rules) {
        if (rule.required && (value === void 0 || value === null || value === "")) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? "\u6B64\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879" }));
          return false;
        }
        if (rule.type === "email" && typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E" }));
          return false;
        }
        if (rule.min !== void 0 && typeof value === "string" && value.length < rule.min) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? `\u6700\u5C11 ${rule.min} \u4E2A\u5B57\u7B26` }));
          return false;
        }
        if (rule.max !== void 0 && typeof value === "string" && value.length > rule.max) {
          setErrors((prev) => ({ ...prev, [name]: rule.message ?? `\u6700\u591A ${rule.max} \u4E2A\u5B57\u7B26` }));
          return false;
        }
      }
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
      return true;
    }, [values]);
    const handleFinish = useCallback(async (e) => {
      e.preventDefault();
      const allValid = await Promise.all(
        Object.keys(values).map((name) => validateField(name))
      );
      if (allValid.every(Boolean)) {
        onFinish?.(values);
      } else {
        onFinishFailed?.(values, errors);
      }
    }, [values, errors, onFinish, onFinishFailed, validateField]);
    const layoutClass = useMemo14(() => ({
      vertical: "flex-col",
      horizontal: "flex-row items-center",
      inline: "flex-row items-center flex-wrap gap-2"
    }), []);
    const contextValue = useMemo14(() => ({
      values,
      errors,
      setFieldValue,
      validateField,
      layout,
      labelWidth
    }), [values, errors, layout, labelWidth]);
    return /* @__PURE__ */ jsx19(FormContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx19(
      "form",
      {
        ref,
        onSubmit: handleFinish,
        className: cx19("flex gap-3", layoutClass[layout], className),
        ...rest,
        children
      }
    ) });
  }
);
Form.displayName = "Form";
var FormItem = React19.forwardRef(
  ({ name, label, rules, required, error, help, labelWidth, span, children, className }, ref) => {
    const { layout, errors, setFieldValue, validateField } = useFormContext();
    const fieldError = name ? error ?? errors[name] : void 0;
    const handleChange = useCallback((value) => {
      if (name) setFieldValue(name, value);
    }, [name, setFieldValue]);
    const labelWidthStyle = useMemo14(() => {
      if (!label || layout === "vertical") return {};
      return { width: typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth, minWidth: typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth };
    }, [label, layout, labelWidth]);
    const isVertical = layout === "vertical";
    return /* @__PURE__ */ jsxs14(
      "div",
      {
        ref,
        className: cx19(
          "flex flex-col",
          span ? `col-span-${span}` : "",
          className
        ),
        children: [
          label && /* @__PURE__ */ jsxs14(
            "label",
            {
              className: cx19(
                "text-[14px] text-[#262626] mb-1 shrink-0",
                required ? "required" : ""
              ),
              style: labelWidthStyle,
              children: [
                label,
                required && /* @__PURE__ */ jsx19("span", { className: "text-[#ff4d4f] ml-1", children: "*" })
              ]
            }
          ),
          React19.isValidElement(children) ? React19.cloneElement(children, {
            onChange: (v) => {
              handleChange(v);
              children.props.onChange?.(v);
            }
          }) : children,
          (fieldError || help) && /* @__PURE__ */ jsx19("span", { className: cx19("text-xs mt-1", fieldError ? "text-[#ff4d4f]" : "text-[#8c8c8c]"), children: fieldError || help })
        ]
      }
    );
  }
);
FormItem.displayName = "FormItem";

// src/feedback/Input.tsx
import React20, { useState as useState5, useCallback as useCallback2, useMemo as useMemo15 } from "react";
import { cx as cx20 } from "@aui/core";
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
var Input = React20.forwardRef(
  ({
    type = "text",
    placeholder,
    value,
    defaultValue,
    onChange,
    prefix,
    suffix,
    allowClear = false,
    maxLength,
    showCount = false,
    readOnly = false,
    disabled = false,
    className,
    style,
    ...rest
  }, ref) => {
    const [internalValue, setInternalValue] = useState5(defaultValue ?? "");
    const [focused, setFocused] = useState5(false);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value ?? "" : internalValue;
    const currentLength = String(currentValue).length;
    const handleChange = useCallback2(
      (e) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e.target.value);
      },
      [isControlled, onChange]
    );
    const handleClear = useCallback2(() => {
      if (!isControlled) setInternalValue("");
      onChange?.("");
    }, [isControlled, onChange]);
    const wrapperClasses = useMemo15(
      () => cx20(
        "flex items-center rounded-md border transition-all duration-200 bg-white",
        "focus-within:border-[#1677ff] focus-within:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]",
        disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed" : "border-[#d9d9d9] hover:border-[#4096ff]",
        className
      ),
      [disabled, className]
    );
    return /* @__PURE__ */ jsxs15("div", { className: cx20("relative inline-flex w-full", wrapperClasses), style: { height: "38px", ...style }, children: [
      prefix && /* @__PURE__ */ jsx20("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0", children: prefix }),
      /* @__PURE__ */ jsx20(
        "input",
        {
          ref,
          type,
          value: currentValue,
          placeholder,
          maxLength,
          readOnly,
          disabled,
          className: cx20(
            "flex-1 min-w-0 border-none outline-none bg-transparent text-[14px] text-[#262626]",
            "placeholder:text-[#bfbfbf]",
            "disabled:text-[#bfbfbf] disabled:cursor-not-allowed",
            prefix ? "pl-10" : "pl-3",
            suffix || allowClear || showCount ? "pr-10" : "pr-3"
          ),
          onChange: handleChange,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          ...rest
        }
      ),
      allowClear && currentValue && !disabled && /* @__PURE__ */ jsx20(
        "button",
        {
          type: "button",
          onClick: handleClear,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] hover:text-[#595959]",
          children: /* @__PURE__ */ jsx20("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", children: /* @__PURE__ */ jsx20("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" }) })
        }
      ),
      suffix && !allowClear && /* @__PURE__ */ jsx20("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0", children: suffix }),
      showCount && maxLength && /* @__PURE__ */ jsxs15("span", { className: cx20(
        "absolute right-3 top-1/2 -translate-y-1/2 text-xs",
        currentLength >= maxLength ? "text-[#ff4d4f]" : "text-[#8c8c8c]"
      ), children: [
        currentLength,
        "/",
        maxLength
      ] })
    ] });
  }
);
Input.displayName = "Input";

// src/form/TextArea.tsx
import React21, { useState as useState6, useCallback as useCallback3 } from "react";
import { cx as cx21 } from "@aui/core";
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
var TextArea = React21.forwardRef(
  ({ rows = 4, maxLength, showCount = false, placeholder, value, defaultValue, onChange, autoSize, disabled = false, className, style, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState6(defaultValue ?? "");
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value ?? "" : internalValue;
    const currentLength = String(currentValue).length;
    const handleChange = useCallback3((e) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e.target.value);
    }, [isControlled, onChange]);
    return /* @__PURE__ */ jsxs16("div", { className: "relative", children: [
      /* @__PURE__ */ jsx21(
        "textarea",
        {
          ref,
          rows,
          value: currentValue,
          placeholder,
          maxLength,
          disabled,
          onChange: handleChange,
          className: cx21(
            "w-full border border-[#d9d9d9] rounded-md px-3 py-2 text-[14px] text-[#262626]",
            "outline-none transition-all duration-200 resize-none",
            "placeholder:text-[#bfbfbf]",
            "focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]",
            disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed text-[#bfbfbf]" : "",
            showCount ? "pb-6" : "",
            className
          ),
          style,
          ...rest
        }
      ),
      showCount && maxLength && /* @__PURE__ */ jsxs16("span", { className: cx21(
        "absolute bottom-2 right-3 text-xs",
        currentLength >= maxLength ? "text-[#ff4d4f]" : "text-[#8c8c8c]"
      ), children: [
        currentLength,
        "/",
        maxLength
      ] })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/feedback/Select.tsx
import React22, { useState as useState7, useRef, useEffect as useEffect2, useMemo as useMemo17 } from "react";
import { cx as cx22 } from "@aui/core";
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
var Select = React22.forwardRef(
  ({
    options = [],
    value,
    defaultValue,
    placeholder = "\u8BF7\u9009\u62E9",
    multiple = false,
    searchable = false,
    disabled = false,
    allowClear = false,
    onChange,
    className
  }, ref) => {
    const [open, setOpen] = useState7(false);
    const [internalValue, setInternalValue] = useState7(
      multiple ? defaultValue ?? [] : defaultValue ?? ""
    );
    const [search, setSearch] = useState7("");
    const [highlightedIndex, setHighlightedIndex] = useState7(-1);
    const containerRef = useRef(null);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value ?? (multiple ? [] : "") : internalValue;
    const selectedLabels = useMemo17(() => {
      if (multiple) {
        return currentValue.map((v) => options.find((o) => o.value === v)?.label).filter(Boolean);
      }
      return options.find((o) => o.value === currentValue)?.label ?? "";
    }, [currentValue, options, multiple]);
    const filteredOptions = useMemo17(() => {
      if (!search) return options;
      return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));
    }, [options, search]);
    useEffect2(() => {
      const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
          setSearch("");
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSelect = (opt) => {
      if (multiple) {
        const arr = [...currentValue];
        const idx = arr.indexOf(opt.value);
        if (idx === -1) arr.push(opt.value);
        else arr.splice(idx, 1);
        if (!isControlled) setInternalValue(arr);
        onChange?.(arr);
      } else {
        if (!isControlled) setInternalValue(opt.value);
        onChange?.(opt.value);
        setOpen(false);
        setSearch("");
      }
    };
    const isSelected = (optValue) => multiple ? currentValue.includes(optValue) : currentValue === optValue;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, filteredOptions.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        handleSelect(filteredOptions[highlightedIndex]);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const displayText = multiple ? selectedLabels.length > 0 ? `\u5DF2\u9009 ${selectedLabels.length} \u9879` : placeholder : selectedLabels || placeholder;
    return /* @__PURE__ */ jsxs17("div", { ref, className: cx22("relative inline-flex w-full", className), onKeyDown: handleKeyDown, children: [
      /* @__PURE__ */ jsxs17(
        "div",
        {
          ref: containerRef,
          onClick: () => !disabled && setOpen(!open),
          className: cx22(
            "flex items-center justify-between w-full rounded-md border cursor-pointer transition-all duration-200",
            "bg-white px-3",
            disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed" : "border-[#d9d9d9] hover:border-[#4096ff]",
            open ? "border-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.1)]" : ""
          ),
          style: { minHeight: "38px" },
          children: [
            /* @__PURE__ */ jsx22("span", { className: cx22("text-[14px] truncate", selectedLabels ? "text-[#262626]" : "text-[#bfbfbf]"), children: displayText }),
            /* @__PURE__ */ jsx22("svg", { className: cx22("shrink-0 transition-transform", open ? "rotate-180" : ""), width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ jsx22("path", { d: "M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4 6 8.825z" }) })
          ]
        }
      ),
      open && /* @__PURE__ */ jsxs17("div", { className: "absolute top-full left-0 right-0 mt-1 bg-white rounded-md border border-[#d9d9d9] shadow-lg z-[1000] max-h-60 overflow-auto", children: [
        searchable && /* @__PURE__ */ jsx22("div", { className: "p-2 border-b border-[#f0f0f0]", children: /* @__PURE__ */ jsx22(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "\u641C\u7D22...",
            className: "w-full px-2 py-1 text-sm border border-[#d9d9d9] rounded focus:outline-none focus:border-[#1677ff]",
            autoFocus: true
          }
        ) }),
        filteredOptions.length === 0 ? /* @__PURE__ */ jsx22("div", { className: "px-3 py-2 text-[#8c8c8c] text-sm", children: "\u65E0\u5339\u914D\u9009\u9879" }) : filteredOptions.map((opt, idx) => /* @__PURE__ */ jsxs17(
          "div",
          {
            onClick: () => !opt.disabled && handleSelect(opt),
            className: cx22(
              "px-3 py-2 text-[14px] cursor-pointer flex items-center justify-between",
              opt.disabled ? "text-[#bfbfbf] cursor-not-allowed" : "text-[#262626] hover:bg-[#f5f5f5]",
              isSelected(opt.value) ? "bg-[#e6f4ff] text-[#1677ff]" : "",
              highlightedIndex === idx ? "bg-[#f5f5f5]" : ""
            ),
            children: [
              /* @__PURE__ */ jsx22("span", { children: opt.label }),
              isSelected(opt.value) && /* @__PURE__ */ jsx22("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "#1677ff", children: /* @__PURE__ */ jsx22("path", { d: "M10.28 2.28L4.5 8.063 1.72 5.28a.75.75 0 00-1.06 1.06l3.25 3.25a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06z" }) })
            ]
          },
          opt.value
        ))
      ] })
    ] });
  }
);
Select.displayName = "Select";

// src/form/DatePicker.tsx
import React23, { useState as useState8 } from "react";
import { cx as cx23 } from "@aui/core";
import { jsx as jsx23, jsxs as jsxs18 } from "react/jsx-runtime";
var DatePicker = React23.forwardRef(
  ({ format = "YYYY-MM-DD", mode = "date", value, defaultValue, placeholder = "\u8BF7\u9009\u62E9\u65E5\u671F", disabled = false, onChange, className, ...rest }, ref) => {
    const [open, setOpen] = useState8(false);
    const [selected, setSelected] = useState8(defaultValue ?? "");
    const isControlled = value !== void 0;
    const formatDate = (d) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    };
    const handleConfirm = () => {
      const val = selected || formatDate(/* @__PURE__ */ new Date());
      if (!isControlled) setSelected(val);
      onChange?.(val, new Date(val));
      setOpen(false);
    };
    const displayValue = isControlled ? value ?? "" : selected;
    return /* @__PURE__ */ jsxs18("div", { ref, className: cx23("relative inline-flex w-full", className), children: [
      /* @__PURE__ */ jsxs18(
        "div",
        {
          onClick: () => !disabled && setOpen(!open),
          className: cx23(
            "flex items-center justify-between w-full h-10 px-3 rounded-md border cursor-pointer transition-all duration-200",
            disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed" : "border-[#d9d9d9] hover:border-[#4096ff]",
            open ? "border-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.1)]" : ""
          ),
          children: [
            /* @__PURE__ */ jsx23("span", { className: displayValue ? "text-[14px] text-[#262626]" : "text-[14px] text-[#bfbfbf]", children: displayValue || placeholder }),
            /* @__PURE__ */ jsx23("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", className: "text-[#8c8c8c] shrink-0", children: /* @__PURE__ */ jsx23("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm2.5 7.5L7 10V3.5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round" }) })
          ]
        }
      ),
      open && /* @__PURE__ */ jsxs18("div", { className: "absolute top-full left-0 mt-1 bg-white rounded-lg border border-[#f0f0f0] shadow-lg z-[1000] p-4 min-w-[280px]", children: [
        /* @__PURE__ */ jsx23(
          "input",
          {
            type: "date",
            value: displayValue,
            onChange: (e) => {
              if (!isControlled) setSelected(e.target.value);
            },
            className: "w-full border border-[#d9d9d9] rounded px-3 py-2 text-[14px] outline-none focus:border-[#1677ff]"
          }
        ),
        /* @__PURE__ */ jsxs18("div", { className: "flex justify-end gap-2 mt-3", children: [
          /* @__PURE__ */ jsx23(
            "button",
            {
              onClick: () => setOpen(false),
              className: "px-3 py-1 text-sm rounded border border-[#d9d9d9] text-[#595959]",
              children: "\u53D6\u6D88"
            }
          ),
          /* @__PURE__ */ jsx23(
            "button",
            {
              onClick: handleConfirm,
              className: "px-3 py-1 text-sm rounded bg-[#1677ff] text-white",
              children: "\u786E\u5B9A"
            }
          )
        ] })
      ] })
    ] });
  }
);
DatePicker.displayName = "DatePicker";

// src/form/Upload.tsx
import React24, { useState as useState9, useRef as useRef2 } from "react";
import { cx as cx24 } from "@aui/core";
import { jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
var Upload = React24.forwardRef(
  ({ action, listType = "text", maxCount, fileList = [], defaultFileList = [], multiple = false, draggable = false, accept, onChange, beforeUpload, className, ...rest }, ref) => {
    const [internalList, setInternalList] = useState9(defaultFileList);
    const isControlled = fileList.length > 0;
    const currentList = isControlled ? fileList : internalList;
    const inputRef = useRef2(null);
    const updateList = (newList) => {
      if (!isControlled) setInternalList(newList);
      onChange?.(newList);
    };
    const handleFiles = async (files) => {
      const arr = Array.from(files);
      const newFiles = [];
      for (const file of arr) {
        if (maxCount && currentList.length + newFiles.length >= maxCount) break;
        const uid = `file-${Date.now()}-${Math.random()}`;
        const item = { uid, name: file.name, status: "uploading" };
        newFiles.push(item);
        updateList([...currentList, ...newFiles]);
        if (beforeUpload) {
          const result = await beforeUpload(file);
          if (result === false) {
            updateList(currentList.filter((f) => f.uid !== uid));
            continue;
          }
        }
        if (action) {
          try {
            await new Promise((r) => setTimeout(r, 1e3));
            updateList([
              ...currentList,
              ...newFiles.map((f) => f.uid === uid ? { ...f, status: "done", url: URL.createObjectURL(file) } : f)
            ]);
          } catch {
            updateList(currentList.map((f) => f.uid === uid ? { ...f, status: "error" } : f));
          }
        } else {
          updateList(currentList.map((f) => f.uid === uid ? { ...f, status: "done", url: URL.createObjectURL(file) } : f));
        }
      }
    };
    const handleInputChange = (e) => {
      if (e.target.files) handleFiles(e.target.files);
      e.target.value = "";
    };
    const handleRemove = (uid) => {
      updateList(currentList.filter((f) => f.uid !== uid));
    };
    return /* @__PURE__ */ jsxs19("div", { ref, className: cx24("flex flex-col gap-2", className), ...rest, children: [
      (!maxCount || currentList.length < maxCount) && /* @__PURE__ */ jsxs19(
        "div",
        {
          onClick: () => inputRef.current?.click(),
          onDragOver: (e) => {
            e.preventDefault();
          },
          onDrop: (e) => {
            e.preventDefault();
            if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
          },
          className: cx24(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            listType === "picture-card" ? "w-24 h-24 flex items-center justify-center" : "w-full",
            draggable ? "border-[#1677ff] bg-[#e6f4ff]" : "border-[#d9d9d9] hover:border-[#4096ff] hover:bg-[#f5f5f5]"
          ),
          children: [
            /* @__PURE__ */ jsx24("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "mx-auto mb-2 text-[#8c8c8c]", children: /* @__PURE__ */ jsx24("path", { d: "M12 4v12m0-12L7 9m5 5l5-5M5 19h14", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            /* @__PURE__ */ jsx24("span", { className: "text-[14px] text-[#8c8c8c]", children: "\u70B9\u51FB\u4E0A\u4F20" })
          ]
        }
      ),
      /* @__PURE__ */ jsx24(
        "input",
        {
          ref: inputRef,
          type: "file",
          accept,
          multiple,
          onChange: handleInputChange,
          className: "hidden"
        }
      ),
      currentList.length > 0 && /* @__PURE__ */ jsx24("div", { className: cx24("flex gap-2", listType === "picture" || listType === "picture-card" ? "flex-wrap" : "flex-col"), children: currentList.map((file) => /* @__PURE__ */ jsxs19(
        "div",
        {
          className: cx24(
            "flex items-center gap-2 p-2 rounded border border-[#f0f0f0]",
            listType === "picture-card" ? "flex-col w-24" : ""
          ),
          children: [
            file.url && (listType === "picture" || listType === "picture-card") && /* @__PURE__ */ jsx24("img", { src: file.url, alt: file.name, className: cx24("object-cover rounded", listType === "picture-card" ? "w-20 h-16" : "w-10 h-10") }),
            listType === "picture-card" && /* @__PURE__ */ jsx24("span", { className: "text-[10px] text-[#8c8c8c] truncate w-full text-center", children: file.name }),
            listType === "text" && /* @__PURE__ */ jsx24("span", { className: "text-[14px] text-[#262626] truncate flex-1", children: file.name }),
            file.status === "uploading" && /* @__PURE__ */ jsxs19("svg", { className: "animate-spin w-4 h-4 text-[#1677ff]", viewBox: "0 0 24 24", fill: "none", children: [
              /* @__PURE__ */ jsx24("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ jsx24("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
            ] }),
            file.status === "done" && /* @__PURE__ */ jsx24("svg", { className: "w-4 h-4 text-[#52c41a]", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx24("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" }) }),
            file.status === "error" && /* @__PURE__ */ jsx24("svg", { className: "w-4 h-4 text-[#ff4d4f]", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx24("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" }) }),
            /* @__PURE__ */ jsx24(
              "button",
              {
                type: "button",
                onClick: () => handleRemove(file.uid),
                className: "text-[#8c8c8c] hover:text-[#ff4d4f] shrink-0",
                children: /* @__PURE__ */ jsx24("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ jsx24("path", { d: "M6 0a6 6 0 100 12A6 6 0 006 0zm2 8L7 6.5 5.5 8 4.5 7l1.5-1.5L4.5 4l1-1 1.5 1.5L8.5 4l1 1-1.5 1.5L9.5 7z" }) })
              }
            )
          ]
        },
        file.uid
      )) })
    ] });
  }
);
Upload.displayName = "Upload";

// src/form/Switch.tsx
import React25 from "react";
import { cx as cx25 } from "@aui/core";
import { jsx as jsx25, jsxs as jsxs20 } from "react/jsx-runtime";
var Switch = React25.forwardRef(
  ({ checked, defaultChecked = false, onChange, loading = false, checkedChildren, unCheckedChildren, size = "md", className, disabled, ...rest }, ref) => {
    const [internalChecked, setInternalChecked] = React25.useState(defaultChecked);
    const isControlled = checked !== void 0;
    const isOn = isControlled ? checked : internalChecked;
    const handleClick = () => {
      if (disabled || loading) return;
      const next = !isOn;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    };
    const sizeClass = size === "sm" ? { track: "w-9 h-5", thumb: "w-4 h-4", translate: "translate-x-4" } : { track: "w-11 h-6", thumb: "w-5 h-5", translate: "translate-x-5" };
    return /* @__PURE__ */ jsxs20(
      "button",
      {
        ref,
        type: "button",
        role: "switch",
        "aria-checked": isOn,
        onClick: handleClick,
        disabled: disabled || loading,
        className: cx25(
          "relative inline-flex items-center rounded-full transition-all duration-200 cursor-pointer",
          sizeClass.track,
          isOn ? "bg-[#1677ff]" : "bg-[#d9d9d9]",
          disabled || loading ? "opacity-50 cursor-not-allowed" : "",
          className
        ),
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsxs20("svg", { className: "absolute inset-0 m-auto animate-spin w-3 h-3", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx25("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
            /* @__PURE__ */ jsx25("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          /* @__PURE__ */ jsx25(
            "span",
            {
              className: cx25(
                "absolute bg-white rounded-full shadow transition-transform duration-200",
                sizeClass.thumb,
                isOn ? sizeClass.translate : "translate-x-0.5"
              )
            }
          ),
          (checkedChildren || unCheckedChildren) && /* @__PURE__ */ jsxs20("span", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-medium px-1", children: [
            /* @__PURE__ */ jsx25("span", { className: cx25("transition-opacity", isOn ? "opacity-100 text-white" : "opacity-0"), children: checkedChildren }),
            /* @__PURE__ */ jsx25("span", { className: cx25("absolute transition-opacity", !isOn ? "opacity-100 text-[#595959]" : "opacity-0"), children: unCheckedChildren })
          ] })
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

// src/form/Radio.tsx
import React26, { useState as useState10 } from "react";
import { cx as cx26 } from "@aui/core";
import { jsx as jsx26, jsxs as jsxs21 } from "react/jsx-runtime";
var Radio = React26.forwardRef(
  ({ options = [], value, defaultValue, direction = "horizontal", onChange, disabled = false, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState10(defaultValue ?? "");
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const handleChange = (val) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };
    return /* @__PURE__ */ jsx26(
      "div",
      {
        ref,
        className: cx26(
          "flex",
          direction === "horizontal" ? "flex-row flex-wrap gap-4" : "flex-col gap-2",
          className
        ),
        ...rest,
        children: options.map((opt) => {
          const checked = currentValue === opt.value;
          return /* @__PURE__ */ jsxs21(
            "label",
            {
              className: cx26(
                "flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]",
                disabled || opt.disabled ? "opacity-50 cursor-not-allowed" : "hover:text-[#1677ff]"
              ),
              children: [
                /* @__PURE__ */ jsx26("span", { className: cx26(
                  "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0",
                  checked ? "border-[#1677ff]" : "border-[#d9d9d9]"
                ), children: checked && /* @__PURE__ */ jsx26("span", { className: "w-2 h-2 rounded-full bg-[#1677ff]" }) }),
                /* @__PURE__ */ jsx26(
                  "input",
                  {
                    type: "radio",
                    checked,
                    disabled: disabled || opt.disabled,
                    onChange: () => handleChange(opt.value),
                    className: "sr-only"
                  }
                ),
                opt.label
              ]
            },
            opt.value
          );
        })
      }
    );
  }
);
Radio.displayName = "Radio";

// src/form/Checkbox.tsx
import React27, { useState as useState11, useMemo as useMemo20 } from "react";
import { cx as cx27 } from "@aui/core";
import { jsx as jsx27, jsxs as jsxs22 } from "react/jsx-runtime";
var Checkbox = React27.forwardRef(
  ({ options = [], value, defaultValue = [], direction = "horizontal", onChange, disabled = false, checkAll = false, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState11(defaultValue ?? []);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value ?? [] : internalValue;
    const handleChange = (val) => {
      const arr = [...currentValue];
      const idx = arr.indexOf(val);
      if (idx === -1) arr.push(val);
      else arr.splice(idx, 1);
      if (!isControlled) setInternalValue(arr);
      onChange?.(arr);
    };
    const allChecked = useMemo20(
      () => options.length > 0 && options.every((o) => currentValue.includes(o.value)),
      [options, currentValue]
    );
    const handleCheckAll = () => {
      if (allChecked) {
        if (!isControlled) setInternalValue([]);
        onChange?.([]);
      } else {
        const allValues = options.filter((o) => !o.disabled).map((o) => o.value);
        if (!isControlled) setInternalValue(allValues);
        onChange?.(allValues);
      }
    };
    return /* @__PURE__ */ jsxs22(
      "div",
      {
        ref,
        className: cx27("flex", direction === "horizontal" ? "flex-row flex-wrap gap-4" : "flex-col gap-2", className),
        ...rest,
        children: [
          checkAll && /* @__PURE__ */ jsxs22("label", { className: cx27("flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]", disabled ? "opacity-50 cursor-not-allowed" : ""), children: [
            /* @__PURE__ */ jsx27(
              "span",
              {
                className: cx27(
                  "w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                  allChecked ? "bg-[#1677ff] border-[#1677ff]" : "border-[#d9d9d9]"
                ),
                onClick: handleCheckAll,
                children: allChecked && /* @__PURE__ */ jsx27("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none", children: /* @__PURE__ */ jsx27("path", { d: "M1 4l3 3 5-6", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            ),
            /* @__PURE__ */ jsx27("input", { type: "checkbox", checked: allChecked, disabled, onChange: handleCheckAll, className: "sr-only" }),
            "\u5168\u9009"
          ] }),
          options.map((opt) => {
            const checked = currentValue.includes(opt.value);
            return /* @__PURE__ */ jsxs22(
              "label",
              {
                className: cx27("flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]", disabled || opt.disabled ? "opacity-50 cursor-not-allowed" : "hover:text-[#1677ff]"),
                children: [
                  /* @__PURE__ */ jsx27(
                    "span",
                    {
                      className: cx27(
                        "w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        checked ? "bg-[#1677ff] border-[#1677ff]" : "border-[#d9d9d9]"
                      ),
                      onClick: () => handleChange(opt.value),
                      children: checked && /* @__PURE__ */ jsx27("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none", children: /* @__PURE__ */ jsx27("path", { d: "M1 4l3 3 5-6", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                    }
                  ),
                  /* @__PURE__ */ jsx27("input", { type: "checkbox", checked, disabled: disabled || opt.disabled, onChange: () => handleChange(opt.value), className: "sr-only" }),
                  opt.label
                ]
              },
              opt.value
            );
          })
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

// src/form/Rate.tsx
import React28, { useState as useState12 } from "react";
import { cx as cx28 } from "@aui/core";
import { Fragment as Fragment2, jsx as jsx28, jsxs as jsxs23 } from "react/jsx-runtime";
var StarSVG = ({ filled }) => /* @__PURE__ */ jsx28("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: filled === "half" ? /* @__PURE__ */ jsxs23(Fragment2, { children: [
  /* @__PURE__ */ jsx28("path", { d: "M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z", fill: "#d9d9d9" }),
  /* @__PURE__ */ jsx28("path", { d: "M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14V2z", fill: "#faad14" })
] }) : /* @__PURE__ */ jsx28("path", { d: "M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z", fill: filled ? "#faad14" : "#d9d9d9" }) });
var Rate = React28.forwardRef(
  ({ count = 5, value, defaultValue = 0, allowHalf = false, readOnly = false, onChange, className, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState12(defaultValue);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value ?? 0 : internalValue;
    const handleClick = (score) => {
      if (readOnly) return;
      if (!isControlled) setInternalValue(score);
      onChange?.(score);
    };
    return /* @__PURE__ */ jsx28("div", { ref, className: cx28("flex items-center gap-1", className), ...rest, children: Array.from({ length: count }).map((_, i) => {
      const score = i + 1;
      const filled = currentValue >= score ? true : currentValue >= score - 0.5 && allowHalf ? "half" : false;
      return /* @__PURE__ */ jsx28(
        "span",
        {
          className: cx28("cursor-pointer transition-transform hover:scale-110", readOnly ? "cursor-default hover:scale-100" : ""),
          onClick: () => handleClick(score),
          children: /* @__PURE__ */ jsx28(StarSVG, { filled })
        },
        i
      );
    }) });
  }
);
Rate.displayName = "Rate";

// src/feedback/Button.tsx
import React29, { useMemo as useMemo22 } from "react";
import { cx as cx29 } from "@aui/core";
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
var typeClasses = {
  primary: "bg-[#1677ff] text-white hover:bg-[#4096ff] active:bg-[#0958d9] disabled:bg-[#e8e8e8] disabled:text-[#bfbfbf]",
  default: "bg-white text-[#262626] border border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] active:border-[#0958d9] active:text-[#0958d9] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]",
  dashed: "bg-white text-[#262626] border border-dashed border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]",
  text: "bg-transparent text-[#262626] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] disabled:text-[#bfbfbf]",
  link: "bg-transparent text-[#1677ff] hover:text-[#4096ff] active:text-[#0958d9] disabled:text-[#bfbfbf]"
};
var sizeClasses = {
  xs: "h-6 px-2 text-xs gap-1",
  sm: "h-8 px-3 text-sm gap-1",
  md: "h-10 px-4 text-base gap-2",
  lg: "h-12 px-6 text-lg gap-2",
  xl: "h-14 px-8 text-xl gap-2"
};
var Button = React29.forwardRef(
  ({
    type = "default",
    size = "md",
    loading = false,
    block = false,
    danger = false,
    icon,
    onClick,
    disabled,
    className,
    children,
    htmlType = "button",
    ...rest
  }, ref) => {
    const classes = useMemo22(() => {
      return cx29(
        "inline-flex items-center justify-center font-medium rounded-md",
        "transition-all duration-200 cursor-pointer select-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        sizeClasses[size],
        block ? "w-full" : "",
        className
      );
    }, [size, block, className]);
    const typeClass = danger ? type === "text" || type === "link" ? "text-[#ff4d4f] hover:text-[#ff7875] active:text-[#d9363e]" : "bg-[#ff4d4f] hover:bg-[#ff7875] active:bg-[#d9363e] text-white" : typeClasses[type];
    return /* @__PURE__ */ jsxs24(
      "button",
      {
        ref,
        type: htmlType,
        className: cx29(classes, typeClass),
        disabled: disabled || loading,
        onClick,
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsxs24("svg", { className: "animate-spin h-4 w-4 shrink-0 mr-2", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx29("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx29("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          !loading && icon && /* @__PURE__ */ jsx29("span", { className: "shrink-0 mr-1", children: icon }),
          children && /* @__PURE__ */ jsx29("span", { children })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/feedback/Modal.tsx
import React30, { useEffect as useEffect3, useMemo as useMemo23 } from "react";
import { cx as cx30 } from "@aui/core";
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
var Modal = React30.forwardRef(
  ({
    visible = false,
    title,
    children,
    footer,
    onOk,
    onCancel,
    okText = "\u786E\u5B9A",
    cancelText = "\u53D6\u6D88",
    showOk = true,
    showCancel = true,
    width = 520,
    mask = true,
    maskClosable = true,
    closable = true,
    confirmLoading = false,
    bodyStyle,
    className,
    platform
  }, ref) => {
    const isMobile = platform === "mobile" || typeof window !== "undefined" && /android|iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isMobile) {
      return /* @__PURE__ */ jsx30(
        BottomSheetModal,
        {
          visible,
          title,
          onClose: onCancel,
          footer,
          showOk,
          showCancel,
          okText,
          cancelText,
          onOk,
          confirmLoading,
          bodyStyle,
          className
        }
      );
    }
    useEffect3(() => {
      if (visible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [visible]);
    const widthStyle = useMemo23(() => ({
      maxWidth: typeof width === "number" ? `${width}px` : width
    }), [width]);
    if (!visible) return null;
    return /* @__PURE__ */ jsxs25("div", { className: "fixed inset-0 z-[1300] flex items-center justify-center p-4", children: [
      mask && /* @__PURE__ */ jsx30(
        "div",
        {
          className: "absolute inset-0 bg-[rgba(0,0,0,0.45)]",
          onClick: maskClosable ? onCancel : void 0
        }
      ),
      /* @__PURE__ */ jsxs25(
        "div",
        {
          ref,
          className: cx30(
            "relative bg-white rounded-lg shadow-xl flex flex-col max-h-[85vh] z-10",
            "w-full",
            className
          ),
          style: widthStyle,
          children: [
            (title || closable) && /* @__PURE__ */ jsxs25("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]", children: [
              /* @__PURE__ */ jsx30("span", { className: "text-[16px] font-semibold text-[#262626]", children: title }),
              closable && /* @__PURE__ */ jsx30(
                "button",
                {
                  onClick: onCancel,
                  className: "text-[#8c8c8c] hover:text-[#595959] transition-colors p-1",
                  children: /* @__PURE__ */ jsx30("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor", children: /* @__PURE__ */ jsx30("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx30("div", { className: "flex-1 overflow-auto px-6 py-4", style: bodyStyle, children }),
            footer !== void 0 ? footer : /* @__PURE__ */ jsxs25("div", { className: "flex justify-end gap-3 px-6 py-4 border-t border-[#f0f0f0]", children: [
              showCancel && /* @__PURE__ */ jsx30(Button, { onClick: onCancel, children: cancelText }),
              showOk && /* @__PURE__ */ jsx30(Button, { type: "primary", loading: confirmLoading, onClick: onOk, children: okText })
            ] })
          ]
        }
      )
    ] });
  }
);
Modal.displayName = "Modal";
function BottomSheetModal(props) {
  const { visible, title, children, footer, onOk, onCancel, showOk, showCancel, okText, cancelText, onClose, confirmLoading, bodyStyle, className } = props;
  useEffect3(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);
  if (!visible) return null;
  return /* @__PURE__ */ jsxs25("div", { className: "fixed inset-0 z-[1300] flex flex-col justify-end", children: [
    /* @__PURE__ */ jsx30("div", { className: "absolute inset-0 bg-[rgba(0,0,0,0.45)]", onClick: onClose }),
    /* @__PURE__ */ jsxs25("div", { className: cx30("relative bg-white rounded-t-2xl max-h-[85vh] flex flex-col z-10", className), children: [
      /* @__PURE__ */ jsx30("div", { className: "flex justify-center pt-3 pb-2", children: /* @__PURE__ */ jsx30("div", { className: "w-10 h-1 rounded-full bg-[#d9d9d9]" }) }),
      title && /* @__PURE__ */ jsx30("div", { className: "px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626]", children: title }),
      /* @__PURE__ */ jsx30("div", { className: "flex-1 overflow-auto px-4 py-3", style: bodyStyle, children }),
      footer !== void 0 ? footer : /* @__PURE__ */ jsxs25("div", { className: "flex gap-3 px-4 py-4 border-t border-[#f0f0f0]", children: [
        showCancel && /* @__PURE__ */ jsx30(Button, { className: "flex-1", onClick: onCancel, children: cancelText }),
        showOk && /* @__PURE__ */ jsx30(Button, { type: "primary", className: "flex-1", loading: confirmLoading, onClick: onOk, children: okText })
      ] })
    ] })
  ] });
}

// src/feedback/Toast.tsx
import { createRoot } from "react-dom/client";
import { cx as cx31 } from "@aui/core";
import { jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
var toastContainer = null;
var toastRoot = null;
function getOrCreateToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "aui-toast-root";
    document.body.appendChild(toastContainer);
    toastRoot = createRoot(toastContainer);
  }
  return toastContainer;
}
var icons = {
  success: /* @__PURE__ */ jsxs26("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx31("circle", { cx: "10", cy: "10", r: "10", fill: "#52c41a" }),
    /* @__PURE__ */ jsx31("path", { d: "M6.5 10l2.5 2.5 4.5-5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }),
  error: /* @__PURE__ */ jsxs26("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx31("circle", { cx: "10", cy: "10", r: "10", fill: "#ff4d4f" }),
    /* @__PURE__ */ jsx31("path", { d: "M7.5 7.5l5 5m0-5l-5 5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] }),
  warning: /* @__PURE__ */ jsxs26("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx31("path", { d: "M10 2L1.5 17h17L10 2z", fill: "#faad14" }),
    /* @__PURE__ */ jsx31("path", { d: "M10 8v3m0 2.5v.5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] }),
  info: /* @__PURE__ */ jsxs26("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx31("circle", { cx: "10", cy: "10", r: "10", fill: "#1677ff" }),
    /* @__PURE__ */ jsx31("path", { d: "M10 9v5m0-7.5v.5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] }),
  loading: /* @__PURE__ */ jsxs26("svg", { className: "animate-spin", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx31("circle", { className: "opacity-25", cx: "10", cy: "10", r: "8", stroke: "#1677ff", strokeWidth: "3" }),
    /* @__PURE__ */ jsx31("path", { className: "opacity-75", fill: "#1677ff", d: "M4 10a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
  ] })
};
function ToastContainer({ list }) {
  return /* @__PURE__ */ jsx31("div", { className: "fixed top-8 left-1/2 -translate-x-1/2 z-[1500] flex flex-col items-center gap-2 pointer-events-none", children: list.map((toast) => /* @__PURE__ */ jsxs26(
    "div",
    {
      className: cx31(
        "flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg pointer-events-auto",
        "min-w-[120px] max-w-[300px]",
        "animate-[fadeInDown_0.3s_ease-out]"
      ),
      style: { animation: "fadeInDown 0.3s ease-out", background: "#1f1f1f", color: "#fff" },
      children: [
        icons[toast.type],
        /* @__PURE__ */ jsx31("span", { className: "text-[14px]", children: toast.content })
      ]
    },
    toast.id
  )) });
}
var toastList = [];
var timerIds = /* @__PURE__ */ new Map();
function renderToast() {
  if (toastRoot) {
    toastRoot.render(/* @__PURE__ */ jsx31(ToastContainer, { list: toastList }));
  }
}
function scheduleRemove(id, duration, onClose) {
  if (duration > 0) {
    const timer = setTimeout(() => {
      toastList = toastList.filter((t) => t.id !== id);
      timerIds.delete(id);
      onClose?.();
      renderToast();
    }, duration);
    timerIds.set(id, timer);
  }
}
var Toast = {
  show(options) {
    const id = Date.now() + Math.random();
    const item = {
      id,
      content: options.content ?? "",
      type: options.type ?? "info",
      duration: options.duration ?? 2e3,
      onClose: options.onClose
    };
    getOrCreateToastContainer();
    toastList = [...toastList, item];
    renderToast();
    scheduleRemove(id, item.duration, item.onClose);
  },
  success(content, duration = 2e3) {
    this.show({ content, type: "success", duration });
  },
  error(content, duration = 3e3) {
    this.show({ content, type: "error", duration });
  },
  warning(content, duration = 2500) {
    this.show({ content, type: "warning", duration });
  },
  info(content, duration = 2e3) {
    this.show({ content, type: "info", duration });
  },
  loading(content) {
    this.show({ content, type: "loading", duration: 0 });
  },
  hide() {
    timerIds.forEach((timer) => clearTimeout(timer));
    timerIds.clear();
    toastList = [];
    renderToast();
  }
};

// src/feedback/Popconfirm.tsx
import React31, { useState as useState13, useRef as useRef3, useEffect as useEffect4 } from "react";
import { cx as cx32 } from "@aui/core";
import { jsx as jsx32, jsxs as jsxs27 } from "react/jsx-runtime";
var placementMap = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  topLeft: "bottom-full left-0 mb-2",
  topRight: "bottom-full right-0 mb-2",
  bottomLeft: "top-full left-0 mt-2",
  bottomRight: "top-full right-0 mt-2"
};
var Popconfirm = React31.forwardRef(
  ({ title, description, onConfirm, onCancel, okText = "\u786E\u5B9A", cancelText = "\u53D6\u6D88", okType = "primary", trigger = "hover", placement = "top", className, children, ...rest }, ref) => {
    const [visible, setVisible] = useState13(false);
    const containerRef = useRef3(null);
    useEffect4(() => {
      if (!visible) return;
      const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setVisible(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [visible]);
    const handleConfirm = () => {
      onConfirm?.();
      setVisible(false);
    };
    const handleCancel = () => {
      onCancel?.();
      setVisible(false);
    };
    return /* @__PURE__ */ jsxs27("div", { ref, className: cx32("relative inline-flex", className), ...rest, children: [
      /* @__PURE__ */ jsx32(
        "div",
        {
          onClick: trigger === "click" ? () => setVisible(!visible) : void 0,
          onMouseEnter: trigger === "hover" ? () => setVisible(true) : void 0,
          onMouseLeave: trigger === "hover" ? () => setVisible(false) : void 0,
          children
        }
      ),
      visible && /* @__PURE__ */ jsxs27("div", { className: cx32("absolute z-[1400] w-52 bg-white rounded-lg shadow-lg border border-[#f0f0f0] p-3", placementMap[placement]), children: [
        title && /* @__PURE__ */ jsx32("div", { className: "text-[14px] font-medium text-[#262626] mb-1", children: title }),
        description && /* @__PURE__ */ jsx32("div", { className: "text-[12px] text-[#8c8c8c] mb-3", children: description }),
        /* @__PURE__ */ jsxs27("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx32(
            "button",
            {
              onClick: handleCancel,
              className: "px-3 py-1 text-xs rounded border border-[#d9d9d9] text-[#595959] hover:border-[#4096ff] hover:text-[#4096ff] transition-colors",
              children: cancelText
            }
          ),
          /* @__PURE__ */ jsx32(
            "button",
            {
              onClick: handleConfirm,
              className: cx32(
                "px-3 py-1 text-xs rounded text-white transition-colors",
                okType === "primary" ? "bg-[#1677ff] hover:bg-[#4096ff]" : "bg-[#ff4d4f] hover:bg-[#ff7875]"
              ),
              children: okText
            }
          )
        ] })
      ] })
    ] });
  }
);
Popconfirm.displayName = "Popconfirm";

// src/mobile/BottomSheet.tsx
import React32, { useEffect as useEffect5 } from "react";
import { cx as cx33 } from "@aui/core";
import { jsx as jsx33, jsxs as jsxs28 } from "react/jsx-runtime";
var BottomSheet = React32.forwardRef(
  ({ visible = false, height = 300, actions = [], onClose, title, draggable = true, children, className, ...rest }, ref) => {
    useEffect5(() => {
      document.body.style.overflow = visible ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [visible]);
    if (!visible) return null;
    return /* @__PURE__ */ jsxs28("div", { className: "fixed inset-0 z-[1200] flex flex-col justify-end", children: [
      /* @__PURE__ */ jsx33("div", { className: "absolute inset-0 bg-[rgba(0,0,0,0.45)]", onClick: onClose }),
      /* @__PURE__ */ jsxs28(
        "div",
        {
          ref,
          className: cx33("relative bg-white rounded-t-2xl flex flex-col z-10 max-h-[85vh] transition-all duration-300", className),
          style: { height: typeof height === "number" ? `${height}px` : height },
          ...rest,
          children: [
            draggable && /* @__PURE__ */ jsx33("div", { className: "flex justify-center pt-3 pb-2 shrink-0", children: /* @__PURE__ */ jsx33("div", { className: "w-10 h-1 rounded-full bg-[#d9d9d9]" }) }),
            title && /* @__PURE__ */ jsx33("div", { className: "px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626] shrink-0", children: title }),
            /* @__PURE__ */ jsx33("div", { className: "flex-1 overflow-auto px-4 py-3", children }),
            actions.length > 0 && /* @__PURE__ */ jsx33("div", { className: "px-4 pb-8 pt-3 border-t border-[#f0f0f0] shrink-0", children: /* @__PURE__ */ jsx33("div", { className: "grid gap-3", style: { gridTemplateColumns: `repeat(${Math.min(actions.length, 3)}, 1fr)` }, children: actions.map((action) => /* @__PURE__ */ jsx33(
              Button,
              {
                type: action.danger ? "primary" : "default",
                className: action.danger ? "!bg-[#ff4d4f] !text-white" : "",
                onClick: () => {
                  action.onClick?.();
                  onClose?.();
                },
                children: action.text
              },
              action.key
            )) }) })
          ]
        }
      )
    ] });
  }
);
BottomSheet.displayName = "BottomSheet";

// src/mobile/Swiper.tsx
import React33, { useState as useState14, useEffect as useEffect6, useRef as useRef4 } from "react";
import { cx as cx34 } from "@aui/core";
import { jsx as jsx34, jsxs as jsxs29 } from "react/jsx-runtime";
var Swiper = React33.forwardRef(
  ({ autoplay = false, dots = true, loop = false, interval = 3e3, onChange, currentIndex, className, children, ...rest }, ref) => {
    const [active, setActive] = useState14(0);
    const [isControlled] = useState14(currentIndex !== void 0);
    const current = isControlled ? currentIndex ?? 0 : active;
    const timerRef = useRef4();
    const slides = React33.Children.toArray(children);
    const count = slides.length;
    const goTo = (index) => {
      const next = loop ? (index + count) % count : Math.max(0, Math.min(index, count - 1));
      if (!isControlled) setActive(next);
      onChange?.(next);
    };
    useEffect6(() => {
      if (autoplay && count > 1) {
        timerRef.current = setInterval(() => {
          goTo(current + 1);
        }, interval);
      }
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }, [autoplay, interval, current, count, loop]);
    return /* @__PURE__ */ jsxs29("div", { ref, className: cx34("relative overflow-hidden", className), ...rest, children: [
      /* @__PURE__ */ jsx34(
        "div",
        {
          className: "flex transition-transform duration-300",
          style: { transform: `translateX(-${current * 100}%)` },
          children: slides.map((slide, i) => /* @__PURE__ */ jsx34("div", { className: "w-full flex-shrink-0", children: slide }, i))
        }
      ),
      dots && count > 1 && /* @__PURE__ */ jsx34("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5", children: slides.map((_, i) => /* @__PURE__ */ jsx34(
        "button",
        {
          className: cx34(
            "w-1.5 h-1.5 rounded-full transition-all",
            current === i ? "bg-white w-4" : "bg-white/50"
          ),
          onClick: () => goTo(i)
        },
        i
      )) })
    ] });
  }
);
Swiper.displayName = "Swiper";

// src/mobile/PullRefresh.tsx
import React34, { useState as useState15, useRef as useRef5 } from "react";
import { cx as cx35 } from "@aui/core";
import { jsx as jsx35, jsxs as jsxs30 } from "react/jsx-runtime";
var PullRefresh = React34.forwardRef(
  ({ onRefresh, refreshing = false, pullingText = "\u4E0B\u62C9\u5237\u65B0", refreshingText = "\u5237\u65B0\u4E2D...", completedText = "\u5237\u65B0\u5B8C\u6210", children, className, ...rest }, ref) => {
    const [pulling, setPulling] = useState15(false);
    const [pullDistance, setPullDistance] = useState15(0);
    const startYRef = useRef5(0);
    const containerRef = useRef5(null);
    const handleTouchStart = (e) => {
      if (refreshing) return;
      if (containerRef.current && containerRef.current.scrollTop === 0) {
        startYRef.current = e.touches[0].clientY;
        setPulling(true);
      }
    };
    const handleTouchMove = (e) => {
      if (!pulling || refreshing) return;
      const diff = e.touches[0].clientY - startYRef.current;
      if (diff > 0) {
        e.preventDefault();
        setPullDistance(Math.min(diff, 80));
      }
    };
    const handleTouchEnd = async () => {
      if (!pulling) return;
      setPulling(false);
      if (pullDistance > 50) {
        setPullDistance(0);
        await onRefresh?.();
      } else {
        setPullDistance(0);
      }
    };
    return /* @__PURE__ */ jsxs30(
      "div",
      {
        ref,
        className: cx35("overflow-auto", className),
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        ...rest,
        children: [
          /* @__PURE__ */ jsx35(
            "div",
            {
              className: "flex items-center justify-center h-12 transition-all duration-200",
              style: { height: pullDistance > 0 ? 60 : 0 },
              children: refreshing ? /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2 text-[14px] text-[#8c8c8c]", children: [
                /* @__PURE__ */ jsxs30("svg", { className: "animate-spin w-4 h-4", viewBox: "0 0 24 24", fill: "none", children: [
                  /* @__PURE__ */ jsx35("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ jsx35("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
                ] }),
                refreshingText
              ] }) : /* @__PURE__ */ jsx35("span", { className: "text-[14px] text-[#8c8c8c]", children: pullingText })
            }
          ),
          /* @__PURE__ */ jsx35("div", { ref: containerRef, className: "min-h-0", children })
        ]
      }
    );
  }
);
PullRefresh.displayName = "PullRefresh";

// src/mobile/IndexBar.tsx
import React35, { useState as useState16 } from "react";
import { cx as cx36 } from "@aui/core";
import { jsx as jsx36, jsxs as jsxs31 } from "react/jsx-runtime";
var IndexBar = React35.forwardRef(
  ({ data = [], onSelect, showAnchor = true, indexes, className, ...rest }, ref) => {
    const [activeIndex, setActiveIndex] = useState16("");
    const allIndexes = indexes ?? data.map((d) => d.index);
    const handleSelect = (item) => {
      onSelect?.(item);
      setActiveIndex(item.title);
    };
    return /* @__PURE__ */ jsxs31("div", { ref, className: cx36("flex h-full", className), ...rest, children: [
      /* @__PURE__ */ jsx36("div", { className: "flex-1 overflow-auto px-4", children: data.map((group) => /* @__PURE__ */ jsxs31("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx36("div", { className: "sticky top-0 bg-white py-2 text-[12px] font-medium text-[#8c8c8c] z-10", children: group.index }),
        /* @__PURE__ */ jsx36("div", { className: "space-y-1", children: group.items.map((item) => /* @__PURE__ */ jsxs31(
          "div",
          {
            onClick: () => handleSelect(item),
            className: "flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f5f5f5] transition-colors cursor-pointer",
            children: [
              item.avatar && /* @__PURE__ */ jsx36("img", { src: item.avatar, alt: "", className: "w-10 h-10 rounded-full object-cover" }),
              /* @__PURE__ */ jsxs31("div", { children: [
                /* @__PURE__ */ jsx36("div", { className: "text-[14px] text-[#262626]", children: item.title }),
                item.description && /* @__PURE__ */ jsx36("div", { className: "text-[12px] text-[#8c8c8c]", children: item.description })
              ] })
            ]
          },
          item.key
        )) })
      ] }, group.index)) }),
      showAnchor && /* @__PURE__ */ jsx36("div", { className: "flex flex-col items-center justify-center gap-1 px-1 py-4", children: allIndexes.map((idx) => /* @__PURE__ */ jsx36(
        "button",
        {
          className: cx36(
            "w-4 h-4 text-[10px] font-medium rounded flex items-center justify-center transition-colors",
            activeIndex === idx ? "bg-[#1677ff] text-white" : "text-[#8c8c8c] hover:text-[#1677ff]"
          ),
          onClick: () => {
            const el = document.getElementById(`index-${idx}`);
            el?.scrollIntoView({ behavior: "smooth" });
            setActiveIndex(idx);
          },
          children: idx
        },
        idx
      )) })
    ] });
  }
);
IndexBar.displayName = "IndexBar";
export {
  Avatar,
  Badge,
  BottomSheet,
  Button,
  CardList,
  Checkbox,
  DatePicker,
  Descriptions,
  Drawer,
  Empty,
  Flex,
  Form,
  FormItem,
  Grid,
  IndexBar,
  Input,
  Menu,
  Modal,
  Page,
  Popconfirm,
  Progress,
  PullRefresh,
  Radio,
  Rate,
  Select,
  Skeleton,
  Spacer,
  Spin,
  Statistic,
  Swiper,
  Switch,
  Table,
  Tabs,
  Tag,
  TextArea,
  Toast,
  Upload,
  useFormContext
};
//# sourceMappingURL=index.js.map