import { login, getInfo, getUserinfo } from '@/api/user'
import { resetRouter } from '@/router'

export default {
  // 模块具备单独的命名空间
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    userinfo: {}
  },
  mutations: {
    // 储存token
    setToken(state, token) {
      state.token = token
      // 本次存储token
      localStorage.setItem('token', token)
    },
    // 储存用户信息
    setUserinfo(state, userinfo) {
      state.userinfo = userinfo
    },
    // 删除用户信息
    reomveUserInfo(state) {
      state.userinfo = {}
    }
  },
  actions: {
    // 登录请求
    async postLogin(context, payload) {
      const res = await login(payload)
      // 调用mutations里的方法 将请求回来的token传过去
      context.commit('setToken', res.data.data)
    },
    // 请求用户信息
    async getUserInfo(context, payload) {
      // 获取员工基本资料
      const res = await getInfo()
      // 获取员工个人信息
      const user = await getUserinfo(res.data.data.userId)
      // 将两个信息合并到一起
      const baseResult = { ...res.data.data, ...user.data.data }
      // 储存到容器中
      context.commit('setUserinfo', baseResult)

      return baseResult
    },
    // 退出
    logout(context, payload) {
      // 删除token
      context.commit('setToken', null)
      localStorage.removeItem('token')
      // 删除用户信息
      context.commit('reomveUserInfo')

      // 重置路由
      resetRouter()
    }
  }
}

