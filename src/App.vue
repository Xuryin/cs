<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { BoxItem, Footer, Header, topScroll } from '@/components/Home';

export default ({
  name: 'APP',
  components: {
    topScroll, Header, BoxItem, Footer
  },
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

</style>
