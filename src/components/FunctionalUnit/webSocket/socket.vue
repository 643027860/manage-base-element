<template>
  <div class="myWebSocket"></div>
</template>

<script>
export default {
  name: 'websocket',
  data () {
    return {
      // websocket实例
      websock: null
    }
  },
  props: {
    // ws地址
    webPath: {
      type: String,
      required: true
    },
    // 需要发送的数据
    sendMessage: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 初始化websocket
    initWebSocket () {
      if ('WebSocket' in window) {
        this.websock = new WebSocket(this.webPath)
      } else {
        this.myMessage.myMessage('当前浏览器不支持 websocket', 'warning', 1500)
      }
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
        this.websock.close()
      }
    },
    // 连接建立之后执行send方法发送数据
    websocketonopen () {
      console.log('已连接')
    },
    // 连接建立失败重连
    websocketonerror () {
      this.initWebSocket()
    },
    // 数据接收
    websocketonmessage (e) {
      console.log('接收到的数据：')
      console.log(JSON.parse(e.data))
    },
    // 数据发送
    websocketsend (Data) {
      console.log('即将发送的数据：')
      console.log(Data)
      this.websock.send(Data)
    },
    // 断开连接
    websocketclose (e) {
      console.log('断开连接', e)
    }
  },
  mounted () {
    // 组件挂载时初始化websocket
    this.initWebSocket()
  },
  watch: {
    // 需要发送的数据发生变化时需要监听并及时发送
    sendMessage (newval, oldval) {
      this.websocketsend(newval)
    }
  },
  destroyed () {
    // 组件销毁时断开连接
    if (this.websocket) {
      this.websocket.close()
    }
  }
}
</script>

<style lang="less">

</style>
