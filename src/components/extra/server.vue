<template>
  <div class="service-block">
    <div class="radius-father" @mouseover="checked(1)" :class="active == 1 ? 'active': ''" @mouseleave="unChecked" @click="operate(1)">
      <p>
        <img src="@assets/img/icon_qqun_hover.png" alt="" v-if="active == 1" >
        <img src="@assets/img/icon_qqun_normal.png" alt="" v-if="active != 1">
        <span>官方Q群</span>
      </p>
    </div>
    <div class="radius-father" @mouseover="checked(2)" :class="active == 2 ? 'active': ''" @mouseleave="unChecked" @click="operate(1)">
      <p>
        <img src="@assets/img/icon_kefu_hover.png" alt="" v-if="active == 2" >
        <img src="@assets/img/icon_kefu_normal.png" alt="" v-if="active != 2">
        <span>联系客服</span>
      </p>
    </div>
    <div class="radius-father" @mouseover="checked(3)" :class="active == 3 ? 'active': ''" @mouseleave="unChecked" @click="operate(1)">
      <p>
        <img src="@assets/img/icon_bangzhu_hover.png" alt="" v-if="active == 3" >
        <img src="@assets/img/icon_bangzhu_normal.png" alt="" v-if="active != 3">
        <span>帮助中心</span>
      </p>
    </div>

    <div class="radius-father" @mouseover="checked(4)"  :class="active == 4 ? 'active': ''" @mouseleave="unChecked" @click="operate(1)">
      <p>
        <img src="@assets/img/icon_huiding_hover.png" alt="" v-if="active == 4" >
        <img src="@assets/img/icon_huiding_noraml.png" alt="" v-if="active != 4">
        <span>回到顶部</span>
      </p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'server',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    checked(id) {
      this.active = id
    },
    unChecked () {
      this.active = 0
    },
    operate (id) {
      if (id == 1) {
        return false
      } else if (id == 2) {
        return false
      } else if (id == 3) {

      } else if (id == 4) {
        scrollTo(0, 0)
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.service-block
  position fixed
  right 271px
  top 568px

  .radius-father
    width: 60px;
    height: 60px;
    padding 2px
    border-radius: 6px;
    margin-top 8px
    p
      width 56px
      height 56px
      border-radius: 6px;
      display flex
      flex-direction column
      align-items center
      justify-content center
      border 1px solid #363E46

      img
        width 24px
        height 24px

      span
        color #9CA0A7
        font-size 12px
        position relative
        top 5px

.active
  background linear-gradient(90deg, #2F82D6, #42F5D1)
  p
    background: #2E3539 !important;
  span
    color #fff !important
</style>
