<template>
<div id="app" style="position: relative;">
  <h1 class="ms-font-su ms-fontColor-white ms-bgColor-themePrimary noselect" style="margin: 0; padding: 80px 20px 20px 20px; -webkit-app-region: drag; position: fixed; top: 0; width: 100%; z-index: 10000">
    Multi-Process
    <div style="font-size: 16px; margin-top: -5px;">Dun & Bradstreet - API Element</div>
  </h1>
  <div style="padding-top: 170px;">
    <navigator></navigator>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import navigator from './components/Navigator'

export default {
  name: 'multi-process',
  components: {
    navigator
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style>
.noselect {
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

body {
  margin: 0;
  padding: 0;
  background: #fafafa;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
}
</style>
