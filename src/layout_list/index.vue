<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <div :class="{'header_close':header_close}">
        <van-sticky>
          <my-header />
        </van-sticky>
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sticky } from 'vant'
import { MyHeader, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { getDeviceToken, setDeviceToken, removeDeviceToken } from '@/utils/auth'

export default {
  name: 'LayoutList',
  components: {
    MyHeader,
    AppMain,
    [Sticky.name]: Sticky
  },
  mixins: [ResizeMixin],
  data() {
    return {
      header_close: getDeviceToken()
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        mobile: this.device === 'mobile'
      }
    }
  },
  created() {
    this.pxrOpen()
  },
  methods: {
    pxrOpen() {
      // 判断设备类型
      const device = navigator.userAgent
      // pxr访问 且不存在 cookie 需要写入cookie
      if (device.indexOf('huoniao_') > -1) {
        if (!getDeviceToken()) {
          setDeviceToken('huoniao_')
        }
      } else if (device.indexOf('huoniao_') <= -1) {
        // 如果H5访问 清除cookie
        if (getDeviceToken()) {
          removeDeviceToken()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .header_close {
    display: none;
  }
</style>
