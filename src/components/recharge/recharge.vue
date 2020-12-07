<template>
  <div class="recharge-page">
    <subTitle :titleID="0"/>
    <div class="recharge-mount">
      <p>充值金额</p>
      <div class="mount-item">
        <span v-for="dollar in mountData"  :class="isChecked == dollar.id ? 'active' : ''" @click="checkMount(dollar.id)" >
          ${{dollar.mount}}
          <span class="extra-icon" v-if="dollar.extra">+3%</span>
        </span>
      </div>

    </div>

    <div class="arrive-mount">
      <p>到账金额</p>
      <p>${{arriveMount}}</p>
    </div>

    <div class="realPay-mount">
      <p>实付金额</p>
      <p>${{pay}}</p>
    </div>

    <div class="pay-methods">
      <p>支付方式</p>
      <div class="methods-items">
        <div v-for="item in payMethods" :class="methodsIndex == item.id ? 'methodsActive': ''" @click="methodsIndex= item.id" class="item-pay">
          <img :src="item.url" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="confirm-pay">
      <p></p>
      <button>确认支付</button>
    </div>
  </div>
</template>

<script>
import { subTitle } from './index';
export default {
  name: 'recharge',
  components: {
    subTitle
  },
  data () {
    return {
      mountData: [
        {id: 0, mount: 5, extra: false},
        {id: 1, mount: 10, extra: false},
        {id: 2, mount: 20, extra: true},
        {id: 3, mount: 50, extra: false},
        {id: 4, mount: 100, extra: false},
      ],
      arriveMount: '20.6',
      pay: '20.6',
      payMethods: [{url:require('../../assets/img/WeChat.png') , name: '微信支付', id: 0}, {url:require( '../../assets/img/aliPay.png'), name: '支付宝支付', id: 1}],
      isChecked: 0,
      methodsIndex: 0
    }
  },
  methods: {
    checkMount (index) {
      this.isChecked = index
    }
  },

};
</script>

<style scoped lang="stylus">
.recharge-page
  width 930px
  height 480px
  p:nth-child(1)
    margin-left 12px
    color #FFFFFF
    width 95px
    text-align center
  .recharge-mount
    height 96px
    display flex
    justify-content flex-start
    align-items center
    .mount-item
      display flex
      justify-content center
      span
        width: 90px;
        height: 48px;
        background: #262C32;
        border: 1px solid #54616D;
        border-radius: 8px;
        text-align center
        line-height 48px
        color #FFFFFF
        position relative
        cursor: pointer;
        .extra-icon
          position absolute
          top 0
          right 0
          border none
          display block
          background #3AA9EA
          width 25px
          height 12px
          border-radius 0 8px 0 0
          color #fff
          font-size 12px
          line-height 12px

      span:not(:first-child)
        margin-left 5px


  .arrive-mount
    display flex
    justify-content flex-start
    align-items center
    height 55px
    p:nth-child(2)
      font-size: 24px;
      font-weight: 400;
      color: #FFDD21
      height 100%
      line-height 45px
  .realPay-mount
      display flex
      justify-content flex-start
      align-items center
      height 55px
      p:nth-child(2)
        font-size: 24px;
        font-weight: 400;
        color: #1EC129;
        height 100%
        line-height 45px
  .pay-methods
    height 96px
    display flex
    justify-content flex-start
    align-items center
    .methods-items
      display flex
      justify-content center
      align-items center
      .item-pay
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 72px
        height 72px
        margin-right 20px
        border: 1px solid #54616D;
        border-radius: 8px;
        padding-top 5px
        cursor pointer
        img
          width 33px
          height 33px
        span
          margin-top 5px
          color #FFFFFF
          font-size 12px




  .confirm-pay
    display flex
    margin-top 25px
    button
      width: 160px;
      height: 48px;
      border: 2px solid #3AA9EA;
      background-color transparent;
      color: #FFFFFF;

.active
  background: #335271!important;
  border: 1px solid #3AA9EA!important;

.methodsActive
  border: 1px solid #3AA9EA!important;
</style>
