import { defineComponent as v, openBlock as l, createElementBlock as s, normalizeClass as p, unref as x, createElementVNode as d, createCommentVNode as f, toDisplayString as h, renderSlot as B, computed as y, normalizeStyle as j, ref as V, Fragment as w, renderList as C, createBlock as M, resolveDynamicComponent as R, watch as A, Teleport as _, createTextVNode as S, withModifiers as W, withDirectives as I, vModelText as F, reactive as U, provide as P, useModel as L, mergeModels as T, vModelRadio as E, vModelCheckbox as K, withCtx as O, onMounted as Y, onUnmounted as H } from "vue";
function b(...e) {
  return e.filter(Boolean).join(" ");
}
const q = {
  key: 0,
  class: "flex items-center h-12 px-4 border-b border-[#f0f0f0] shrink-0 bg-white"
}, G = { class: "text-[16px] font-semibold text-[#262626] truncate" }, Rt = /* @__PURE__ */ v({
  __name: "Page",
  props: {
    showNav: { type: Boolean, default: !0 },
    title: {},
    background: { default: "white" },
    safeArea: { type: Boolean },
    onBack: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["back"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = {
      white: "bg-white",
      gray: "bg-[#fafafa]",
      transparent: "bg-transparent"
    };
    return (i, o) => (l(), s("div", {
      class: p(x(b)("flex flex-col h-screen w-full", n[e.background], t.className ?? ""))
    }, [
      e.showNav ? (l(), s("div", q, [
        (i.$attrs.onBack, l(), s("button", {
          key: 0,
          class: "flex items-center justify-center w-8 h-8 -ml-2 rounded-md hover:bg-[#f5f5f5] transition-colors mr-2",
          onClick: o[0] || (o[0] = (c) => r("back"))
        }, [...o[1] || (o[1] = [
          d("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none"
          }, [
            d("path", {
              d: "M11.5 3.5L6 9l5.5 5.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          ], -1)
        ])])),
        d("span", G, h(e.title), 1)
      ])) : f("", !0),
      d("div", {
        class: p(x(b)("flex-1 min-h-0", i.scrollable ? "overflow-auto" : ""))
      }, [
        B(i.$slots, "default")
      ], 2)
    ], 2));
  }
}), Wt = /* @__PURE__ */ v({
  __name: "Grid",
  props: {
    columns: {},
    gap: { default: "md" },
    vertical: { type: Boolean },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12"
    }, r = y(() => {
      const o = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch"
      };
      return a.align ? o[a.align] : "";
    }), n = y(() => {
      const o = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return a.justify ? o[a.justify] : "";
    }), i = y(() => ({
      gridTemplateColumns: `repeat(${typeof a.cols == "number" ? a.cols : 1}, minmax(0, 1fr))`
    }));
    return (o, c) => (l(), s("div", {
      class: p(x(b)("grid", t[e.gap] ?? t.md, r.value, n.value, a.className ?? "")),
      style: j(i.value)
    }, [
      B(o.$slots, "default")
    ], 6));
  }
}), Ut = /* @__PURE__ */ v({
  __name: "Flex",
  props: {
    direction: { default: "row" },
    gap: {},
    wrap: { type: Boolean },
    justify: {},
    align: {},
    vertical: { type: Boolean },
    children: {},
    className: { default: "" },
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => ({
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse"
    })[a.direction] ?? "flex-row"), r = y(() => a.wrap === !0 ? "flex-wrap" : a.wrap === !1 ? "flex-nowrap" : typeof a.wrap == "string" ? { nowrap: "flex-nowrap", wrap: "flex-wrap", "wrap-reverse": "flex-wrap-reverse" }[a.wrap] ?? "" : ""), n = y(() => {
      const o = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      };
      return a.justify ? o[a.justify] : "";
    }), i = y(() => {
      const o = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      };
      return a.align ? o[a.align] : "";
    });
    return (o, c) => (l(), s("div", {
      class: p(x(b)("flex", t.value, r.value, n.value, i.value, a.className))
    }, [
      B(o.$slots, "default")
    ], 2));
  }
}), Et = /* @__PURE__ */ v({
  __name: "Spacer",
  props: {
    size: { default: "md" },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = {
      xs: "w-1 h-1",
      sm: "w-2 h-2",
      md: "w-4 h-4",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
      "2xl": "w-10 h-10",
      "3xl": "w-12 h-12"
    };
    return (r, n) => (l(), s("div", {
      class: p(x(b)(t[e.size] ?? t.md, a.className ?? ""))
    }, null, 2));
  }
}), J = ["disabled", "onClick"], X = { class: "flex-1 min-h-0 overflow-auto" }, Q = {
  key: 0,
  class: "h-full"
}, Kt = /* @__PURE__ */ v({
  __name: "Tabs",
  props: {
    activeKey: {},
    onChange: {},
    type: { default: "line" },
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["update:activeKey", "change"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = V(t.items[0]?.key ?? ""), i = y(() => t.activeKey ?? n.value), o = (c, u) => {
      u.disabled || (t.activeKey === void 0 && (n.value = c), r("update:activeKey", c), r("change", c));
    };
    return (c, u) => (l(), s("div", {
      class: p(x(b)("flex", c.tabPosition === "left" || c.tabPosition === "right" ? "flex-row" : "flex-col", t.className ?? ""))
    }, [
      d("div", {
        class: p(x(b)("flex shrink-0 border-b border-[#f0f0f0]", c.tabPosition === "left" || c.tabPosition === "right" ? "flex-col border-b-0 border-r border-[#f0f0f0] min-w-[100px]" : ""))
      }, [
        (l(!0), s(w, null, C(c.items, (m) => (l(), s("button", {
          key: m.key,
          class: p(x(b)(
            "px-4 py-2.5 text-[14px] transition-colors relative whitespace-nowrap",
            c.tabPosition === "left" || c.tabPosition === "right" ? "justify-start text-left" : "",
            i.value === m.key ? "text-[#1677ff] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1677ff]" : "text-[#595959] hover:text-[#262626]",
            m.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )),
          disabled: m.disabled,
          onClick: (k) => o(m.key, m)
        }, h(m.label), 11, J))), 128))
      ], 2),
      d("div", X, [
        (l(!0), s(w, null, C(c.items, (m) => (l(), s(w, {
          key: m.key
        }, [
          i.value === m.key ? (l(), s("div", Q, [
            (l(), M(R(() => m.children)))
          ])) : f("", !0)
        ], 64))), 128))
      ])
    ], 2));
  }
}), Z = {
  key: 0,
  class: "fixed inset-0 z-[1200]"
}, ee = {
  key: 0,
  class: "flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0] shrink-0"
}, te = { class: "text-[16px] font-semibold text-[#262626]" }, le = { class: "flex-1 overflow-auto px-6 py-4" }, se = {
  key: 1,
  class: "px-6 py-4 border-t border-[#f0f0f0] shrink-0"
}, Yt = /* @__PURE__ */ v({
  __name: "Drawer",
  props: {
    open: { type: Boolean },
    placement: { default: "right" },
    width: {},
    height: {},
    children: {},
    onClose: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["close"],
  setup(e, { emit: a }) {
    const t = e, r = a;
    A(() => t.visible, (o) => {
      document.body.style.overflow = o ? "hidden" : "";
    }, { immediate: !0 });
    const n = t.placement === "left" || t.placement === "right" ? { width: typeof t.size == "number" ? `${t.size}px` : t.size, maxWidth: "90vw" } : { height: typeof t.size == "number" ? `${t.size}px` : t.size, maxHeight: "90vh" }, i = { right: "right-0 top-0 h-full", left: "left-0 top-0 h-full", top: "top-0 left-0 w-full", bottom: "bottom-0 left-0 w-full" }[t.placement];
    return (o, c) => (l(), M(_, { to: "body" }, [
      o.visible ? (l(), s("div", Z, [
        o.mask ? (l(), s("div", {
          key: 0,
          class: "absolute inset-0 bg-[rgba(0,0,0,0.45)]",
          onClick: c[0] || (c[0] = (u) => o.maskClosable && r("close"))
        })) : f("", !0),
        d("div", {
          class: p(x(b)("absolute bg-white shadow-xl flex flex-col transition-transform duration-300", x(i), t.className ?? "")),
          style: j(x(n))
        }, [
          o.title || o.showClose ? (l(), s("div", ee, [
            d("span", te, h(o.title), 1),
            o.showClose ? (l(), s("button", {
              key: 0,
              onClick: c[1] || (c[1] = (u) => r("close")),
              class: "text-[#8c8c8c] hover:text-[#595959] transition-colors"
            }, [...c[2] || (c[2] = [
              d("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "currentColor"
              }, [
                d("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" })
              ], -1)
            ])])) : f("", !0)
          ])) : f("", !0),
          d("div", le, [
            B(o.$slots, "default")
          ]),
          o.$slots.footer ? (l(), s("div", se, [
            B(o.$slots, "footer")
          ])) : f("", !0)
        ], 6)
      ])) : f("", !0)
    ]));
  }
}), ae = ["disabled", "onClick"], oe = {
  key: 0,
  class: "shrink-0"
}, ne = { key: 1 }, re = {
  key: 0,
  class: "ml-4 mt-1 flex flex-col gap-1"
}, ie = ["disabled", "onClick"], Ht = /* @__PURE__ */ v({
  __name: "Menu",
  props: {
    mode: { default: "inline" },
    selectedKeys: {},
    onSelect: {},
    items: { default: () => [] },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["change"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = V(t.items[0]?.key ?? ""), i = (o) => {
      o.disabled || (n.value = o.key, r("change", o.key));
    };
    return (o, c) => (l(), s("nav", {
      class: p(x(b)(
        e.mode === "horizontal" ? "flex items-center gap-1" : "flex flex-col gap-1",
        e.mode === "inline" && o.collapsed ? "w-16" : ""
      ))
    }, [
      (l(!0), s(w, null, C(e.items, (u) => (l(), s("div", {
        key: u.key
      }, [
        d("button", {
          class: p(x(b)(
            "w-full flex items-center gap-2 px-3 py-2 text-[14px] rounded-md transition-colors",
            e.mode === "horizontal" ? "justify-center" : "justify-start",
            n.value === u.key ? "bg-[#e6f4ff] text-[#1677ff] font-medium" : "text-[#595959] hover:bg-[#f5f5f5] hover:text-[#262626]",
            u.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            o.collapsed && e.mode === "inline" ? "justify-center px-2" : ""
          )),
          disabled: u.disabled,
          onClick: (m) => i(u)
        }, [
          u.icon ? (l(), s("span", oe, h(u.icon), 1)) : f("", !0),
          !o.collapsed || e.mode !== "inline" ? (l(), s("span", ne, h(u.label), 1)) : f("", !0)
        ], 10, ae),
        u.children && u.children.length && !o.collapsed ? (l(), s("div", re, [
          (l(!0), s(w, null, C(u.children, (m) => (l(), s("button", {
            key: m.key,
            class: p(x(b)(
              "w-full flex items-center gap-2 px-3 py-2 text-[14px] rounded-md transition-colors",
              n.value === m.key ? "bg-[#e6f4ff] text-[#1677ff]" : "text-[#595959] hover:bg-[#f5f5f5]",
              m.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            )),
            disabled: m.disabled,
            onClick: (k) => i(m)
          }, h(m.label), 11, ie))), 128))
        ])) : f("", !0)
      ]))), 128))
    ], 2));
  }
}), de = { class: "w-full overflow-auto" }, ce = { class: "bg-[#fafafa]" }, ue = { key: 0 }, fe = ["colspan"], qt = /* @__PURE__ */ v({
  __name: "Table",
  props: {
    columns: { default: () => [] },
    dataSource: { default: () => [] },
    pagination: { type: [Object, Boolean] },
    rowKey: {},
    loading: { type: Boolean, default: !1 },
    onRow: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => a.size === "sm" ? "h-9" : a.size === "lg" ? "h-14" : "h-11"), r = y(() => a.size === "sm" ? "text-xs" : a.size === "lg" ? "text-base" : "text-sm");
    return (n, i) => (l(), s("div", de, [
      d("table", {
        class: p(x(b)("w-full border-collapse", n.bordered ? "border border-[#f0f0f0]" : ""))
      }, [
        d("thead", null, [
          d("tr", ce, [
            (l(!0), s(w, null, C(e.columns, (o) => (l(), s("th", {
              key: o.key,
              class: p(x(b)("text-left px-4 font-medium text-[#262626]", r.value, n.bordered ? "border border-[#f0f0f0]" : "border-b border-[#f0f0f0]", o.align === "center" ? "text-center" : o.align === "right" ? "text-right" : "")),
              style: j({ width: o.width })
            }, h(o.title), 7))), 128))
          ])
        ]),
        d("tbody", null, [
          e.dataSource.length === 0 ? (l(), s("tr", ue, [
            d("td", {
              colspan: e.columns.length,
              class: "p-0"
            }, [
              B(n.$slots, "empty", {}, () => [
                i[0] || (i[0] = d("div", { class: "py-12 text-center text-[#8c8c8c]" }, "暂无数据", -1))
              ])
            ], 8, fe)
          ])) : (l(!0), s(w, { key: 1 }, C(e.dataSource, (o, c) => (l(), s("tr", {
            key: c,
            class: p(x(b)(t.value, n.striped && c % 2 === 1 ? "bg-[#fafafa]" : "", "hover:bg-[#f5f5f5] transition-colors"))
          }, [
            (l(!0), s(w, null, C(e.columns, (u) => (l(), s("td", {
              key: u.key,
              class: p(x(b)("px-4 text-[#262626]", r.value, n.bordered ? "border border-[#f0f0f0]" : ""))
            }, [
              B(n.$slots, `cell-${u.key}`, {
                row: o,
                column: u,
                index: c
              }, () => [
                S(h(u.render ? u.render(o[u.dataIndex ?? u.key], o, c) : u.dataIndex ? String(o[u.dataIndex] ?? "") : ""), 1)
              ])
            ], 2))), 128))
          ], 2))), 128))
        ])
      ], 2)
    ]));
  }
}), Gt = /* @__PURE__ */ v({
  __name: "Tag",
  props: {
    color: {},
    variant: {},
    size: {},
    closable: { type: Boolean, default: !1 },
    onClose: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["close"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = {
      primary: "bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]",
      success: "bg-[#f6ffed] text-[#52c41a] border-[#52c41a]",
      warning: "bg-[#fffbe6] text-[#faad14] border-[#faad14]",
      danger: "bg-[#fff2f0] text-[#ff4d4f] border-[#ff4d4f]",
      info: "bg-[#e6f4ff] text-[#1677ff] border-[#1677ff]",
      gray: "bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]"
    }, i = y(() => {
      const c = "inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded font-medium border";
      return t.color ? Object.keys(n).includes(t.color) ? b(c, n[t.color], t.className ?? "") : b(c, "border", t.className ?? "") : b(c, "bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]", t.className ?? "");
    }), o = y(() => !t.color || Object.keys(n).includes(t.color) ? {} : { color: t.color, borderColor: t.color });
    return (c, u) => (l(), s("span", {
      class: p(i.value),
      style: j(o.value)
    }, [
      B(c.$slots, "default"),
      e.closable ? (l(), s("button", {
        key: 0,
        class: "ml-1 hover:opacity-70 transition-opacity",
        onClick: u[0] || (u[0] = W((m) => r("close", m), ["stop"]))
      }, [...u[1] || (u[1] = [
        d("svg", {
          width: "10",
          height: "10",
          viewBox: "0 0 10 10",
          fill: "currentColor"
        }, [
          d("path", { d: "M5 0a5 5 0 100 10A5 5 0 005 0zm2 7L6 5l1 1 1-1-1-1-1 1-1-1 1-1 1 1 1 1z" })
        ], -1)
      ])])) : f("", !0)
    ], 6));
  }
}), pe = ["src"], me = { key: 1 }, Jt = /* @__PURE__ */ v({
  __name: "Avatar",
  props: {
    src: {},
    size: { default: "md" },
    shape: { default: "circle" },
    text: {},
    color: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = V(!1);
    y(() => !a.src || t.value);
    const r = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg",
      xl: "w-14 h-14 text-xl"
    }, n = {
      primary: "bg-[#1677ff]",
      success: "bg-[#52c41a]",
      warning: "bg-[#faad14]",
      danger: "bg-[#ff4d4f]",
      info: "bg-[#1677ff]",
      gray: "bg-[#8c8c8c]"
    }, i = y(() => typeof a.size == "number" ? "" : r[a.size] ?? r.md), o = y(() => typeof a.size == "number" ? { width: a.size, height: a.size } : {}), c = y(() => typeof a.color == "string" && !Object.keys(n).includes(a.color) ? "" : n[a.color] ?? n.primary);
    return (u, m) => (l(), s("div", {
      class: p(x(b)(
        "flex items-center justify-center overflow-hidden font-medium text-white shrink-0 select-none",
        i.value,
        e.shape === "circle" ? "rounded-full" : "rounded-lg",
        c.value,
        a.className ?? ""
      )),
      style: j(o.value)
    }, [
      e.src && !t.value ? (l(), s("img", {
        key: 0,
        src: e.src,
        alt: "",
        class: "w-full h-full object-cover",
        onError: m[0] || (m[0] = (k) => t.value = !0)
      }, null, 40, pe)) : (l(), s("span", me, h(e.text?.[0]?.toUpperCase() ?? "?"), 1))
    ], 6));
  }
}), he = { class: "w-full" }, be = { class: "flex items-center gap-3" }, ve = {
  key: 0,
  class: "text-[14px] font-medium text-[#262626] shrink-0 w-10 text-right"
}, Xt = /* @__PURE__ */ v({
  __name: "Progress",
  props: {
    percent: { default: 0 },
    size: { default: "md" },
    strokeWidth: { default: 8 },
    color: {},
    trackColor: {},
    showText: { type: Boolean, default: !0 },
    format: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => Math.min(Math.max(a.percent ?? 0, 0), 100)), r = {
      normal: "bg-[#1677ff]",
      active: "bg-[#1677ff]",
      success: "bg-[#52c41a]",
      error: "bg-[#ff4d4f]"
    };
    return (n, i) => (l(), s("div", he, [
      d("div", be, [
        d("div", {
          class: "flex-1 rounded-full bg-[#f0f0f0] overflow-hidden",
          style: j({ height: typeof e.strokeWidth == "number" ? e.strokeWidth + "px" : "8px" })
        }, [
          d("div", {
            class: p(["h-full rounded-full transition-all duration-300", r[n.status]]),
            style: j({ width: t.value + "%", backgroundColor: n.strokeColor })
          }, null, 6)
        ], 4),
        e.showText ? (l(), s("span", ve, h(t.value) + "% ", 1)) : f("", !0)
      ])
    ]));
  }
}), xe = { class: "flex flex-col" }, ye = {
  key: 0,
  class: "text-[14px] text-[#8c8c8c] mb-1"
}, ge = { class: "flex items-baseline gap-1" }, we = {
  key: 0,
  class: "text-[24px] text-[#262626]"
}, ke = {
  key: 1,
  class: "text-[14px] text-[#8c8c8c]"
}, Qt = /* @__PURE__ */ v({
  __name: "Statistic",
  props: {
    title: {},
    value: { default: 0 },
    prefix: {},
    suffix: {},
    decimal: {},
    groupSeparator: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => a.formatter ? a.formatter(Number(a.value)) : typeof a.value == "number" && a.precision !== void 0 ? a.value.toFixed(a.precision) : String(a.value ?? ""));
    return (r, n) => (l(), s("div", xe, [
      e.title ? (l(), s("span", ye, h(e.title), 1)) : f("", !0),
      d("div", ge, [
        e.prefix ? (l(), s("span", we, h(e.prefix), 1)) : f("", !0),
        d("span", {
          class: "text-[24px] font-bold text-[#262626]",
          style: j(r.valueStyle)
        }, h(t.value), 5),
        e.suffix ? (l(), s("span", ke, h(e.suffix), 1)) : f("", !0)
      ])
    ]));
  }
}), $e = {
  key: 0,
  class: "p-4 border border-[#f0f0f0] rounded-lg"
}, Ce = { class: "text-xs text-gray-400" }, Be = {
  key: 2,
  class: "col-span-full text-center py-8 text-gray-400"
}, Zt = /* @__PURE__ */ v({
  __name: "CardList",
  props: {
    dataSource: { default: () => [] },
    column: {},
    gap: { default: "md" },
    renderItem: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12"
    };
    return (t, r) => (l(), s("div", {
      class: p(x(b)("grid", a[e.gap] ?? a.md))
    }, [
      t.loading ? (l(), s(w, { key: 0 }, C(3, (n) => d("div", {
        key: n,
        class: "p-4 bg-gray-50 rounded-lg animate-pulse"
      }, [...r[0] || (r[0] = [
        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }, null, -1),
        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" }, null, -1)
      ])])), 64)) : (l(!0), s(w, { key: 1 }, C(e.dataSource, (n, i) => B(t.$slots, "default", {
        key: i,
        item: n,
        index: i
      }, () => [
        t.$slots.default ? f("", !0) : (l(), s("div", $e, [
          d("pre", Ce, h(JSON.stringify(n)), 1)
        ]))
      ])), 128)),
      !t.loading && e.dataSource.length === 0 ? (l(), s("div", Be, " 暂无数据 ")) : f("", !0)
    ], 2));
  }
}), ze = { class: "w-full" }, el = /* @__PURE__ */ v({
  __name: "Descriptions",
  props: {
    column: { default: 3 },
    items: { default: () => [] },
    size: {},
    bordered: { type: Boolean, default: !1 },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    return (a, t) => (l(), s("div", ze, [
      (l(!0), s(w, null, C(e.items, (r, n) => (l(), s("div", {
        key: r.key,
        class: p(a.cx("flex", e.bordered ? "border border-[#f0f0f0] rounded mb-2 last:mb-0" : "mb-2"))
      }, [
        d("div", {
          class: p(a.cx("px-4 py-3 text-[14px] bg-[#fafafa] text-[#8c8c8c] shrink-0", e.bordered ? "border-r border-[#f0f0f0] w-32" : "w-32"))
        }, h(r.label), 3),
        d("div", {
          class: p(a.cx("px-4 py-3 text-[14px] text-[#262626] flex-1", e.bordered ? "border-r border-[#f0f0f0] last:border-r-0" : ""))
        }, h(r.value ?? "-"), 3)
      ], 2))), 128))
    ]));
  }
}), Ve = { class: "relative inline-flex" }, tl = /* @__PURE__ */ v({
  __name: "Badge",
  props: {
    count: { default: 0 },
    dot: { type: Boolean, default: !1 },
    overflowCount: { default: 99 },
    color: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => a.dot ? null : a.count > a.overflowCount ? `${a.overflowCount}+` : a.count);
    return (r, n) => (l(), s("div", Ve, [
      B(r.$slots, "default"),
      e.dot || e.count > 0 ? (l(), s("span", {
        key: 0,
        class: p(["absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#ff4d4f] text-white text-[10px] font-bold leading-none", e.dot ? "w-[8px] h-[8px] min-w-[8px] -right-1" : ""])
      }, h(e.dot ? "" : t.value), 3)) : f("", !0)
    ]));
  }
}), je = {
  key: 0,
  class: "absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0"
}, Ne = ["type", "value", "placeholder", "maxlength", "readonly", "disabled"], Me = {
  key: 2,
  class: "absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] shrink-0"
}, ll = /* @__PURE__ */ v({
  __name: "Input",
  props: {
    value: {},
    defaultValue: {},
    placeholder: { default: "" },
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean },
    size: {},
    prefix: {},
    suffix: {},
    onChange: {},
    onPressEnter: {},
    onFocus: {},
    onBlur: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = V(t.defaultValue ?? ""), i = V(!1), o = y(
      () => t.modelValue !== void 0 ? t.modelValue : n.value
    ), c = ($) => {
      const g = $.target.value;
      t.modelValue === void 0 && (n.value = g), r("update:modelValue", g), r("change", g);
    }, u = () => {
      t.modelValue === void 0 && (n.value = ""), r("update:modelValue", ""), r("change", "");
    }, m = y(
      () => b(
        "flex items-center rounded-md border transition-all duration-200 bg-white",
        "focus-within:border-[#1677ff] focus-within:shadow-[0_0_0_2px_rgba(22,119,255,0.1)]",
        t.disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed" : "border-[#d9d9d9] hover:border-[#4096ff]"
      )
    ), k = y(() => String(o.value).length);
    return ($, g) => (l(), s("div", {
      class: p(x(b)("relative inline-flex w-full", m.value)),
      style: { height: "38px" }
    }, [
      e.prefix ? (l(), s("span", je, h(e.prefix), 1)) : f("", !0),
      d("input", {
        type: e.type,
        value: o.value,
        placeholder: e.placeholder,
        maxlength: $.maxLength,
        readonly: $.readOnly,
        disabled: e.disabled,
        class: p(x(b)(
          "flex-1 min-w-0 border-none outline-none bg-transparent text-[14px] text-[#262626]",
          "placeholder:text-[#bfbfbf]",
          "disabled:text-[#bfbfbf] disabled:cursor-not-allowed",
          e.prefix ? "pl-10" : "pl-3",
          e.suffix || $.allowClear || $.showCount ? "pr-10" : "pr-3",
          "py-2"
        )),
        onInput: c,
        onFocus: g[0] || (g[0] = (z) => i.value = !0),
        onBlur: g[1] || (g[1] = (z) => i.value = !1)
      }, null, 42, Ne),
      $.allowClear && o.value && !e.disabled ? (l(), s("button", {
        key: 1,
        type: "button",
        class: "absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8c8c] hover:text-[#595959]",
        onClick: u
      }, [...g[2] || (g[2] = [
        d("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "currentColor"
        }, [
          d("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" })
        ], -1)
      ])])) : f("", !0),
      e.suffix && !$.allowClear ? (l(), s("span", Me, h(e.suffix), 1)) : f("", !0),
      $.showCount && $.maxLength ? (l(), s("span", {
        key: 3,
        class: p(x(b)("absolute right-3 top-1/2 -translate-y-1/2 text-xs", k.value >= $.maxLength ? "text-[#ff4d4f]" : "text-[#8c8c8c]"))
      }, h(k.value) + "/" + h($.maxLength), 3)) : f("", !0)
    ], 2));
  }
}), Se = { class: "relative inline-flex w-full" }, Te = {
  key: 0,
  class: "absolute top-full left-0 right-0 mt-1 bg-white rounded-md border border-[#d9d9d9] shadow-lg z-[1000] max-h-60 overflow-auto"
}, Le = {
  key: 0,
  class: "p-2 border-b border-[#f0f0f0]"
}, _e = ["onClick"], Ie = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "#1677ff"
}, sl = /* @__PURE__ */ v({
  __name: "Select",
  props: {
    value: {},
    defaultValue: {},
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    size: {},
    mode: {},
    onChange: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = V(!1), i = V(""), o = V(t.multiple ? [] : ""), c = y(() => t.modelValue !== void 0 ? t.modelValue : o.value), u = y(
      () => t.searchable && i.value ? t.options.filter((g) => g.label.toLowerCase().includes(i.value.toLowerCase())) : t.options
    ), m = y(() => t.multiple ? c.value.map((g) => t.options.find((z) => z.value === g)?.label).filter(Boolean) : t.options.find((g) => g.value === c.value)?.label ?? ""), k = (g) => {
      if (t.multiple) {
        const z = [...c.value], N = z.indexOf(g.value);
        N === -1 ? z.push(g.value) : z.splice(N, 1), t.modelValue === void 0 && (o.value = z), r("update:modelValue", z), r("change", z);
      } else
        t.modelValue === void 0 && (o.value = g.value), r("update:modelValue", g.value), r("change", g.value), n.value = !1, i.value = "";
    }, $ = (g) => t.multiple ? c.value.includes(g) : c.value === g;
    return (g, z) => (l(), s("div", Se, [
      d("div", {
        onClick: z[0] || (z[0] = (N) => !e.disabled && (n.value = !n.value)),
        class: p(x(b)("flex items-center justify-between w-full rounded-md border cursor-pointer transition-all duration-200 bg-white px-3", e.disabled ? "bg-[#f5f5f5] border-[#e8e8e8] cursor-not-allowed" : "border-[#d9d9d9] hover:border-[#4096ff]", n.value ? "border-[#1677ff]" : ""))
      }, [
        d("span", {
          class: p(x(b)("text-[14px] truncate", m.value ? "text-[#262626]" : "text-[#bfbfbf]"))
        }, h(g.multiple && m.value.length > 0 ? `已选 ${m.value.length} 项` : m.value || e.placeholder), 3),
        (l(), s("svg", {
          class: p(x(b)("shrink-0 transition-transform", n.value ? "rotate-180" : "")),
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "currentColor"
        }, [...z[2] || (z[2] = [
          d("path", { d: "M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4 6 8.825z" }, null, -1)
        ])], 2))
      ], 2),
      n.value ? (l(), s("div", Te, [
        g.searchable ? (l(), s("div", Le, [
          I(d("input", {
            "onUpdate:modelValue": z[1] || (z[1] = (N) => i.value = N),
            type: "text",
            placeholder: "搜索...",
            class: "w-full px-2 py-1 text-sm border border-[#d9d9d9] rounded focus:outline-none focus:border-[#1677ff]",
            autofocus: ""
          }, null, 512), [
            [F, i.value]
          ])
        ])) : f("", !0),
        (l(!0), s(w, null, C(u.value, (N) => (l(), s("div", {
          key: N.value,
          onClick: (At) => !N.disabled && k(N),
          class: p(x(b)("px-3 py-2 text-[14px] cursor-pointer flex items-center justify-between", N.disabled ? "text-[#bfbfbf] cursor-not-allowed" : "text-[#262626] hover:bg-[#f5f5f5]", $(N.value) ? "bg-[#e6f4ff] text-[#1677ff]" : ""))
        }, [
          d("span", null, h(N.label), 1),
          $(N.value) ? (l(), s("svg", Ie, [...z[3] || (z[3] = [
            d("path", { d: "M10.28 2.28L4.5 8.063 1.72 5.28a.75.75 0 00-1.06 1.06l3.25 3.25a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06z" }, null, -1)
          ])])) : f("", !0)
        ], 10, _e))), 128))
      ])) : f("", !0)
    ]));
  }
}), Pe = ["aria-checked", "disabled"], al = /* @__PURE__ */ v({
  __name: "Switch",
  props: {
    checked: { type: Boolean },
    defaultChecked: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    size: { default: "md" },
    activeText: {},
    inactiveText: {},
    onChange: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["change"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = ref(t.defaultChecked), i = y(() => t.checked !== void 0 ? t.checked : n.value), o = () => {
      if (t.disabled || t.loading) return;
      const c = !i.value;
      t.checked === void 0 && (n.value = c), r("change", c);
    };
    return (c, u) => (l(), s("button", {
      type: "button",
      role: "switch",
      "aria-checked": i.value,
      onClick: o,
      class: p(x(b)("relative inline-flex items-center rounded-full transition-all duration-200 cursor-pointer", e.size === "sm" ? "w-9 h-5" : "w-11 h-6", i.value ? "bg-[#1677ff]" : "bg-[#d9d9d9]", e.disabled || c.loading ? "opacity-50 cursor-not-allowed" : "")),
      disabled: e.disabled || c.loading
    }, [
      d("span", {
        class: p(x(b)("absolute bg-white rounded-full shadow transition-transform duration-200", e.size === "sm" ? "w-4 h-4" : "w-5 h-5", i.value ? e.size === "sm" ? "translate-x-4" : "translate-x-5" : "translate-x-0.5"))
      }, null, 2)
    ], 10, Pe));
  }
}), ol = /* @__PURE__ */ v({
  __name: "Form",
  props: {
    layout: { default: "vertical" },
    labelWidth: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["finish", "finishFailed", "change"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = U({ ...t.initialValues }), i = (c, u) => {
      n[c] = u, r("change", { ...n });
    };
    P("formValues", n), P("formSetFieldValue", i), P("formLayout", t.layout);
    const o = (c) => {
      c.preventDefault(), r("finish", { ...n });
    };
    return (c, u) => (l(), s("form", {
      class: p(c.cx("flex", e.layout === "vertical" ? "flex-col gap-3" : e.layout === "inline" ? "flex-row items-center gap-3 flex-wrap" : "flex-row items-center gap-3")),
      onSubmit: o
    }, [
      B(c.$slots, "default")
    ], 34));
  }
}), Oe = { class: "relative" }, De = ["rows", "maxlength", "placeholder"], Ae = {
  key: 0,
  class: "absolute right-3 bottom-2 text-xs text-[#8c8c8c]"
}, nl = /* @__PURE__ */ v({
  __name: "TextArea",
  props: /* @__PURE__ */ T({
    value: {},
    defaultValue: {},
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    rows: { default: 3 },
    autoSize: { type: [Boolean, Object] },
    maxLength: { default: 200 },
    onChange: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = L(e, "modelValue");
    return (t, r) => (l(), s("div", Oe, [
      I(d("textarea", {
        "onUpdate:modelValue": r[0] || (r[0] = (n) => a.value = n),
        rows: typeof e.rows == "string" ? parseInt(e.rows) : e.rows,
        maxlength: e.maxLength,
        placeholder: e.placeholder,
        class: "w-full px-3 py-2 border border-[#d9d9d9] rounded-md text-[14px] text-[#262626] placeholder:text-[#bfbfbf] resize-y transition-colors focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)] focus:outline-none disabled:bg-[#f5f5f5]"
      }, null, 8, De), [
        [F, a.value]
      ]),
      t.showCount && e.maxLength ? (l(), s("span", Ae, h((a.value || "").length) + "/" + h(e.maxLength), 1)) : f("", !0)
    ]));
  }
}), Fe = ["disabled", "placeholder"], rl = /* @__PURE__ */ v({
  __name: "DatePicker",
  props: /* @__PURE__ */ T({
    value: {},
    defaultValue: {},
    placeholder: { default: "请选择日期" },
    disabled: { type: Boolean, default: !1 },
    format: { default: "YYYY-MM-DD" },
    onChange: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = L(e, "modelValue");
    return (t, r) => I((l(), s("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (n) => a.value = n),
      type: "date",
      disabled: e.disabled,
      placeholder: e.placeholder,
      class: "h-[38px] px-3 border border-[#d9d9d9] rounded-md text-[14px] text-[#262626] focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)] focus:outline-none disabled:bg-[#f5f5f5]"
    }, null, 8, Fe)), [
      [F, a.value]
    ]);
  }
}), Re = ["multiple", "accept"], We = {
  key: 0,
  class: "mt-3 flex flex-col gap-2"
}, Ue = {
  key: 0,
  class: "text-[#1677ff]"
}, Ee = {
  key: 1,
  class: "text-[#52c41a]"
}, Ke = {
  key: 2,
  class: "text-[#ff4d4f]"
}, il = /* @__PURE__ */ v({
  __name: "Upload",
  props: {
    action: { default: "#" },
    accept: {},
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    fileList: {},
    onChange: {},
    onSuccess: {},
    onError: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["change"],
  setup(e, { emit: a }) {
    const r = V(e.defaultFileList || []), n = a, i = (o) => {
      const c = o.target.files;
      c && (Array.from(c).forEach((u, m) => {
        const k = { uid: `${Date.now()}-${m}`, name: u.name, status: "done", url: URL.createObjectURL(u) };
        r.value.push(k);
      }), n("change", r.value));
    };
    return (o, c) => (l(), s("div", null, [
      d("label", {
        class: p(x(b)("inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d9d9d9] rounded cursor-pointer text-[14px] text-[#595959] hover:border-[#4096ff]", o.draggable ? "p-8 border-dashed" : ""))
      }, [
        c[0] || (c[0] = d("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2"
        }, [
          d("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" })
        ], -1)),
        d("span", null, h(o.draggable ? "拖拽或点击上传" : "选择文件"), 1),
        d("input", {
          type: "file",
          multiple: e.multiple,
          accept: e.accept,
          class: "hidden",
          onChange: i
        }, null, 40, Re)
      ], 2),
      r.value.length > 0 ? (l(), s("div", We, [
        (l(!0), s(w, null, C(r.value, (u) => (l(), s("div", {
          key: u.uid,
          class: "flex items-center gap-2 text-[14px]"
        }, [
          d("span", null, h(u.name), 1),
          u.status === "uploading" ? (l(), s("span", Ue, "上传中...")) : u.status === "done" ? (l(), s("span", Ee, "✓")) : (l(), s("span", Ke, "✗"))
        ]))), 128))
      ])) : f("", !0)
    ]));
  }
}), Ye = ["value", "disabled"], dl = /* @__PURE__ */ v({
  __name: "Radio",
  props: /* @__PURE__ */ T({
    value: {},
    checked: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    onChange: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = L(e, "modelValue");
    return (t, r) => (l(), s("div", {
      class: p(t.direction === "horizontal" ? "flex flex-row gap-4" : "flex flex-col gap-2")
    }, [
      (l(!0), s(w, null, C(t.options, (n) => (l(), s("label", {
        key: n.value,
        class: p(["flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]", n.disabled || e.disabled ? "opacity-50 cursor-not-allowed" : ""])
      }, [
        I(d("input", {
          type: "radio",
          value: n.value,
          disabled: n.disabled || e.disabled,
          "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
          class: "w-4 h-4 accent-[#1677ff]"
        }, null, 8, Ye), [
          [E, a.value]
        ]),
        S(" " + h(n.label), 1)
      ], 2))), 128))
    ], 2));
  }
}), He = ["value", "disabled"], cl = /* @__PURE__ */ v({
  __name: "Checkbox",
  props: /* @__PURE__ */ T({
    value: {},
    checked: { type: Boolean },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    onChange: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const a = L(e, "modelValue");
    return (t, r) => (l(), s("div", {
      class: p(t.direction === "horizontal" ? "flex flex-row gap-4" : "flex flex-col gap-2")
    }, [
      (l(!0), s(w, null, C(t.options, (n) => (l(), s("label", {
        key: n.value,
        class: p(["flex items-center gap-2 cursor-pointer text-[14px] text-[#262626]", n.disabled ? "opacity-50 cursor-not-allowed" : ""])
      }, [
        I(d("input", {
          type: "checkbox",
          value: n.value,
          disabled: n.disabled,
          "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
          class: "w-4 h-4 accent-[#1677ff]"
        }, null, 8, He), [
          [K, a.value]
        ]),
        S(" " + h(n.label), 1)
      ], 2))), 128))
    ], 2));
  }
}), qe = { class: "flex items-center gap-1" }, Ge = ["onClick"], Je = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
}, Xe = ["fill"], ul = /* @__PURE__ */ v({
  __name: "Rate",
  props: /* @__PURE__ */ T({
    value: {},
    defaultValue: { default: 0 },
    count: { default: 5 },
    allowHalf: { type: Boolean, default: !1 },
    readOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    tooltips: {},
    onChange: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: a }) {
    const t = e, r = a, n = L(e, "modelValue"), i = y(() => n.value ?? t.defaultValue), o = (c) => {
      t.readOnly || (n.value = c, r("change", c));
    };
    return (c, u) => (l(), s("div", qe, [
      (l(!0), s(w, null, C(e.count, (m) => (l(), s("span", {
        key: m,
        class: p(["cursor-pointer transition-transform hover:scale-110", e.readOnly ? "cursor-default hover:scale-100" : ""]),
        onClick: (k) => o(m)
      }, [
        (l(), s("svg", Je, [
          d("path", {
            d: "M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z",
            fill: i.value >= m ? "#faad14" : "#d9d9d9"
          }, null, 8, Xe)
        ]))
      ], 10, Ge))), 128))
    ]));
  }
}), Qe = ["type", "disabled"], Ze = {
  key: 0,
  class: "animate-spin h-4 w-4 shrink-0 mr-2",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, et = {
  key: 1,
  class: "shrink-0 mr-1"
}, D = /* @__PURE__ */ v({
  __name: "Button",
  props: {
    variant: {},
    size: { default: "md" },
    danger: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    loading: { type: Boolean, default: !1 },
    icon: {},
    href: {},
    target: {},
    onClick: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {},
    htmlType: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = {
      xs: "h-6 px-2 text-xs gap-1",
      sm: "h-8 px-3 text-sm gap-1",
      md: "h-10 px-4 text-base gap-2",
      lg: "h-12 px-6 text-lg gap-2",
      xl: "h-14 px-8 text-xl gap-2"
    }, i = {
      primary: "bg-[#1677ff] text-white hover:bg-[#4096ff] active:bg-[#0958d9] disabled:bg-[#e8e8e8] disabled:text-[#bfbfbf]",
      default: "bg-white text-[#262626] border border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] active:border-[#0958d9] active:text-[#0958d9] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]",
      dashed: "bg-white text-[#262626] border border-dashed border-[#d9d9d9] hover:border-[#4096ff] hover:text-[#4096ff] disabled:border-[#e8e8e8] disabled:text-[#bfbfbf]",
      text: "bg-transparent text-[#262626] hover:bg-[#f5f5f5] active:bg-[#e8e8e8] disabled:text-[#bfbfbf]",
      link: "bg-transparent text-[#1677ff] hover:text-[#4096ff] active:text-[#0958d9] disabled:text-[#bfbfbf]"
    }, o = y(() => {
      const u = [
        "inline-flex items-center justify-center font-medium rounded-md",
        "transition-all duration-200 cursor-pointer select-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677ff] focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        n[t.size] ?? n.md,
        t.block ? "w-full" : "",
        t.className ?? ""
      ].filter(Boolean).join(" "), m = t.danger ? t.type === "text" || t.type === "link" ? "text-[#ff4d4f] hover:text-[#ff7875] active:text-[#d9363e]" : "bg-[#ff4d4f] hover:bg-[#ff7875] active:bg-[#d9363e] text-white" : i[t.type] ?? i.default;
      return b(u, m);
    }), c = (u) => {
      !t.disabled && !t.loading && r("click", u);
    };
    return (u, m) => (l(), s("button", {
      type: e.htmlType,
      class: p(o.value),
      disabled: e.disabled || e.loading,
      onClick: c
    }, [
      e.loading ? (l(), s("svg", Ze, [...m[0] || (m[0] = [
        d("circle", {
          class: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }, null, -1),
        d("path", {
          class: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        }, null, -1)
      ])])) : f("", !0),
      !e.loading && e.icon ? (l(), s("span", et, h(e.icon), 1)) : f("", !0),
      d("span", null, [
        B(u.$slots, "default")
      ])
    ], 10, Qe));
  }
}), tt = {
  key: 0,
  class: "fixed inset-0 z-[1300] flex items-center justify-center p-4"
}, lt = {
  key: 0,
  class: "flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]"
}, st = { class: "text-[16px] font-semibold text-[#262626]" }, at = { class: "flex-1 overflow-auto px-6 py-4" }, ot = {
  key: 1,
  class: "px-6 py-4 border-t border-[#f0f0f0]"
}, nt = {
  key: 2,
  class: "flex justify-end gap-3 px-6 py-4 border-t border-[#f0f0f0]"
}, fl = /* @__PURE__ */ v({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    title: {},
    children: {},
    footer: {},
    width: { default: 520 },
    maskClosable: { type: Boolean, default: !0 },
    onCancel: {},
    onOk: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["ok", "cancel", "close"],
  setup(e, { emit: a }) {
    const t = e, r = a;
    A(() => t.visible, (i) => {
      document.body.style.overflow = i ? "hidden" : "";
    }, { immediate: !0 });
    const n = y(() => ({
      maxWidth: typeof t.width == "number" ? `${t.width}px` : t.width
    }));
    return (i, o) => (l(), M(_, { to: "body" }, [
      i.visible ? (l(), s("div", tt, [
        i.mask ? (l(), s("div", {
          key: 0,
          class: "absolute inset-0 bg-[rgba(0,0,0,0.45)]",
          onClick: o[0] || (o[0] = (c) => e.maskClosable && r("cancel"))
        })) : f("", !0),
        d("div", {
          class: p(x(b)("relative bg-white rounded-lg shadow-xl flex flex-col max-h-[85vh] z-10 w-full", t.className ?? "")),
          style: j(n.value)
        }, [
          e.title || i.closable ? (l(), s("div", lt, [
            d("span", st, h(e.title), 1),
            i.closable ? (l(), s("button", {
              key: 0,
              onClick: o[1] || (o[1] = (c) => r("cancel")),
              class: "text-[#8c8c8c] hover:text-[#595959] transition-colors p-1"
            }, [...o[4] || (o[4] = [
              d("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "currentColor"
              }, [
                d("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm3 9.1L9.1 7 11 5.1 9.1 3.2 7 5.1 4.9 3.2 3 5.1 4.9 7 3 8.9 4.9 10.8 7 8.9l2.1 1.2z" })
              ], -1)
            ])])) : f("", !0)
          ])) : f("", !0),
          d("div", at, [
            B(i.$slots, "default")
          ]),
          i.$slots.footer !== void 0 ? (l(), s("div", ot, [
            B(i.$slots, "footer")
          ])) : (l(), s("div", nt, [
            i.showCancel ? (l(), M(D, {
              key: 0,
              onClick: o[2] || (o[2] = (c) => r("cancel"))
            }, {
              default: O(() => [
                S(h(i.cancelText), 1)
              ]),
              _: 1
            })) : f("", !0),
            i.showOk ? (l(), M(D, {
              key: 1,
              type: "primary",
              loading: i.confirmLoading,
              onClick: o[3] || (o[3] = (c) => r("ok"))
            }, {
              default: O(() => [
                S(h(i.okText), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : f("", !0)
          ]))
        ], 6)
      ])) : f("", !0)
    ]));
  }
}), rt = { class: "flex flex-col items-center justify-center py-12 px-4" }, it = { class: "text-[14px] text-[#8c8c8c]" }, pl = /* @__PURE__ */ v({
  __name: "Empty",
  props: {
    description: { default: "暂无数据" },
    image: {},
    imageStyle: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    return (a, t) => (l(), s("div", rt, [
      t[0] || (t[0] = d("svg", {
        width: "64",
        height: "40",
        viewBox: "0 0 64 40",
        fill: "none",
        class: "mb-4 opacity-60"
      }, [
        d("path", {
          d: "M8 8h48v24H8z",
          stroke: "#d9d9d9",
          strokeWidth: "2",
          strokeDasharray: "4 2"
        }),
        d("path", {
          d: "M24 20h16M32 14v12",
          stroke: "#d9d9d9",
          strokeWidth: "2",
          strokeLinecap: "round"
        })
      ], -1)),
      d("span", it, h(e.description), 1)
    ]));
  }
}), dt = {
  key: 0,
  class: "space-y-2"
}, ml = /* @__PURE__ */ v({
  __name: "Skeleton",
  props: {
    active: { type: Boolean },
    avatar: { type: Boolean },
    title: { type: Boolean },
    paragraph: { type: [Boolean, Object] },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = e, t = y(() => b("bg-[#f0f0f0] rounded", a.animated ? "animate-pulse" : ""));
    return (r, n) => r.loading ? (l(), s("div", dt, [
      (l(!0), s(w, null, C(r.rows, (i) => (l(), s("div", {
        key: i,
        class: p(t.value),
        style: j({ width: i === r.rows ? "60%" : "100%", height: r.height ?? 16 })
      }, null, 6))), 128))
    ])) : B(r.$slots, "default", { key: 1 });
  }
}), ct = {
  key: 0,
  class: "fixed inset-0 z-[1500] flex items-center justify-center bg-white/80"
}, ut = { class: "flex flex-col items-center gap-3" }, ft = {
  key: 0,
  class: "text-[14px] text-[#595959]"
}, pt = {
  key: 0,
  class: "relative inline-flex"
}, mt = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center bg-white/60"
}, ht = { class: "flex flex-col items-center gap-2" }, bt = {
  key: 0,
  class: "text-[12px] text-[#8c8c8c]"
}, vt = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center"
}, xt = { class: "flex flex-col items-center gap-2" }, yt = {
  key: 0,
  class: "text-[12px] text-[#8c8c8c]"
}, hl = /* @__PURE__ */ v({
  __name: "Spin",
  props: {
    spinning: { type: Boolean, default: !0 },
    size: { default: "md" },
    tip: {},
    fullscreen: { type: Boolean, default: !1 },
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  setup(e) {
    const a = {
      xs: "w-4 h-4 border-[2px]",
      sm: "w-6 h-6 border-[2px]",
      md: "w-10 h-10 border-[3px]",
      lg: "w-14 h-14 border-[4px]",
      xl: "w-20 h-20 border-[5px]"
    };
    return (t, r) => (l(), s(w, null, [
      (l(), M(_, { to: "body" }, [
        e.fullscreen && e.spinning ? (l(), s("div", ct, [
          d("div", ut, [
            d("div", {
              class: p(t.cx("rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin", a[e.size]))
            }, null, 2),
            e.tip ? (l(), s("span", ft, h(e.tip), 1)) : f("", !0)
          ])
        ])) : f("", !0)
      ])),
      e.fullscreen ? f("", !0) : (l(), s("div", pt, [
        d("div", {
          class: p(e.spinning ? "opacity-50 pointer-events-none" : "")
        }, [
          B(t.$slots, "default")
        ], 2),
        e.spinning && t.$slots.default ? (l(), s("div", mt, [
          d("div", ht, [
            d("div", {
              class: p(t.cx("rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin", a[e.size]))
            }, null, 2),
            e.tip ? (l(), s("span", bt, h(e.tip), 1)) : f("", !0)
          ])
        ])) : f("", !0),
        e.spinning && !t.$slots.default ? (l(), s("div", vt, [
          d("div", xt, [
            d("div", {
              class: p(t.cx("rounded-full border-[#d9d9d9] border-t-[#1677ff] animate-spin", a[e.size]))
            }, null, 2),
            e.tip ? (l(), s("span", yt, h(e.tip), 1)) : f("", !0)
          ])
        ])) : f("", !0)
      ]))
    ], 64));
  }
}), gt = { class: "relative inline-flex" }, wt = { class: "text-[14px] text-[#262626] mb-3" }, bl = /* @__PURE__ */ v({
  __name: "Popconfirm",
  props: {
    title: { default: "确定执行此操作？" },
    description: {},
    confirmText: {},
    cancelText: {},
    disabled: { type: Boolean },
    onConfirm: {},
    onCancel: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: a }) {
    const t = a, r = V(!1), n = () => {
      r.value = !r.value;
    }, i = () => {
      r.value = !1, t("confirm");
    }, o = () => {
      r.value = !1, t("cancel");
    };
    return (c, u) => (l(), s("span", gt, [
      d("span", {
        onClick: u[0] || (u[0] = (m) => c.trigger === "click" ? n() : void 0),
        onMouseenter: u[1] || (u[1] = (m) => c.trigger === "hover" ? r.value = !0 : void 0),
        onMouseleave: u[2] || (u[2] = (m) => c.trigger === "hover" ? r.value = !1 : void 0)
      }, [
        B(c.$slots, "default")
      ], 32),
      (l(), M(_, { to: "body" }, [
        r.value ? (l(), s("div", {
          key: 0,
          class: "fixed inset-0 z-[1300]",
          onClick: u[3] || (u[3] = (m) => r.value = !1)
        }, [
          d("div", {
            class: p(["absolute bg-white rounded-lg shadow-xl border border-[#f0f0f0] p-4 min-w-[200px] z-[1301]", c.placement === "top" ? "bottom-full left-1/2 -translate-x-1/2 mb-2" : ""])
          }, [
            d("p", wt, h(e.title), 1),
            d("div", { class: "flex gap-2 justify-end" }, [
              d("button", {
                class: "px-3 py-1 text-[14px] text-[#595959] hover:text-[#262626]",
                onClick: o
              }, "取消"),
              d("button", {
                class: "px-3 py-1 text-[14px] bg-[#1677ff] text-white rounded hover:bg-[#0958d9]",
                onClick: i
              }, "确定")
            ])
          ], 2)
        ])) : f("", !0)
      ]))
    ]));
  }
}), kt = {
  key: 0,
  class: "fixed inset-0 z-[1200] flex flex-col justify-end"
}, $t = {
  key: 0,
  class: "flex justify-center pt-3 pb-2 shrink-0"
}, Ct = {
  key: 1,
  class: "px-4 py-3 border-b border-[#f0f0f0] text-[16px] font-semibold text-[#262626] shrink-0"
}, Bt = { class: "flex-1 overflow-auto px-4 py-3" }, zt = {
  key: 2,
  class: "px-4 pb-8 pt-3 border-t border-[#f0f0f0] shrink-0"
}, vl = /* @__PURE__ */ v({
  __name: "BottomSheet",
  props: {
    open: { type: Boolean },
    title: {},
    actions: { default: () => [] },
    onClose: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["close"],
  setup(e, { emit: a }) {
    const t = e, r = a;
    return A(() => t.visible, (n) => {
      document.body.style.overflow = n ? "hidden" : "";
    }, { immediate: !0 }), (n, i) => (l(), M(_, { to: "body" }, [
      n.visible ? (l(), s("div", kt, [
        d("div", {
          class: "absolute inset-0 bg-[rgba(0,0,0,0.45)]",
          onClick: i[0] || (i[0] = (o) => r("close"))
        }),
        d("div", {
          class: p(x(b)("relative bg-white rounded-t-2xl flex flex-col z-10 max-h-[85vh]")),
          style: j({ height: typeof n.height == "number" ? n.height + "px" : n.height })
        }, [
          n.draggable ? (l(), s("div", $t, [...i[1] || (i[1] = [
            d("div", { class: "w-10 h-1 rounded-full bg-[#d9d9d9]" }, null, -1)
          ])])) : f("", !0),
          e.title ? (l(), s("div", Ct, h(e.title), 1)) : f("", !0),
          d("div", Bt, [
            B(n.$slots, "default")
          ]),
          e.actions.length > 0 ? (l(), s("div", zt, [
            d("div", {
              class: "grid gap-3",
              style: j({ gridTemplateColumns: `repeat(${Math.min(e.actions.length, 3)}, 1fr)` })
            }, [
              (l(!0), s(w, null, C(e.actions, (o) => (l(), M(D, {
                key: o.key,
                type: o.danger ? "primary" : "default",
                class: p(o.danger ? "!bg-[#ff4d4f] !text-white" : ""),
                onClick: (c) => {
                  o.onClick?.(), r("close");
                }
              }, {
                default: O(() => [
                  S(h(o.text), 1)
                ]),
                _: 2
              }, 1032, ["type", "class", "onClick"]))), 128))
            ], 4)
          ])) : f("", !0)
        ], 6)
      ])) : f("", !0)
    ]));
  }
}), Vt = {
  key: 0,
  class: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
}, jt = ["onClick"], xl = /* @__PURE__ */ v({
  __name: "Swiper",
  props: /* @__PURE__ */ T({
    autoplay: { type: Boolean, default: !1 },
    interval: { default: 3e3 },
    loop: { type: Boolean, default: !1 },
    pagination: { type: Boolean },
    initialIndex: {},
    onChange: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  }, {
    currentIndex: { default: 0 },
    currentIndexModifiers: {}
  }),
  emits: ["update:currentIndex"],
  setup(e) {
    const a = e, t = L(e, "currentIndex"), r = V(null);
    let n = null;
    const i = () => {
      a.autoplay && (n = setInterval(() => {
        t.value = (t.value + 1) % (a.children?.length || 1);
      }, a.interval));
    };
    Y(() => {
      i();
    }), H(() => {
      n && clearInterval(n);
    });
    const o = (c) => {
      t.value = c;
    };
    return (c, u) => (l(), s("div", {
      ref_key: "slideRef",
      ref: r,
      class: "relative overflow-hidden rounded-lg"
    }, [
      d("div", {
        class: "flex transition-transform duration-300",
        style: j({ transform: `translateX(-${t.value * 100}%)` })
      }, [
        B(c.$slots, "default")
      ], 4),
      c.dots ? (l(), s("div", Vt, [
        (l(!0), s(w, null, C(e.children?.length || 0, (m, k) => (l(), s("button", {
          key: k,
          class: p(x(b)(
            "w-1.5 h-1.5 rounded-full transition-all",
            k === t.value ? "bg-white w-4" : "bg-white/50"
          )),
          onClick: ($) => o(k)
        }, null, 10, jt))), 128))
      ])) : f("", !0)
    ], 512));
  }
}), yl = /* @__PURE__ */ v({
  __name: "PullRefresh",
  props: {
    pullingText: { default: "下拉刷新" },
    releaseText: {},
    loadingText: {},
    onRefresh: {},
    children: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["refresh"],
  setup(e, { emit: a }) {
    const t = e, r = a, n = V(!1), i = V(0), o = V(0), c = (k) => {
      if (t.refreshing) return;
      k.currentTarget.scrollTop === 0 && (o.value = k.touches[0].clientY, n.value = !0);
    }, u = (k) => {
      if (!n.value || t.refreshing) return;
      const $ = k.touches[0].clientY - o.value;
      $ > 0 && (k.preventDefault(), i.value = Math.min($, 80));
    }, m = async () => {
      n.value && (n.value = !1, i.value > 50 ? (i.value = 0, r("refresh")) : i.value = 0);
    };
    return (k, $) => (l(), s("div", {
      class: "overflow-auto",
      onTouchstart: c,
      onTouchmove: u,
      onTouchend: m
    }, [
      d("div", {
        class: "flex items-center justify-center h-12 text-[14px] text-[#8c8c8c] transition-all",
        style: j({ height: i.value > 0 ? "60px" : "0" })
      }, [
        k.refreshing ? (l(), s(w, { key: 0 }, [
          $[0] || ($[0] = d("svg", {
            class: "animate-spin w-4 h-4 mr-2",
            viewBox: "0 0 24 24",
            fill: "none"
          }, [
            d("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }),
            d("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            })
          ], -1)),
          S(" " + h(k.refreshingText), 1)
        ], 64)) : (l(), s(w, { key: 1 }, [
          S(h(e.pullingText), 1)
        ], 64))
      ], 4),
      B(k.$slots, "default")
    ], 32));
  }
}), Nt = { class: "flex" }, Mt = { class: "flex-1" }, St = { class: "px-4 py-1 bg-[#f5f5f5] text-[14px] font-medium text-[#8c8c8c] sticky top-0" }, Tt = ["onClick"], Lt = ["src"], _t = { class: "flex-1" }, It = { class: "text-[14px] font-medium text-[#262626]" }, Pt = {
  key: 0,
  class: "text-[12px] text-[#8c8c8c] mt-0.5"
}, Ot = {
  key: 0,
  class: "w-5 flex flex-col items-center justify-center gap-0.5 py-2 sticky top-0 h-fit"
}, Dt = ["onClick"], gl = /* @__PURE__ */ v({
  __name: "IndexBar",
  props: {
    indexList: {},
    onSelect: {},
    className: {},
    style: {},
    id: {},
    platform: {}
  },
  emits: ["select"],
  setup(e, { emit: a }) {
    const t = a;
    return (r, n) => (l(), s("div", Nt, [
      d("div", Mt, [
        (l(!0), s(w, null, C(r.data, (i) => (l(), s("div", {
          key: i.index,
          class: "mb-4"
        }, [
          d("div", St, h(i.index), 1),
          (l(!0), s(w, null, C(i.items, (o) => (l(), s("div", {
            key: o.key,
            class: "px-4 py-3 border-b border-[#f0f0f0] flex items-center gap-3 cursor-pointer",
            onClick: (c) => t("select", o)
          }, [
            o.avatar ? (l(), s("img", {
              key: 0,
              src: o.avatar,
              class: "w-10 h-10 rounded-full object-cover"
            }, null, 8, Lt)) : f("", !0),
            d("div", _t, [
              d("div", It, h(o.title), 1),
              o.description ? (l(), s("div", Pt, h(o.description), 1)) : f("", !0)
            ])
          ], 8, Tt))), 128))
        ]))), 128))
      ]),
      r.showAnchor ? (l(), s("div", Ot, [
        (l(!0), s(w, null, C(r.data, (i, o) => (l(), s("button", {
          key: i.index,
          class: "text-[10px] text-[#595959] hover:text-[#1677ff] transition-colors",
          onClick: (c) => t("select", i.items[0])
        }, h(i.index), 9, Dt))), 128))
      ])) : f("", !0)
    ]));
  }
});
export {
  Jt as Avatar,
  tl as Badge,
  vl as BottomSheet,
  D as Button,
  Zt as CardList,
  cl as Checkbox,
  rl as DatePicker,
  el as Descriptions,
  Yt as Drawer,
  pl as Empty,
  Ut as Flex,
  ol as Form,
  Wt as Grid,
  gl as IndexBar,
  ll as Input,
  Ht as Menu,
  fl as Modal,
  Rt as Page,
  bl as Popconfirm,
  Xt as Progress,
  yl as PullRefresh,
  dl as Radio,
  ul as Rate,
  sl as Select,
  ml as Skeleton,
  Et as Spacer,
  hl as Spin,
  Qt as Statistic,
  xl as Swiper,
  al as Switch,
  qt as Table,
  Kt as Tabs,
  Gt as Tag,
  nl as TextArea,
  il as Upload
};
//# sourceMappingURL=index.js.map
