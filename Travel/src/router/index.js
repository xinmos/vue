// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },{
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    },{
      path: '/sight',
      name: 'Sight',
      component: () => import('@/pages/sight/Sight')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
