module.exports = [
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
]