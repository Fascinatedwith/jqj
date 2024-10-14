
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      鼠标悬停按钮发光
    </div>
    <!-- 效果演示 -->
    <h2 style="margin:20px 0;">效果演示</h2>
    <div style="width: 1000px;height: 200px;" class="examplePreview">
      <preview />
    </div>

    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. HTML</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>body>
          <code><</code>span>button<code><</code>/span>
          <code><</code>span>button<code><</code>/span>
          <code><</code>span>button<code><</code>/span>
          <code><</code>span>button<code><</code>/span>
        <code><</code>/body>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. CSS</h3>
    <pre class="pre">
      <code class="code">
        body {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            position: relative;
            cursor: pointer;
            margin: 40px;
            padding: 10px;
            color: #21ebff;
            /* 标准文本 */
            text-decoration: none;
            /* 文本单词大写 */
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 20px;
            transition: .5s;
            overflow: hidden;
          }
          span::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 14px;
            height: 14px;
            border-left: 2px solid #21ebff;
            border-top: 2px solid #21ebff;
            transition: .5s;
          }
          span::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 14px;
            height: 14px;
            border-bottom: 2px solid #21ebff;
            border-right: 2px solid #21ebff;
            transition: .5s;
          }
          span:hover::after {
            width: 100%;
            height: 100%;
          }
          span:hover::before {
            width: 100%;
            height: 100%;
          }
          span:hover {
            background: #21ebff;
            color: #fff;
            box-shadow: 0 0 40px #21ebff;
            transition-delay: .3s;
            -webkit-box-reflect: below 0 linear-gradient(transparent,rgba(0 0 0 .4));
          }
          span:nth-child(1) {
            filter: hue-rotate(100deg);
          }
          span:nth-child(2) {
            filter: hue-rotate(180deg);
          }
          span:nth-child(3) {
            filter: hue-rotate(300deg);
          }
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
