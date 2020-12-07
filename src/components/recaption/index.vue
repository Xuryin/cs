<template>
  <div class="recaption-page">
    <div class="router-title">
      <p v-for="item in navData" :class="routerIndex == item.id? 'active': ''" @click="changeRouter(item.id)">
        {{ item.name }}</p>
    </div>
    <donata v-if="routerIndex == 0"/>
    <stock v-if="routerIndex == 1"/>
    <stockDetails v-if="routerIndex == 2"/>
  </div>
</template>

<script>
import donata from './donata';
import stock from './stock';
import stockDetails from './stockDetails';
export default {
  name: 'index',
  data () {
    return {
      routerIndex: 0,
      navData:  [ {id: 0, name: '饰品库存'}, {id: 1, name: '饰品赠送'}, {id: 2, name: '库存记录'} ],
    }
  },
  methods: {
    changeRouter (index) {
      console.log(index)
      this.routerIndex = index
    }
  },
  components: { donata, stock, stockDetails }
};
</script>

<style scoped lang="stylus">
.recaption-page
  width 930px

  .router-title
    width: 930px
    height: 64px
    background #262C32
    border-radius 8px 8px 0 0
    display flex
    padding 24px 36px

    p
      width: 106px;
      height: 40px;
      text-align center
      line-height 40px
      color #FFFFFF
      border-top: 2px solid #54616D;
      background: #363E46;
      cursor pointer

    p:not(:first-child)
      margin-left 24px

.active
  background: linear-gradient(180deg, #203E50, #363E46) !important;
  border-top 2px solid #3AA9EA !important;

</style>
