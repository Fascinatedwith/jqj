
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 下包</h3>
    <pre class="pre">
      <code class="code">
        npm install vuex@next
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. main.js配置</h3>
    <pre class="pre">
      <code class="code">
        import store from './store/index.js'

        const app = new Vue({
          ...App,
          store
        })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 创建 store / index.js</h3>
    <pre class="pre">
      <code class="code">
        import Vue from 'vue'
        import Vuex from 'vuex'
        Vue.use(Vuex)
        // store  仓库
        export default new Vuex.Store({
          // state 就是容器  数据保存的位置
          state: {
            user: ''  // 变量名 储存用
        },
        // mutations 是方法的集合 修改数据的唯一方式 必须是同步的
        mutations: {
          // setUser 函数名 可自定义
          setUser (state, user) {//第一个是固定写法 第二个形参
            state.user = user // 容器里的变量 形参通过调用传入
          }
        },
        // 处理异步操作的地方
        actions: {
          // 函数 自定义
          login(context,payload){//第一个是固定写法 第二个形参
          }
        },
        // 模块  可以将容器里的变量模块单独封装 引入到这里
        modules: {
        },
        getters {
          user: state => state.user
        },
      })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. vue中使用</h3>
    <pre class="pre">
      <code class="code">
        // 触发mutations里的函数
        this.$store.commit('自定义函数名', 实参)

        // 触发actions 里的函数
        this.$store.dispatch('自定义函数名',实参)
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. 获取vuex容器里的值</h3>
    <pre class="pre">
      <code class="code">
        import { mapState } from 'vuex';

        computed: {
          ...mapState(['user'])
          // 相当于把vuex里的user变量放到当前页面的data()里 是一个对象
          // 相当于全局变量  在事件函数里用this.user可以读取
        },
        mounted() {  // 生命周期函数自执行  打印测试一下
          console.log(this.user);  // 用this.可以读取
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">6. 获取vuex容器里的geeters</h3>
    <pre class="pre">
      <code class="code">
        import { mapGetters } from 'vuex'  // 引入

        computed: { // 计算属性里
          ...mapGetters([ // 对应getters里映射出的名字
            'sidebar'
          ])
        }
        mounted() {  // 生命周期函数自执行  打印测试一下
          console.log(this.user);  // 用this.可以读取
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
