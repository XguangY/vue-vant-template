<template>
  <div>
    <!-- Nabar -->
    <van-nav-bar
      title="首页"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { Toast, NavBar } from 'vant'
export default {
  name: 'MyNavbar',
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {
      // active: ''
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<style lang="scss" scoped></style>
