<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      始终跟随鼠标的小飞机
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. index.html导入字体图标</h3>
    <pre class="pre">
    <code class="code">
      <code><</code>link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    </code>
    </pre>

    <h3 style="margin: 20px 0;">2. HTML结构</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>div id="plane">
          <code><</code>i class="fa fa-paper-plane" aria-hidden="true" />
        <code><</code><code>/div></code>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. CSS样式</h3>
    <pre class="pre">
      <code class="code">
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
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. JavaScript执行代码</h3>
    <pre class="pre">
      <code class="code">
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
        }
        // 使用时在mounted()里执行 this.plane()
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
