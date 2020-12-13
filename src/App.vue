<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  // 引入基本css
  @import '../src/assets/css/base.less';
  @import '../src/assets/css/transition.less';
  @import 'assets/css/changeElement/changeElement.less';
  @media screen and (max-width: 768px){
    @import 'assets/css/changeElement/changeElement-mobile.less';
  }
</style>
