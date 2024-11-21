<template>
  <div class="ContainerLogin">
    <!-- 小飞机 -->
    <!-- <div id="plane">
      <i class="fa fa-paper-plane" aria-hidden="true" />
    </div> -->
    <!-- 粒子画布 -->
    <canvas id="my_canvas" />
    <!-- 登录 -->
    <div class="container">
      <h1>Welcome</h1>
      <div class="form">
        <input v-model="username" type="text" placeholder="您的账号">
        <input
          v-model="password"
          type="password"
          placeholder="您的密码"
          @keyup.enter="onLogin"
        >
        <button class="btn-login" @click="onLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // 注册组件
  },
  data() {
    return {
      username: '',
      password: ''
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
    // this.plane()
  },
  methods: {
    // 飞机跟随
    plane() {
      const plane = document.getElementById('plane')
      let deg = 0
      let ex = 0
      let ey = 0
      let vx = 0
      let vy = 0
      let count = 0
      window.addEventListener('mousemove', (e) => {
        ex = e.x - plane.offsetLeft - plane.clientWidth / 2
        ey = e.y - plane.offsetTop - plane.clientHeight / 2
        deg = (360 * Math.atan(ey / ex)) / (2 * Math.PI) + 45
        if (ex < 0) {
          deg += 180
        }
        count = 0
      })
      function draw() {
        plane.style.transform = 'rotate(' + deg + 'deg)'
        if (count < 100) {
          vx += ex / 100
          vy += ey / 100
        }
        plane.style.left = vx + 'px'
        plane.style.top = vy + 'px'
        count++
      }
      setInterval(draw, 1)
    },
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
    },
    // 登录
    onLogin() {
      this.username = 'YDD'
      this.password = 'YDD'
      // 要操作的元素
      const container = document.querySelector('.container')
      if (this.username == '' || this.password == '') {
        this.$message({
          message: '请输入账号密码！！！',
          type: 'warning'
        })
        return
      }
      if (this.username == 'YDD' && this.password == 'YDD') {
        this.$store.commit('setToken', 'YDD')
        container.classList.add('success')
        // 延迟跳转
        setTimeout(() => {
          this.$router.push('/')
          // 跳转
        }, 2000)
      } else {
        this.$message.error('账号或密码错误，请重新登陆！')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ContainerLogin {
  position: relative;
  width: 100%;
  height: 100%;
  /* 渐变背景 */
  // background: linear-gradient(200deg, #005bea, #00c6fb);
  // background: linear-gradient(to top left, #ffe29f, #ffa99f, #ff719a);
  background-color: #000;
  overflow: hidden;

  #plane {
    color: #fff;
    font-size: 70px;
    /* 绝对定位 */
    position: absolute;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #canvas {
    width: 100%;
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .container h1 {
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: 15px;
    /* 过渡效果 */
    transition: 1s ease-in-out;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    opacity: 1;
    /* 不透明度改变时的过渡效果 */
    transition: opacity 0.5s;
  }
  .form input {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 auto 10px auto;
    text-align: center;
    color: #fff;
    font-size: 15px;
    transition: 0.25s;
  }
  .form input::placeholder {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
  }
  .form input:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  .form input:focus {
    background-color: #fff;
    width: 300px;
    color: #ff719a;
  }
  .btn-login {
    outline: none;
    background-color: #fff;
    color: #000;
    border: none;
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.25s;
  }
  .btn-login:hover {
    background-color: #f5f7f9;
  }
  .container.success h1 {
    transform: translateY(75px);
  }
  .container.success .form {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
