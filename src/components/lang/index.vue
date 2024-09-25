<template>
  <el-dropdown @command="onChange">
    <span class="el-dropdown-link">
      <i class="iconfont icon-language" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="isdisabled==='zh'">简体中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="isdisabled==='en'">English</el-dropdown-item>
      <el-dropdown-item command="ja" :disabled="isdisabled==='ja'">日本語</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      isdisabled: 'zh'
    }
  },
  methods: {
    // 事件执行函数
    onChange(locale) {
      this.isdisabled = locale
      // 更改语言
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped lang="scss">
 .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown {
    margin-left: 20px;
  }
  .icon-language {
    font-size: 24px;
    color: #fff;
  }
</style>
