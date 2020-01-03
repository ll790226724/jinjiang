const wllz = require('./crane/components/index')

module.exports = {
  name: '锦江区网络理政',
  size: [1920, 1080],
  requestSettings: {
    baseURL: 'http://xjh.cdyoue.com/vis-backend',
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
  },
  pages: [
    wllz
  ]
}
