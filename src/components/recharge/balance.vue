<template>
  <div class="details-page">
    <div class="details-content">
      <div class="details-title">
        <span>时间</span>
        <span>用户操作</span>
        <span>变动金额</span>
        <span>变动后余额</span>
      </div>

      <ul class="details-list">
        <li v-for="item in detailsData">
          <span>{{item.timeCreate}}</span>
          <span>{{item.reason}}</span>
          <span :class="Number(item.amountChanged) < 0 ? 'fontRed': 'fontGreen'">
            <i v-if="Number(item.amountChanged) >= 0">+</i>
            <i v-if="Number(item.amountChanged) < 0">-</i>
            ${{item.amountChanged|conversion}}</span>
          <span>${{item.amountRecord|conversion}}</span>
        </li>
      </ul>
    </div>

    <div class="page-divide">
      <Page v-model="pageInfo.current" :total="pageInfo.total" :page-size="pageInfo.size" @on-change="changePage"></Page>
    </div>

  </div>
</template>

<script>
import { userBalance } from '@/api/user'
import {conversion} from '@utils/tools'
export default {
  name: 'balance',
  components: {

  },
  data () {
    return {
      detailsData: [],
      mini: 'mini',
      pageInfo:{
        total: 0,
        current:1,
        size:10
      }
    }
  },
  methods: {
    getUserBalance() {
      let params = this.pageInfo
      userBalance(params).then(res => {
        if (res.code === 0) {
          this.detailsData = res.data.data
          this.pageInfo = {
            total: res.data.totalItems,
            current: res.data.pageNumber,
            size: res.data.pageSize
          }
        }
      });
    },
    changePage (e) {
      this.pageInfo.current = e
      this.getUserBalance()
    }
  },
  created () {
    this.getUserBalance()
  },
  filters: {
    conversion
  },
};
</script>

<style scoped lang="stylus">
.details-page
  height 614px

  .details-content
    height 530px
    margin  20px 36px
    overflow hidden

  .details-title
    width: 858px;
    height: 50px;
    background: #364049;
    display flex
    justify-content center
    align-items center

    span
      width 25%
      text-align center
      color #fff

  .details-list
    li
      width 100%
      height 48px
      display flex
      justify-content center
      align-items center
      span
        width 25%
        color #fff
        text-align center
    li:nth-child(2n)
      background: #262C32;
    li:nth-child(2n-1)
      background-color transparent
  .page-divide
    text-align center
    position absolute
    bottom 75px
    line-height 42px
.fontRed
  color #E51D39!important
.fontGreen
  color #1EC129!important

</style>
