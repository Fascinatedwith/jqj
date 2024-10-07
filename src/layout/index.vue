<template>
  <el-container :class="{theme:theme}">
    <!-- 头部导航栏 -->
    <el-header height="60px">
      <div class="header">
        <div class="logo">
          <img src="" alt="">
        </div>
      </div>
    </el-header>
    <div class="container">
      <!-- 左侧菜单 -->
      <el-aside width="250px">
        <!-- 主题切换 -->
        <div class="preference" :class="{preferenceTheme:theme}">
          光明系
          <el-switch
            v-model="switchValue"
            :class="{switchTheme:theme}"
            active-color="#2f2f2f"
            inactive-color="#f1f1f1"
            @change="onSwitch"
          />
          暗黑系
        </div>
        <!-- 分割线 -->
        <div class="br" />

        <!-- 菜单列表 -->
        <div v-for="menuItem in menuList" :key="menuItem.key" class="menu">
          <span class="menu-title" :class="{menuTitleTheme:theme}">{{ menuItem.title }}</span>
          <div v-for="(item,i) in menuItem.children" v-show="menuItem.children && menuItem.children.length" :key="i" :class="{childrenItemTheme:theme , menuAct:item.path==routePath}" class="children-item" @click.stop="$router.push(item.path)">{{ item.meta.title }}</div>
        </div>

      </el-aside>
      <!-- 内容页面路由 -->
      <el-main>
        <router-view />
      </el-main>
    </div>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import { constantRoutes } from '@/router/index'
export default {
  components: {
    // 注册组件
  },
  data() {
    return {
      switchValue: false,
      menuList: [],
      routePath: '/'
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
    this.menuList = constantRoutes
    this.routePath = this.$route.path
  },
  methods: {
    // 事件执行函数
    onSwitch() {
      this.$store.commit('setTheme', this.switchValue)
    }
  }
}
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
}
.theme {
  background-color: #1a1a1a;
}
.header {
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .logo {
    width: 250px;
    height: 100%;
  }
}
.container {
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  transition: all 0.5s;
}
.el-aside {
  height: 100%;
  font-size: 14px !important;
  padding-bottom: 100px;
}

.el-main {
  width: 1150px;
  height: 100%;
  padding: 0 50px 100px 100px;
  .content {
  width: 100%;
}
}
.preference {
  height: 50px;
  width: 220px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #000;
  border-radius: 10px;
}
.preferenceTheme {
  background-color: #242424;
  color: #fff;
}
::v-deep .el-switch__core {
  border: 0.5px solid #ccc !important;
}
::v-deep .el-switch__core:after {
  background-color: #000 !important;
}
.switchTheme ::v-deep  .el-switch__core:after{
  background-color: #fff !important;
}
.br {
  width: 220px;
  height: 1px;
  background-color: #ccc;
  margin-top: 20px;
}
.menu {
  margin-top: 50px;
  .menu-title {
    font-weight: 700;
    color: #000;
    cursor: pointer;
    font-size: 18px;
  }
  .menuTitleTheme {
    color: #fff;
  }
  .children-item {
    font-weight: 700;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
    color: #3c3c3cb3;
  }
  .childrenItemTheme {
    color: #ebebeb99;
  }
  .menuAct {
    color: #42b883;
  }
}
</style>
