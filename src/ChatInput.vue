<template>
  <div class="action-box">
    <textarea
      @keydown="onKeydown"
      class="action-box-input"
      v-model="msg"
      name
      placeholder="输入信息..."
    ></textarea>
    <button class="action-box-submit" type="submit" @click="sendMsg">发送</button>
  </div>
</template>

<script>
export default {
  name: 'chat-input',
  data() {
    return {
      msg: null,
      isTyping: true
    }
  },
  methods: {
    sendMsg() {
      if (this.msg !== null) {
        this.$emit('on-send', this.msg)
        this.msg = null
      }
    },
    onKeydown(e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        this.sendMsg()
      } else if (e.ctrlKey && e.keyCode == 13) {
        // 回车换行
      } else {
        this.$bus.$emit('on-typing', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/variable.scss';
.action-box {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  background-color: $background_color_2;
  width: 100%;
  height: 40px;
}

textarea {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.action-box-input {
  box-sizing: border-box;
  border: 0;
  float: left;
  width: calc(100% - 60px);
  height: 20px;
  background-color: $background_color_5;
  resize: none;
  color: $color_4;
  margin: 10px 0;
  padding: 0 10px;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 1px;
  overflow: hidden;
  outline: none;
  &::-webkit-input-placeholder {
    line-height: 20px;
    font-size: 13px;
  }
}
.action-box-submit {
  box-sizing: border-box;
  border: 0;
  float: left;
  width: 60px;
  height: 40px;
  background-color: $background_color_6;
  color: $color_4;
  cursor: pointer;
  outline: none;
}
</style>


