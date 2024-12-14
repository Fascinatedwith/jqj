<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      echarts图表柱状图3D立体效果
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

    <h3 style="margin: 20px 0;">3. vue页面封装</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>template>
          <code><</code>div ref="pie3d" style="width: 100%; height: 100%; z-index: 9" />
        <code><</code>/template>
        <code><</code>script>
        import { ref, onMounted } from 'vue'
        import * as echarts from 'echarts'
        const chart = ref(null)
        onMounted(() => {
          // drawShape()
          create()
        })
        // 普通3D柱状图    drawShape()
        function drawShape() {
          const leftShape = echarts.graphic.extendShape({
            buildPath(ctx, shape) {
              const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape
              // 侧面宽度
              const WIDTH = 15
              // 斜角高度
              const OBLIQUE_ANGLE_HEIGHT = 3.6

              const p1 = [basicsXAxis - WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT]
              const p2 = [basicsXAxis - WIDTH, bottomYAxis]
              const p3 = [basicsXAxis, bottomYAxis]
              const p4 = [basicsXAxis, topBasicsYAxis]

              ctx.moveTo(p1[0], p1[1])
              ctx.lineTo(p2[0], p2[1])
              ctx.lineTo(p3[0], p3[1])
              ctx.lineTo(p4[0], p4[1])
            }
          })
          const rightShape = echarts.graphic.extendShape({
            buildPath(ctx, shape) {
              const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape
              // 侧面宽度
              const WIDTH = 15
              // 斜角高度
              const OBLIQUE_ANGLE_HEIGHT = 3.6

              const p1 = [basicsXAxis, topBasicsYAxis]
              const p2 = [basicsXAxis, bottomYAxis]
              const p3 = [basicsXAxis + WIDTH, bottomYAxis]
              const p4 = [basicsXAxis + WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT]

              ctx.moveTo(p1[0], p1[1])
              ctx.lineTo(p2[0], p2[1])
              ctx.lineTo(p3[0], p3[1])
              ctx.lineTo(p4[0], p4[1])
            }
          })
          const topShape = echarts.graphic.extendShape({
            buildPath(ctx, shape) {
              const { topBasicsYAxis, basicsXAxis } = shape
              // 侧面宽度
              const WIDTH = 15
              // 斜角高度
              const OBLIQUE_ANGLE_HEIGHT = 3.6

              const p1 = [basicsXAxis, topBasicsYAxis]
              const p2 = [basicsXAxis + WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT]
              const p3 = [basicsXAxis, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT * 2]
              const p4 = [basicsXAxis - WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT]

              ctx.moveTo(p1[0], p1[1])
              ctx.lineTo(p2[0], p2[1])
              ctx.lineTo(p3[0], p3[1])
              ctx.lineTo(p4[0], p4[1])
            }
          })

          echarts.graphic.registerShape('leftShape', leftShape)
          echarts.graphic.registerShape('rightShape', rightShape)
          echarts.graphic.registerShape('topShape', topShape)
          initChart()
        }
        function initChart() {
          chart.value = echarts.init(document.getElementById('pie3d'))
          const options = {
            xAxis: {
              type: 'category',
              data: ['苹果', '梨子', '香蕉'],
              axisLabel: {
                color: '#fff'
              }
            },

            yAxis: {
              type: 'value',
              max: 200,
              axisLabel: {
                color: '#fff'
              },
              splitLine: {
                lineStyle: {
                  color: '#222'
                }
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            series: [
              {
                type: 'custom',
                data: [100, 50, 20],
                barWidth: 30,
                renderItem(params, api) {
                  // 基础坐标
                  const basicsCoord = api.coord([api.value(0), api.value(1)])
                  // 顶部基础 y 轴
                  const topBasicsYAxis = basicsCoord[1]
                  // 基础 x 轴
                  const basicsXAxis = basicsCoord[0]
                  // 底部 y 轴
                  const bottomYAxis = api.coord([api.value(0), 0])[1]
                  return {
                    type: 'group',
                    children: [
                      {
                        type: 'leftShape',
                        shape: {
                          topBasicsYAxis,
                          basicsXAxis,
                          bottomYAxis
                        },
                        style: {
                          fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0,
                              color: 'rgb(0, 192, 238,0.8)'
                            },

                            {
                              offset: 0.8,
                              color: 'rgb(0, 194, 239,0.2)'
                            },
                            {
                              offset: 1,
                              color: 'rgb(0, 194, 239,0)'
                            }
                          ]),
                          emphasis: {
                            fill: 'yellow' // 鼠标高亮时的填充颜色
                          }
                        }
                      },
                      {
                        type: 'rightShape',
                        shape: {
                          topBasicsYAxis,
                          basicsXAxis,
                          bottomYAxis
                        },
                        style: {
                          fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0,
                              color: '#00CCF5 '
                            },

                            {
                              offset: 0.8,
                              color: 'rgb(4, 88, 115,0.8)'
                            },
                            {
                              offset: 1,
                              color: 'rgb(4, 88, 115,0.6)'
                            }
                          ])
                        }
                      },
                      {
                        type: 'topShape',
                        shape: {
                          topBasicsYAxis,
                          basicsXAxis,
                          bottomYAxis
                        },
                        style: {
                          fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0.3,
                              color: '#6DF0FF'
                            },
                            {
                              offset: 1,
                              color: '#6DF0FF'
                            }
                          ])
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
          options && chart.value.setOption(options)
        }

        // 堆叠3D柱状图   create()
        function create() {
          const chartDom = document.getElementById('pie3d')
          const myChart = echarts.init(chartDom)
          const xData = ['国道', '省道', '县道', '乡道', '村道']
          // 计划数据数组
          const planData = [328, 1488, 360, 22, 922]
          // 完成数据数组
          const completeData = [320, 132, 101, 0, 90]

          const color = [
            {
              type: 'linear',
              x: 0,
              x2: 1,
              y: 0,
              y2: 0,
              //给菱形上色
              colorStops: [
                {
                  offset: 0,
                  color: '#54a2d3'
                },
                {
                  offset: 0.5,
                  color: '#54a2d3'
                },
                {
                  offset: 0.5,
                  color: '#7ed1e3'
                },
                {
                  offset: 1,
                  color: '#7ed1e3'
                }
              ]
            },
            {
      type: 'linear',
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      //给菱形上色
      colorStops: [
        {
          offset: 0,
          color: '#a3a418'
        },
        {
          offset: 0.5,
          color: '#a3a418'
        },
        {
          offset: 0.5,
          color: '#cdbf38'
        },
        {
          offset: 1,
          color: '#cdbf38'
        }
      ]
    }
  ]
  const barWidth = 30
  const constData = []
  const showData = []
  const otherData = []

  //计算堆叠数据为多少
  for (let i = 0; i < planData.length; i++) {
    planData[i] = Number(planData[i])
    completeData[i] = Number(completeData[i])
    otherData[i] = planData[i] - completeData[i]
    if (planData[i] <= 0) {
      constData.push(0)
      showData.push({
        value: 1,
        itemStyle: {
          normal: {
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 2,
            color: 'rgba(0,0,0,0)'
          }
        }
      })
    } else {
      if (completeData[i] == planData[i]) {
        constData.push({
          value: 1,
          itemStyle: {
            normal: {
              color: color[1]
            }
          }
        })
      } else {
        constData.push(1)
      }
      if (completeData[i] > 0) {
        showData.push({
          value: planData[i],
          itemStyle: {
            normal: {
              borderColor: '#e9d86c',
              borderWidth: 2,
              color: '#e9d86c'
            }
          }
        })
      } else {
        showData.push({
          value: planData[i],
          itemStyle: {
            normal: {
              borderColor: '#89e3ec',
              borderWidth: 2,
              color: '#89e3ec'
            }
          }
        })
      }
    }
  }

  const option = {
    //调整光标移入，展示数据的样式
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        return (
          params[0].axisValue +
          '：' +
          '<br>计划：' +
          planData[params[0].dataIndex] +
          '<br>完成：' +
          completeData[params[0].dataIndex]
        )
      }
    },
    //调整图例
    legend: {
      data: ['计划', '完成'],
      show: false
    },
    //调整图表距边框的距离
    grid: {
      left: '3%',
      right: '3%',
      top: '15%',
      bottom: '5%',
      containLabel: true
    },
    // 调整图像x轴
    xAxis: {
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          color: '#fff',
          fontWeight: '400',
          fontSize: '14'
        }
      }
    },
    //调整图像y轴
    yAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#FFFFFF',
          width: 1,
          opacity: 0.11
        }
      }
    },
    //图像的关键显示部分，此处5个拼接一个堆叠柱子，注意此处的调整
    series: [
      {
        z: 1,
        name: '计划',
        type: 'bar',
        stack: '1',
        barWidth: barWidth,
        // stack: "总量",
        color: color[0],
        data: otherData
      },
      {
        z: 2,
        name: '完成',
        type: 'bar',
        stack: '1',
        barWidth: barWidth,
        // stack: "总量",
        color: color[1],
        data: completeData
      },
      //柱形底部
      {
        z: 3,
        name: '项目',
        type: 'pictorialBar',
        data: constData,
        symbol: 'diamond',
        symbolOffset: ['0%', '50%'],
        symbolSize: [barWidth, 10],
        itemStyle: {
          normal: {
            color: color[0]
          }
        },

        tooltip: {
          show: false
        }
      },
      //某个柱形的底部
      {
        z: 4,
        name: '项目',
        type: 'pictorialBar',
        data: otherData,
        symbol: 'diamond',
        symbolPosition: 'end',
        symbolOffset: ['0%', '-50%'],
        symbolSize: [barWidth, 10],
        itemStyle: {
          normal: {
            color: color[1]
          }
        },
        tooltip: {
          show: false
        }
      },
      {
        z: 5,
        name: '项目',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: showData,
        symbol: 'diamond',
        symbolOffset: ['0%', '-50%'],
        symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            label: {
              formatter: '{c}',
              show: true,
              position: 'top',
              textStyle: {
                fontWeight: 400,
                fontSize: '13',
                color: '#F2F7FA',
                lineHeight: 20
              }
            }
          }
        }
      }
    ]
  }
  option && myChart.setOption(option)
}

<code><</code>/script>
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
