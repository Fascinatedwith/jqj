<template>
  <el-container>
    <el-header>
      <div class="header">
        <div class="item">1</div>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
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
    // 生命周期函数 挂载后
  },
  methods: {
    // 事件执行函数
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  height: 80px !important;
  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
.el-main {
  padding: 0;
}
</style>
