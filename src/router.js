import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/jinjiangwllzv2',
  routes: [
    {
      name: '',
      path: '/',
      component: pages.vis,
    },
    {
      name: 'vis',
      path: '/vis',
      component: pages.vis,
    },
    {
      name: 'department',
      path: '/department',
      component: pages.department,
    },
  ],
})
