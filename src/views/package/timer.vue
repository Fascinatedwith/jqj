<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      防抖是延迟执行，只有在事件触发的频率降低到一定程度后才会执行，而且如果事件持续触发，之前的所有执行都会被取消。
    </div>
    <div class="synopsisBox">
      节流是间隔执行，保证在特定时间内至少执行一次，不论事件触发的频率如何。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">防抖</h3>
    <pre class="pre">
      <code class="code">
      // 函数封装 防抖
      // 定义防抖阀 设为空
      var timer = null
      //  绑定事件
      $(document).on('mousemove', function (e) {
        // 先清除计时器
        clearTimeout(timer)
        // 再开启计时器
        timer = setTimeout(()=> {
          // 执行代码 要做的操作

        }, 1000)})
      </code>
    </pre>

    <h3 style="margin: 20px 0;">节流</h3>
    <pre class="pre">
      <code class="code">
      // 函数封装 节流
      // 定义节流阀 设为空
      var timer = null
      //  绑定事件
      $(document).on('mousemove', function (e) {
        // 判断节流阀是否为空
        if (timer) { return }
        // 开启计时器
        timer = setTimeout(()=> {
          // 执行代码 要做的操作

          // 执行完计时器重新设为空
          timer = null
        }, 1000)})
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
