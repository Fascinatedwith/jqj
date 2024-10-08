<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      动画效果与2D / 3D
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 2D转换</h3>
    <pre class="pre">
      <code class="code">
        {
          // 2D转换之移动 px / %
          transform: translate(x值px, y值px);   // 2D转换之盒子上下左右移动
          transform: translateX(x值px);   // 2D转换之盒子左右移动
          transform: translateY(y值px);   // 2D转换之盒子上下移动

          // 2D转换之旋转 1-360
          transform: rotate(值deg);

          // 2D转换之中心点 px / % / 方位名词
          transform-origin:x y;

          // 2D转换之缩放 0 - 10000
          transform: scale( );

          // 可连写 位移需放在最前
          transform: translate(100px,50px) rotate(360deg) scale(1.5);
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 3D转换</h3>
    <pre class="pre">
      <code class="code">
        {
          // 开启3D空间  不开启则3D效果不生效
          transform-style:preserve-3d;

          // 3D转换之旋转 1-10000
          transform: rotateX( 值deg)
          transform: rotateY( 值deg)
          transform: rotateZ( 值deg)

          // 视距 视野距离
          perspective: px;
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 动画效果</h3>
    <pre class="pre">
      <code class="code">
        // 声明动画
        {
          @keyframes 动画名称 {
            0% {

            }
            100% {

            }
          }
        }

        // 使用动画
        {
          animation-name: 动画名称;
          animation-duration: 5s;  // 动画的持续时间
          animation-timing-function: linear;  // 动画的速度曲线  匀速linear
          animation-delay: 1s; // 动画的延迟时间
          animation-iteration-count: 5;  // 动画播放次数  无限循环infinite
          animation-direction: normal; // 动画下一周期是否逆向播放  否normal 是alternate
          animation-fill-mode: forwards;   动画进行完后的保持100%当时的位置
          animation-play-state: paused;  // 动画停止

          // 可连写  多个动画连写以,隔开
          animation: 名称 持续时间 运动曲线 何时开始 播放次数 是否逆向播放 结束后状态；
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 过渡效果</h3>
    <pre class="pre">
      <code class="code">
        {
          // 过渡效果  name可以是 width height color 定位等等一系列 ，想给谁加就写谁   all代表全部  s代表过渡的时间
          transition: name 1s;

          transition-delay: .5s;  // 过渡延时
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
