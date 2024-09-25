import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({

  // baseURL: 'http://localhost:9999/api'  // 也可这样
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // 请求时携带token
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response
}, function(error) {
  // 对响应错误做点什么   处理token超时
  if (error.response && error.response.status === 401 && error.response.data.code === 10002) {
    // 当等于10002的时候 表示 后端告诉我token超时了
    // store.dispatch('user/logout') // 退出登录 删除token
    router.push('/login') // 跳转到登录页
    Message('登录过期,请重新登录') // 提示消息
  } else {
    Message.error(error.message) // 提示错误信息
  }
  return Promise.reject(error)
})

export default service
