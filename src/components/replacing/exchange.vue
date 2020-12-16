<template>
  <div class="replacing-content">
    <div class="dec-top">
      <div class="dec-top-left">
        <div class="left-title">
          <span>素材饰品</span>
          <span>总计价值：</span>
          <span>${{amount}}</span>
          <button @click="clear">
            <img src="@assets/img/clear.png" alt="">
            清空
          </button>
        </div>

        <div class="left-content">
          <div v-for="item in checkedData" class="content-item" @click="removeItem(item)">
            <span>${{item.price}}</span>
            <div>
              <img :src="item.imgUrl" alt="">
            </div>
            <span :title="item.name">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="dec-top-right" >
        <div class="left-title">
          <span>目标饰品</span>
          <span>价值范围：</span>
          <span>${{targetPrice | formatMoney}}</span>
        </div>
        <div class="right-content" >
          <div class="aim-dec" v-if="checkedTarget.id">
            <div class="aim-img" >
              <img :src="checkedTarget.imgUrl" alt="">
            </div>
            <p>
              <span :title="checkedTarget.name">{{ checkedTarget.name }}</span>
              <span>${{ checkedTarget.price }}</span>
            </p>
          </div>
          <button v-if="rate >= 85 && rate <= 110 && checkedTarget.id" class="enabled-button"  @click="validConfirm">
            <span>{{ rate | formatMoney }}%</span>
            <span>确认兑换</span>
          </button>
          <button v-if="(rate < 85 || rate > 110 ) && checkedTarget.id" class="disabled-button" disabled>
            <span>{{ rate | formatMoney}}%</span>
            <span>确认兑换</span>
          </button>
          <p style="line-height: 30px; color: red" v-if="(rate < 85 || rate > 110 )&& checkedTarget.id"> 兑换素材的总价值必须≤目标的85%~110%之间</p>
        </div>
      </div>
    </div>
    <div class="dec-bottom">
      <div>
        <div class="bottom-left-title">我的库存</div>
        <div class="bottom-left-content">
          <div class="left-content-item" v-for="item in provideData" @click="checkCurrent(item)">
            <contentItem :itemData="item" :checkIndexData="checkedIndex" typeName="stock"/>
          </div>
        </div>
      </div>
      <div>
        <div class="bottom-right-title">兑换库存</div>
        <div class="bottom-left-content">
          <div class="left-content-item" v-for="item in targetData" @click="checkTargetItem(item)">
            <contentItem :itemData="item" :checkIndex="checkedID" typeName="wanted"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentItem from './decItem'
import { validLogin, inArray, conversion, formatMoney, fixed, getItem } from '@utils/tools';
import { changeInventory, changeTarget, change } from '@api/trade';
import { checkBalance } from '@api/user';
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'bottom',
  data () {
    return {
      amount: 0,
      checkedData: [],
      checkedIndex: [],
      rate: 0,
      targetData: [],
      provideData: [],
      checkedTarget: {},
      targetPrice: 0,
      checkedID: 0,
      routerName: 3,
      hoverFlag: 0,
      priceDifference: 0,

      // 兑换
      msg: ''
    }
  },
  filters: {
    conversion, formatMoney, fixed
  },
  methods: {
    ...mapMutations(['changeModalStates']),
    checkCurrent (item) {
      if (this.checkedData.includes(item)) {
        this.removeItem(item)
      } else {
        this.checkedData.push(item)
        this.checkedIndex.push(item.id)
      }
      if (this.checkedData.length > 8) {
        this.$Message.info('不能超过8个素材')
        this.checkedData = this.checkedData.slice(0, 8)
      }
      this.calcRate()
    },
    checkTargetItem (item) {
      this.checkedTarget = item
      this.targetPrice = item.price
      this.checkedID = item.id
      this.calcRate()
    },
    removeItem (item) {
      this.checkedData.remove(item)
      this.checkedIndex.remove(item.id)
      this.calcRate()
    },
    getProvideList () {
      changeInventory().then(res => {
        if (res.code == 0) {
          this.provideData = res.data
          console.log(res.data)
        }
      })
    },
    getTargetList (price) {
      let form = {price : price}
      changeTarget(form).then( res => {
        if (res.code == 0) {
          this.targetData = res.data || []
        }
      })
    },
    clear () {
      this.checkedData = []
      this.checkedIndex = []
      this.rate = 0
      this.calcRate()
    },
    calcRate () {
      this.amount = 0
      this.checkedData.forEach(item => {
        this.amount += item.price
      })
      this.amount = fixed(this.amount, 2)
      if (this.amount == 0 ) {
        this.rate = 0
      } else {
        this.rate = this.amount / this.targetPrice * 100
      }
      // 改变右边的数组
      console.log(this.amount)
      this.getTargetList( this.amount )
    },
    checkBalance () {
      this.balance = getItem('userInfo').balance
      console.log(this.balance)
      /* checkBalance().then(res => {
         console.log(res.data)
       })*/
    },
    // 确认之前的验证
    validConfirm () {
      let totalPrice = 0
      this.checkedData.forEach(item => {
        totalPrice += item.price
      })
      totalPrice = fixed(totalPrice, 2)
      this.priceDifference = fixed((totalPrice - this.balance), 2)
      if ( this.priceDifference > 0 ) {
        // 缺钱
        let msg = `您的余额不足以补差价${this.priceDifference}，请前往充值`
        this.$store.commit('changeModalStates', { index: 2, name: 'replacingRecharge', subTitle: msg, modalTitle: '提示'});
        return false
      }
      this.submitConfirm()
    },
    submitConfirm () {
      let formData = {items: [], targetId: 0}
      this.checkedData.forEach( item => {
        formData.items.push(item.id)
      } )
      formData.targetId = this.checkedTarget.id
      change(formData).then(res => {
        if (res.code == 0) {
          // TODO 1.刷新userinfo 2.刷新素材库
          let msg = ''
          res.data.isSuccess ? msg = '兑换成功' : msg = '兑换失败'
          this.$Message.info(msg)
        } else {
          this.$Message.info(res.msg)
        }
      }).then(() => {
        this.init()
      })
    },
    init () {
      this.getProvideList()
      this.getTargetList()
      this.checkedData = []
      this.checkedIndex = []
      this.amount = 0
      this.checkedTarget = {}
      this.targetPrice = 0
      this.checkedID = 0
      this.hoverFlag = 0
    },
  },
  components: { contentItem },
  mounted() {
    if (validLogin()) {
      this.getProvideList()
    }
    this.checkBalance()
    this.routerName = this.$route.name
  }
};
</script>

