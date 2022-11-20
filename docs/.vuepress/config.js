module.exports = {
  base: '/sodom/',
  title: '橘猫饭团',
  description: '橘猫饭团的笔记，第一次',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta',{name: 'author', content: '橘猫饭团'}],
    ['meta',{name: 'keyword', content: 'vuepress 介绍，vuepress说明，橘猫饭团'}],

    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#E797B0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  },
  [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容",
        buttonText: "刷新"
      }
    }
  ]
],
  themeConfig: {
    lastUpdated: '更新时间',
    // 导航栏logo
    logo: '/assets/img/hero.png',
    // navbar: false,
    // 文档自动生成侧边栏
    // sidebar: 'auto',
    subSidebar: 'auto',
    //导航栏链接
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/about', target: '_blank' },
      { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/css/': [
        'c-aaa',
        'c-bbb',
        'c-ccc'
      ],
      '/javascript/': [
        'j-aaa',
        'j-bbb',
        'j-ccc'
      ]
    },
  }
}