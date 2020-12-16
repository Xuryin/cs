<template>
  <div class="detail-container">
    <div class="top-img">
      <img src="@assets/img/box_2.png" alt="">
    </div>
    <div class="box-num">
      <ul>
        <li>开箱次数</li>
        <li class="check-num" v-for="(item,index) in Array(5)" @click="selectItem(index)"
            :class="boxAmount -1 == index? 'active' : ''">
          <span>{{ index + 1 }}</span>
        </li>
      </ul>
      <div class="box-num-right">
        <div class="right-animation">
          <span>动画</span>
          <div class="switch-box">
            <a-switch default-checked @change="onChange" false-color="#214167" true-color="#2777EE"/>
          </div>

        </div>
        <div class="right-voice">
          <span>声音</span>
          <div class="switch-box">
            <a-switch default-checked @change="onChange" false-color="#214167" true-color="#2777EE"/>
          </div>
        </div>
      </div>
    </div>
    <div class="lottery-div">
      <lottery v-for="item in boxAmount" :startMove="start"/>
    </div>


    <switchButton/>



    <div class="award-list">
      <p>奖品列表</p>
      <div class="box-content">
        <div class="box-item" v-for="(item,index) in lotteryData">
          <listItem :boxData="item" :margin="margin[(index+6)%6]" :bg-color="bgColor"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import lottery from './lottery';
import listItem from './listItem';
import switchButton from './switchButton';
import { detail } from '@api/trade';

export default {
  data() {
    return {
      boxAmount: 1,
      lotteryData: [
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), irate: 2.12},
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), rate: 2.12},
      ],
      bgColor: {},
      margin: [{margin: '20px'}, {margin: '20px'}, {margin: '20px'}, {margin: '20px'}, {margin: '20px'}, {margin: '0'},],
      start:false,
    };
  },
  methods: {
    getData () {
      detail(this.boxID).then(res => {
        this.lotteryData = res.data.items
      })
    },
    checkBg (item) {
      switch (item.rarityName) {
        case "隐秘":
        case "非凡":
        case "违禁":
          this.bgColor = {border:'0.125rem solid #FFD514',bg:'linear-gradient(180deg, rgba(255, 213, 20, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "保密":
          this.bgColor = {border:'0.125rem solid #CE4748',bg:'linear-gradient(180deg, rgba(206, 71, 72, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "受限":
          this.bgColor = {border:'0.125rem solid #771BB7',bg:'linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "工业级":
        case "军规级":
          this.bgColor = {border:'0.125rem solid #2950F4',bg:'linear-gradient(180deg, rgba(41, 80, 244, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "消费级":
          this.bgColor = {border:'0.125rem solid #1FAD82',bg:'linear-gradient(180deg, rgba(31, 173, 130, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
      }
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    selectItem(index) {
      console.log(index);
      this.boxAmount = index + 1;
    },

  },
  components: { lottery, listItem, switchButton },
  mounted() {
    this.boxID = this.$route.query.id
    console.log(this.boxID)
    this.getData()
  }
};
</script>

<style scoped lang="stylus">
.detail-container {
  .top-img {
    width 200px
    height 136px
    margin-left 50%
    transform translateX(-100px)
    img {
      height: 100%;
    }
  }

  .box-num {
    display flex
    justify-content space-between
    align-items center
    background-image url("../.././assets/img/bg_kaixiangcishu.png")
    -moz-background-size cover
    height: 54px;
    color white

    ul {
      height: 100%;
      display flex
      align-items center
      margin-left 52px
      cursor pointer

      li:nth-child(1) {
        margin-right 6px
      }

      li:not(:first-child) {
        width 26px
        height 26px
        border 1px solid #2777EE
        margin 0 6px
        text-align center
        display flex
        align-items center
        justify-content center
        padding 2px

        &:hover {
          border 1px solid #1BA0B8
        }
        span {
          display block
          width 20px
          height: 20px;
          background #214167
          line-height: 20px;
          &:hover {
            background #1BA0B8
          }
        }
      }
    }

    .box-num-right {
      display flex
      align-items center
      flex-direction row
      justify-content flex-start
      margin-right 87px

      div {
        display flex
        height 24px
        line-height 24px

        span {
          margin 0 6px
          display flex
        }
      }

      .right-animation {
        margin-right 26px
      }
    /*  .switch-box {
        width: 48px;
        height: 24px;
        border: 1px solid #2777EE;
        border-radius: 12px;
      }*/
    }
  }

  .prize-list-border {
    background-image url("../.././assets/img/detail_border.png")
    background-size cover
    width 100%
    height 5.8px
  }

  .prize-list {
    position relative
    width 100%

    .prize-pointer {
      position absolute
      margin-left 50%
      margin-top -5.8px
      width 22px
      height 200px
      background-image url("../.././assets/img/img_centerline.png")
      z-index 999
    }
  }
}
.active {
  li {
    border 1px solid #1BA0B8 !important
  }

  > span {
    background #1BA0B8 !important
  }
}

.background-open
  .open-button
    background url("../../assets/img/btn_kaixiang_normal.png") no-repeat 0 0
  .try-button
    background url("../../assets/img/btn_shiwan_normal.png") no-repeat 0 0

.background-hover
  .open-button
    background url("../../assets/img/btn_kaixiang_hover.png") no-repeat 0 0
  .try-button
    background url("../../assets/img/btn_shiwan_hover.png") no-repeat 0 0

.background-opened
  .open-button
    background url("../../assets/img/btn_kaixiang_disabled.png") no-repeat 0 0
  .try-button
    background url("../../assets/img/btn_shiwan_disabled.png") no-repeat 0 0

.lottery-button
  width 100%
  display flex
  flex-direction row
  justify-content center
  align-items center
  cursor pointer
  position relative
  padding 10px 0 20px 0

  .open-button
    width 164px
    height 60px
    text-align center
    position relative
    span
      font-size 16px
      z-index 99
      line-height 60px
    span:nth-child(1)
      color #fff
    span:nth-child(2)
      color #FFEC1A
      margin-left 10px
  .try-button
    width 57px
    height 60px
    position relative
    left -10px
    top 2px
    span
      font-size 14px
      width 14px
      height 28px
      position absolute
      left 20px
      top 7px
      color #FFFFFF
  .button-info
    font-size 14px
    position absolute
    bottom 0
    left 520px
    span:nth-child(1)
      color #3AA9EA
    span:nth-child(2)
      color #fff

.award-list
  margin-top 20px
  p
    font-size 14px
    color #fff
  .box-content
    display flex
    justify-content flex-start
    flex-wrap wrap
    &:nth-child(6n){
      .box-item{
        background: linear-gradient(180deg, rgba(119,27,183,0.2), rgba(24,28,33,0.2));
        border-top: 0.125rem solid #771bb7;
      }
     }
    &:nth-child(6n-5){
      .box-item{
        background: linear-gradient(180deg, rgba(31, 173, 130, 0.2), rgba(24, 28, 33, 0.2));
        border-top: 0.125rem solid #1FAD82;
      }
     }
</style>
