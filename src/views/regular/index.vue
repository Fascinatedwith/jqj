<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      正则表达式是由一些具有特殊含义的字符组成的字符串，多用于查找、替换符合规则的字符串。在表单验证、Url映射等处都会经常用到。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 利用正则取值</h3>
    <pre class="pre">
      <code class="code">
      // 利用正则取数字值
      function checkNumber(value) {
        return String(value).match(/[0-9.]+/g).join('')
      }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 邮箱正则验证</h3>
    <pre class="pre">
      <code class="code">
      // 邮箱正则表达式
      function checkEmail(value) {
        if (!value) {
          return '邮箱不能为空'
        } else {
          var reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
          if (reg.test(value)) {
            // 验证通过
            return true
          } else {
            return '请输入正确的邮箱'
          }
        }
      }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 手机号正则验证</h3>
    <pre class="pre">
      <code class="code">
      // 手机号正则表达式
      function checkTel(value) {
        var reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        return reg.test(value)
      }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 身份证正则验证</h3>
    <pre class="pre">
      <code class="code">
      // 身份证正则表达式
      function checkiDNumber(value) {
        var reg = /\d{17}[\d|x]|\d{15}/
        return reg.test(value)
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
