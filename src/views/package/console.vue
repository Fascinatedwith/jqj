<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      控制台个性化打印
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
        // 美化打印实现方法
        const prettyLog = () => {
          const isEmpty = (value: any) => {
            return value == null || value === undefined || value === ''
          }
          const prettyPrint = (title: string, text: string, color: string) => {
            console.log(
              `%c ${title} %c ${text} %c`,
              `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
              `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
              'background:transparent'
            )
          }
          // 基础信息打印
          const info = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Info' : textOrTitle
            const text = isEmpty(content) ? textOrTitle : content
            prettyPrint(title, text, '#909399')
          }
          const error = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Error' : textOrTitle
            const text = isEmpty(content) ? textOrTitle : content
            prettyPrint(title, text, '#F56C6C')
          }
          const warning = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Warning' : textOrTitle
            const text = isEmpty(content) ? textOrTitle : content
            prettyPrint(title, text, '#E6A23C')
          }
          const success = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Success ' : textOrTitle
            const text = isEmpty(content) ? textOrTitle : content
            prettyPrint(title, text, '#67C23A')
          }
          const picture = (url: string, scale = 1) => {
            const img = new Image()
            img.crossOrigin = 'anonymous'
            img.onload = () => {
              const c = document.createElement('canvas')
              const ctx = c.getContext('2d')
              if (ctx) {
                c.width = img.width
                c.height = img.height
                ctx.fillStyle = 'red'
                ctx.fillRect(0, 0, c.width, c.height)
                ctx.drawImage(img, 0, 0)
                const dataUri = c.toDataURL('image/png')

                console.log(
                  `%c sup?`,
                  `font-size: 1px;
                        padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
                        background-image: url(${dataUri});
                        background-repeat: no-repeat;
                        background-size: ${img.width * scale}px ${img.height * scale}px;
                        color: transparent;
                        `
                )
              }
            }
            img.src = url
          }
          return {
            info,
            error,
            warning,
            success,
            picture
          }
        }

        // 创建打印对象
        const log = prettyLog()

        log.error('奥德彪', '前方的路看似很危险,实际一点也不安全。')

        log.error('奥德彪', '出来的时候穷 生活总是让我穷 所以现在还是穷。')

        log.warning('奥德彪', '我并非无路可走 我还有死路一条! ')

        log.success('奥德彪', '钱没了可以再赚，良心没了便可以赚的更多。 ')

        log.picture(
          'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0514%2Fd0ea93ebj00sdgx56001xd200u000gtg00hz00a2.jpg&thumbnail=660x2147483647&quality=80&type=jpg'
        )
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
