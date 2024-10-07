<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      将列表型的数据转化成树形数据 => 递归算法 => 自身调用自身 => 一定条件不能一样， 否则就会死循环
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
      // 递归函数
      // list 接收总数据  pid 接收父级id
      tranListToTreeData(list, pid) {
        var arr = []
        list.forEach(item => {
          if (item.pid === pid) {
            // 找到之后 就要去找 item 下面有没有子节点
            // children 用于存放子节点的
            const children = tranListToTreeData(list, item.id)
            if (children.length) {
              // 如果children的长度大于0 说明找到了子节点
              item.children = children
            }
            arr.push(item) // 将内容加入到数组中
          }
        })
        return arr
      }
      // 使用方法
      tranListToTreeData(list, 0)
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
