
<template>
  <div class="perview" />
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
  }
}
</script>

<style scoped lang="scss">
.perview {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%);
  background-size: 400%;
  background-position: 0% 100%;
  /* 执行背景渐变动画：动画名 时长 加速后减速 无限次播放 */
  animation: gradient 7.5s ease-in-out infinite;
  overflow: hidden;
  border-radius: 20px;

}
// 定义动画
@keyframes gradient {
  50%{
    background-position: 100% 0%;
  }
}

</style>
