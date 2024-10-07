import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
// 固定路由
export const Routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]
// 动态路由
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    key: 'package',
    title: '函数封装集合',
    redirect: '/deepCopy',
    children: [
      {
        path: '/deepCopy',
        component: () => import('@/views/package/deepCopy.vue'),
        meta: { title: '深拷贝' }
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }), // 管理滚动行为 如果出现滚动 切换就让 让页面回到顶部
    routes: [...Routes, ...constantRoutes]

  })

const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重新设置路由的可匹配路径
}

// 解决权限处理完后的重定向报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router

