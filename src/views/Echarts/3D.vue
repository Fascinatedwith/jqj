<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      echarts图表饼图3D立体效果
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. npm下载包</h3>
    <pre class="pre">
      <code class="code">
        npm install echarts
        npm install echarts-gl
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 项目中引入</h3>
    <pre class="pre">
      <code class="code">
        import 'echarts-gl'
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
        import 'echarts-gl'
        import * as echarts from 'echarts'
        export default {
          data() {
            return {
              optionData: [
                {
                  name: '监控',
                  value: 0,
                  itemStyle: {
                  color: '#00b2ff',
                    opacity: '1'
                  }
                },
                {
                  name: '水肥机',
                  value: 0,
                  itemStyle: {
                    color: '#8aef48',
                    opacity: '1'
                  }
                },
                {
                  name: '墒情站',
                  value: 0,
                  itemStyle: {
                    color: '#f0907f',
                    opacity: '1'
                  }
                },
                {
                  name: '气象',
                  value: 0,
                  itemStyle: {
                    color: '#faa448',
                    opacity: '1'
                  }
                },
                {
                  name: '增氧机',
                  value: 0,
                  itemStyle: {
                    color: '#ffdc6c',
                    opacity: '1'
                  }
                },
                {
                  name: '溶氧监测',
                  value: 0,
                  itemStyle: {
                    color: '#00b2ff',
                    opacity: '1'
                  }
                }
              ],
              option: null
            }
          },
          mounted() {
            this.myChart = echarts.init(this.$refs.pie3d)
            this.init()
          },
          methods: {
            //初始化构建
            init() {
              // 数据渲染
              this.getDate()
            },
            getDate() {
              // 传入数据生成 option ; getPie3D(数据，透明的空心占比（调节中间空心范围的0就是普通饼1就很镂空）)
              this.option = this.getPie3D(this.optionData, 0.75)
              //将配置项设置进去
              this.myChart.setOption(this.option)
              //鼠标移动上去特效效果
              this.bindListen(this.myChart)
            },
            // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
            bindListen(myChart) {
              const that = this
              let selectedIndex = ''
              let hoveredIndex = ''
              // 监听点击事件，实现选中效果（单选）
              myChart.on('click', function (params) {
                // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
                const isSelected = !that.option.series[params.seriesIndex].pieStatus.selected
                const isHovered = that.option.series[params.seriesIndex].pieStatus.hovered
                const k = that.option.series[params.seriesIndex].pieStatus.k
                const startRatio = that.option.series[params.seriesIndex].pieData.startRatio
                const endRatio = that.option.series[params.seriesIndex].pieData.endRatio
                // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
                if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
                  that.option.series[selectedIndex].parametricEquation = that.getParametricEquation(
                    that.option.series[selectedIndex].pieData.startRatio,
                    that.option.series[selectedIndex].pieData.endRatio,
                    false,
                    false,
                    k,
                    that.option.series[selectedIndex].pieData.value
                  )
                  that.option.series[selectedIndex].pieStatus.selected = false
                }
                // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
                that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(
                  startRatio,
                  endRatio,
                  isSelected,
                  isHovered,
                  k,
                  that.option.series[params.seriesIndex].pieData.value
                )
                that.option.series[params.seriesIndex].pieStatus.selected = isSelected
                // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
                isSelected ? (selectedIndex = params.seriesIndex) : null
                // 使用更新后的 option，渲染图表
                myChart.setOption(that.option)
              })
              // 监听 mouseover，近似实现高亮（放大）效果
              myChart.on('mouseover', function (params) {
                // 准备重新渲染扇形所需的参数
                let isSelected
                let isHovered
                let startRatio
                let endRatio
                let k
                // 如果触发 mouseover 的扇形当前已高亮，则不做操作
                if (hoveredIndex === params.seriesIndex) {
                  return
                  // 否则进行高亮及必要的取消高亮操作
                } else {
                  // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
                  if (hoveredIndex !== '') {
                    // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
                    isSelected = that.option.series[hoveredIndex].pieStatus.selected
                    isHovered = false
                    startRatio = that.option.series[hoveredIndex].pieData.startRatio
                    endRatio = that.option.series[hoveredIndex].pieData.endRatio
                    k = that.option.series[hoveredIndex].pieStatus.k
                    // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
                    that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(
                      startRatio,
                      endRatio,
                      isSelected,
                      isHovered,
                      k,
                      that.option.series[hoveredIndex].pieData.value
                    )
                    that.option.series[hoveredIndex].pieStatus.hovered = isHovered
                    // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
                    hoveredIndex = ''
                  }
                  // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
                  if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
                    // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
                    isSelected = that.option.series[params.seriesIndex].pieStatus.selected
                    isHovered = true
                    startRatio = that.option.series[params.seriesIndex].pieData.startRatio
                    endRatio = that.option.series[params.seriesIndex].pieData.endRatio
                    k = that.option.series[params.seriesIndex].pieStatus.k
                    // 对当前点击的扇形，执行高亮操作（对 option 更新）
                    that.option.series[params.seriesIndex].parametricEquation = that.getParametricEquation(
                      startRatio,
                      endRatio,
                      isSelected,
                      isHovered,
                      k,
                      that.option.series[params.seriesIndex].pieData.value + 5
                    )
                    that.option.series[params.seriesIndex].pieStatus.hovered = isHovered
                    // 记录上次高亮的扇形对应的系列号 seriesIndex
                    hoveredIndex = params.seriesIndex
                  }
                  // 使用更新后的 option，渲染图表
                  myChart.setOption(that.option)
                }
              })
              // 修正取消高亮失败的 bug
              myChart.on('globalout', function () {
                // 准备重新渲染扇形所需的参数
                let isSelected
                let isHovered
                let startRatio
                let endRatio
                let k
                if (hoveredIndex !== '') {
                  // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
                  isSelected = that.option.series[hoveredIndex].pieStatus.selected
                  isHovered = false
                  k = that.option.series[hoveredIndex].pieStatus.k
                  startRatio = that.option.series[hoveredIndex].pieData.startRatio
                  endRatio = that.option.series[hoveredIndex].pieData.endRatio
                  // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
                  that.option.series[hoveredIndex].parametricEquation = that.getParametricEquation(
                    startRatio,
                    endRatio,
                    isSelected,
                    isHovered,
                    k,
                    that.option.series[hoveredIndex].pieData.value
                  )
                  that.option.series[hoveredIndex].pieStatus.hovered = isHovered
                  // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
                  hoveredIndex = ''
                }
                // 使用更新后的 option，渲染图表
                myChart.setOption(that.option)
              })
            },
            getPie3D(pieData, internalDiameterRatio) {
              const that = this
              const series = []
              let sumValue = 0
              let startValue = 0
              let endValue = 0
              let legendData = []
              const k = 1 - internalDiameterRatio
              pieData.sort((a, b) => {
                return b.value - a.value
              })
              // 为每一个饼图数据，生成一个 series-surface(参数曲面) 配置
              for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value
                const seriesItem = {
                  //系统名称
                  name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                  type: 'surface',
                  //是否为参数曲面（是）
                  parametric: true,
                  //曲面图网格线（否）上面一根一根的
                  wireframe: {
                    show: false
                  },
                  pieData: pieData[i],
                  pieStatus: {
                    selected: false,
                    hovered: false,
                    k: k
                  }
                }
                //曲面的颜色、不透明度等样式。
                if (typeof pieData[i].itemStyle !== 'undefined') {
                  const itemStyle = {}
                  typeof pieData[i].itemStyle.color !== 'undefined'
                    ? (itemStyle.color = pieData[i].itemStyle.color)
                    : null
                  typeof pieData[i].itemStyle.opacity !== 'undefined'
                    ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                    : null
                  seriesItem.itemStyle = itemStyle
                }
                series.push(seriesItem)
              }
              // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
              // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
              legendData = []

              for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value
                series[i].pieData.startRatio = startValue / sumValue
                series[i].pieData.endRatio = endValue / sumValue
                series[i].parametricEquation = this.getParametricEquation(
                  series[i].pieData.startRatio,
                  series[i].pieData.endRatio,
                  false,
                  false,
                  k,
                  series[i].pieData.value
                )
                startValue = endValue
                const bfb = that.fomatFloat(series[i].pieData.value / sumValue, 4)
                legendData.push({
                  name: series[i].name,
                  value: bfb
                })
              }
              //(第二个参数可以设置你这个环形的高低程度)
              const boxHeight = this.getHeight3D(series, 13) //通过传参设定3d饼/环的高度
              // 准备待返回的配置项，把准备好的 legendData、series 传入。
              const option = {
                //这个可以变形
                xAxis3D: {
                  min: -1,
                  max: 1
                },
                yAxis3D: {
                  min: -1,
                  max: 1
                },
                zAxis3D: {
                  min: -1,
                  max: 1
                },
                //此处是修改样式的重点
                grid3D: {
                  show: false,
                  boxHeight: boxHeight, //圆环的高度
                  //这是饼图的位置
                  left: '0%',
                  top: '-10%',
                  viewControl: {
                    //3d效果可以放大、旋转等，请自己去查看官方配置
                    alpha: 25, //角度(这个很重要 调节角度的)
                    distance: 200, //调整视角到主体的距离，类似调整zoom(这是整体大小)
                    rotateSensitivity: 1, //设置为0无法旋转
                    zoomSensitivity: 0, //设置为0无法缩放
                    panSensitivity: 0, //设置为0无法平移
                    autoRotate: true //自动旋转
                  }
                },
                series: series
              }
              return option
            },
            getHeight3D(series, height) {
              series.sort((a, b) => {
                return b.pieData.value - a.pieData.value
              })
              return (height * 25) / series[0].pieData.value
            },
            getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
              // 计算
              const midRatio = (startRatio + endRatio) / 2
              const startRadian = startRatio * Math.PI * 2
              const endRadian = endRatio * Math.PI * 2
              const midRadian = midRatio * Math.PI * 2
              // 如果只有一个扇形，则不实现选中效果。
              if (startRatio === 0 && endRatio === 1) {
                isSelected = false
              }
              // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
              k = typeof k !== 'undefined' ? k : 1 / 3
              // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
              const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
              const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0
              // 计算高亮效果的放大比例（未高亮，则比例为 1）
              const hoverRate = isHovered ? 1.05 : 1
              // 返回曲面参数方程
              return {
                u: {
                  min: -Math.PI,
                  max: Math.PI * 3,
                  step: Math.PI / 32
                },
                v: {
                  min: 0,
                  max: Math.PI * 2,
                  step: Math.PI / 20
                },
                x: function (u, v) {
                  if (u < startRadian) {
                    return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                  }
                  if (u > endRadian) {
                    return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                  }
                  return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
                },
                y: function (u, v) {
                  if (u < startRadian) {
                    return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                  }
                  if (u > endRadian) {
                    return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                  }
                  return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
                },
                z: function (u, v) {
                  if (u < -Math.PI * 0.5) {
                    return Math.sin(u)
                  }
                  if (u > Math.PI * 2.5) {
                    return Math.sin(u) * h * 0.1
                  }
                  return Math.sin(v) > 0 ? 1 * h * 0.1 : -1
                }
              }
            },
            fomatFloat(num, n) {
              let f = parseFloat(num)
              if (isNaN(f)) {
                return false
              }
              f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
              let s = f.toString()
              let rs = s.indexOf('.')
              //判定如果是整数，增加小数点再补0
              if (rs < 0) {
                rs = s.length
                s += '.'
              }
              while (s.length <= rs + n) {
                s += '0'
              }
              return s
            }
          }
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
