<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      深拷贝（Deep Copy）是指创建一个新的对象，并递归地复制原始对象中的所有层级的属性（包括子对象）到新对象中。新对象和原始对象在内存中是完全独立的，对其中一个对象的修改不会影响到原始对象。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
      // 递归函数
      function deepCopy(newobj, oldobj){
        for (var k in oldobj) {
          // 判断我们的属性值属于那种数据类型
          // 1. 获取属性值  oldobj[k]
          var item = oldobj[k];
          // 2. 判断这个值是否是数组
          if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item)
          } else if (item instanceof Object) {
            // 3. 判断这个值是否是对象
            newobj[k] = {};
            deepCopy(newobj[k], item)
          } else {
            // 4. 属于简单数据类型
            newobj[k] = item;
          }
        }
      }
      // 使用方法
      deepCopy(新对象, 原始对象)
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
