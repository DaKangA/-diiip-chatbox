<template>
  <div class="chat-title">
    <h2>Noah</h2>
    <figure class="avatar">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/764024/profile/profile-512.jpg" alt />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'chat-title'
}
</script>

<style lang="scss" scoped>
@import './styles/variable.scss';
.chat-title {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  background-color: $background_color_2;
  width: 100%;
  height: 50px;
  h2 {
    margin: 10px 0;
    padding: 0;
    color: $color_1;
    font-weight: normal;
    font-size: 16px;
    display: inline-block;
    line-height: 30px;
  }
  .avatar {
    float: left;
    margin: 10px;
    padding: 0;
    width: 30px;
    height: 30px;
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
}
</style>

