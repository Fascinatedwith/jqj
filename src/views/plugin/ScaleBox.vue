<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      大屏项目适配方案，等比例缩放
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h1 style="margin: 20px 0;"> VUE2版本的使用方法</h1>
    <pre class="pre">
      <code class="code">
      // 1. 下载第三方包
      npm install vue2-scale-box

      // 2. 在vue文件中引入
      import ScaleBox from "vue2-scale-box";
      export default {
        components: { ScaleBox },
      };

      // 3. 在vue文件中使用
      <code><</code>scale-box :width="1920" :height="1080">
        <code><</code>router-view />
      <code><</code>/scale-box>
      </code>
    </pre>

    <h1 style="margin: 20px 0;"> VUE3版本的使用方法</h1>
    <pre class="pre">
      <code class="code">
      // 1. 下载第三方包
      npm install vue3-scale-box

      // 2. 在vue文件中引入
      import ScaleBox from "vue3-scale-box";

      // 3. 在vue文件中使用
      <code><</code>ScaleBox :width="1920" :height="1080">
        <code><</code>router-view />
      <code><</code>/ScaleBox>
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
