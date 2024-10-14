
<template>
  <div class="perview">
    <span>button</span>
    <span>button</span>
    <span>button</span>
    <span>button</span>
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
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: relative;
    cursor: pointer;
    margin: 40px;
    padding: 10px;
    color: #21ebff;
    /* 标准文本 */
    text-decoration: none;
    /* 文本单词大写 */
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    transition: .5s;
    overflow: hidden;
  }
  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    border-left: 2px solid #21ebff;
    border-top: 2px solid #21ebff;
    transition: .5s;
}
span::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    border-bottom: 2px solid #21ebff;
    border-right: 2px solid #21ebff;
    transition: .5s;
}
span:hover::after {
    width: 100%;
    height: 100%;
}
span:hover::before {
    width: 100%;
    height: 100%;
}
span:hover {
    background: #21ebff;
    color: #fff;
    box-shadow: 0 0 40px #21ebff;
    transition-delay: .3s;
    // -webkit-box-reflect: below 0 linear-gradient(transparent,rgba(0 0 0 .4));
}
span:nth-child(1) {
    filter: hue-rotate(100deg);
}
span:nth-child(2) {
    filter: hue-rotate(180deg);
}
span:nth-child(3) {
    filter: hue-rotate(300deg);
}

}

</style>
