import Vue from 'vue'
import Router from 'vue-router'
import RyLogin from '@/pages/ry-login'
import RyIndex from '@/pages/ry-index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'RyLogin',
      component: RyLogin,
    },
    {
      path: '/',
      name: 'RyIndex',
      component: RyIndex,
    },
  ]
})
