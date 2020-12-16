<template>
  <div class="footer-page">
    <div class="footer-content">
      <div class="left-content">
        <p>www.91csgo.com</p>
        <p>{{description}}</p>
      </div>

      <div class="right-content">
        <p @click="routerTo(0)">
          <img src="@assets/img/icon_steam1.png" alt="">
          <span>Steam登录教程</span>
        </p>

        <p @click="routerTo(2)">
          <img src="@assets/img/icon_quhui1.png" alt="">
          <span>如何取回</span>
        </p>

        <p >
          <img src="@assets/img/icon_lianxi1.png" alt="">
          <span>联系我们</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      description: 'Valve, the Valve logo, the Steam logo, CSGO and CSGO logo are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their respective owners.'
    }
  },
  methods: {
    routerTo (id) {
      this.$router.push({name:"helper", params: {id: id}})
    }
  },


};
</script>

<style scoped lang="stylus">
.footer-page
  height 160px
  width 100%
  background-color #060A12
  .footer-content
    width 1400px
    height 160px
    margin-left 50%
    transform translateX(-700px)
    display flex
    justify-content space-between
    .left-content
      color #fff
      width 30%
      padding-top 20px
      p:nth-child(1)
        font-size 14px
        line-height 50px
        color #FFFFFF
      p:nth-child(2)
        font-size 12px
        margin-top 5px
        color #9CA5B4
    .right-content
      width 60%
      display flex
      justify-content flex-end
      align-items center
      p
        display flex
        justify-content flex-end
        align-items center
        cursor help
        img
          margin-right 15px
        span
          color #FFFFFF
      p:not(:last-child)
        margin-right 67px


</style>
