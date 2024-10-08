<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      HTML的常用基本标签
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 块级标签 独占一行</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>div><code><</code>/div>  // 常用标签

        <code><</code>h1><code><</code>/h1>  // 自带字体大小 h1 - h5 常用于标题

        <code><</code>ul> // ul是无序列表 ul里只能写li标签
          <code><</code>li><code><</code>/li>  // 无序列表项 开头自带实心圆样式
        <code><</code>/ul>

        <code><</code>ol> // ol是有序列表 ul里只能写li标签
          <code><</code>li><code><</code>/li>  // 有序列表项 开头自带数字序号
        <code><</code>/ol>

        <code><</code>p><code><</code>/p> // 段落标签 自带边距
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 行内块标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>span><code><</code>/span> // 常用的行内块标签

        <code><</code>img src="图片地址" alt="图片损坏替换文本" title="图片提示文本"> // 图片标签

        <code><</code>b><code><</code>/b> / <code><</code>strong><code><</code>/strong>  // 字体加粗标签

        <code><</code>i><code><</code>/i> / <code><</code>em><code><</code>/em>  // 字体倾斜标签

        <code><</code>s><code><</code>/s> / <code><</code>del><code><</code>/del>  // 字体删除线标签

        <code><</code>u><code><</code>/u> / <code><</code>ins><code><</code>/ins>  // 字体下划线标签
      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 表格标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>table>  // 表格标签
          <code><</code>th>  // 表格中的第一行，内容文字会加粗
            <code><</code>td><code><</code>/td>  // 每一行中的每一格
          <code><</code>/th>
          <code><</code>tr>  // 表格中的每一行
            <code><</code>td><code><</code>/td>  // 每一行中的每一格
          <code><</code>/tr>
        <code><</code>/table>

        // 表格结构标签，起到收纳作用
        <code><</code>thead><code><</code>/thead>  // 用于包裹表格的头部
        <code><</code>tbody><code><</code>/tbody>  // 用于包裹表格的主体
        <code><</code>tfoot><code><</code>/tfoot>  // 用于包裹表格的底部

        // 表格的行内样式
        align="" // 对齐方式
        border="1" // 单元格边框厚度
        cellpadding=""  // 单元格边框与其内容之间的距离
        cellspacing=""  // 单元格之间的距离
        width=""  // 宽度
        height=""  // 高度
        border-collapse:collapse;  // css样式 ， 合并相邻边框
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. input标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>input type="text">   // 文本框
        <code><</code>input type="password">   // 密码框
        <code><</code>input type="range">  // 进度条
        <code><</code>input type="search">  // 搜索框
        <code><</code>input type="tel">   // 手机号码框
        <code><</code>input type="color">   // 颜色选择框
        <code><</code>input type="email">   //  邮箱框
        <code><</code>input type="url">   // 网页地址框
        <code><</code>input type="date">   // 日期框
        <code><</code>input type="time">   // 时间框
        <code><</code>input type="radio">   // 单选按钮框
        <code><</code>input type="checkbox">   // 多选按钮框
        <code><</code>input type="hidden">   // 隐藏域
        <code><</code>input type="file">   // 文件域
        <code><</code>input type="submit">   // 提交按钮
        <code><</code>input type="reset">   // 重置按钮
        <code><</code>input type="button"><code><</code>/input>   // 普通按钮
        <code><</code>input type="textarea"><code><</code>/input>   // 大文本框
        <code><</code>label> <code><</code>input type="radio"> 文字<code><</code>/label>  // 包裹标签 常用于包裹单选按钮，作用为点文字时可选中按钮

        // 行内属性
        placeholder="" // 标签内提示文本
        checked="checked" // 默认选中
        name="" // 元素名字 *必须有相同的name名字才能实现多选一
        value="" // 数值信息
        maxlength="" // 最大输入几个字符
        multiple="multiple" // 上传多个文件 只作用于文件域
        readonly // 文本只读 不能修改
        autocomplete="off" // 不记录输入过的内容
        disabled="disabled" // input框不可编辑
        min="" max="" value="" step="" // 只用于进度条 最大 最小 值 步长
      </code>
    </pre>

    <h3 style="margin: 20px 0;">5. 下拉标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>select name="" id="">
          <code><</code>option selected="selected" value=""><code><</code>/option>
        <code><</code>/select>
        // selected="selected" 默认显示这个标签项
      </code>
    </pre>

    <h3 style="margin: 20px 0;">6. 视频/音频标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>audio src=""><code><</code>/audio>  // 音频标签
        <code><</code>video src=""><code><</code>/video>  // 视频标签
        // 行内样式
        loop="loop" // 无限循环播放
        autoplay="autoplay"  // 自动播放
        muted="muted"  // 静音播放
        controls="controls"  // 显示播放控件
      </code>
    </pre>

    <h3 style="margin: 20px 0;">7. 语义化标签</h3>
    <pre class="pre">
      <code class="code">
        <code><</code>header><code><</code>/header>  // 头部标签
        <code><</code>nav><code><</code>/nav>  // 导航栏标签
        <code><</code>article><code><</code>/article>  // 左侧盒子标签
        <code><</code>section><code><</code>/section>  // 左侧盒子内容标签
        <code><</code>aside><code><</code>/aside>  // 右侧盒子标签
        <code><</code>footer><code><</code>/footer>  // 底部标签
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
