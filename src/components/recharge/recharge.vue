<template>
  <div class="recharge-page">
    <div class="recharge-mount">
      <p>充值金额</p>
      <div class="mount-item">
        <span v-for="(item, key) in amountData"  :class="isChecked == key ? 'active' : ''" @click="checkMount(key)" >
          ${{item | formatMoney}}
          <span class="extra-icon" v-if="false">+3%</span>
        </span>
      </div>

    </div>

    <div class="arrive-mount">
      <p>到账金额</p>
      <p>$ {{arriveMount | formatMoney}}</p>
    </div>

    <div class="realPay-mount">
      <p>实付金额</p>
      <p>￥{{pay | formatMoney}}</p>
    </div>

    <div class="pay-methods">
      <p>支付方式</p>
      <div class="methods-items">
        <div v-for="item in payMethods" :class="methodsIndex == item.id ? 'methodsActive': ''" @click="changeMethods(item.id)" class="item-pay">
          <img :src="item.url" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="confirm-pay">
      <p></p>
      <button @click="confirm" :disabled="confirmButton">确认支付</button>
    </div>


  </div>
</template>

<script>
import { payTypeGet, rechargeQr, checkOrder } from '@api/user';
import { getArrItem, formatMoney } from '@utils/tools';
import { mapMutations } from 'vuex'

export default {
  name: 'recharge',
  data () {
    return {
      amountData: [],
      arriveMount: 0,
      pay: 0,
      payMethods: [{url:require('../../assets/img/WeChat.png') , name: '微信支付', id: 1}, {url:require( '../../assets/img/aliPay.png'), name: '支付宝支付', id: 0}],
      isChecked: 0,
      methodsIndex: 0,
      configData: [],
      confirmButton: false,
      orderNumber: 0,
      checkInterVal: null
    }
  },
  filters: {
    formatMoney
  },
  methods: {
    checkMount (index) {
      this.isChecked = index
      this.arriveMount = this.amountData[index]
      this.pay = this.amountData[index] * 7
    },
    changeMethods (id) {
      this.methodsIndex= id
      let obj = getArrItem(this.configData, 'key', id)
      this.amountData = obj.amountList
      this.checkMount(0)
    },
    payConfigs () {
      payTypeGet().then(res => {
        console.log(res.data.rechargeInfo)
        this.configData = res.data.rechargeInfo
      }).then(() => {
        this.changeMethods(1)
      })
    },
    confirm () {
      if (this.pay == 0) {
        this.$Message.info('充值金额不能为0')
      } else {
        let tradeType, type
        this.methodsIndex == 0 ? tradeType = 'pay_alipay_code' : tradeType = 'pay_wxpay_code'
        this.methodsIndex == 0 ? type = '支付宝' : type = '微信'
        let formData = {
          amount: this.arriveMount,
          tradeType: tradeType
        }
        // let qrcode = 'https://interface.e8pay.com/api/QrCode/9D1E5622DA317DE83544D47E37571EA9'
        rechargeQr(formData).then(res => {
          if (res.code == 0) {
            let qrcode = res.data.qr
            this.orderNumber = res.data.orderNo
            this.$store.commit('changeModalStates', {index: 2, name: 'recharge', qrCode: qrcode, payAmount: this.arriveMount, subTitle: `${type}扫码支付`})
            this.checkInterVal = setInterval(this.checkPayResult, 5000)
          } else {
            this.$Message.info(res.msg)
          }
        })

      }
    },
    checkPayResult () {
      checkOrder(this.orderNumber).then(res => {
        console.log(res)
        if (res.code == 0) {
          this.$store.commit('changeModalStates', {index: 0})
          clearInterval(this.checkInterVal)
          this.userInfo()
        }
      })
    }
  },
  mounted () {
    this.payConfigs()

  },
  computed: {
    ...mapMutations(['changeModalStates', 'getUserInfo'])
  }

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
