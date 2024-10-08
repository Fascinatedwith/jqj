<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      常用的页面布局
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h2 style="margin: 20px 0;"> 1. flex流式布局</h2>
    <pre class="pre">
      <code class="code">
        {
          display: flex;   /* 开启flex布局 会使盒子内所有元素在一行显示 */

          /* 主轴对齐方式 */
          justify-content: flex-start;   /* 从头到尾对齐 */
          justify-content: flex-end;   /* 从尾到头对齐 */
          justify-content: center;   /* 居中对齐 */
          justify-content: space-between;   /* 使子盒子之间的间距相同 （平均分配父盒子剩余的空白长度） */
          justify-content: space-evenly;    /* 使盒子内的间距全部相同（父盒子到子的间距和子到子的间距都相同） */
          justify-content: space-around ;   /* 给每个子盒子相同的外间距 （相当于每个子盒子都有相同的外边距） */

          /* 辅轴对齐方式 */
          align-items: flex-start;  /* 从上到下对齐 */
          align-items: flex-end;  /* 从下到上对齐 */
          align-items: center;   /* 居中对齐 */

          /* 主轴换行 */
          flex-wrap: wrap;   /* 内容装不下自动换行 */
          /* 调整换行后每行的对齐方式 */
          align-content: flex-start;  /* 从头开始对齐 */
          align-content: flex-end;    /* 从尾开始对齐 */
          align-content: center;      /* 居中对齐 */
          align-content: space-between;   /* 使子盒子的间距相同 （平均分配父盒子剩余的空白长度） */
          align-content: space-around;    /* 给每个子盒子相同的外间距 （相当于每个子盒子都有相同的外边距） */
          align-content: space-evenly;    /* 使盒子内的间距全部相同（父盒子到子的间距和子到子的间距都相同） */

          /* 改变主轴方向 */
          flex-direction: column;   /* 垂直方向 开启后内容会从上往下排序，此时y轴为主轴 */
          flex-direction: row-reverse; /* 反转方向 */

          /* 子盒子flex */
          flex: 1;  /* 数值为几就占几份（把父盒子宽度按比例发放） */
          flex-grow: 1;  /* 数值为几就占剩余宽度的几份（把父盒子剩余空白宽度按比例发放） */

          /* 单独控制某个盒子的对齐方式，谁用就给谁写 */
          align-self: flex-start;  /* 沿着交叉轴方向 起点 对齐 */
          align-self: flex-end;  /* 沿着交叉轴方向 结尾 对齐 */
          align-self: center;  /* 沿着交叉轴方向 居中 对齐。 */
          align-self: baseline;  /* 沿着交叉轴方向，按照项目内的文字对齐。 */
          align-self: stretch;  /* 沿着交叉轴方向自动进行拉升到最大。 */

          flex: unset;  /* 取消这个盒子的flex样式 */
        }
      </code>
    </pre>

    <h2 style="margin: 20px 0;"> 2. grid网格布局</h2>
    <pre class="pre">
      <code class="code">
        {
          display: grid;   /* 开启grid布局 */

          /* 主轴对齐方式 */
          justify-content: flex-start;   /* 从头到尾对齐 */
          justify-content: flex-end;   /* 从尾到头对齐 */
          justify-content: center;   /* 居中对齐 */
          justify-content: space-between;   /* 使子盒子之间的间距相同 （平均分配父盒子剩余的空白长度） */
          justify-content: space-evenly;    /* 使盒子内的间距全部相同（父盒子到子的间距和子到子的间距都相同） */
          justify-content: space-around ;   /* 给每个子盒子相同的外间距 （相当于每个子盒子都有相同的外边距） */

          /* 辅轴对齐方式 */
          align-items: flex-start;  /* 从上到下对齐 */
          align-items: flex-end;  /* 从下到上对齐 */
          align-items: center;   /* 居中对齐 */

          /* 列布局 列宽 */
          grid-template-columns: 1fr 1fr 2fr;  /* 改成几列布局（多少列就多少个数值，fr 代表等分占几份 也可px ） */
          grid-template-columns: repeat(12 , 50px);  /* 就是12列 每列50px宽 */

          /* 列布局 行高 */
          grid-template-rows : 50px 100px 200px; /* 每行的高度 */
          grid-auto-rows : 100px;  /* 所有未指定高度的行设置高度 */

          /* 间距 */
          column-gap: 10px;  /* 每列的间距 */
          row-gap: 24px;  /* 每行的间距 */
          gap: 24px;    /* 每列和每行的间距 */

          /* 合并格 */
          grid-column: span 2;  /* 跨列合并 （相当于1，2个盒子合并 需要把2盒子删掉）跟谁合并就删谁，谁要合并这个样式就写给谁 */
          grid-row: span 2;  /* 跨行合并 */
          grid-area: span 2 / span 2;  /* 跨行跨列合并 */
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
