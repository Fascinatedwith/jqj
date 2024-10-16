<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      背景颜色渐变动画
    </div>

    <!-- 效果演示 -->
    <h2 style="margin:20px 0;">效果演示</h2>
    <div style="width: 1000px;height: 200px;" class="examplePreview">
      <preview />
    </div>

    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
      // 定义动画
      @keyframes gradient {
        50%{
          background-position: 100% 0%;
        }
      }
      // 使用动画
      body {
        /* 100%窗口高度 */
        height: 100vh;
        width: 100%;
        /* 渐变背景 */
        background: linear-gradient(45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%);
        background-size: 400%;
        background-position: 0% 100%;
        /* 执行背景渐变动画：动画名 时长 加速后减速 无限次播放 */
        animation: gradient 7.5s ease-in-out infinite;
        overflow: hidden;
      }
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import preview from './preview.vue'

export default {
  components: {
    // 注册组件
    preview
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
