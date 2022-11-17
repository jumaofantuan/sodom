module.exports = {
  title: '橘猫饭团',
  description: '橘猫饭团的笔记，第一次',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta',{name: 'author', content: '橘猫饭团'}],
    ['meta',{name: 'keyword', content: 'vuepress 介绍，vuepress说明，橘猫饭团'}],
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    // 导航栏logo
    logo: '/assets/img/hero.png',
    // navbar: false,
    // 文档自动生成侧边栏
    // sidebar: 'auto',
    //导航栏链接
    nav: [
      { text: 'Home', link: '/' },
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