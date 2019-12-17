<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
  #app {
    width: 100%;
    max-width: 1024PX;
    border: 1px solid #f5f6f7;
  }
</style>
