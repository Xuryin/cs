<template>
  <div class="stock-page">
    <div class="button-area">
      <div class="button-left">
        <button>全选</button>
        <button>取回</button>
        <button>折现</button>
      </div>

      <div class="button-right">
        <button @click="$router.push({name: 'exchange'})">饰品兑换</button>
        <button v-if="false">饰品交易</button>
      </div>
    </div>

    <div class="stock-info" >
      <div class="info-left" >
        <div class="left-top">
          <span>{{userInfo.amount}}件</span>
          <span>饰品交易中，合计</span>
          <span>${{ userInfo.totalMount }}</span>
        </div>
        <p class="left-bottom">点击查看安全码</p>
      </div>

      <div class="info-middle" >
        <img :src="userInfo.src" alt="">
        <span>买家昵称({{userInfo.nickName}})</span>
      </div>

      <div class="info-right">
        <div>
          <span>2020年12月31日 12:39:4</span>
          <span>后交易自动取消，请及时处理</span>
        </div>

        <div>
          <button>取消交易</button>
          <button v-if="!isExtend" @click="isExtend = 1">展开饰品</button>
          <button v-if="isExtend" @click="isExtend = 0">收起饰品</button>
        </div>
      </div>

    </div>

    <div class="info-verify" v-if="isExtend" >
      <p>
        <img src="" alt="">
        <span>买家昵称({{userInfo.nickName}})</span>
      </p>

      <p>验证码：{{userInfo.verifyCode}}</p>
      <p>
        <span class="status-1" v-show="status == 0">正在发送报价...(2)</span>
        <button class="status-2" v-show="status == 1">发送报价成功，点击确认报价</button>
        <button class="status-3" v-show="status == 2">报价确认完成，点此关闭</button>
        <button class="status-4" v-show="status == 3">发送报价失败：库存有变动，请先刷新库存(E732)</button>
      </p>

    </div>

    <div class="decorations-content">
      <div class="content-extend" v-if="isExtend">
        <div class="decorations-item" v-for="item in decorationData">
          <span>{{item.date}}</span>
          <div class="img-content">
            <img :src="item.url"/>
          </div>

          <span>{{item.name}}</span>
          <span>${{item.price}}</span>
          <img class="checked-img"  src="@assets/img/checked.png" alt="" v-show="item.isChecked">
          <div class="checked-modal" v-show="item.isChecked">

          </div>
        </div>
      </div>

      <div class="content-shrink" v-if="!isExtend">
        <div class="shrink-item" v-for="item in decorationData">
          <span>${{item.price}}</span>
          <div class="img-content-shrink">
            <img :src="item.url" alt="">
          </div>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="page-divide">
      <Page :total="decorationData.length" :page-size="10"></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stock',
  data () {
    return {
      userInfo: {
        amount: 10000,
        totalMount: 10000000,
        nickName: '123456',
        src: require('../../assets/img/portrait.png'),
        verifyCode: 6833,
      },
      status: 3,
      isExtend: 0,
      decorationData: [
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: true},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
      ]
    }
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
.stock-page
  height 622px
  padding 0 36px

  .button-area
    height 68px
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
    button
      border-radius: 4px;
      color #fff

    .button-left
      button
        width 72px
        height 32px
        &:not(:first-child)
          margin-left 12px
        &:first-child
          background-color #3AA9EA
        &:nth-child(2)
          background-color #1EC129
        &:nth-child(3)
          background-color #F1B629
    .button-right
      margin-left 49px
      button
        width 88px
        height 32px
        margin-right 24px
        background-color #3AA9EA



  .stock-info
    height: 68px;
    background: #363E46;
    display flex
    justify-content flex-start
    font-size 12px

    .info-left
      width 30%
      padding 12px 0 0 12px
      .left-top
        span:nth-child(1)
          color #1EC129
        span:nth-child(2)
          color #fff
        span:nth-child(3)
          color #F1B629
      .left-bottom
        color :#3AA9EA
        text-decoration underline
        cursor pointer
        line-height 40px

    .info-middle
      width 25%
      display flex
      padding-top 8px
      justify-content center
      img
        width 24px
        height 24px
      span
        color #fff
        padding-top 4px
        padding-left 3px

    .info-right
      width 45%
      text-align right
      display flex
      flex-direction column
      justify-content center
      padding-right 24px

      div:nth-child(1)
        line-height 30px
        span:nth-child(1)
          color #3AA9EA
        span:nth-child(2)
          color #fff
          margin-left 5px
      div:nth-child(2)
        padding-left 12px
        button
          margin-left 15px
          color #ffffff
        button:nth-child(1)
          width: 64px;
          height: 24px;
          background: #3AA9EA;
          border-radius: 4px;

        button:nth-child(2)
          width: 64px;
          height: 24px;
          border: 1px solid #3AA9EA;
          border-radius: 4px;
          background transparent



  .info-verify
    height: 36px;
    background: #363E46;
    padding 0 12px
    margin-top 6px
    display flex
    flex-direction row
    justify-content center
    align-items center
    p
      height 100%
      line-height 36px
      color #fff
      font-size 12px
    p:nth-child(1)
      width 30%
    p:nth-child(2)
      width 25%
      text-align center
    p:nth-child(3)
      width 45%
      padding-right 12px
      text-align right
      button
        width: 290px;
        height: 24px;
        color #fff
        border-radius: 12px;
        line-height 24px
      button:nth-child(2)
        background: #3AA9EA;
      button:nth-child(3)
        background: #47B44E;
      button:nth-child(4)
        background: #C33347;
        text-align center


  .content-extend
    height 380px
    display flex
    flex-direction row
    justify-content flex-start
    flex-wrap wrap
    overflow hidden
    >div:nth-child(2n-1)
      border-top 2px solid #193092
      background: rgba(0,0,0, 0.4)
      margin-right 8px
    >div:nth-child(2n)
      border-top 2px solid #1FAD82
      background: linear-gradient(180deg, rgba(31, 173, 130, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    >div:nth-child(3n)
      border-top 2px solid #2950F4
      background: linear-gradient(180deg, rgba(41, 80, 244, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    >div:nth-child(4n)
      border-top 2px solid #CE4748
      background: linear-gradient(180deg, rgba(206, 71, 72, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    >div:nth-child(5)
      border-top 2px solid #771BB7
      background: linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    >div:nth-child(6n)
      border-top 2px solid #FFD514
      background: linear-gradient(180deg, rgba(255, 213, 20, 0.2), rgba(24, 28, 33, 0.2));
    >div:nth-child(8)
      border-top 2px solid #1FAD82!important
      background: linear-gradient(180deg, rgba(31, 173, 130, 0.2), rgba(24, 28, 33, 0.2))!important
      margin-right 8px
    >div:nth-child(10)
      border-top 2px solid #CE4748
      background: linear-gradient(180deg, rgba(206, 71, 72, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    >div:nth-child(11)
      border-top 2px solid #771BB7
      background: linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2));
      margin-right 8px
    .decorations-item
      margin-top 16px
      width: 135px;
      height: 174px;
      position relative
      span
        padding-left 9px
        display block
        font-size 12px
      span:nth-child(1)
        position absolute
        top 4px
        left 0
      span:nth-child(3)
        line-height 30px
        color #fff
      span:nth-child(4)
        color #FFEC1A
        line-height 12px
      .checked-img
        position absolute
        top 55px
        left 55px
        z-index 99
      .checked-modal
        width: 135px;
        height: 174px;
        background #000
        opacity 0.4
        position absolute
        top 0
        left 0
        z-index 88
      .img-content
        width 120px
        height 120px
        margin 4px 0 0 8px
        img
          width 120px



  .content-shrink
    height: 130px;
    background: #363E46;
    display flex
    flex-direction row
    justify-content flex-start
    flex-wrap wrap
    overflow hidden
    .shrink-item
      height 120px
      width 108px
      background #12171D
      position relative
      font-size 12px
      margin-left 12px
      text-align center
      margin-top 6px
      span:nth-child(1)
        color #FFEC1A
        position absolute
        right 4px
        top 4px
      .img-content-shrink
        width 96px
        height 96px
        margin 6px 6px 0 6px
        img
          width 96px
      span:nth-child(3)
        color #fff
        font-size 12px
        line-height 14px
.page-divide
   text-align right
   position absolute
   bottom 95px
   right 36px
</style>
