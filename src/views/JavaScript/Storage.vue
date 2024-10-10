<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      本地储存 ， 会话储存 ， cookie储存
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 本地存储</h3>
    <pre class="pre">
      <code class="code">
        /* 存储数据 */
        localStorage.setItem('key', value)

        /* 获取数据 */
        localStorage.getItem('key')

        /* 删除数据 */
        localStorage.removeItem('key')

        /* 清空所有数据 */
        localStorage.clear()
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 会话存储</h3>
    <pre class="pre">
      <code class="code">
        /* 存储数据 */
        sessionStorage.setItem('key', value)

        /* 获取数据 */
        sessionStorage.getItem(key)

        /* 删除数据 */
        sessionStorage.removeItem(key)

        /* 清空所有数据 */
        sessionStorage.clear()
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. Cookie存储</h3>
    <pre class="pre">
      <code class="code">
        /* 下载cookie */
        npm i js-cookie

        /* 到入cookie */
        import Cookies from 'js-cookie'

        /* 获取cookie */
        Cookies.get(Key)

        /* 储存cookie */
        Cookies.set(Key, value)

        /* 删除cookie */
        Cookies.remove(Key)

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
