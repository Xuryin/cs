<template>
  <div class="replacing-content">
    <div class="dec-top">
      <div class="dec-top-left">
        <div class="left-title">
          <span>素材饰品</span>
          <span>总计价值：</span>
          <span>${{amount}}</span>
          <button>
            <img src="@assets/img/clear.png" alt="">
            清空
          </button>
        </div>

        <div class="left-content">
          <div v-for="item in checkedData" class="content-item">
            <span>${{item.price}}</span>
            <div>
              <img :src="item.url" alt="">
            </div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="dec-top-right">
        <div class="left-title">
          <span>目标饰品</span>
          <span>价值范围：</span>
          <span>${{area}}</span>
        </div>
        <div class="right-content">
          <div class="aim-dec">
            <div class="aim-img">
              <img src="@assets/img/gun_1.png" alt="">
            </div>
            <p>
              <span>AWP | 二西莫夫</span>
              <span>$100</span>
            </p>
          </div>
          <button>
            <span>30%</span>
            <span>确认兑换</span>
          </button>
        </div>
      </div>
    </div>
    <div class="dec-bottom">
      <div>
        <div class="bottom-left-title">我的库存</div>
        <div class="bottom-left-content">
          <div class="left-content-item" v-for="item in checkedData">
            <contentItem :itemData="item"/>
          </div>
        </div>
      </div>
      <div>
        <div class="bottom-left-title">兑换库存</div>
        <div class="bottom-left-content">
          <div class="left-content-item" v-for="item in checkedData">
            <contentItem :itemData="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentItem from './decItem'
export default {
  name: 'bottom',
  data () {
    return {
      amount: 19.9,
      area: '8.5-11.5',
      checkedData: [
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: true},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        { name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
      ]
    }
  },
  components: { contentItem }
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
            line-height 20px
            font-size 12px
            color #FFFFFF

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

            span:nth-child(1)
              color #fff
            span:nth-child(2)
              color #FFEC1A

        button
          width: 180px;
          height: 48px;
          background: linear-gradient(0deg, #3AA9EA, #1FD8C0);
          margin-top 20px
          span:nth-child(1)
            color #FFEC1A
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
    .dec-bottom-right
      .bottom-left-title
        background #2A2F4C





</style>
