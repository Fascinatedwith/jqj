<template>
  <div class="content" :class="{ contentTheme: theme }">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      vue2项目构建
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. npm下载包</h3>
    <pre class="pre">
      <code class="code">
        npm install echarts
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 项目中引入</h3>
    <pre class="pre">
      <code class="code">
        import * as echarts from 'echarts';
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 使用</h3>
    <pre class="pre">
      <code class="code">
      function onEcharts (){
        var chartDom = document.getElementById('main');
        // 重复生成图表时先清除上一个避免构建失败
        chartDom.removeAttribute('_echarts_instance_')
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };

        option && myChart.setOption(option);
        // 图表大小随页面变化
        window.addEventListener('resize', function () {
          myChart.resize()
        })
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
    background-color: #f9f9f9;
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
      background: linear-gradient(90deg, #ffc700 0%, #e91e1e 33%, #ac61ee 66%, #00ff88 100%);
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
    background-color: #242424;
  }

  .pre {
    background-color: #242424;
  }
}
</style>
