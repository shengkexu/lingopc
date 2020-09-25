import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Case from '@/pages/case.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      component: Home
    },
    {
      path: '/case/:id',
      component: Case
    }
  ]
})
