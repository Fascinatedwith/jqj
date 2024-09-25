<template>
  <div class="navbar">
    <!-- 导航栏点击的组件 -->
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- 导航栏文字的组件 -->
    <Header class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- 头像 -->
          <el-avatar :size="40" :src="staffPhoto">
            <img src="@/assets/common/bigUserHeader.png">
          </el-avatar>
          <!-- 名字 -->
          <span class="name">{{ name }}</span>
          <!-- 导航栏右上角下拉框按钮 -->
          <i class="el-icon-caret-bottom" />
        </div>
        <!-- 导航栏右上角下拉框内容 -->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/header'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Header,
    Hamburger
  },
  data() {
    return {

    }
  },
  created() {

  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters([
      'sidebar',
      'staffPhoto',
      'name'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    // 退出删除用户信息
    async logout() {
      await this.$store.dispatch('user/logout')
      // 清空用户所拥有的权限缓存
      this.$store.commit('permission/delRouters', [])
      // 跳转回登录页
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  // background: #ff770e;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background: linear-gradient(45deg, #f23f71 0%, #8ec5fc 33%, #e0c3fc 100%);

  .name {
    margin-left: 8px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        color: white;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
::v-deep .el-icon-rank {
  font-size: 28px;
  margin-left: 20px;
  margin-top: 11px;
  color: #fff;
}
</style>
