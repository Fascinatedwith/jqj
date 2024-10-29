
<template>
  <div class="perview">
    <label class="switch">
      <input type="checkbox" :checked="checked">
      <span class="slider" />
    </label>
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
      checked: false
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
  display: flex;
  justify-content: center;
  align-items: center;
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: .4s;
    border-radius: 30px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    border-radius: 20px;
    left: 5px;
    bottom: 5px;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: .4s;
  }
  input:checked+.slider {
    background-color: #303136;
  }
  input:checked+.slider:before {
    transform: translateX(25.5px);
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
  }
}

</style>
