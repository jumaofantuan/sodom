const secret = require("./secret")
module.exports = {
  '@vuepress-reco/comments': {
    solution: 'vssue',
    options: {
      platform: 'github-v4',
      owner: 'jumaofantuan',
      repo: 'sodom',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
    }
  },
    // '@vssue/vuepress-plugin-vssue': {
    //   // 设置 `platform` 而不是 `api`
    //   platform: 'github-v4',

    //   // 其他的 Vssue 配置
    //   owner: 'jumaofantuan',
    //   repo: 'sodom',
    //   clientId: 'f62779bcba4d91272e93',
    //   clientSecret: 'ac4c80e75e28d09452353a7a0fba53b975c356d5',

    // },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容",
      buttonText: "刷新"
    }
  }
}