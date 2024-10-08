<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      常用的盒子选择器
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 伪元素添加盒子</h3>
    <pre class="pre">
      <code class="code">
        div::before { content:' ' }    // 在div里最前面添加一个盒子
        div::after { content:' ' }     // 在div里最后面添加一个盒子
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 选择器</h3>
    <pre class="pre">
      <code class="code">
        span:first-child {  }   // 选择第一个span
        span:last-child {  }  // 选择最后一个span

        // 括号里写even是选偶数的  odd是奇数  n是全部 2n是偶数  2n+1是奇数  5n是5的倍数  n+5从第五个开始选到最后  -n+5是前5个
        span:nth-child(2) {  }  // 选择第2个span

        input[type=text] {  }  // 选择所有input的text框

        div[class=] {   }  // 选择所有div的类名为xxx的
        div[class^=c] {   }  // 选择所有div的类名为c开头的
        div[class$=a] {   }  // 选择所有div的类名为a结尾的

      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 兄弟选择器</h3>
    <pre class="pre">
      <code class="code">
        // 相邻兄弟选择器 + 就是通过+号选择它相邻的那个元素
        <code><</code>h2>h1<code><</code>/h2>
        <code><</code>h1>h2<code><</code>/h1>
        h2 + h1 {  // 通过h2选中了h1 并给h1定义了颜色
         color: yellow;
        }

        // 通用兄弟选择器 ~ 就是通过~号选择它相邻的那多个元素
        <code><</code>h2>h1<code><</code>/h2>
        <code><</code>h1>h2<code><</code>/h1>
        <code><</code>p>3<code><</code>/p>
        <code><</code>p>4<code><</code>/p>

        h2 ~ p {  // 选择的是所有的p标签
          color: orange;
        }

        //  input:checked 配合 兄弟选择器可实现点击事件
        <code><</code>label>
          <code><</code>input type="checkbox">
          <code><</code>div />
        <code><</code>/label>

        input:checked + div {
          background-color: orange;
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
