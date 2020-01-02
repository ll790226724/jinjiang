const banlishuliang = require('./banjianshuliang')

module.exports = {
  route: {
    name: 'index',
    path: '/'
  },
  title: '锦江区网络理政',
  states: {},
  components: [
    banlishuliang
  ]
}
