(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f546631"],{"43a7":function(n,e,t){"use strict";t.r(e);var d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content",class:{contentTheme:n.theme}},[t("div",{staticClass:"synopsis"},[n._v("简介")]),t("div",{staticClass:"synopsisBox"},[n._v(" 基于el-tree进行的二次封装，实现按钮控制树形排序 ")]),t("div",{staticClass:"br"}),n._m(0)])},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"pre"},[n._v("    "),t("code",{staticClass:"code"},[n._v("\n      "),t("code",[n._v("<")]),n._v("template>\n        "),t("code",[n._v("<")]),n._v('el-tree\n          :data="dtoList"\n          :props="defaultProps"\n          default-expand-all\n          node-key="id"\n          :expand-on-click-node="false"\n          :highlight-current="true"\n        >\n          '),t("code",[n._v("<")]),n._v('span slot-scope="{ node, data }" class="custom-tree-node">\n            '),n._v("\n            "),t("code",[n._v("<")]),n._v("span>\n              "),t("code",[n._v("{")]),t("code",[n._v("{")]),n._v(" data.name }}\n            "),t("code",[n._v("<")]),n._v("/span>\n            "),n._v("\n            "),t("code",[n._v("<")]),n._v('span class="btnList">\n              '),t("code",[n._v("<")]),n._v('el-button type="success" :disabled="isMoveDown(node, data)" size="mini" icon="el-icon-download" @click="moveDown(node, data)" />\n              '),t("code",[n._v("<")]),n._v('el-button type="primary" :disabled="isMoveUp(node, data)" size="mini" icon="el-icon-upload2" @click="moveUp(node, data)" />\n            '),t("code",[n._v("<")]),n._v("/span>\n          "),t("code",[n._v("<")]),n._v("/span>\n        "),t("code",[n._v("<")]),n._v("/el-tree>\n      "),t("code",[n._v("<")]),n._v("/template>\n\n      "),t("code",[n._v("<")]),n._v("script>\n        export default {\n          data() {\n            return {\n              defaultProps: {\n                children: \"children\",\n                label: \"name\",\n              },\n              dtoList:  [\n                {\n                  id: '1',\n                  date: '2016-05-02',\n                  name: '王小虎1',\n                  address: '上海市普陀区金沙江路 100 弄'\n                },\n                {\n                  id: '2',\n                  date: '2016-05-04',\n                  name: '王小虎2',\n                  address: '上海市普陀区金沙江路 200 弄'\n                },\n                {\n                  id: '3',\n                  date: '2016-05-01',\n                  name: '王小虎3',\n                  address: '上海市普陀区金沙江路 300 弄'\n                },\n                {\n                  id: '4',\n                  date: '2016-05-03',\n                  name: '王小虎4',\n                  address: '上海市普陀区金沙江路 400 弄'\n                }\n              ]\n            }\n          }\n          methods: {\n            // 上排序按钮是否可以点击\n            isMoveUp(node, data) {\n              const parent = node.parent;\n              const children = parent.data.children || parent.data;\n              const index = children.findIndex((d) => d.id === data.id);\n              return !(index > 0);\n            },\n            // 下排序按钮是否可以点击\n            isMoveDown(node, data) {\n              const parent = node.parent;\n              const children = parent.data.children || parent.data;\n              const index = children.findIndex((d) => d.id === data.id);\n              return !(index < children.length - 1);\n            },\n            // 上排序\n            moveUp(node, data) {\n              const parent = node.parent;\n              const children = parent.data.children || parent.data;\n              const index = children.findIndex((d) => d.id === data.id);\n              const movedItem = children.splice(index, 1)[0];\n              children.splice(index - 1, 0, movedItem);\n              // 解决第一级.setData赋值时的错误提示\n              if (!parent.data.children) {\n                parent.data = Object.assign({}, parent.data, {\n                  children: children.slice(),\n                });\n              } else {\n                parent.setData(\n                  Object.assign({}, parent.data, { children: children.slice() })\n                );\n                this.findLevelById(this.dtoList, data.parentId, children.slice());\n              }\n            },\n            // 下排序\n            moveDown(node, data) {\n              const parent = node.parent;\n              const children = parent.data.children || parent.data;\n              const index = children.findIndex((d) => d.id === data.id);\n              const movedItem = children.splice(index, 1)[0];\n              children.splice(index + 1, 0, movedItem);\n              // 解决第一级.setData赋值时的错误提示\n              if (!parent.data.children) {\n                parent.data = Object.assign({}, parent.data, {\n                  children: children.slice(),\n                });\n              } else {\n                parent.setData(\n                  Object.assign({}, parent.data, { children: children.slice() })\n                );\n                this.findLevelById(this.dtoList, data.parentId, children.slice());\n              }\n            },\n            // 递归处理排序\n            findLevelById(tree, targetId, children) {\n              let found = false; // 标志，表示是否找到相同的 id\n              const recursiveSearch = (items) => {\n                items.forEach((item) => {\n                  if (found) {\n                    // 如果已经找到相同的 id，直接返回，终止循环\n                    return;\n                  }\n                  if (item.id === targetId) {\n                    item.children = children;\n                    found = true; // 找到相同的 id，设置标志为 true\n                    return;\n                  }\n                  if (item.children && item.children.length > 0) {\n                    recursiveSearch(item.children);\n                  }\n                });\n              };\n              recursiveSearch(tree);\n            }\n          }\n        }\n      "),t("code",[n._v("<")]),n._v("/script>\n      "),t("code",[n._v("<")]),n._v('style scoped lang="scss">\n        .custom-tree-node {\n          flex: 1;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          font-size: 14px;\n          padding-right: 8px;\n        }\n      '),t("code",[n._v("<")]),n._v("/style>\n    ")]),n._v("\n  ")])}],i=t("5530"),c=t("2f62"),s={components:{},data:function(){return{}},computed:Object(i["a"])({},Object(c["b"])(["theme"])),created:function(){},mounted:function(){},methods:{}},r=s,o=(t("a33f"),t("2877")),l=Object(o["a"])(r,d,a,!1,null,"5c3af282",null);e["default"]=l.exports},a33f:function(n,e,t){"use strict";t("d4d6")},d4d6:function(n,e,t){}}]);