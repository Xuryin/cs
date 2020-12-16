<template>
  <div class="recharge-page">
    <div class="router-title">
      <p v-for="item in navData" :class="routerIndex == item.id? 'active': ''" @click="changeRouter(item.id)">
        {{ item.name }}</p>
    </div>
    <balance v-if="routerIndex == 1"/>
    <recharge v-if="routerIndex == 0"/>

  </div>
</template>
<script>
import balance from './balance';
import recharge from './recharge';
import { getItem } from '@utils/tools';
import { userTradeUrl, userInfo  } from '@api/user';
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      routerIndex: 0,
      navData:  [ {id: 0, name: '充值'}, {id: 1, name: '余额明细'} ]
    }
  },
  methods: {

    changeRouter (index) {
      this.$router.push({name: 'recharge', query: {tab: index}})
    },

  },
  components: { balance, recharge },
  mounted() {
    this.routerIndex = this.$route.query.tab
  },
  watch: {
    $route (val, oldVal) {
      this.routerIndex = val.query.tab
    }
  }
};
</script>

<style scoped lang="stylus">
.recharge-page
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
