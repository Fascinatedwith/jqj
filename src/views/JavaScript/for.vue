<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      js循环语句
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. for循环</h3>
    <pre class="pre">
      <code class="code">
        for(var i =1; i <= 100; i++ ){
          console.log(i);
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. while循环</h3>
    <pre class="pre">
      <code class="code">
        var i = 1
        while (i<=100) {
          console.log(i);
          i++
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. do-while循环</h3>
    <pre class="pre">
      <code class="code">
        // 会先执行一次循环体代码 - 条件表达式为 true 时再重复执行循环体代码
        var i = 1
        do {
          console.log(i);
          i++
        } while(i<=100);
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. continue 跳出本次循环</h3>
    <pre class="pre">
      <code class="code">
        for (var i = 1; i <= 5; i++) {
          if (i == 3) {
            console.log('这个包子有虫子，扔掉');
            continue; // 跳出本次循环，跳出的是第3次循环
          }
          console.log('我正在吃第' + i + '个包子呢');
        }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. break  退出整个循环</h3>
    <pre class="pre">
      <code class="code">
        for (var i = 1; i <= 5; i++) {
          if (i == 3) {
            break; // 直接退出整个for 循环，跳到整个for下面的语句
          }
          console.log('我正在吃第' + i + '个包子呢');
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
