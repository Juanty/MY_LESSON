import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'mand-mobile'
import User from './module/user'

Vue.use(Router)

const commonRoutes = [
  { path: '/404', component: () => import('@/components/RouterError/404') },
  { path: '/401', component: () => import('@/components/RouterError/401') },
  // *找不到路由报错,重定向会自动跳到404或401页面
  { path: '*', redirect: '' },
  { path: '/', redirect: '/trip' } // 根路径,后面自动接上trip
]

// 分模块的路由,合并传入Router
let router = new Router({
  base: process.env.BASE_URL, // env开发环境
  routes: commonRoutes.concat(User)
})

// 导航守卫,非登录状态先登录
router.beforeEach((to, from, next) => {
  let tmp = localStorage.getItem('user')
  if (!tmp && to.name !== 'Login') {
    Toast.succeed('您需要先登录哦！', 1500)
    next({ path: '/login' })
    return
  }
  next()
})
export default router
