<template>
  <div class="replacing-page">
    <!--合约内容-->
    <div class="replacing-text" v-if="routerName == 'replacing'">
      <p>{{ replacingContract.title }}</p>
      <p>{{ replacingContract.line1 }}</p>
      <p>{{ replacingContract.line2 }}</p>
      <p>{{ replacingContract.line3 }}</p>
      <p>{{ replacingContract.line4 }}</p>
    </div>
    <div class="replacing-text" v-if="routerName == 'exchange'">
      <p>{{ shopContract.title }}</p>
      <p>{{ shopContract.line1 }}</p>
      <p>{{ shopContract.line2 }}</p>
      <p>{{ shopContract.line3 }}</p>
    </div>
    <bottom v-if="routerName == 'replacing'"/>
    <exchange v-if="routerName == 'exchange'"/>
  </div>
</template>

<script>
import bottom from './bottom';
import exchange from './exchange';

export default {
  name: 'index',
  data() {
    return {
      replacingContract: {
        title: '汰换合约',
        line1: '1.选择汰换素材(最大10件，包括您的库存饰品，或使用余额购买素材) ，并选择汰换目标（1个），即可实现兑换',
        line2: '2.汰换素材的总价值必须≤目标的90%',
        line3: '3.兑换成功后，将从库存中移除您的素材，获得目标饰品',
        line4: '4.汰换失败，将从库存中移除您的素材，返还汰换材料总价值30%的余额'
      },
      shopContract: {
        title: '兑换商城',
        line1: '1.选择合成素材(最大10件) ,并选择兑换目标，即可实现兑换',
        line2: '2.目标饰品价值，需满足合成素材价值的85%~115%。相应差价需要玩家通过余额支付，或平台返还至余额 ',
        line3: '3.兑换成功后，将从库存中移除您的素材，获得兑换目标饰品；兑换所得饰品不能再次用于兑换'
      },
      routerName: ''
    };
  },
  methods: {},
  components: {
    bottom, exchange
  },
  created() {
    this.routerName = this.$route.name
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val.name)
        this.routerName = val.name
      },
      deep: true
    }
  },
};
</script>

<style scoped lang="stylus">
.replacing-page
  width 1200px
  margin-top 20px
  .replacing-text
    color #fff
    p:nth-child(1)
      font-size 20px
      line-height 40px
    p
      font-size 12px
      line-height 30px
      text-align left
</style>
