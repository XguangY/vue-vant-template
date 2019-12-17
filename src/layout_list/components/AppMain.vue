<template>
  <section :class="{'app_main':app_main}" class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import { getDeviceToken } from '@/utils/auth'
export default {
  name: 'AppMain',
  data() {
    return {
      app_main: getDeviceToken()
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*45 = navbar  */
  /* min-height: calc(100vh - 45px); */
  width: 100%;
  position: relative;
  overflow: hidden;
}
.app_main {
  /* min-height: 100vh; */
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
