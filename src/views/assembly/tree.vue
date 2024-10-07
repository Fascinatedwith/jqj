<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      基于el-tree进行的二次封装，原版取消某个子级的选中时会导致父级半选中状态，这样是拿不到父级id的。
      此组件实现点击父级全选子级，取消某个子级后，父级不会取消。
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <pre class="pre">
      <code class="code">
        // .vue2文件 可直接复制

        <code><</code>template>
          <code><</code>el-tree
            ref="tree"
            :data="Data"
            show-checkbox
            :default-checked-keys="ids"
            node-key="id"
            highlight-current
            :props="defaultProps"
            :check-strictly="true"
            @check="nodeClick"
          />
        <code><</code>/template>
        <code><</code>script>
        export default {
          data() {
            return {
              Data: [],
              ids: [],
            };
          },
          methods: {
            // 实现权限向下级联
            nodeClick(currentObj, treeStatus) {
              // 用于：父子节点严格互不关联时，父节点勾选变化时通知子节点同步变化，实现单向关联。
              let selected = treeStatus.checkedKeys.indexOf(currentObj.id); // -1未选中,>=0为选中
              // 选中
              if (selected !== -1) {
                // 子节点只要被选中父节点就被选中(需要选中父节点时候调用此方法)
                this.selectedParent(currentObj);
                // 统一处理子节点为相同的勾选状态
                this.uniteChildSame(currentObj, true);
              } else {
                // 未选中 处理子节点全部未选中
                if (currentObj.children && currentObj.children.length !== 0) {
                  this.uniteChildSame(currentObj, false);
                }
              }
            },
            // 统一处理子节点为相同的勾选状态
            uniteChildSame(treeList, isSelected) {
              this.$refs.tree.setChecked(treeList.id, isSelected);
              if (treeList.children) {
                for (let i = 0; i < treeList.children.length; i++) {
                  this.uniteChildSame(treeList.children[i], isSelected);
                }
              }
            },
            // 统一处理父节点为选中
            selectedParent(currentObj) {
              let currentNode = this.$refs.tree.getNode(currentObj);
              if (currentNode.parent.key !== undefined) {
                this.$refs.tree.setChecked(currentNode.parent, true);
                this.selectedParent(currentNode.parent);
              }
            },
          },
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
