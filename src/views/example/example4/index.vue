
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
        < div id="panel" />
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. CSS</h3>
    <pre class="pre">
      <code class="code">
        #panel {
          height: 100%;
          width: 100%;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          z-index: 0;
          span {
              width: 10px;
              height: 10px;
              background: #55b9f3;
              border-radius: 50%;
              position: absolute;
              box-shadow: 5px 5px 15px #489dcf, -5px -5px 15px #62d5ff;
              animation: blow 4s linear infinite;
              -webkit-animation: blow 4s linear infinite;
          }
        }
        /*这里是定义里一个动画效果*/
        @keyframes blow {
          0% {
            transform: translate(-50%, -50%);
            /*这里是定义初始透明度为1*/
            opacity: 1;
            filter: hue-rotate(0deg);
            /*这里是浏览器兼容*/
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
          }

          100% {
            transform: translate(-50%, -1000%);
            /*这里是定义结束时透明度为0*/
            opacity: 0;
            filter: hue-rotate(720deg);
            /*这里是浏览器兼容*/
            -webkit-transform: translate(-50%, -1000%);
            -moz-transform: translate(-50%, -1000%);
            -ms-transform: translate(-50%, -1000%);
            -o-transform: translate(-50%, -1000%);
            -webkit-filter: hue-rotate(720deg);
          }
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. js</h3>
    <pre class="pre">
      <code class="code">
      mouseMove() {
        document.addEventListener(`mousemove`, (e) => {
          /* 这里获取元素节点*/
          const oPanel = document.getElementById('panel')
          const oSpan = document.createElement(`span`)
          /* 浏览器兼容*/
          e = e || window.Event
          /* 获取相关参数*/
          oSpan.style.left = e.clientX + `px`
          oSpan.style.top = e.clientY + `px`
          /* 设定随机数存储在size中*/
          const size = Math.random() * 20
          /* 给节点赋值参数数值*/
          oSpan.style.width = 5 + size + `px`
          oSpan.style.height = 5 + size + `px`
          /* 在body中添加span标签*/
          oPanel.appendChild(oSpan)
          /* 设置定时器 间隔时间为2000毫秒*/
          setTimeout(() => {
            /* 清除ospan节点*/
            oSpan.remove()
          }, 1000)
        })
      }
      // 使用时在mounted()里执行 this.mouseMove()
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
