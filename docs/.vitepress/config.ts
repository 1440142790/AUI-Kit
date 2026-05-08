import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'AUI Kit',
  description: 'AI 时代的跨框架、跨端 UI 组件体系——让 AI 编程工具为任意框架生成一致界面',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#1677ff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'AUI Kit - AI 时代的跨框架 UI 组件体系' }],
    ['meta', { name: 'og:description', content: '开发者安装，AI 直接写出多平台一致的前端界面——无论你用 Vue 还是 React。' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AUI Kit',
    repo: 'your-org/aui-kit',
    docsDir: 'docs',

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: 'AI 宪法', link: '/ai-rules/', activeMatch: '/ai-rules/' },
      {
        text: 'v0.1.0-alpha',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: '贡献指南', link: '/contributing' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/quick-start' },
            { text: 'AI 集成', link: '/guide/ai-integration' },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '设计令牌', link: '/guide/tokens' },
            { text: '统一接口原则', link: '/guide/unified-api' },
            { text: '跨平台适配', link: '/guide/platform' },
          ],
        },
      ],
      '/components/': [
        {
          text: '布局与导航',
          items: [
            { text: 'Page 页面容器', link: '/components/layout/page' },
            { text: 'Grid 栅格布局', link: '/components/layout/grid' },
            { text: 'Flex 弹性布局', link: '/components/layout/flex' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/data/table' },
            { text: 'Tag 标签', link: '/components/data/tag' },
          ],
        },
        {
          text: '表单与输入',
          items: [
            { text: 'Form 表单', link: '/components/form/form' },
            { text: 'Input 输入框', link: '/components/form/input' },
            { text: 'Select 选择器', link: '/components/form/select' },
          ],
        },
        {
          text: '反馈与交互',
          items: [
            { text: 'Button 按钮', link: '/components/feedback/button' },
            { text: 'Modal 对话框', link: '/components/feedback/modal' },
            { text: 'Toast 轻提示', link: '/components/feedback/toast' },
          ],
        },
      ],
      '/ai-rules/': [
        {
          text: 'AI 宪法',
          items: [
            { text: '概述', link: '/ai-rules/' },
            { text: '组件速查表', link: '/ai-rules/cheatsheet' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/aui-kit' },
      { icon: 'twitter', link: 'https://twitter.com/auikit' },
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    editLink: {
      pattern: 'https://github.com/your-org/aui-kit/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2024 AUI Kit',
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
  },

  markdown: {
    lineNumbers: false,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      // 可以在这里添加自定义 markdown 插件
    },
  },

  vite: {
    server: {
      port: 3000,
    },
    esbuild: {
      target: 'esnext',
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
  },
});
