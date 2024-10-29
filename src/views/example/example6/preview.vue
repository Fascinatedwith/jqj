
<template>
  <div class="perview">
    <vue-particles
      color="#df1a6e"
      :particle-opacity="0.7"
      :particles-number="60"
      shape-type="circle"
      :particle-size="4"
      lines-color="#921adf"
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
  </div>
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
  },
  methods: {
    // 事件执行函数
  }
}
</script>

<style scoped lang="scss">
.perview {
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 20px;
}

</style>
