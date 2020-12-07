<template>
  <div class="donata-page">
    <div class="donate-title">
      <span>发起时间</span>
      <span>发起人</span>
      <span>饰品件数</span>
      <span>饰品价值</span>
      <span>处理时间</span>
      <span>状态</span>
    </div>

    <div class="donate-content">
      <div class="donate-item" v-for="item in donateData">
        <span>{{item.date}}</span>
        <span>{{item.initiator}}</span>
        <span>{{item.number}}</span>
        <span>${{item.price}}</span>
        <span v-if="item.status == 0">买家需在 <span>{{item.handleTime}}</span> 前接受过期后交易自动取消</span>
        <span v-if="item.status != 0">{{item.handleTime}}</span>
        <div class="item-status">
          <div class="button-group" v-if="item.status == 0">
            <button>接受</button>
            <button>拒绝</button>
          </div>
          <span v-if="item.status == 1">已接受</span>
          <span v-if="item.status == 2" class="redFont">已取消</span>
        </div>
      </div>


    </div>


    <div class="page-divide">
      <Page :total="donateData.length" :page-size="10"></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'donata',
  data () {
    return {
      donateData: [
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 1},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 2},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
        {date: '2020年12月30日 12:39:45', initiator: '轻舞飞扬', number: '10', price: '100', handleTime: '2020年12月30日 12:39:45', status: 0},
      ]
    }
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
.donata-page
  height 614px
  padding 20px 36px

  .donate-title
    display flex
    flex-direction row
    justify-content flex-start
    height 50px
    background #364049
    font-size 12px
    span
      line-height 50px
      color #fff
      text-align center
    span:nth-child(1)
      width 170px
    span:nth-child(2)
      width 100px
    span:nth-child(3)
      width 100px
    span:nth-child(4)
      width 100px
    span:nth-child(5)
      width 245px
    span:nth-child(6)
      width 243px
  .donate-content
    height 480px
    overflow hidden
    .donate-item
      height 48px
      display flex
      justify-content flex-start
      align-items center
      text-align center
      font-size 12px
      color #fff
      span:nth-child(1)
        width 170px
      >span:nth-child(2)
        width 100px
      span:nth-child(3)
        width 100px
      span:nth-child(4)
        width 100px
        color #FFDD21
      span:nth-child(5)
        width 245px
        text-align left
        padding-left 10px
        span
          color #3AA9EA
      div:nth-child(6)
        width 243px


    >div:nth-child(2n)
      background #262C32
    .item-status
      height 48px
      line-height 48px
      .button-group
        height 48px
        display flex
        justify-content center
        align-items center
        button
          width: 48px;
          height: 28px;
          border-radius: 4px;
          color #fff
          line-height 28px
        button:nth-child(1)
          background: #3AA9EA;
        button:nth-child(2)
          background: transparent;
          border: 2px solid #5A6671;
          margin-left 20px

.page-divide
  height 46px
  width 836px
  text-align right
  position fixed
  bottom 15px
  right 36px
  line-height 42px
</style>
