import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: 'Android 学习站',
  description: '从后端到客户端 - 入职准备学习笔记',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/android-logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3DDC84' }],
    ['meta', { property: 'og:title', content: 'Android 学习站' }],
    ['meta', { property: 'og:description', content: '从后端到客户端 - 入职准备学习笔记' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/android-logo.svg' }],
  ],

  lastUpdated: {
    text: '更新于',
  },

  cleanUrls: true,

  externalLinkIcon: true,

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/android-logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Kotlin', link: '/kotlin/' },
      { text: 'Android', link: '/android/' },
      { text: '性能优化', link: '/performance/' },
      { text: 'AI Coding', link: '/ai-coding/' },
      { text: 'KMP', link: '/kmp/' },
    ],

    sidebar: {
      '/kotlin/': [
        {
          text: '🟢 Kotlin',
          items: [
            { text: '学习路径', link: '/kotlin/' },
            { text: '基础语法', link: '/kotlin/basics' },
            { text: '协程 Coroutines', link: '/kotlin/coroutines' },
            { text: 'Flow', link: '/kotlin/flow' },
          ],
        },
      ],
      '/android/': [
        {
          text: '🤖 Android',
          items: [
            { text: '学习路径', link: '/android/' },
            { text: '四大组件 & 生命周期', link: '/android/components' },
            { text: 'UI 体系', link: '/android/ui-system' },
            { text: 'Gradle 构建', link: '/android/gradle' },
            { text: '调试 & Profiler', link: '/android/debugging' },
          ],
        },
      ],
      '/performance/': [
        {
          text: '⚡ 性能优化',
          items: [
            { text: '学习路径', link: '/performance/' },
            { text: '性能指标体系', link: '/performance/metrics' },
            { text: '播放器 & 渲染', link: '/performance/player-basics' },
            { text: '优化手段', link: '/performance/optimization' },
          ],
        },
      ],
      '/ai-coding/': [
        {
          text: '🧠 AI Coding',
          items: [
            { text: '学习路径', link: '/ai-coding/' },
            { text: 'Prompt Engineering', link: '/ai-coding/prompt-engineering' },
            { text: 'Code Agent', link: '/ai-coding/code-agent' },
            { text: 'IDE 插件开发', link: '/ai-coding/ide-plugin' },
          ],
        },
      ],
      '/kmp/': [
        {
          text: '🔗 KMP',
          items: [
            { text: '学习路径', link: '/kmp/' },
            { text: '基础概念', link: '/kmp/basics' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    footer: {
      message: '面向后端开发者的 Android 入职学习笔记',
      copyright: '© 2026 Android 学习站',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回搜索结果',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },

  mermaid: {
    startOnLoad: true,
    theme: 'default',
    themeVariables: {
      primaryColor: '#e8f5e9',
      primaryTextColor: '#1a1a1a',
      primaryBorderColor: '#2e9e5a',
      lineColor: '#2e9e5a',
      secondaryColor: '#f1f8e9',
      tertiaryColor: '#f5f5f5',
    },
  },
}))
