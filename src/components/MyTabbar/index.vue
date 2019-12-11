<template>
  <div>
    <!-- Tabbar -->
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="search" />
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Notify, Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: ''
    }
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index })
    }
  }
}
</script>

<style lang="scss" scoped></style>
