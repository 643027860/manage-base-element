import {
  MessageBox,
  Message
} from 'element-ui'
// 消息提示
function myMessage (message, type, duration) {
  Message({
    message,
    duration,
    type
  })
}

// 消息确认,并跳转到一个组件
function myConfirm (message, title, name) {
  MessageBox(message, title, {
    confirmButtonText: '确定'
  }).then(() => {
    this.$router.replace({name})
  })
}

export default {myMessage, myConfirm}
