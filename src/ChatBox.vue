<template>
  <div
    class="chat"
    :style="`top: ${pos.y}px; left: ${pos.x}px; ${centered ? 'transform: translate(-50%, -50%);' : ''}`"
  >
    <chat-title />
    <div class="messages">
      <chat-msg :msgList="msgList" />
    </div>
    <chat-input @on-send="onSend" />
  </div>
</template>

<script>
import ChatInput from './ChatInput'
import ChatMsg from './ChatMsg'
import ChatTitle from './ChatTitle'
export default {
  name: 'chat-box',
  components: { ChatInput, ChatMsg, ChatTitle },
  data() {
    return {
      msgList: []
    }
  },
  props: {
    pos: {
      type: Object,
      default() {
        return {
          x: 0,
          y: 0
        }
      }
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSend(msg) {
      this.msgList.push({
        right: true,
        content: msg,
        user: 'Me',
        date: this.formatDate('HH:mm:ss')
      })
      switch (msg) {
        case 'Hello':
          setTimeout(() => {
            this.msgList.push({
              right: false,
              content: 'Hello !',
              user: 'You',
              date: this.formatDate('HH:mm:ss')
            })
          }, 1000)
          break
        default:
          break
      }
    },
    formatDate(format) {
      var t = new Date()
      var tf = function(i) {
        return (i < 10 ? '0' : '') + i
      }
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear())
          case 'MM':
            return tf(t.getMonth() + 1)
          case 'mm':
            return tf(t.getMinutes())
          case 'dd':
            return tf(t.getDate())
          case 'HH':
            return tf(t.getHours())
          case 'ss':
            return tf(t.getSeconds())
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './styles/variable.scss';

.chat {
  position: absolute;
  width: 300px;
  height: 80vh;
  max-height: 500px;
  border-radius: $box-radius;
  background-color: $background_color_1;
  overflow: hidden;
}

.messages {
  width: 100%;
  height: calc(100% - 90px);
}
</style>





