
<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      名称
    </div>
    <!-- 效果演示 -->
    <h2 style="margin:20px 0;">效果演示</h2>
    <div style="width: 1000px;height: 200px;" class="examplePreview">
      <preview />
    </div>

    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. HTML</h3>
    <pre class="pre">
      <code class="code">
        < canvas id="my_canvas" />
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. CSS</h3>
    <pre class="pre">
      <code class="code">
        #my_canvas {
          width: 100%;
          height: 100%;
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. JS</h3>
    <pre class="pre">
      <code class="code">
    init(e) {
      const t = document.getElementById(e)
      const n = t.getContext('2d')
      const o = 1
      let a = (t.width = window.innerWidth * o)
      let c = (t.height = window.innerHeight * o)
      const i = 0.05 * a
      const s = 0.1 * a
      const d = (e = 1) => Math.random() * e
      const l = Math.PI
      const r = 2 * l
      let p = new Date()
      const h = (e, t, n) => (1 - n) * e + n * t
      const m = (e, t, n, o) => {
        const a = e - n
        const c = t - o
        return Math.sqrt(a * a + c * c)
      }
      const y = new Array(400).fill({}).map(() => ({
        x: 0.5 * a + Math.cos(d(r)) * d(0.5 * a),
        y: 0.5 * c + Math.sin(d(r)) * d(0.5 * c),
        angle: d(r),
        speed: d(0.15),
        normalSpeed: d(0.15),
        oscAmplitudeX: d(2),
        oscSpeedX: 0.001 + d(0.008),
        oscAmplitudeY: d(2),
        oscSpeedY: 0.001 + d(0.008),
        connectDistance: d(i),
        color: { r: 255, g: 255, b: 255 }
      }))
      const g = () => {
        (p = new Date()),
        y.forEach((e) => {
          (e.x +=
            (Math.cos(e.angle) + Math.cos(p * e.oscSpeedX) * e.oscAmplitudeX) *
            e.speed),
          (e.y +=
              (Math.sin(e.angle) +
                Math.cos(p * e.oscSpeedY) * e.oscAmplitudeY) *
              e.speed),
          (e.speed = h(e.speed, e.normalSpeed * o, 0.1)),
          (e.x > a || e.x < 0) && (e.angle = l - e.angle),
          (e.y > c || e.y < 0) && (e.angle = -e.angle),
          d() < 0.005 && (e.oscAmplitudeX = d(2)),
          d() < 0.005 && (e.oscSpeedX = 0.001 + d(0.008)),
          d() < 0.005 && (e.oscAmplitudeY = d(2)),
          d() < 0.005 && (e.oscSpeedY = 0.001 + d(0.008)),
          (e.x = Math.max(-0.01, Math.min(e.x, a + 0.01))),
          (e.y = Math.max(-0.01, Math.min(e.y, c + 0.01)))
        }),
        n.clearRect(0, 0, a, c),
        y.map((e) => {
          y.filter(
            (t) => e != t && !(m(e.x, e.y, t.x, t.y) > e.connectDistance)
          )
            .map((t) => {
              const n = m(e.x, e.y, t.x, t.y)
              return (
                (e.speed = h(
                  e.speed,
                  e.speed + (0.05 / e.connectDistance) * n,
                  0.2
                )),
                {
                  p1: e,
                  p2: t,
                  color: e.color,
                  opacity:
                    Math.floor(
                      (100 / e.connectDistance) * (e.connectDistance - n)
                    ) / 100
                }
              )
            })
            .forEach((e, t) => {
              const o = Math.sin(p * e.p1.oscSpeedX)
              n.beginPath(),
              (n.globalAlpha = e.opacity),
              n.moveTo(e.p1.x, e.p1.y),
              n.lineTo(e.p2.x, e.p2.y),
              (n.strokeStyle = `rgb(\n\t\t\t\t\t${Math.floor(e.color.r * o)},\n\t\t\t\t\t${Math.floor(0.5 * e.color.g + 0.5 * e.color.g * o)},\n\t\t\t\t\t${e.color.b}\n\t\t\t\t)`),
              (n.lineWidth = 4 * e.opacity),
              n.stroke(),
              n.closePath()
            })
        }),
        window.requestAnimationFrame(g)
      }
      g(),
      window.addEventListener('mousemove', (e) => {
        const t = e.layerX * o
        const n = e.layerY * o
        y.forEach((e) => {
          const o = m(t, n, e.x, e.y)
          if (o < s && o > 0) {
            e.angle = ((e, t, n, o) => Math.atan2(o - t, n - e))(t, n, e.x, e.y)
            const a = 0.1 * (s - o)
            e.speed = h(e.speed, a, 0.2)
          }
        })
      }),
      window.addEventListener('resize', (e) => {
        (a = t.width = window.innerWidth * o),
        (c = t.height = window.innerHeight * o)
      })
    }
    // 使用时在mounted()里执行 this.init('my_canvas')
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import preview from './preview.vue'
export default {
  components: {
    // 注册组件
    preview
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
