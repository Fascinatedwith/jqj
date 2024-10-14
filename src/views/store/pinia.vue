
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      最新的状态管理工具 提供了更简单的API （去掉了 mutation） 提供符合组合式风格的API（和V3 新语法统一） 每一个store都是一个独立的模块 更好的配合TS
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 下包</h3>
    <pre class="pre">
      <code class="code">
        npm install pinia
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. main.js配置</h3>
    <pre class="pre">
      <code class="code">
        import { createPinia } from 'pinia'
        app.use(createPinia())
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 创建 store / user.js</h3>
    <pre class="pre">
      <code class="code">
        import { defineStore } from 'pinia'
        import { ref } from 'vue'

        // defineStore('仓库唯一标识'，函数)
        export const userStore = defineStore('user',()=>{
          // 声明数据
          const name = ref('小明')

          // 声明操作数据的方法 action
          const changeUser = () => {
            name = '小李'
          }

          // 声明基于数据生成的计算属性 getters
          const userName = computed(() => name)

          // 将数据或方法 return出去
          return {
            name,
            changeUser,
            userName
          }
        })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. vue中使用</h3>
    <pre class="pre">
      <code class="code">
        import { userStore } from '@/store/user.js'
        const userState = userStore()
        // 打印store里return出来的测试
        console.log(userState.name)
        console.log(userState.userName)

        // 调用store里return出来的函数
        userState.changeUser()
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. storeToRefs 响应式</h3>
    <pre class="pre">
      <code class="code">
        / * 如果在页面解构store里return出来的数据 会丢失响应式，用上  storeToRefs 这个就不会    * /
        import { userStore } from '@/store/user.js'
        import { storeToRefs } from 'pinia'
        // 这样使用会丢失响应式
        const { name } = userState
        // storeToRefs()没问题
        const { name } = storeToRefs(userState)
      </code>
    </pre>

    <h3 style="margin: 20px 0;">6. 持久化工具</h3>
    <pre class="pre">
      <code class="code">
        / * 1. npm下载包  * /
        npm i pinia-plugin-persistedstate

        / * 2. main.js  * /
        import { createPinia } from 'pinia'
        import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
        const pinia = createPinia()
        pinia.use(piniaPluginPersistedstate)
        app.use(pinia)

        / * 3. store / user.js 基础持久化方式 * /
        import { defineStore } from 'pinia'
        export const userStore = defineStore('user',()=>{
          // 将数据或方法 return出去
          return { }
        },
        {
          persist: true  // 这里设为true将使用默认持久化配置保存
        }
        )

        / * 3. store / user.js 高级持久化方式 * /
        import { defineStore } from 'pinia'
        export const userStore = defineStore('user',()=>{
          // 将数据或方法 return出去
          return { }
        },
        {
          persist: {
            key: 'piniaStore', //存储名称
            storage: sessionStorage, // 存储方式
            paths: ['username', 'like','obj']  //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态
          }
        }
        )
      </code>
    </pre>

    <h3 style="margin: 20px 0;">7. F12控制台显示pinia数据</h3>
    <pre class="pre">
      <code class="code">

        / *  main.js 需要连写  * /
        app.use(createPinia()).mount("#app")
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
