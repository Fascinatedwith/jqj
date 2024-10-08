<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      框架基础样式
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">框架基础样式</h3>
    <pre class="pre">
      <code class="code">
        /* 把我们所有标签的内外边距清零 */
        * {
            margin: 0;
            padding: 0;
            /* css3盒子模型 */
            box-sizing: border-box;
        }

        /* em 和 i 斜体的文字不倾斜 */
        em,
        i {
            font-style: normal
        }

        /* 去掉li 的小圆点 */
        li {
            list-style: none
        }

        img {
            /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
            border: 0;
            /* 取消图片底侧有空白缝隙的问题 */
            vertical-align: middle
        }

        button {
            /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
            cursor: pointer
        }

        a {
            text-decoration: none
        }

        button,
        input {
            /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
            font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
            /* 默认有灰色边框我们需要手动去掉 */
            border: 0;
            outline: none;
        }

        body {
            /* CSS3 抗锯齿形 让文字显示的更加清晰 */
            -webkit-font-smoothing: antialiased;
            background-color: #fff;
            font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
            color: #666
        }

        /* 清除浮动 */
        .clearfix::before,
        .clearfix::after {
            content: "";
            clear: both;
            display: block;
            height: 0;
            visibility: hidden;
            zoom: 1;
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
