const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const navConf = require("./config/navConf")
const sidebarConf = require("./config/sidebarConf")
module.exports = {
  base: '/sodom/',
  title: '橘猫饭团',
  description: '橘猫饭团的笔记，第一次',
  head: headConf,
  theme: 'reco',
  plugins: pluginsConf,
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // lastUpdated: '更新时间',
    // 导航栏logo
    logo: '/assets/img/hero.png',
    // navbar: false,
    // 文档自动生成侧边栏
    // sidebar: 'auto',
    subSidebar: 'auto',
    //导航栏链接
    nav: navConf,
    // 侧边栏
    sidebar: sidebarConf,
  }
}