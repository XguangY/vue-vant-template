<template>
  <div class="header">
    <!-- <van-nav-bar
      :title="levelList[levelList.length -1].meta.headerName"
      right-text="关闭"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <van-nav-bar
      :title="levelList[levelList.length -1].meta.headerName"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'MyHeader',
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      )
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/home', meta: { title: 'Home' }}].concat(matched)
      }

      this.levelList = matched.filter(
        item =>
          item.meta &&
          item.meta.title &&
          item.meta.headerName &&
          item.meta.breadcrumb !== false
      )
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
    },
    onClickLeft() {
      this.$router.back()
    }
    // onClickRight() {
    //   Toast('按钮')
    // }
  }
}
</script>

<style lang="scss" scoped>
.no-redirect {
  // color: #97a8be;
  cursor: text;
}
.header {
  height: 45px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.header /deep/ .van-nav-bar .van-icon {
    color: #B4B4B4;
}
.header /deep/ .van-nav-bar__arrow {
    font-size: 26px;
}
</style>
