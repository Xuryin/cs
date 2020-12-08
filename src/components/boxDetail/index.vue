<template>
  <div class="detail-container">
    <div class="top-img">
      <img src="@assets/img/box_2.png" alt="">
    </div>
    <div class="box-num">
      <ul>
        <li>开箱次数</li>
        <li class="check-num" v-for="(item,index) in Array(5)">
          <span>{{index + 1}}</span>
        </li>
      </ul>
      <div class="box-num-right">
        <div class="right-animation">
          <span>动画</span>
          <a-switch default-checked @change="onChange" />
        </div>
        <div class="right-voice">
          <span>声音</span>
          <a-switch default-checked @change="onChange" />
        </div>
      </div>
    </div>
    <div class="prize-content">
      <div class="prize-list-border"></div>
      <div class="prize-list">
        <div class="prize-pointer"><img src=""></div>
        <div class="prize-content">
          <ul>
            <li class="prize-item" v-for="(item,index) in Array(9)">
              <div class="item-content">
                <p>加利尔 AR | 凤凰商号</p>
                <div>
                  <img src="../.././assets/img/gun_1.png" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="prize-list-border"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  }
}
</script>

<style scoped lang="stylus">
.active{
  background-color #1BA0B8
}
.detail-container {
  width: 1200px;
  margin-left 50%;
  transform translateX(-600px)
  border 1px solid white
  .top-img{
    width 200px
    height 136px
    margin-left 50%
    transform translateX(-100px)
    border 1px solid white
    img{
      height: 100%;
    }
  }
  .box-num{
    display flex
    justify-content space-between
    align-items center
    background-image url("../.././assets/img/bg_kaixiangcishu.png")
    -moz-background-size cover
    height: 54px;
    color white
    border 1px solid white
    ul{
      height: 100%;
      display flex
      align-items center
      margin-left 52px
      li:nth-child(1){
        margin-right 6px
      }
     li:not(:first-child){
       width 26px
       height 26px
       border 1px solid #2777EE
       margin 0 6px
       text-align center
       display flex
       align-items center
       justify-content center
       span{
         display block
         width 20px
         height: 20px;
         line-height 20px
       }
     }
    }
    .box-num-right{
      display flex
      align-items center
      flex-direction row
      justify-content flex-start
      margin-right 87px
      div{
        display flex
        height 24px
        line-height 24px
        span{
          margin 0 6px
          display flex
        }
      }
      .right-animation{
        margin-right 26px
      }
    }
  }
  .prize-list-border{
    background-image url("../.././assets/img/detail_border.png")
    background-size cover
    width 100%
    height 5.8px
  }
  .prize-list{
    position relative
    width 100%
    .prize-pointer{
      position absolute
      margin-left 50%
      margin-top -5.8px
      width 22px
      height 200px
      background-image url("../.././assets/img/img_centerline.png")
      z-index 999
    }
    .prize-content{
      overflow hidden
      ul{
        display flex
        width 100%
        transform translateX(-90px)
      }
      .prize-item{
        width 140px
        height 164px
        background-color #131723
        margin 12px 8px
        .item-content{
          width 128px
          height 148px
          margin 8px 6px
          background-image url("../.././assets/img/bg_box_blue.png")
          background-position center
          p{
            width 100%
            text-align center
            margin-top 9px
            font-size 12px
          }
          div{
            width 118px
            height 59px
            margin-top 30px
            margin-left 5px
            display flex
            align-items center
            justify-content center
            img{
              height 59px
            }
          }
        }
      }
    }
  }
}
</style>
