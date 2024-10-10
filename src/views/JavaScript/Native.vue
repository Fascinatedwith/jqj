<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      原生javascript的操作
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. DOM操作之获取元素</h3>
    <pre class="pre">
      <code class="code">
        /* 根据ID获取 */
        document.getElementById("id")   /* 返回值：元素对象 或 null */

        /* 根据标签名获取 */
        document.getElementsByTagName('标签名')   /* 返回值：元素对象集合（伪数组） */

        /* 根据类名获取 */
        document.getElementsByClassName('类名')   /* 返回值：元素对象集合（伪数组） */

        /* 根据指定选择器获取单个元素 (如果重复，只获取第一个) */
        document.querySelector('.类名 或 标签名 或 #id')   /* 返回值：元素对象 或 null */

        /* 根据指定选择器获取全部元素 */
        document.querySelectorAll('.类名 或 标签名')   /* 返回值：元素对象集合（伪数组） */

        /* 获取 body */
        document.body

        /* 获取 html */
        document.documentElement

        /* 通过子元素获取父元素 */
        document.querySelector('子元素').parentNode   /* 返回值：元素对象 或 null */

        /* 通过父元素获取子元素 */
        document.querySelector('父元素').children   /* 返回值：元素对象集合（伪数组） */

        /* 通过元素获取下一个兄弟元素 */
        document.querySelector('元素').nextSibling    /* 下一个兄弟节点 包含元素 文字节点 */
        document.querySelector('元素').nextElementSibling    /* 下一个兄弟元素节点 */

        /* 通过元素获取上一个兄弟元素 */
        document.querySelector('元素').previousSibling    /* 上一个兄弟节点 包含元素 文字节点 */
        document.querySelector('元素').previousElementSibling   /* 上一个兄弟元素节点 */
      </code>
    </pre>

    <h3 style="margin: 20px 0;">1. DOM操作之操作元素</h3>
    <pre class="pre">
      <code class="code">
        /* 改变元素内容 */
        元素.innerHTML = ""
        元素.innerText = ""

        /* 改变元素类名 */
        元素.className = ""

        /* 改变元素样式 */
        元素.style.样式名 = ""

        /* 改变img图片 */
        元素.src = ""
        元素.title = ""
        元素.alt = ""

        /* 增加类名 */
        元素.className = "旧类名 新类名"

        /* 音视频加载播放暂停 */
        元素.load    /* 音视频加载 */
        元素.play()   /* 音视频播放 */
        元素.pause()  /* 音视频暂停 */

        /* 增加元素的自定义属性 */
        元素.setAttribute('属性名',属性值)

        /* 获取元素的自定义属性 */
        元素.getAttribute('属性名')

        /* 创建元素 两种方法 */
        var 元素名 = document.createElement('标签名')
        元素.innerHTML = "<code><</code>a href="#"><code><</code>/a>"

        /* 插入元素到第几位 */
        添加到的元素.insertBefore(创建标签的元素名, 添加到谁的名.children[索引号])
        var lili = document.createElement('li')   // 1. 创建元素
        ul.insertBefore(lili,ul.children[索引号])  // 1. 将元素添加到ul里第几位

        /* 插入元素到最后一位 */
        添加到谁的名.appendChild(创建标签的元素名)
        var lili = document.createElement('li')   // 1. 创建元素
        ul.appendChild(lili)  // 1. 将元素添加到ul里最后

        /* 插入元素 */
        var li = document.createElement('li')   // 1. 创建元素
        ul.insertAdjacentHTML('beforebegin', li);  // 插入到ul自身的前一位
        ul.insertAdjacentHTML('afterbegin', li);  // 插入到ul里的第一位，不会替换掉原第一个元素
        ul.insertAdjacentHTML('beforeend', li);  // 插入到ul里的最后一位，不会替换掉原最后一个元素
        ul.insertAdjacentHTML('afterend', li);  // 插入到ul自身的后一位

        /* 删除某个元素 */
        ul.removeChild(ul.children[0])  // 删除ul里的第一个孩子

        /* 删除所有元素 */
        ul.remove()

        /* 删除所有元素 */
        ul.remove()

        /* 复制元素 */
        var lili = ul.children[0].cloneNode(true)   //复制ul里的第一个
        * 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
        * 括号为true 深拷贝 复制标签并复制里面的内容
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 传统的鼠标事件</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取到元素 */

        /* 获得焦点事件 onfocus */
        元素.onfocus = function() { }

        /* 失去焦点事件 onblur */
        元素.onblur = function() { }

        /* 鼠标点击事件 onclick */
        元素.onclick = function() { }

        /* 鼠标双击事件 ondblclick */
        元素.ondblclick = function() { }

        /* 鼠标移动事件 onmousemove */
        元素.onmousemove = function() { }

        /* 鼠标弹起事件 onmouseup  */
        元素.onmouseup  = function() { }

        /* 鼠标按下事件 onmousedown  */
        元素.onmousedown  = function() { }

        /* 鼠标经过事件 onmouseover 会有事件冒泡  */
        元素.onmouseover  = function() { }

        /* 鼠标经过事件 onmouseenter 没有事件冒泡  */
        元素.onmouseenter  = function() { }

        /* 鼠标离开事件 onmouseout 会有事件冒泡 */
        元素.onmouseout  = function() { }

        /* 鼠标离开事件 onmouseleave 没有事件冒泡  */
        元素.onmouseleave  = function() { }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 监听式鼠标事件</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取到元素 */

        /* 获得焦点事件 focus */
        元素.addEventListener('focus', function (){ })

        /* 失去焦点事件 blur */
        元素.addEventListener('blur', function (){ })

        /* 鼠标点击事件 click */
        元素.addEventListener('click', function (){ })

        /* 鼠标双击事件 dblclick */
        元素.addEventListener('dblclick', function (){ })

        /* 鼠标移动事件 mousemove */
        元素.addEventListener('mousemove', function (){ })

        /* 鼠标弹起事件 mouseup  */
        元素.addEventListener('mouseup', function (){ })

        /* 鼠标按下事件 mousedown  */
        元素.addEventListener('mousedown', function (){ })

        /* 鼠标经过事件 mouseover 会有事件冒泡  */
        元素.addEventListener('mouseover', function (){ })

        /* 鼠标经过事件 mouseenter 没有事件冒泡  */
        元素.addEventListener('mouseenter', function (){ })

        /* 鼠标离开事件 mouseout 会有事件冒泡 */
        元素.addEventListener('mouseout', function (){ })

        /* 鼠标离开事件 mouseleave 没有事件冒泡  */
        元素.addEventListener('mouseleave', function (){ })

        /* 禁用右键菜单 contextmenu  */
        元素.addEventListener('contextmenu', function (e){ e.preventDefault() })

        /* 禁止选中文字 selectstart  */
        元素.addEventListener('selectstart', function (e){ e.preventDefault() })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 传统的键盘事件</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取到元素 一般给body绑定事件 */

        /* 按键弹起的时候触发 onkeyup */
        document.onkeyup = function() { }

        /* 按键按下的时候触发 onkeydown */
        document.onkeydown = function() { }

        /* 按键按下的时候触发 onkeypress  *不能识别功能键 比如 ctrl shift 左右箭头 */
        document.onkeypress = function() { }
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. 监听式键盘事件</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取到元素 一般给body绑定事件 */

        /* 按键弹起的时候触发 keyup */
        document.addEventListener('keyup', function (){ })

        /* 按键按下的时候触发 keydown */
        document.addEventListener('keydown', function (){ })

        /* 按键按下的时候触发 keypress  *不能识别功能键 比如 ctrl shift 左右箭头 */
        document.addEventListener('keypress', function (){ })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">6. 事件解绑</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取到元素 */

        /* 传统事件解绑 */
        元素.事件 = null

        /* 监听式事件解绑  只有将事件执行函数分开写的时候才能解绑事件 */
        元素.removeEventListener('事件', 函数名);

      </code>
    </pre>

    <h3 style="margin: 20px 0;">7. 事件委托</h3>
    <pre class="pre">
      <code class="code">
        /* 先获取元素 */

        /* 事件委托 */
        元素.on('click', function () { })

      </code>
    </pre>

    <h3 style="margin: 20px 0;">8. 事件对象 e</h3>
    <pre class="pre">
      <code class="code">
        元素.onclick = function(e) {
          console.log(e);          /* 事件对象 */
          console.log(e.target);   /* 谁触发的这个事件 */
          console.log(e.target.nodeName);   /* 触发这个事件的标签字母 大写 */
          console.log(e.type);   /* 事件类型 */
          e.preventDefault()   /* 阻止默认行为 */
          e.stopPropagation()  /* 阻止冒泡 */
        }

      </code>
    </pre>

    <h3 style="margin: 20px 0;">9. 鼠标事件对象</h3>
    <pre class="pre">
      <code class="code">
          document.addEventListener('click', function(e) {
            // 1. client 鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('---------------------');

            // 2. page 鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
            console.log('---------------------');

            // 3. screen 鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);
          })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">10. 键盘事件对象</h3>
    <pre class="pre">
      <code class="code">
        document.addEventListener('keyup', function(e) {
            console.log(e.key)  // 用户按下哪个键
            console.log(e.keyCode) // keycode返回的ASCII码值来判断用户按下了那个键
        })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">11. 窗口事件</h3>
    <pre class="pre">
      <code class="code">
        /* 窗口加载事件 */
        window.onload = function(){ }

        /* 窗口加载事件 仅当DOM加载完成，不包括样式表，图片，flash等等。就可以触发 */
        document.addEventListener('DOMContentLoaded', function() { })

        /* 调整窗口大小事件 */
        window.onresize = function(){ }

        /* 当前屏幕的宽度 */
        var w = window.innerWidth

        /* 当前屏幕的宽度 */
        var w = window.innerWidth
      </code>
    </pre>

    <h3 style="margin: 20px 0;">12. 元素偏移量 offset 系列</h3>
    <pre class="pre">
      <code class="code">
        /* 返回元素相对带有定位的父盒子上方的距离 */
        var p = 元素.offsetTop

        /* 返回元素相对带有定位的父盒子左侧的距离 */
        var p = 元素.offsetLeft

        /* 返回元素的宽度 *包含边框宽度和内边距 */
        var p = 元素.offsetWidth

        /* 返回元素的高度 *包含边框宽度和内边距 */
        var p = 元素.offsetHeight

        /* 返回元素的带有定位的父亲 否则返回的是body */
        var p = 元素.offsetParent

        /* 返回父亲 是最近一级的父亲 不管有没有定位 */
        var p = 元素.parentNode
      </code>
    </pre>

    <h3 style="margin: 20px 0;">13. 元素可视区 client 系列</h3>
    <pre class="pre">
      <code class="code">
        /* 返回元素的宽度 *包含内边距 *但不包含边框 */
        var p = 元素.clientWidth

        /* 返回元素的高度 *包含内边距 *但不包含边框 */
        var p = 元素.clientHeight

        /* 返回上边框的宽度 */
        var p = 元素.clientTop

        /* 返回左边框的宽度 */
        var p = 元素.clientLeft
      </code>
    </pre>

    <h3 style="margin: 20px 0;">14. 元素滚动 scroll 系列</h3>
    <pre class="pre">
      <code class="code">
        /* 返回元素实际的高度 *包含内边距 *但不包含边框 */
        var p = 元素.scrollHeight

        /* 返回元素实际的宽度 *包含内边距 *但不包含边框 */
        var p = 元素.scrollWidth

        /* 返回盒子被卷去的上侧距离 */
        var p = 元素.scrolltop

        /* 返回盒子被卷去的左侧距离 */
        var p = 元素.scrollLeft

        /* 返回页面被卷去的上侧距离 */
        var p = window.pageYOffset

        /* 返回页面被卷去的左侧距离 */
        var p = window.pageXOffset
      </code>
    </pre>

    <h3 style="margin: 20px 0;">15. 自执行函数</h3>
    <pre class="pre">
      <code class="code">
        (function(){ })();

        (function a (){ }())
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
