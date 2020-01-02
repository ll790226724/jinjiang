import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults['baseURL'] = 'http://xjh.cdyoue.com/vis-backend'

export default {
  install () {
    Vue.use(VueAxios, axios)
  },
}
