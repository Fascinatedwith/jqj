<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      通过对待排序数据从前往后【从下标较小的元素开始】，依次比较相邻元素的值，假设要求数据按照升序排列，若发现前一个数据大于后一个，则将它们交换位置，使较大的元素逐渐从前向后移，就想水中的气泡一样逐渐向上冒。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
      // 函数封装
      function sort(arr) {
        var kong = 0
        for (var i = 0; i < arr.length; i++) {
          for (var y = 0; y < arr.length; y++) {
            if (arr[y] > arr[y + 1]) {
              kong = arr[y];
              arr[y] = arr[y + 1];
              arr[y + 1] = kong;
            }
          }
        }
        return arr;
      }
      // 使用方法
      sort([4, 7, 5, 3, 9, 8, 6, 1, 2])
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
