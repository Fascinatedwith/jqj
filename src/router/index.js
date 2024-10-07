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
  },
  {
    path: '/',
    redirect: '/package'
  }
]
// 动态路由
export const constantRoutes = [
  // 函数集合
  {
    path: '/package',
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
        path: '/FullScreen',
        component: () => import('@/views/package/FullScreen.vue'),
        meta: { title: '全屏和退出全屏' }
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
  // 动画集合
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
        meta: { title: '背景颜色渐变' }
      },
      {
        path: '/plane',
        component: () => import('@/views/animation/plane.vue'),
        meta: { title: '跟随鼠标的小飞机' }
      }
    ]
  },
  // 正则表达式集合
  {
    path: '/regular',
    component: Layout,
    key: 'regular',
    title: '正则表达式集合',
    redirect: '/regularIndex',
    children: [
      {
        path: '/regularIndex',
        component: () => import('@/views/regular/index.vue'),
        meta: { title: '常用正则' }
      }
    ]
  },
  // Echarts图表配置
  {
    path: '/Echarts',
    component: Layout,
    key: 'Echarts',
    title: 'Echarts图表配置',
    redirect: '/EchartsIndex',
    children: [
      {
        path: '/EchartsIndex',
        component: () => import('@/views/Echarts/index.vue'),
        meta: { title: '快速上手' }
      },
      {
        path: '/xAxis',
        component: () => import('@/views/Echarts/xAxis.vue'),
        meta: { title: 'X轴配置项说明' }
      }
    ]
  },
  // 第三方插件集合
  {
    path: '/plugin',
    component: Layout,
    key: 'plugin',
    title: '第三方包集合',
    redirect: '/roll',
    children: [
      {
        path: '/roll',
        component: () => import('@/views/plugin/roll.vue'),
        meta: { title: '列表滚动' }
      },
      {
        path: '/ScaleBox',
        component: () => import('@/views/plugin/ScaleBox.vue'),
        meta: { title: '大屏适配' }
      }
    ]
  },
  // 组件封装集合
  {
    path: '/assembly',
    component: Layout,
    key: 'assembly',
    title: '组件封装集合',
    redirect: '/tree',
    children: [
      {
        path: '/tree',
        component: () => import('@/views/assembly/tree.vue'),
        meta: { title: 'Tree树形组件' }
      },
      {
        path: '/sortable',
        component: () => import('@/views/assembly/sortable.vue'),
        meta: { title: 'sortable拖拽排序' }
      }
    ]
  }
  // 笔记集合

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