<style scoped lang="stylus">
.replacing-content
  margin-top 35px
  .dec-top
    height 364px
    display flex
    justify-content space-between
    div
      width 550px
    .left-title
      height 48px
      background #263649
      padding 0 17px
      line-height 48px
      position relative
      span:nth-child(1)
        font-size 14px
        color #fff
      span:nth-child(2)
        font-size 12px
        color #9CA0A7
        margin-left 20px
      span:nth-child(3)
        font-size 12px
        color #FFDD21
      button
        position absolute
        right 18px
        top 12px
        width: 56px;
        height: 24px;
        line-height 24px
        background: #3AA9EA;
        color #fff
        font-size 12px
        border-radius: 4px;
        img
          position relative
          top 2px


    .dec-top-left
      background #1A2430
      .left-content
        display flex
        justify-content flex-start
        flex-wrap wrap
        margin-top 16px
        .content-item
          width 120px
          height 141px
          border-top 2px solid #771BB7
          position relative
          padding 6px
          text-align center
          margin-left 14px
          background: linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2));
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
            display block
            line-height 20px
            height 30px
            font-size 12px
            color #FFFFFF
            overflow: hidden
            text-overflow ellipsis
            white-space  nowrap
            cursor pointer

    .dec-top-right
      height 364px
      .left-title
        background #2A2F4C
      .right-content
        width 100%
        height 315px
        background url(../../assets/img/bg_duihuan.png) no-repeat 0 0
        background-size 100% 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .aim-dec
          width 160px
          height 188px
          border-top 2px solid #771BB7
          background: linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2));
          padding 5px 9px
          .aim-img
            width 100%
            height 142px
            text-align center
            img
              width 142px
              height 142px
          p
            line-height 40px
            font-size 12px
            display flex
            justify-content space-between
            span
              display block
            span:nth-child(1)
              color #fff
              overflow: hidden
              text-overflow ellipsis
              white-space  nowrap
              cursor pointer
            span:nth-child(2)
              height 30px
              color #FFEC1A


        .enabled-button
          width: 180px;
          height: 48px;
          background: linear-gradient(0deg, #3AA9EA, #1FD8C0);
          margin-top 20px
          span:nth-child(1)
            color #FFEC1A
            font-weight bold
          span:nth-child(2)
            color #fff
            margin-left 10px
        .disabled-button
          width: 180px;
          height: 48px;
          background: linear-gradient(0deg, #648F9C, #50908B);
          margin-top 20px
          span:nth-child(1)
            color #BF4052
            font-weight bold
          span:nth-child(2)
            color #fff
            margin-left 10px



  .dec-bottom
    display flex
    justify-content space-between
    height 210px
    margin-top 36px
    >div
      width 550px
    .bottom-left-title
      height 36px
      width 100%
      line-height 36px
      color #fff
      font-size 14px
      padding-left 14px
      background #263649
    .bottom-left-content
      height 174px
      display flex
      justify-content flex-start
      flex-direction row
      flex-wrap wrap
      padding 8px 12px
      overflow-y  scroll
      background #1A2430
.bottom-right-title
  background #2A2F4C
  height 36px
  width 100%
  line-height 36px
  color #fff
  font-size 14px
  padding-left 14px

.content-title-text
  background #23334D url("../../assets/img/img_tchader.png") no-repeat 68px 0
  background-size 264px 7px
  height 56px
  text-align center
  display flex
  justify-content center
  align-items center

.input-content
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0 48px

  p
    line-height 30px
    color #fff
    text-align left
    margin 17px 0

.close-img
  position absolute
  right 24px
  top 16px

/*footer部分*/
.content-footer
  display flex
  justify-content space-around

  .cancel
    width: 90px;
    height: 40px;
    border: 2px solid #5A6671;
    color #9CA0A7
    background transparent

  .confirm
    width: 90px;
    height: 40px;
    border: 2px solid #3AA9EA;
    color #FFFFFF

  .recharge
    width: 90px;
    height: 40px;
    border: 2px solid #3AA9EA;
    color #FFFFFF


</style>
