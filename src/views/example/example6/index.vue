
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
    <h3 style="margin: 20px 0;">1. 下载 / 导入</h3>
    <pre class="pre">
      <code class="code">
        npm install vue-particles

        // main.js
        import Vue from 'vue'
        import VueParticles from 'vue-particles'
        Vue.use(VueParticles)
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. HTML</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>vue-particles
          color="#dedede"
          :particle-opacity="0.7"
          :particles-number="60"
          shape-type="circle"
          :particle-size="4"
          lines-color="#dedede"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.5"
          :lines-distance="150"
          :move-speed="3"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        />
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 参数的意义</h3>
    <pre class="pre">
      <code class="code">
        color: String类型。默认'#dedede'。粒子颜色。
        particleOpacity: Number类型。默认0.7。粒子透明度。
        particlesNumber: Number类型。默认80。粒子数量。
        shapeType: String类型。默认'circle'。可用的粒子外观类型有："circle","edge","triangle", "polygon","star"。
        particleSize: Number类型。默认80。单个粒子大小。
        linesColor: String类型。默认'#dedede'。线条颜色。
        linesWidth: Number类型。默认1。线条宽度。
        lineLinked: 布尔类型。默认true。连接线是否可用。
        lineOpacity: Number类型。默认0.4。线条透明度。
        linesDistance: Number类型。默认150。线条距离。
        moveSpeed: Number类型。默认3。粒子运动速度。
        hoverEffect: 布尔类型。默认true。是否有hover特效。
        hoverMode: String类型。默认true。可用的hover模式有: "grab", "repulse", "bubble"。
        clickEffect: 布尔类型。默认true。是否有click特效。
        clickMode: String类型。默认true。可用的click模式有: "push", "remove", "repulse", "bubble"
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
