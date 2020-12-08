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
          <span>{{item.date}}</span>
          <span>{{item.operation}}</span>
          <span :class="Number(item.amount) < 0 ? 'fontRed': 'fontGreen'">
            <i v-if="Number(item.amount) >= 0">+</i>
            <i v-if="Number(item.amount) < 0">-</i>
            ${{item.amount}}</span>
          <span>${{item.after}}</span>
        </li>
      </ul>
    </div>

    <div class="page-divide">
      <Page :total="detailsData.length" :page-size="10"></Page>
    </div>

  </div>
</template>

<script>

export default {
  name: 'balance',
  components: {

  },
  data () {
    return {
      detailsData: [
        {
          date: '2020年12月30日 12:39:45',
          operation: '签到奖励',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: '充值',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: 'XX宝箱',
          amount: '-100',
          after: '100'
        }, {
          date: '2020年12月30日 12:39:45',
          operation: '签到奖励',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: '充值',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: 'XX宝箱',
          amount: '-100',
          after: '100'
        }, {
          date: '2020年12月30日 12:39:45',
          operation: '签到奖励',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: '充值',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: 'XX宝箱',
          amount: '-100',
          after: '100'
        }, {
          date: '2020年12月30日 12:39:45',
          operation: '签到奖励',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: '充值',
          amount: '100',
          after: '100'
        },
        {
          date: '2020年12月30日 12:39:45',
          operation: 'XX宝箱',
          amount: '-100',
          after: '100'
        },
      ],
      mini: 'mini'
    }
  },
  methods: {

  }
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
    height 46px
    width 930px
    text-align center
    position fixed
    bottom 15px
    line-height 42px
.fontRed
  color #E51D39!important
.fontGreen
  color #1EC129!important

</style>
