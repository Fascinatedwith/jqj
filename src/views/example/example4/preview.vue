<template>
  <div class="perview">
    <div id="panel" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.mouseMove()
  },
  methods: {
    mouseMove() {
      document.addEventListener(`mousemove`, (e) => {
        /* 这里获取元素节点*/
        const oPanel = document.getElementById('panel')
        const oSpan = document.createElement(`span`)
        /* 浏览器兼容*/
        e = e || window.Event
        /* 获取相关参数*/
        oSpan.style.left = e.clientX + `px`
        oSpan.style.top = e.clientY + `px`
        /* 设定随机数存储在size中*/
        const size = Math.random() * 20
        /* 给节点赋值参数数值*/
        oSpan.style.width = 5 + size + `px`
        oSpan.style.height = 5 + size + `px`
        /* 在body中添加span标签*/
        oPanel.appendChild(oSpan)
        /* 设置定时器 间隔时间为2000毫秒*/
        setTimeout(() => {
        /* 清除ospan节点*/
          oSpan.remove()
        }, 1000)
      })
    }
  }
}
</script>

<style lang='scss'>
.perview {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #000;
  overflow: hidden;
}
#panel {
    height: 100%;
    width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 0;
    span {
        width: 10px;
        height: 10px;
        background: #55b9f3;
        border-radius: 50%;
        position: absolute;
        box-shadow: 5px 5px 15px #489dcf, -5px -5px 15px #62d5ff;
        animation: blow 4s linear infinite;
        -webkit-animation: blow 4s linear infinite;
    }
}
/*这里是定义里一个动画效果*/
@keyframes blow {
    0% {
        transform: translate(-50%, -50%);
        /*这里是定义初始透明度为1*/
        opacity: 1;
        /*
	这里是初始滤镜效果
	给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。
	值为0deg，则图像无变化。若值未设置，默认值是0deg。
	该值虽然没有最大值，超过360deg的值相当于又绕一圈。
	*/
        filter: hue-rotate(0deg);
        /*这里是浏览器兼容*/
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
    }

    100% {
        /*
	2D转化
	这里是从自身向上平移
	*/
        transform: translate(-50%, -1000%);
        /*这里是定义结束时透明度为0*/
        opacity: 0;
        /*
	这里是结束滤镜效果
	给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。
	值为0deg，则图像无变化。若值未设置，默认值是0deg。
	该值虽然没有最大值，超过360deg的值相当于又绕一圈。
	*/
        filter: hue-rotate(720deg);
        /*这里是浏览器兼容*/
        -webkit-transform: translate(-50%, -1000%);
        -moz-transform: translate(-50%, -1000%);
        -ms-transform: translate(-50%, -1000%);
        -o-transform: translate(-50%, -1000%);
        -webkit-filter: hue-rotate(720deg);
    }
}
</style>
