
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      Axios 是一个 基于 promise 的 HTTP 客户端，适用于 node.js 和浏览器。它是 同构的（即它可以使用同一套代码运行在浏览器和 nodejs 中）。在服务器端它使用原生的 node.js http 模块，在客户端（浏览器）它使用 XMLHttpRequests。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 下包</h3>
    <pre class="pre">
      <code class="code">
        npm install axios
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 创建 utils / request.js</h3>
    <pre class="pre">
      <code class="code">
        import axios from 'axios'
        import { Message } from 'element-ui'
        import store from '@/store'
        import router from '@/router'

        const service = axios.create({
          baseURL: process.env.VUE_APP_BASE_API, // 接口根地址
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
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 创建 api / index.js</h3>
    <pre class="pre">
      <code class="code">
        import axios from '@/utils/request';

        // POST
        export const login = data =>
          axios({
            method: 'POST',
            url: '/sys/login',
            data: data
          })

        // GET
        export const getUser = (id) =>
          axios({
            url: `/employees/${id}/personalInfo`,
            params: {
              id
            }
          })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 跨域配置 src 平级 vue.config.js  中</h3>
    <pre class="pre">
      <code class="code">
        devServer: {
          // 配置反向代理
          proxy: {
            // 当地址中有/api的时候会触发代理机制
            '/api': {
              target: 'http://ihrm.itheima.net/', // 要转发到的地址 这里不用带api
              changeOrigin: true, // 是否跨域
              pathRewrite: {
              // 路径重写，
              '^/api': '' // 替换target中的请求地址，也就是说以后你在请求地址的时候直接写成/api即可。
              }
            }
          }
        }
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    // 注册组件
  },
  data() {
    return {
      // 变量
    }
  },
  computed: {
    // 计算属性
    ...mapState(['theme'])
  },
  created() {
    // 生命周期函数 初始化后
  },
  mounted() {
  },
  methods: {
    // 事件执行函数
  }
}
</script>

<style scoped lang="scss">
.content {
  color: #000;
  .synopsis {
    font-size: 38px;
    font-weight: 700;
    margin: 40px 0;
  }
  .synopsisBox {
    width: 100%;
    padding: 20px;
    background-color:#f9f9f9 ;
    border-radius: 20px;
  }
  .br {
    margin: 50px 0;
    height: 1px;
    background-color: #ccc;
  }
  .pre {
    background-color: #2a2c3e;
    color: #fff;
    overflow-x: auto;
    border-radius: 20px;
    font-size: 24px;
    line-height: 35px;
    .code {
      background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 33%, #ac61ee 66%, #00ff88 100%);
      /*设置字体颜色透明*/
      color: transparent;
      /*背景裁剪为文本形式*/
      -webkit-background-clip: text;
    }
  }
}
// 暗黑主题
.contentTheme {
  color: #fff !important;
  .synopsisBox {
    background-color:#242424;
  }
  .pre {
    background-color: #242424;
  }
}

</style>
