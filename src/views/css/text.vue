<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      文字的常用样式
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;"> 1. 文字溢出</h3>
    <pre class="pre">
      <code class="code">
        /* 文字强制一行 溢出显示... */
        {
          overflow: hidden;   /* 溢出隐藏 */
          white-space: nowrap;  /* 文字强制一行 */
          text-overflow: ellipsis;  /* 溢出显示... */
        }

        /* 文字强制二行 溢出显示... */
        {
          overflow: hidden;   /* 溢出隐藏 */
          text-overflow: ellipsis;  /* 溢出显示... */
          display: -webkit-box;
          -webkit-line-clamp: 2;  /* 文字二行 */
          -webkit-box-orient: vertical;
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;"> 2. 文字样式</h3>
    <pre class="pre">
      <code class="code">
        {
          font-style: italic;  /* 字体倾斜 */
          font-style: normal;  /* 字体回正 */

          text-decoration: underline;  /* 字体加下划线 */
          text-decoration: none;  /* 字体加去掉线 */
          text-decoration: line-through;  /* 字体加删除线 */

          text-indent: 16px;  /* 文本开头缩进 */

          letter-spacing: 16px;  /* 字间距 */

          line-height: 16px;  /* 行高 */

          user-select: none;  /* 文字禁止选中 */

          text-align: center;  /* 水平对齐方式 居中 */
          text-align: left;  /* 水平对齐方式 居左 */
          text-align: right;  /* 水平对齐方式 居右 */

          vertical-align: bottom;  /* 垂直对齐方式 底部对齐 */
          vertical-align: middle;  /* 垂直对齐方式 居中对齐 */

          text-shadow: ;  /* 文字阴影 */
          text-shadow: 横px  竖px  模糊px  颜色;       *模糊度可省略
          text-shadow: 横px  竖px  模糊px  颜色 , 横px  竖px  模糊px  颜色;       *可连写 , 拼接
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;"> 3. 文字炫彩</h3>
    <pre class="pre">
      <code class="code">
        /* 文字炫彩色 需要给盒子添加背景色后裁切 */
        {
          background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);  // 盒子渐变背景色
          -webkit-background-clip: text; // 裁剪盒子 只留文字区域
          background-clip: text;  // 裁剪盒子 只留文字区域
          color: transparent; // 文字透明
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
