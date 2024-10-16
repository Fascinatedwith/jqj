
<template>
  <div class="perview">
    <canvas id="my_canvas" />
  </div>
</template>

<script>
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
  },
  created() {
    // 生命周期函数 初始化后
  },
  mounted() {
    this.init('my_canvas')
  },
  methods: {
    // 事件执行函数
    // 粒子画布
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
  }
}
</script>

<style scoped lang="scss">
.perview {
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 20px;
}
#my_canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
