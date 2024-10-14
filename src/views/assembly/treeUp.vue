<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      基于el-tree进行的二次封装，实现按钮控制树形排序
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
        <code><</code>template>
          <code><</code>el-tree
            :data="dtoList"
            :props="defaultProps"
            default-expand-all
            node-key="id"
            :expand-on-click-node="false"
            :highlight-current="true"
          >
            <code><</code>span slot-scope="{ node, data }" class="custom-tree-node">
              <!-- 树形左侧label -->
              <code><</code>span>
                <code>{</code><code>{</code> data.name }}
              <code><</code>/span>
              <!-- 树形排序按钮 -->
              <code><</code>span class="btnList">
                <code><</code>el-button type="success" :disabled="isMoveDown(node, data)" size="mini" icon="el-icon-download" @click="moveDown(node, data)" />
                <code><</code>el-button type="primary" :disabled="isMoveUp(node, data)" size="mini" icon="el-icon-upload2" @click="moveUp(node, data)" />
              <code><</code>/span>
            <code><</code>/span>
          <code><</code>/el-tree>
        <code><</code>/template>

        <code><</code>script>
          export default {
            data() {
              return {
                defaultProps: {
                  children: "children",
                  label: "name",
                },
                dtoList:  [
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
            }
            methods: {
              // 上排序按钮是否可以点击
              isMoveUp(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex((d) => d.id === data.id);
                return !(index > 0);
              },
              // 下排序按钮是否可以点击
              isMoveDown(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex((d) => d.id === data.id);
                return !(index < children.length - 1);
              },
              // 上排序
              moveUp(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex((d) => d.id === data.id);
                const movedItem = children.splice(index, 1)[0];
                children.splice(index - 1, 0, movedItem);
                // 解决第一级.setData赋值时的错误提示
                if (!parent.data.children) {
                  parent.data = Object.assign({}, parent.data, {
                    children: children.slice(),
                  });
                } else {
                  parent.setData(
                    Object.assign({}, parent.data, { children: children.slice() })
                  );
                  this.findLevelById(this.dtoList, data.parentId, children.slice());
                }
              },
              // 下排序
              moveDown(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex((d) => d.id === data.id);
                const movedItem = children.splice(index, 1)[0];
                children.splice(index + 1, 0, movedItem);
                // 解决第一级.setData赋值时的错误提示
                if (!parent.data.children) {
                  parent.data = Object.assign({}, parent.data, {
                    children: children.slice(),
                  });
                } else {
                  parent.setData(
                    Object.assign({}, parent.data, { children: children.slice() })
                  );
                  this.findLevelById(this.dtoList, data.parentId, children.slice());
                }
              },
              // 递归处理排序
              findLevelById(tree, targetId, children) {
                let found = false; // 标志，表示是否找到相同的 id
                const recursiveSearch = (items) => {
                  items.forEach((item) => {
                    if (found) {
                      // 如果已经找到相同的 id，直接返回，终止循环
                      return;
                    }
                    if (item.id === targetId) {
                      item.children = children;
                      found = true; // 找到相同的 id，设置标志为 true
                      return;
                    }
                    if (item.children && item.children.length > 0) {
                      recursiveSearch(item.children);
                    }
                  });
                };
                recursiveSearch(tree);
              }
            }
          }
        <code><</code>/script>
        <code><</code>style scoped lang="scss">
          .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            padding-right: 8px;
          }
        <code><</code>/style>
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
