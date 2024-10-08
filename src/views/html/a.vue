<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      A标签的多种使用方式
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. A标签的基础使用</h3>
    <pre class="pre">
      <code class="code">
        // 新窗口_blank  当前窗口_self

        <code><</code>a href="跳转地址" target="打开方式"><code><</code>/a>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. A标签配合iframe的使用</h3>
    <pre class="pre">
      <code class="code">
        // 点击a要跳转的网页渲染到 iframe标签中  iframe标签中的name名要和 a标签的页面打开方式相同

        <code><</code>iframe name="fm" src="" frameborder="0" />

        <code><</code>a href="跳转地址" target="fm"><code><</code>/a>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. A标签快速定位到模块</h3>
    <pre class="pre">
      <code class="code">
        // 点击a 立即跳转到区域内容模块

        <code><</code>a href="#title"><code><</code>/a>

        <code><</code>div id="title">
          // 区域内容...
        <code><</code>/div>
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
