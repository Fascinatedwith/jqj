<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <img src="~@/assets/common/logo.png" class="sidebar-logo">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: transparent;

  text-align: center;
  overflow: hidden;

     .sidebar-logo {
      width: 80%;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

  }

  .collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }

</style>
