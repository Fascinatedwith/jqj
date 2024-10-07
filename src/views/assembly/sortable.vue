<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      列表的拖拽排序，分为el-table的拖拽排序 和 普通列表的拖拽排序
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">基于el-table的拖拽排序</h3>
    <pre class="pre">
      <code class="code">
        // 1. 首先下载第三方包
        npm install sortablejs
        // 2. 在需要的页面进行引入
        import Sortable from 'sortablejs'

        // 行列同时支持拖拽
        <code><</code>template>
          <code><</code>el-table :data="tableData" border>
            <code><</code>el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="item.prop" :label="item.label" />
          <code><</code>/el-table>
        <code><</code>/template>

        <code><</code>script>
          export default {
            data() {
              return {
                col: [
                  {
                    label: '日期',
                    prop: 'date'
                  },
                  {
                    label: '姓名',
                    prop: 'name'
                  },
                  {
                    label: '地址',
                    prop: 'address'
                  }
                ],
                tableData: [
                  {
                    id: '1',
                    date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 100 弄'
                  },
                  {
                    id: '2',
                    date: '2016-05-04',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 200 弄'
                  },
                  {
                    id: '3',
                    date: '2016-05-01',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 300 弄'
                  },
                  {
                    id: '4',
                    date: '2016-05-03',
                    name: '王小虎4',
                    address: '上海市普陀区金沙江路 400 弄'
                  }
                ]
              }
            },
            mounted() {
              // 阻止默认行为
              document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
              };
              this.rowDrop()//行拖拽
              this.columnDrop()//列拖拽
            },
            methods: {
              //行拖拽
              rowDrop() {
                const tbody = document.querySelector('.el-table__body-wrapper tbody')
                const _this = this
                Sortable.create(tbody, {
                  // 只能通过拖拽icon进行排序
                  handle: '.drag-icon',  // 此处是icon图标的class名
                  onEnd({ newIndex, oldIndex }) {
                    if (newIndex == oldIndex) return
                    _this.tableData.splice(
                      newIndex,
                      0,
                      _this.tableData.splice(oldIndex, 1)[0]
                    )
                    var newArray = _this.tableData.slice(0)
                    _this.tableData = []
                    _this.$nextTick(function() {
                      _this.tableData = newArray
                    })
                  }
                })
              },
              //列拖拽
              columnDrop() {
                const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
                this.sortable = Sortable.create(wrapperTr, {
                  animation: 180,
                  delay: 0,
                  onEnd: evt => {
                    const oldItem = this.dropCol[evt.oldIndex]
                    this.dropCol.splice(evt.oldIndex, 1)
                    this.dropCol.splice(evt.newIndex, 0, oldItem)
                  }
                })
              }
            }
          }
        <code><</code>/script>
      </code>
    </pre>

    <h3 style="margin: 20px 0;">普通列表的拖拽排序</h3>
    <pre class="pre">
      <code class="code">
        // 1. 首先下载第三方包
        npm install sortablejs
        // 2. 在需要的页面进行引入
        import Sortable from 'sortablejs'

        // 行列同时支持拖拽
        <code><</code>template>
          <code><</code>div>
            <code><</code>ul id="items">
              <code><</code>li v-for="item in listData" :key="item.id">
                <code>{</code><code>{</code> item.name }}
              <code><</code>/li>
            <code><</code>/ul>
          <code><</code>/div>
        <code><</code>/template>

        <code><</code>script>
          export default {
            data() {
              return {
                listData:[
                  {
                    id:1,
                    name:'数据一'
                  },
                  {
                    id:2,
                    name:'数据二'
                  },
                  {
                    id:3,
                    name:'数据三'
                  },
                  {
                    id:4,
                    name:'数据四'
                  }
                ]
              }
            },
            mounted() {
              // 阻止默认行为
              document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
              };
              this.rowDrop()//行拖拽
            },
            methods: {
              //行拖拽
              rowDrop() {
                const tbody = document.getElementById('items')
                const that = this
                Sortable.create(tbody, {
                  // 只能通过拖拽icon进行排序
                  handle: '.drag-icon', // 此处是icon图标的class名
                  onEnd: function(evt) {
                    // 获取排序之后的data数据
                    that.listData.splice(evt.newIndex, 0, that.listData.splice(evt.oldIndex, 1)[0])
                    var newArray = that.listData.slice(0)
                    that.listData = []
                    that.$nextTick(function() {
                      that.listData = newArray
                    })
                  }
                })
              }
            }
          }
        <code><</code>/script>
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
