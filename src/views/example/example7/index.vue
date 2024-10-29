
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      日月切换按钮
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
        <code><</code>label class="switch">
          <code><</code>input type="checkbox" :checked="checked">
          <code><</code>span class="slider" />
        <code><</code>/label>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. CSS</h3>
    <pre class="pre">
      <code class="code">
        .switch {
          font-size: 17px;
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #f4f4f5;
          transition: .4s;
          border-radius: 30px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 24px;
          width: 24px;
          border-radius: 20px;
          left: 5px;
          bottom: 5px;
          background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
          transition: .4s;
        }
        input:checked+.slider {
          background-color: #303136;
        }
        input:checked+.slider:before {
          transform: translateX(25.5px);
          background: #303136;
          box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
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
