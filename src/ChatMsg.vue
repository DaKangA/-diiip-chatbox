<template>
  <div class="messages-content san-scrollbar">
    <div
      class="message"
      :class="`${msg.right ? 'personal' : ''}`"
      v-for="(msg, i) in msgList"
      :key="i"
    >
      {{msg.content}}
      <div class="timestamp">{{msg.date}}</div>
    </div>
    <div v-if="typing" class="message personal typing">
      <span></span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'chat-msg',
  props: {
    msgList: Array
  },
  data() {
    return {
      typing: false
    }
  },
  watch: {
    typing(nv) {
      if (nv) {
        setTimeout(() => {
          this.typing = false
        }, 3500)
      }
    }
  },
  created() {
    this.$bus.$on('on-typing', typing => {
      if (!this.typing) this.typing = typing
    })
  },
  beforDestroy() {
    this.$bus.$off('on-typing')
  }
}
</script>

<style lang="scss" scoped>
@import './styles/variable.scss';
.san-scrollbar {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #5d5c5c;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #757575;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-button {
    background-color: #fff;
    display: none;
  }
}

.messages-content {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  .message.typing {
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      width: 3px;
      height: 3px;
      background-color: $background_color_4;
      transform: translate(-50%, -50%);
      animation: ball 1.2s infinite linear;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 3px;
      transform: translate(-50%, -50%);
      &::before {
        content: '';
        border-radius: 50%;
        width: 3px;
        height: 3px;
        position: absolute;
        background-color: $background_color_4;
        animation: ball 1.2s infinite linear;
        left: 8px;
        animation-delay: 0.3s;
      }
      &::after {
        content: '';
        border-radius: 50%;
        width: 3px;
        height: 3px;
        position: absolute;
        background-color: $background_color_4;
        animation: ball 1.2s infinite linear;
        right: 8px;
        animation-delay: -0.3s;
      }
    }
    width: 30px;
    height: 16px;
  }
  .message {
    max-width: calc(100% - 76px);
    padding: 8px;
    margin: 8px 0 8px 12px;
    border-radius: 5px;
    background-color: $background_color_3;
    color: $color_2;
    float: left;
    font-size: 13px;
    position: relative;
    word-break: break-all;
    clear: both;
    animation: pop 0.3s forwards;
    .timestamp {
      position: absolute;
      right: -60px;
      bottom: 0;
      font-size: 12px;
      color: $color_3;
    }
  }
  .message.personal {
    float: right;
    margin: 8px 12px 8px 0;
    .timestamp {
      right: auto;
      left: -60px;
    }
  }
}
</style>



