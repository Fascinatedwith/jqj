<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      常用的盒子样式
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 盒子转换</h3>
    <pre class="pre">
      <code class="code">
        {
          display: block;  /* 盒子转为块级元素 */
          display: inline-block;  /* 盒子转为行内块元素 */
          display: inline;  /* 盒子转为行内元素 */
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 背景样式</h3>
    <pre class="pre">
      <code class="code">
        {
          background-color: pink;  /* 盒子背景色 */
          background-color: rgba(0,0,0,0);  /* 盒子背景色 最后一位为透明度 */

          background-attachment: fixed;  /* 盒子背景图像固定 */
          background-attachment: scroll;  /* 盒子背景图像滚动 */

          background-image: url();  /* 盒子背景插入图片 */
          background-repeat: no-repeat;  /* 盒子背景图片不铺满 */
          background-repeat: repeat-x ;  /* 盒子背景图片横着铺满 */
          background-repeat: repeat-y ;  /* 盒子背景图片竖着铺满 */
          background-position:  0px 0px;  /* 盒子背景图片调整位置 */
          background-size:  0px 0px;  /* 盒子背景图片大小 对应着 宽 高 可100% */

          background-size: cover;  /* cover：此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 */
          background-size: contain;  /* contain：此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 */
        }

        /* 背景渐变的简单使用  线性渐变：linear-gradient  径向渐变：radial-gradient */
        {
          background-image: linear-gradient(90deg, rgb(86, 94, 214), rgb(89, 150, 255));
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 边框样式</h3>
    <pre class="pre">
      <code class="code">
        {
          border-collapse: collapse;  /* 合并相邻边框 */

          border-style: solid;   /* 边框为实线 */
          border-style: dashed ;   /* 边框为虚线 */
          border-style: dotted;   /* 边框为点线 */

          border-radius: 0 0 0 0;  /* 边框弧度 可% 可px ，可连写 对应 左上 右上 右下 左下 */
        }

        /* 裁剪边框图片 */
        {
          border-image-source: url("images/border.jpg");   // 边框图片的路径
          border-image-slice: 50 60 70 80;   //裁剪的尺寸 上右下左 不加单位
          border-image-width: 50px 60px 70px 80px;   // 图片边框的宽度  *加单位
          border-image-repeat: round;   // 图片边框样式  平铺repeat   拉伸stretch  环绕round
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 盒子阴影</h3>
    <pre class="pre">
      <code class="code">
        /*  阴影类型为内阴影inset   阴影类型为外阴影outset  */
        连写顺序：阴影类型  横px  竖px  模糊px  尺寸px  颜色       *模糊度可省略
        {
          box-shadow: inset -3px -2px 5px -2px #8983f7;
        }

        // 可实现一个月亮
        div {
          height: 24px;
          width: 24px;
          border-radius: 20px;
          background: #303136;
          box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. 盒子定位</h3>
    <pre class="pre">
      <code class="code">
        /*  定位遵循子绝父相  */
        {
          position: absolute;  /*  绝对定位  */
          position: relative;  /*  相对定位  */
          position: fixed;  /*  固定定位  */
          position: static;  /*  静态定位  */
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
