<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      高德地图
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h1 style="margin: 20px 0;"> 1. index.html 引入</h1>
    <pre class="pre">
      <code class="code">
        <code><</code>script src="https://webapi.amap.com/maps?v=2.0&key=3268cc056a37996c2024adb7784ce116&plugin=AMap.PolygonEditor"><code><</code>/script>
      </code>
    </pre>

    <h1 style="margin: 20px 0;"> 2. 指定容器</h1>
    <pre class="pre">
      <code class="code">
        <code><</code>div id="container" />

        #container {
          height: 100%;
        }
      </code>
    </pre>

    <h1 style="margin: 20px 0;"> 3. 封装函数渲染地图</h1>
    <pre class="pre">
      <code class="code">
        init() {
          this.map = new AMap.Map("container", {
            resizeEnable: true,
            center: [115.832025733, 28.773002288],   // 中心点坐标经纬度
            layers: [new AMap.TileLayer.Satellite()],  // 卫星图模式
            zoom: 15,   // 视野大小
            viewMode: "3D",
          });
        }
      </code>
    </pre>

    <h1 style="margin: 20px 0;"> 4. 其他看官方文档</h1>
    <pre class="pre">
      <code class="code">
        https://lbs.amap.com/api/javascript-api-v2/guide/abc/jscode
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
