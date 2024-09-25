// 权限配置 前置路由守卫
import router from '@/router'
import store from '@/store'
// 判断用户是否登录
router.beforeEach(async(to, from, next) => {
  if (to.path === '/login') {
    next() // 去登录页正常放行
  } else {
    // 去其他页面判断是否有token
    if (store.token) {
      next()
    } else {
      // 没有token 就返回登录页
      next('/login')
      return
    }
  }
})
