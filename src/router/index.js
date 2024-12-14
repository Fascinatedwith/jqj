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
  // vue笔记
  {
    path: '/vue',
    component: Layout,
    key: 'vue',
    title: 'VUE笔记',
    redirect: '/vue2',
    children: [
      {
        path: '/vue2',
        component: () => import('@/views/note/vue2.vue'),
        meta: { title: 'vue2' }
      },
      {
        path: '/vue3',
        component: () => import('@/views/note/vue3.vue'),
        meta: { title: 'vue3' }
      }

    ]
  },
  // router路由
  {
    path: '/router',
    component: Layout,
    key: 'Router',
    title: 'VUE路由',
    redirect: '/routerV2',
    children: [
      {
        path: '/routerV2',
        component: () => import('@/views/router/routerV2.vue'),
        meta: { title: 'vue2路由' }
      },
      {
        path: '/routerV3',
        component: () => import('@/views/router/routerV3.vue'),
        meta: { title: 'vue3路由' }
      },
      {
        path: '/routerInfo',
        component: () => import('@/views/router/routerInfo.vue'),
        meta: { title: '路由守卫' }
      }

    ]
  },
  // JS集合
  {
    path: '/JavaScript',
    component: Layout,
    key: 'JavaScript',
    title: 'JavaScript',
    redirect: '/Native',
    children: [
      {
        path: '/Native',
        component: () => import('@/views/JavaScript/Native.vue'),
        meta: { title: '原生JS' }
      },
      {
        path: '/Storage',
        component: () => import('@/views/JavaScript/Storage.vue'),
        meta: { title: '浏览器存储' }
      },
      {
        path: '/judge',
        component: () => import('@/views/JavaScript/judge.vue'),
        meta: { title: '判断语句' }
      },
      {
        path: '/array',
        component: () => import('@/views/JavaScript/array.vue'),
        meta: { title: '数组方法' }
      },
      {
        path: '/object',
        component: () => import('@/views/JavaScript/object.vue'),
        meta: { title: '对象方法' }
      },
      {
        path: '/string',
        component: () => import('@/views/JavaScript/string.vue'),
        meta: { title: '字符串方法' }
      },
      {
        path: '/function',
        component: () => import('@/views/JavaScript/function.vue'),
        meta: { title: '函数方法' }
      }
    ]
  },
  // tS集合
  {
    path: '/TypeScript',
    component: Layout,
    key: 'TypeScript',
    title: 'TypeScript',
    redirect: '/TypeScriptIndex',
    children: [
      {
        path: '/TypeScriptIndex',
        component: () => import('@/views/TypeScript/index.vue'),
        meta: { title: 'TS类型' }
      }
    ]
  },
  // CSS样式集合
  {
    path: '/css',
    component: Layout,
    key: 'css',
    title: 'CSS集合',
    redirect: '/base',
    children: [
      {
        path: '/base',
        component: () => import('@/views/css/base.vue'),
        meta: { title: '初始化样式' }
      },
      {
        path: '/layout',
        component: () => import('@/views/css/layout.vue'),
        meta: { title: 'flex / grid' }
      },
      {
        path: '/box',
        component: () => import('@/views/css/box.vue'),
        meta: { title: '盒子样式' }
      },
      {
        path: '/text',
        component: () => import('@/views/css/text.vue'),
        meta: { title: '文字样式' }
      },
      {
        path: '/mouse',
        component: () => import('@/views/css/mouse.vue'),
        meta: { title: '鼠标样式' }
      },
      {
        path: '/hide',
        component: () => import('@/views/css/hide.vue'),
        meta: { title: '显示 / 隐藏' }
      },
      {
        path: '/scroll',
        component: () => import('@/views/css/scroll.vue'),
        meta: { title: '滚动条样式' }
      },
      {
        path: '/animationCss',
        component: () => import('@/views/css/animation.vue'),
        meta: { title: '动画 / 过渡 / 3D' }
      },
      {
        path: '/selector',
        component: () => import('@/views/css/selector.vue'),
        meta: { title: '选择器 / 伪元素' }
      },
      {
        path: '/li',
        component: () => import('@/views/css/li.vue'),
        meta: { title: 'li标签样式' }
      },
      {
        path: '/Acss',
        component: () => import('@/views/css/Acss.vue'),
        meta: { title: 'a标签样式' }
      },
      {
        path: '/input',
        component: () => import('@/views/css/input.vue'),
        meta: { title: 'input样式' }
      },
      {
        path: '/other',
        component: () => import('@/views/css/other.vue'),
        meta: { title: '其他样式' }
      }
    ]
  },
  // git集合
  {
    path: '/GIT',
    component: Layout,
    key: 'GIT',
    title: 'GIT指令集合',
    redirect: '/gitIndex',
    children: [
      {
        path: '/gitIndex',
        component: () => import('@/views/GIT/index.vue'),
        meta: { title: '常用指令' }
      }
    ]
  },
  // websocket
  {
    path: '/webSocket',
    component: Layout,
    key: 'webSocket',
    title: '长连接',
    redirect: '/webSocketInfo',
    children: [
      {
        path: '/webSocketInfo',
        component: () => import('@/views/webSocket/index.vue'),
        meta: { title: 'webSocket' }
      }
    ]
  },
  // 状态管理工具集合
  {
    path: '/store',
    component: Layout,
    key: 'store',
    title: '状态管理工具',
    redirect: '/pinia',
    children: [
      {
        path: '/pinia',
        component: () => import('@/views/store/pinia.vue'),
        meta: { title: 'pinia' }
      },
      {
        path: '/vuex',
        component: () => import('@/views/store/vuex.vue'),
        meta: { title: 'VUEX' }
      }
    ]
  },
  // 网络请求
  {
    path: '/axios',
    component: Layout,
    key: 'axios',
    title: '网络请求',
    redirect: '/axiosIndex',
    children: [
      {
        path: '/axiosIndex',
        component: () => import('@/views/axios/index.vue'),
        meta: { title: 'axios' }
      }
    ]
  },
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
      },
      {
        path: '/console',
        component: () => import('@/views/package/console.vue'),
        meta: { title: '控制台打印美化' }
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
        meta: { title: 'X/Y轴配置项说明' }
      },
      {
        path: '/3D',
        component: () => import('@/views/Echarts/3D.vue'),
        meta: { title: '3D立体饼图' }
      },
      {
        path: '/3DA',
        component: () => import('@/views/Echarts/3DA.vue'),
        meta: { title: '3D立体柱状图' }
      }
    ]
  },
  // 第三方插件集合
  {
    path: '/plugin',
    component: Layout,
    key: 'plugin',
    title: '第三方插件集合',
    redirect: '/roll',
    children: [
      {
        path: '/gaode',
        component: () => import('@/views/plugin/gaode.vue'),
        meta: { title: '高德地图' }
      },
      {
        path: '/baidu',
        component: () => import('@/views/plugin/baidu.vue'),
        meta: { title: '百度地图' }
      },
      {
        path: '/roll',
        component: () => import('@/views/plugin/roll.vue'),
        meta: { title: '列表滚动' }
      },
      {
        path: '/ScaleBox',
        component: () => import('@/views/plugin/ScaleBox.vue'),
        meta: { title: '大屏适配' }
      },
      {
        path: '/sortable',
        component: () => import('@/views/plugin/sortable.vue'),
        meta: { title: '拖拽排序' }
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
        meta: { title: 'Tree全选反选' }
      },
      {
        path: '/treeUp',
        component: () => import('@/views/assembly/treeUp.vue'),
        meta: { title: 'Tree按钮排序' }
      }
    ]
  },
  // HTML集合
  {
    path: '/html',
    component: Layout,
    key: 'html',
    title: 'HTML标签集合',
    redirect: '/htmlIndex',
    children: [
      {
        path: '/htmlIndex',
        component: () => import('@/views/html/index.vue'),
        meta: { title: 'HTML标签' }
      },
      {
        path: '/a',
        component: () => import('@/views/html/a.vue'),
        meta: { title: 'A标签' }
      }
    ]
  },
  // jquery集合
  {
    path: '/jquery',
    component: Layout,
    key: 'example',
    title: 'jquery',
    redirect: '/jqueryIndex',
    children: [
      {
        path: '/jqueryIndex',
        component: () => import('@/views/jquery/index.vue'),
        meta: { title: '基本使用' }
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
  // 实例 / 动画集合
  {
    path: '/animation',
    component: Layout,
    key: 'animation',
    title: '实例 / 动画集合',
    redirect: '/example1',
    children: [
      {
        path: '/example2',
        component: () => import('@/views/example/example2/index.vue'),
        meta: { title: '跟随鼠标的小飞机' }
      },
      {
        path: '/example4',
        component: () => import('@/views/example/example4/index.vue'),
        meta: { title: '跟随鼠标的光点拖尾' }
      },
      {
        path: '/example5',
        component: () => import('@/views/example/example5/index.vue'),
        meta: { title: '鼠标推动粒子动画' }
      },
      {
        path: '/example6',
        component: () => import('@/views/example/example6/index.vue'),
        meta: { title: '鼠标移动粒子连线' }
      },
      {
        path: '/example3',
        component: () => import('@/views/example/example3/index.vue'),
        meta: { title: '背景颜色动画效果' }
      },
      {
        path: '/example1',
        component: () => import('@/views/example/example1/index.vue'),
        meta: { title: '鼠标悬停发光按钮' }
      },
      {
        path: '/example7',
        component: () => import('@/views/example/example7/index.vue'),
        meta: { title: '日月切换按钮' }
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

