<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      实现列表自动滚动
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h1 style="margin: 20px 0;"> VUE2版本的使用方法</h1>
    <pre class="pre">
      <code class="code">
      // 1. 下载第三方包
      npm install vue-seamless-scroll

      // 2. 在main.js中引入
      import VueSeamlessScroll from 'vue-seamless-scroll'
      Vue.use(VueSeamlessScroll)

      // 3. 在vue文件中使用
      <code><</code>vue-seamless-scroll :data="XXXList" :class-option="option">
        <code><</code>div v-for="(item, index) in XXXList" :key="index">
          <code><</code>span> <code>{</code><code>{</code> item.XXX }} <code><</code>/span>
        <code><</code>/div>
      <code><</code>/vue-seamless-scroll>

      // 4. 在computed计算属性中配置
      computed: {
        option() {  // 数据滚动配置项
          return {
            step: 0.8, // 数值越大速度滚动越快
            limitMoveNum: this.XXXList.length, // 开始无缝滚动的数据量
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右滚动方向
            openWatch: true, // 开启数据实时监控刷新dom
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
            waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
          }
        }
      }
      </code>
    </pre>

    <h1 style="margin: 20px 0;"> VUE3版本的使用方法</h1>
    <pre class="pre">
      <code class="code">
      // 1. 下载第三方包
      npm install vue3-seamless-scroll

      // 2. 在main.js中引入
      import vue3SeamlessScroll from 'vue3-seamless-scroll';
      const app = createApp(App);
      app.use(vue3SeamlessScroll)

      // 3. 在vue文件中使用
      <code><</code>vue3-seamless-scroll :hover-stop="true" :list="XXXList" :hover="true" :step="0.2">
        <code><</code>div v-for="(item, i) in XXXList" :key="i">
          <code><</code>span> <code>{</code><code>{</code> item.XXX }} <code><</code>/span>
        <code><</code>/div>
      <code><</code>/vue3-seamless-scroll>

      // 4. 更具体的配置项请搜索 vue3-seamless-scroll
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
