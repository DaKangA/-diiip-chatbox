<template>
  <div id="app">
    <chat-box :centered="true" :pos="{x: 300, y: 500}" />
  </div>
</template>

<script>
import ChatBox from '../../src/ChatBox'
export default {
  name: 'App',
  components: { ChatBox }
}
</script>

<style lang="scss">
html {
  margin: 0;
  height: 100%;
  width: 100%;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right bottom, #bdc3c7, #2c3e50);
  background: linear-gradient(to right bottom, #bdc3c7, #2c3e50);
}
body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif';
  background: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');
  letter-spacing: 1px;
}
</style>

