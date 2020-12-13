<template>
  <div class="myLogin">
    I am Login
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  mounted () {
    this.myMessage.myMessage('请先登录', 'warning', 1500)
  },
  methods: {}
}
</script>

<style lang="less">

</style>
