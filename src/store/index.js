import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// store  仓库
export default new Vuex.Store({
  // state 就是容器  数据保存的位置
  state: {
    token: localStorage.getItem('Token') || ''
  },
  // mutations 是方法的集合 修改数据的唯一方式 必须是同步的
  mutations: {
    // setUser 函数名 可自定义
    setToken(state, token) { // 第一个是固定写法 第二个形参
      localStorage.setItem('Token', token)
      state.token = token // 容器里的变量 形参通过调用传入
    }
  },
  // 处理异步操作的地方
  actions: {
    // 函数 自定义
    login(context, payload) { // 第一个是固定写法 第二个形参
    }
  },
  // 模块  可以将容器里的变量模块单独封装 引入到这里
  modules: {
  },
  getters: {}
})
