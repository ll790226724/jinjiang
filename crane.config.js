const visPage = require('./crane/vis/index')
const departmentPage = require('./crane/department/index');
module.exports = {
  name: 'jinjiangwllz',

  // i18n 配置
  lang: {},
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
    '@byzanteam/brick': {
      version: 'latest',
      style: {
        type: 'injection',
        path: 'src/theme/default.scss'
      }
    }
  },
  // 页面
  pages: [
    visPage,
    departmentPage
  ],
}
