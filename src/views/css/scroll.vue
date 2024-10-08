<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      常用的滚动条样式
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
        // 隐藏滚动条
        ::-webkit-scrollbar {
          display: none;
        }

        // 常用样式
        ::-webkit-scrollbar {
          width: 7px;
        }
        ::-webkit-scrollbar-track {
          background-color: #1e3149;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2c67a3;
          border-radius: 10px;
        }

        // 其他样式
        ::-webkit-scrollbar { } // 滚动条整体部分
        ::-webkit-scrollbar-button { } // 滚动条两端的按钮
        ::-webkit-scrollbar-track { } // 外层轨道
        ::-webkit-scrollbar-track-piece { } // 内层轨道，滚动条中间部分（除去）
        ::-webkit-scrollbar-thumb { } // 滚动条里可以拖动的那个
        ::-webkit-scrollbar-corner { } // 边角
        ::-webkit-resizer { } // 定义右下角拖动块的样式
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
