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
      },
      {
        path: '/timer',
        component: () => import('@/views/package/timer.vue'),
        meta: { title: '防抖和节流' }
      },
      {
        path: '/Fibonacci',
        component: () => import('@/views/package/Fibonacci.vue'),
        meta: { title: '斐波那契数列' }
      },
      {
        path: '/tranListToTreeData',
        component: () => import('@/views/package/tranListToTreeData.vue'),
        meta: { title: '列表数据转为树形' }
      },
      {
        path: '/bubbleSort',
        component: () => import('@/views/package/bubbleSort.vue'),
        meta: { title: '冒泡排序' }
      },
      {
        path: '/accumulate',
        component: () => import('@/views/package/accumulate.vue'),
        meta: { title: '任意数的累计和' }
      },
      {
        path: '/ColorRandom',
        component: () => import('@/views/package/ColorRandom.vue'),
        meta: { title: '随机十六进制颜色' }
      },
      {
        path: '/countDown',
        component: () => import('@/views/package/countDown.vue'),
        meta: { title: '现在到目标日期的剩余时间' }
      }
    ]
  },
  {
    path: '/animation',
    component: Layout,
    key: 'animation',
    title: '动画封装集合',
    redirect: '/background',
    children: [
      {
        path: '/background',
        component: () => import('@/views/animation/background.vue'),
        meta: { title: '背景色渐变' }
      },
      {
        path: '/plane',
        component: () => import('@/views/animation/plane.vue'),
        meta: { title: '跟随鼠标的小飞机' }
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

