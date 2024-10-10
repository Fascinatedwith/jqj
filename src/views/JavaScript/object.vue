<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      对象方法
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 对象方法</h3>
    <pre class="pre">
      <code class="code">
        /*  in 检测某个属性是否属于这个对象  */
        console.log('age' in obj);

        /*  instanceof  检测是否为对象  */
        console.log(obj instanceof Object)

        /*  constructor  检测是否为对象  */
        console.log(obj.constructor);

        /*  Object.prototype.toString.call  检测是否为对象  */
        console.log(Object.prototype.toString.call(obj));

        /*  遍历对象  */
        for (var k in obj) {
          console.log(k);      // 这里的 k 是属性名
          console.log(obj[k]); // 这里的 obj[k] 是属性值
        }

        /*  遍历对象里的key 返回一个数组  */
        var arr =  Object.keys(obj)

        /*  遍历对象里的value 返回一个数组  */
        var arr =  Object.values(obj)

        /*  JSON 和 JS对象的相互转换  */
        JSON.parse() JSON字符串转对象
        JSON.stringify() JSON对象转JSON字符串
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
