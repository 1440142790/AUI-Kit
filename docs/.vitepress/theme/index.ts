import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义插槽
    });
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件（如果需要）
    // app.component('Demo', Demo);
  },
} satisfies Theme;
