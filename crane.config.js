const visPage = require('./crane/vis/index')

module.exports = {
  name: 'jinjiang',

  // i18n 配置
  lang: {
    default: 'zh_CN',
    locales: {
      zh_CN: {
        status: {
          finished: '已处理',
          processing: '处理中',
          cancelled: '已取消',
          aborted: '终止的',
          receding: '回退',
        },
      },
      en_US: {
        status: {
          finished: 'finished',
          cancelled: 'cancel',
          receding: 'receding',
        },
      },
    },
  },
  // 屏幕默认尺寸, 所有页面都继承该值，页面可单独设置
  size: [1920, 1080],
  requestSettings: {
    baseURL: 'http://vis.cdyoue.com:35004',
  },
  modules: {
    '@byzanteam/vis-components': {
      version: '../../vis-components',
      style: {
        type: 'normal',
        path: 'dist/index.css',
      },
    },
    '@byzanteam/graphite': {
      version: 'latest',
    },
    '@byzanteam/carbonium': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/carbonium.css',
      },
    },
    'element-ui': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'lib/theme-chalk/index.css',
      }
    },
  },
  // 页面
  pages: [
    visPage,
  ],
}
