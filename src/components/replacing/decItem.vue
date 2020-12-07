<template>
  <div class="content-item">
    <span>${{itemData.price}}</span>
    <div>
      <img :src="itemData.url" alt="">
    </div>
    <span>{{itemData.name}}</span>
    <div v-if="itemData.isChecked" class="item-modal"></div>
    <img class="checked-img"  src="@assets/img/checked.png" alt="" v-show="itemData.isChecked">
  </div>
</template>

<script>
export default {
  name: 'decItem',
  data () {
    return {
    }
  },
  methods: {},
  props: [ 'itemData' ]
};
</script>

<style scoped lang="stylus">
.content-item
  width 120px
  height 145px
  border-top 2px solid #2950F4
  position relative
  text-align center
  margin-right 10px
  background: linear-gradient(180deg, rgba(41, 80, 244, 0.2), rgba(24, 28, 33, 0.2));
  span:nth-child(1)
    font-size 12px
    color #FFEC1A
    position absolute
    right 4px
    top 4px
  div:nth-child(2)
    width 108px
    height 108px
    img
      width 108px
  span:nth-child(3)
    line-height 20px
    font-size 12px
    color #FFFFFF
.item-modal
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  background #000
  opacity 0.4
  z-index 88
.checked-img
  position absolute
  top 55px
  left 55px
  z-index 99
</style>
