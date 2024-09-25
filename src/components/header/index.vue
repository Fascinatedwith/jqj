<template>
  <div class="box">
    <div class="content">
      糕手糕糕的笔记整理系统
    </div>
    <span class="span">正式版</span>
    <!-- 全屏按钮 -->
    <span class="onClick" @click="onClick">全屏</span>
    <!-- 更改主题颜色组件 -->
    <ThemePicker />
    <!-- 国际化语言组件 -->
    <Lang />
  </div>

</template>

<script>
// 主题颜色更换
import ThemePicker from '@/components/ThemePicker'
// 语言切换
import Lang from '@/components/lang'
export default {
  components: {
    ThemePicker,
    Lang
  },
  data() {
    return {}
  },
  methods: {
    // 全屏和退出全屏
    onClick() {
      var el = document.documentElement
      var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
      if (!isFullscreen) {
        // 进入全屏
        (el.requestFullscreen && el.requestFullscreen()) ||
          (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
          (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) ||
          (el.msRequestFullscreen && el.msRequestFullscreen())
      } else {
        // 退出全屏
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 50px;
  display: flex;
  align-items: center;
}
.content {
  font-size: 18px;
  margin-left: 8px;
  color: #fff;
}
.span {
  display: inline-block;
  width: 62px;
  line-height: 30px;
  text-align: center;
  height: 30px;
  font-size: 13px;
  border-radius: 10px;
  background-color: #8ca6fd;
  margin-left: 10px;
}
.onClick {
  cursor: pointer;
  display: inline-block;
  width: 50px;
  line-height: 30px;
  text-align: center;
  height: 30px;
  font-size: 13px;
  border-radius: 10px;
  background-color: #67c33e;
  margin-left: 10px;
  color: #fff;
}
</style>
