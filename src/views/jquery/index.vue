<template>
  <div class="content" :class="{ contentTheme: theme }">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      jquery的基本使用
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. jQuery 对象和 DOM 对象转换</h3>
    <pre class="pre">
      <code class="code">
        /* 用$直接获取的就是jQuery 对象  */
        $('video')[0]       *jQuery 对象转换成DOM 对象

        $('video').get(0)       *jQuery 对象转换成DOM 对象
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. jQuery选择器</h3>
    <pre class="pre">
      <code class="code">
        /* 基础选择器  */
        $('#id')        获取指定id的元素
        $('*')            获取所有
        $('.class')      获取class类名的元素
        $('div')           获取所有div
        $('div,p,li')       选取多个元素
        $('li.current')       交集元素

        /* 层级选择器  */
        $('ul>li')      获取亲儿子层级的元素
        $('ul li')      获取 后代所有的li   包括孙子
        $("ul[属性='属性值']")   根据孩子属性获取

        /* 筛选选择器  */
        $("ul li:first")         获取第一个li
        $("ul li:last")          获取最后一个
        $("ul li:eq(索引号)")         获取索引号的那个li
        $("ul li:odd")          获取索引号为奇数的li
        $("ul li:even")         获取索引号为偶数的li

        /* 层级筛选  */
        $("li").parent()        查找父级
        $("li").parents('名字')        查找父及以上 祖先级  需要写要找的元素名
        $('ul').children('li')       查找最近一级的儿子     相当于子代选择器
        $('li').find('div')       查找所有div后代    相当于后代选择器
        $("ul .item").siblings("li")      查找除了自身元素之外的所有亲兄弟
        $('li').eq(2)       查找索引号为的那个li
        $(".类名").nextAll( )         查找当前元素之后的所有同辈
        $(".类名").prevAll( )        查找当前元素之前的所有同辈
        $("div").hasClass("current")      检查这个元素有没有 这个类名，有则返回true
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 隐式迭代（添加css）</h3>
    <pre class="pre">
      <code class="code">
        /* *隐式迭代就是把匹配的所有元素都添加这个css样式 可写多个样式用，分隔 */
        $("div").css("background": "pink");
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 类名操作</h3>
    <pre class="pre">
      <code class="code">
        $(this).index()     获取索引号
        $("div").addClass("current");      添加类名
        $("div").removeClass("current");      删除类名
        $("div").toggleClass("current");      切换类名
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. 动画效果</h3>
    <pre class="pre">
      <code class="code">
        $('div').hide()      隐藏
        $('div').show()     显示
        $('video')[0].play()     自动播放
        $('div').toggle()    切换
        $('div').fadeIn(1000)    淡入
        $('div').fadeOut(1000)    淡出
        $('div').fadeToggle(1000)    淡入淡出切换
        $('div').fadeTo(1000, 0.5)    修改透明度   //  fadeTo() 这个速度和透明度要必须写

        /* 自定义动画 .animate({ }) */
        $(function() {
          $("button").click(function() {
            $("div").animate({
              left: 500,
              opacity: .5,
              width: 500,
            }, 10000);
          })
        })

        /* 停止动画排队 .stop( ) */
        $(".nav>li").hover(function() {
            // stop 方法必须写到动画的前面
            $(this).children("ul").stop().slideToggle();
        });
      </code>
    </pre>

    <h3 style="margin: 20px 0;">6. 属性操作</h3>
    <pre class="pre">
      <code class="code">
        /* 获取固有属性 */
        $("a").prop('属性名')          获取属性值
        $("a").prop('属性名','属性值')        更改属性值

        /* 获取自定义属性 */
        $("div").attr('属性名')            获取属性值
        $("div").attr('属性名','属性值')            更改属性值

        /* 数据缓存 */
        $("span").data('属性名','属性值')         附加数据
        $("span").data('属性名')          获取数据
        $("div").data("index")     //这个方法获取data-index h5自定义属性 不用写data- 而且返回的是数字型

      </code>
    </pre>

    <h3 style="margin: 20px 0;">7. 内容操作</h3>
    <pre class="pre">
      <code class="code">
        /* 获取元素内容 */
        $("div").html()      //  对应JS中的 innerHTML

        /* 设置元素内容 */
        $("div").html('内容')

        /* 获取元素文本内容 */
        $("div").text()      // 对应JS中的 innerText

         /* 设置元素文本内容 */
        $("div").text('内容')

        $("div").val()   对应JS中的  value
      </code>
    </pre>

    <h3 style="margin: 20px 0;">8. 遍历方法</h3>
    <pre class="pre">
      <code class="code">
        /* 遍历  .each() */
        $.each(arr, function(i, ele) {    // 遍历数组
          console.log(i); // 索引
          console.log(ele);  // 值
        })

        $.each({    // 遍历对象
          name: "andy",
          age: 18
        }, function(i, ele) {
          console.log(i); // 输出的是 name age 属性名
          console.log(ele); // 输出的是 andy  18 属性值
        })
      </code>
    </pre>

    <h3 style="margin: 20px 0;">9. 元素操作</h3>
    <pre class="pre">
      <code class="code">
        /* 创建元素 */
        var li = $("< li>我是后来创建的li < /li>");
        var div = $("< div>我是外部的< /div>");

        /* 添加元素 - 内部添加 */
        $("ul").append(li);  // 内部添加并且放到内容的最后面
        $("ul").prepend(li); // 内部添加并且放到内容的最前面

        /* 添加元素 - 外部添加 */
        $(".test").after(div);    // 外部添加放到目标的后面
        $(".test").before(div);   // 外部添加放到目标的前面

        /* 删除元素 */
        $("ul").remove();   //可以删除匹配的元素 自杀
        $("ul").empty();    // 可以删除匹配的元素里面的子节点 孩子
        $("ul").html("");   // 可以删除元素里面的所有
      </code>
    </pre>

    <h3 style="margin: 20px 0;">10. 尺寸操作</h3>
    <pre class="pre">
      <code class="code">
        /* 获取设置元素 width和height大小 */
        $("div").width()
        $("div").height()

        /* 获取设置元素 width和height + padding大小 */
        $("div").innerWidth()
        $("div").innerHeight()

        /* 获取设置元素 width和height + padding + border大小 */
        $("div").outerWidth()
        $("div").outerHeight()
      </code>
    </pre>

    <h3 style="margin: 20px 0;">11. 位置操作</h3>
    <pre class="pre">
      <code class="code">
        /* 返回相对于文档的距离 .offset() */
        console.log($('.son').offset());  // 返回一个对象 距离文档页面的距离
        console.log($('.son').offset().top);  // 返回距离文档的距离
        $('.son').offset({  // 可以更改距离
          top:500,
          left:500
        })

        /* 返回相对于有定位的父元素的距离 .position() */
        console.log($('.son').position())
        // 如果找不到有定位的父元素 则相对于文档， *不可更改

        /* 页面被卷去的顶部距离 .scrollTop()  */
        $(document).scrollTop()

        /* 页面被卷去的左侧距离 .scrollLeft()  */
        $(document).scrollLeft()
      </code>
    </pre>

    <h3 style="margin: 20px 0;">12. 事件操作</h3>
    <pre class="pre">
      <code class="code">
        /* on 绑定多个事件 */
        $('div').on({
          click: function () {
            $(this).css('background', 'orange')
          },
          mouseenter: function () {
            $(this).css('background', 'purple')
          },
          mouseleave: function () {
            $(this).css('background', 'blue')
          }
        })

        /* one 绑定事件  * 只触发一次 */
        $("p").one("click", function() {
          alert(11);
        })

        /* on 事件委托  给未来动态元素绑定事件 */
        //click 是绑定在ol 身上的，但是 触发的对象是 ol 里面的小li
        $('ol').on('click', 'li', function () {
          console.log(22);
        })

        /* 事件解绑 */
        $('div').off( )      *解绑全部事件
        $('div').off('click')       *只解绑点击事件
        $('ul').off('click','li')      *解绑事件委托

        /* 触发元素事件 */
        $("div").click(); // 会触发元素的默认行为
        $("div").trigger("click"); // 会触发元素的默认行为
        $("a").triggerHandler("click");  // 就是不会触发元素的默认行为

        /* 事件对象 e */
        e.stopPropagation()      // 阻止冒泡
        e.preventDefault()        // 阻止默认行为
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
    background-color: #f9f9f9;
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
      background: linear-gradient(90deg, #ffc700 0%, #e91e1e 33%, #ac61ee 66%, #00ff88 100%);
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
    background-color: #242424;
  }

  .pre {
    background-color: #242424;
  }
}
</style>
