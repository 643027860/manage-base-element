<template>
  <div class="myUEditor">
    aaaa
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'UEditor',
  data () {
    return {
      // 编辑器对象
      editor: null,
      // 令牌
      jwt: '',
      // 请求头部
      config: '',
      // 文章返回的UR
      contenturl: '',
      // 正文内容
      content: '',
      // 正文内容纯文本格式
      content1: ''
    }
  },
  async created () {
    // 组件挂起之前就需要发送请求初始化富文本编辑器
  },
  mounted () {
    this.choiceMenuId('UEditor')
  },
  methods: {
    ...mapActions(['choiceMenuId'])
  },

  // 销毁编辑器
  beforeDestroy () {
    // 组件销毁的时候，要销毁 UEditor 实例
    if (this.editor !== null && this.editor.destroy) {
      this.editor.destroy()
    }
  }
}
</script>

<style lang="less">

</style>
