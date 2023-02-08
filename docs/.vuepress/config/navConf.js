module.exports = [
  { text: '首页', link: '/' },
  { text: '关于我', link: '/about', target: '_blank' },
  // { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
  {
    text: '前端',
    ariaLabel: '前端 Menu',
    items: [
      { text: 'javascript', link: '/javascript/' },
      { text: 'css', link: '/css/' }
    ]
  }
]