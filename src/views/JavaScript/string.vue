<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      字符串方法
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 字符串方法</h3>
    <pre class="pre">
      <code class="code">

        /* 模板字符串  */
        ` ${} `

        /* 查找字符的索引  indexOf('要查找的字符', 从哪(索引)开始)  */
        console.log(str.indexOf('n',0))

        /* charAt( ) 根据索引返回字符  */
        console.log(str.charAt(3))

        /* 截取字符  substr('截取的起始位置', '截取几个字符')   */
        console.log(str.substr(2, 2));

        /* 截取字符  slice('截取的起始位置', '截取到哪个位置')   */
        console.log(str.slice(2, 3))

        /* 替换字符  replace('被替换的字符', '替换为的字符')   */
        console.log('andyandy'.replace('a', 'b'))  // bndyandy

        /* 替换全部字符 g 全局匹配  i 忽略大小写  gi 可连写  */
        var str = 'andyandy';
        console.log(str.replace(/a/g, 'b'));  // bndybndy

        /* split('分隔符') 字符串转为数组  */
        var params = 'red=pink=blue';
        var arr = params.split('=')  // 将所有=变为数组中的逗号分隔

        /* 实例方法 startsWith() 表示参数是否在原字符串的头部，返回布尔值 */
        let str = 'Hello world!';
        str.startsWith('Hello') // true
        /* 实例方法 endsWith() 表示参数是否在原字符串的尾部，返回布尔值 */
        str.endsWith('!')  // true

        /* 实例方法 repeat() 表示将原字符串重复n次，返回一个新字符串 */
        'x'.repeat(3)  // "xxx"

        /* 字母小写转为大写  toUpperCase() */
        console.log('a'.toUpperCase())  // A
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
