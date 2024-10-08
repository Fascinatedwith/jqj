<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      li标签的样式修改
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">li标签的样式修改</h3>
    <pre class="pre">
      <code class="code">
        li {
          list-style-type: none;  /* 去掉li 的小圆点 */
          list-style-type: disc;  /* 实心圆（默认值） */
          list-style-type: circle;  /* 空心圆 */
          list-style-type: square;  /* 实心方块 */
          list-style-type: decimal;  /* 阿拉伯数字 */
          list-style-type: decimal-leading-zero;  /* 阿拉伯数字补0 */
          list-style-type: cjk-ideographic;  /* 汉字数码 一 二 */
          list-style-type: lower-roman;  /* 小写罗马数字 */
          list-style-type: upper-roman;  /* 大写罗马数字 */
          list-style-type: lower-alpha;  /* 小写英文字母 */
          list-style-type: upper-alpha;  /* 大写英文字母 */

          list-style-image: url(./picture.png);  /* 图片代替实心圆 */
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
