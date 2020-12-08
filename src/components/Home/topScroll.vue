<template>
  <div class="top-scroll">
    <ul class="scroll-content">
      <li v-for="item in picData" @mouseover="checked(item)" @mouseleave="unChecked = 0" >
        <img :src="item.url" alt="">
        <div class="hover-active">
          <img src="@assets/img/icon_shengji.png" alt="" v-if="item.type == 1 && item.id == isActive">
          <img src="@assets/img/scroll_change.png" alt="" v-if="item.type == 2 && item.id == isActive">
          <img src="@assets/img/box_3.png" alt="" v-if="item.type == 3 && item.id == isActive">
          <p>
            <span v-if="item.type == 1 && item.id == isActive">兑换商城</span>
            <span v-if="item.type == 2 && item.id == isActive">饰品汰换</span>
            <span v-if="item.type == 3 && item.id == isActive">前往开箱</span>
            <img src="@assets/img/arrow_right.png" alt="" class="arrow-right" v-if=" item.id == isActive">
          </p>
        </div>

        <div class="scroll-modal" v-if=" item.id == isActive"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'topScroll',
  data () {
    return {
      picData: [
        { id: 1, url: require('../../assets/img/1.png'), type: 1 },
        { id: 2, url: require('../../assets/img/2.png'), type: 1 },
        { id: 3, url: require('../../assets/img/3.png'), type: 1 },
        { id: 4, url: require('../../assets/img/4.png'), type: 2 },
        { id: 5, url: require('../../assets/img/5.png'), type: 2 },
        { id: 6, url: require('../../assets/img/6.png'), type: 3 },
        { id: 7, url: require('../../assets/img/7.png'), type: 3 },
        { id: 8, url: require('../../assets/img/8.png'), type: 3 },
        { id: 9, url: require('../../assets/img/8.png'), type: 3 },
        { id: 10, url: require('../../assets/img/8.png'), type: 3 },
        { id: 11, url: require('../../assets/img/8.png'), type: 3 },
        { id: 12, url: require('../../assets/img/8.png'), type: 3 },
        { id: 13, url: require('../../assets/img/8.png'), type: 3 },
        { id: 14, url: require('../../assets/img/8.png'), type: 3 },
        { id: 15, url: require('../../assets/img/3.png'), type: 1 },
        { id: 16, url: require('../../assets/img/4.png'), type: 2 },
        { id: 17, url: require('../../assets/img/3.png'), type: 1 },
        { id: 18, url: require('../../assets/img/4.png'), type: 2 },
        { id: 19, url: require('../../assets/img/3.png'), type: 1 },
        { id: 20, url: require('../../assets/img/4.png'), type: 2 },
        { id: 21, url: require('../../assets/img/8.png'), type: 3 },
        { id: 22, url: require('../../assets/img/8.png'), type: 3 },
        { id: 23, url: require('../../assets/img/3.png'), type: 1 },
        { id: 24, url: require('../../assets/img/4.png'), type: 2 },
        { id: 25, url: require('../../assets/img/3.png'), type: 1 },
        { id: 26, url: require('../../assets/img/8.png'), type: 3 },
        { id: 27, url: require('../../assets/img/8.png'), type: 3 },
        { id: 28, url: require('../../assets/img/3.png'), type: 1 },
        { id: 29, url: require('../../assets/img/4.png'), type: 2 },
        { id: 30, url: require('../../assets/img/3.png'), type: 1 },
      ],
      isActive: 0
    }
  },
  methods: {
    checked (item) {
      this.isActive = item.id
    },
    unChecked ( item ) {
      this.isActive = 0
    },
    startAnimate () {

    }
  }
};
</script>

<style scoped lang="stylus">
.top-scroll
  height 88px
  width 100
  background-color #060B0C
  .scroll-content
    border 1px solid white
    display flex
    flex-direction row
    justify-content flex-start
    li
      height 88px
      width 96px
      padding 8px 12px
      margin-right 12px
      position relative
      >img:nth-child(1)
        width 72px
      .hover-active
        position absolute
        left 0
        top 0
        z-index 99
        text-align center
        width 100%
        height 100%
        padding 8px 0
        >img:nth-child(1)
          width 40px
          height 40px
        p
          display flex
          flex-direction row
          align-items center
          justify-content space-evenly
          margin-top 5px
          img
            width 14px
            height 12px
      .scroll-modal
        width  96px
        height 88px
        background-color #212C31
        position absolute
        left 0
        top 0
        z-index 88




</style>
