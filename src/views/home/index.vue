<template>
  <div>
    <!-- Nabar -->
    <MyNavbar />
    <van-notice-bar mode="closeable">
      通知内容内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容!!!
    </van-notice-bar>
    <van-swipe :autoplay="3000" style="height: 200px;" indicator-color="white">
      <van-swipe-item><img :src="images[0]"></van-swipe-item>
      <van-swipe-item><img :src="images[0]"></van-swipe-item>
      <van-swipe-item><img :src="images[0]"></van-swipe-item>
    </van-swipe>
    <van-grid square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- Tabbar -->
    <myTabbar />
  </div>
</template>

<script>
import { Swipe, SwipeItem, NoticeBar, Grid, GridItem } from 'vant'
import myTabbar from '@/components/MyTabbar'
import MyNavbar from '@/components/MyNavbar'
export default {
  name: 'Home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    myTabbar,
    MyNavbar
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
