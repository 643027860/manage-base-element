<template>
  <div class="myNavIcon myControlMenu"  @click="handleStatus">
    <i :class="[sliceClass]"></i>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['slideStatus']),
    // 返回侧边导航栏是否展开的相应样式
    sliceClass: function () {
      return this.slideStatus ? 'el-icon-s-fold' : 'el-icon-s-unfold'
    }
  },
  methods: {
    ...mapActions(['handleSlideStatus']),
    // 点击改变侧边导航是否展开
    handleStatus () {
      this.handleSlideStatus(!this.slideStatus)
    }
  }
}
</script>

<style lang="less">
  .myControlMenu{
    display: inline-block;
    padding: 0 8px;
    font-size: 20px;
    padding: 0 0.4rem;
    font-size: 1rem;
    color: #FFF;
  }
</style>
