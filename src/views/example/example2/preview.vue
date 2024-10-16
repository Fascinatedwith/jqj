
<template>
  <div class="perview">
    <div id="plane">
      <i class="fa fa-paper-plane" aria-hidden="true" />
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
    this.plane()
  },
  methods: {
    // 事件执行函数
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

  #plane {
    color: #fff;
    font-size: 70px;
    /* 绝对定位 */
    position: absolute;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
}

</style>
