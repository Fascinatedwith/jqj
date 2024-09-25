// 引入动态路由
import { asyncRoutes } from '@/router'
export default {
  // 模块具备单独的命名空间
  namespaced: true,
  state: {
    // 用户所拥有的页面权限路由
    permissionRouters: []
  },
  mutations: {
    // 获取用户所拥有的权限路由页面
    setPermissionRouters(state) {
      // 通过筛选拿到用户拥有的路由权限
      const Routers = asyncRoutes.filter((router) => {
        return this.getters.userinfo.roles.menus.includes(router.key)
      })
      // 将权限数组储存起来  在左侧导航栏页面 使用这个数据数组来渲染左侧导航栏
      state.permissionRouters = Routers

      return Routers
    },
    // 退出时重置权限
    delRouters(state, routers) {
      state.permissionRouters = routers
    }
  },
  actions: {}
}
