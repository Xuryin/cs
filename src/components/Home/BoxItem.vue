<template>
  <div class="box-item">

    <div class="box-item-title">
      <img :src="boxData.bgUrl" alt="">
      <p>{{boxData.title}}</p>
    </div>
    <div class="box-show">
      <div v-for="item in boxData.content" class="show-item">
        <a href="#">
          <div class="box-face">
            <div class="face-box">
              <img :src="item.url" />
            </div>
           <div class="face-main">
             <img :src="item.content" />
           </div>

          </div>

          <p class="box-name">{{item.name}}</p>

          <div class="show-operation">
            <div class="show-price position-abs">
              <img src="@assets/img/btn_dakai_normal.png" alt="">
              <p>${{item.price}}</p>
            </div>
            <div class="show-open position-abs">
              <img src="@assets/img/btn_dakai_hover.png" alt="">
              <p>打开</p>
            </div>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "BoxItem",
  data () {
    return {
    }
  },
  props: ['boxData'],
  methods: {
  },
  mounted () {
    console.log(this.boxData)
  }
}
</script>

<style scoped lang="stylus">
.box-item
  .box-item-title
    width 190px
    height 60px
    position relative
    img
      width 190px
      height 60px
    p
      position absolute
      left 70px
      top 24px
      color #FFFFFF
      font-size 18px
  .box-show
    width 100%
    display flex
    justify-content flex-start
    align-items center
    margin-top 10px

    .show-item
      width 238px
      height 210px
      margin-left 1px

      .box-face
        height 140px
        text-align center
        position relative
        border: 1px solid;
        border-image: -webkit-linear-gradient(transparent, #364049) 1 1 ;
        border-image: -moz-linear-gradient( transparent, #364049) 1 1 ;
        border-image: linear-gradient( transparent, #364049) 1 1 ;
        .face-box
          img
            width 200px
            height 136px

        .face-main
          text-align center
          position absolute
          left 27px
          top 12px
          img
            width 146px
            height 71px
      .box-name
        color #FFFFFF
        font-size 14px
        text-align center
        line-height 30px

      .show-operation
        position relative
        transition all 0.5s ease-in-out
        .show-price
          z-index 11
          p
            color #FFDD21
        .show-open
          z-index 9
          p
            color #fff

        .position-abs
          position absolute
          left 70px
          margin-top 5px
          p
            position absolute
            left 35px
            top 5px

a:hover {
  .box-face {
    background url(../../assets/img/box-bg.png) no-repeat 0 58px
    background-size 238px 81px
  }
  .show-operation {
    transition all 0.5s ease-in-out
    .show-price {
      visibility hidden
      opacity 0
    }
    .show-open {
      visibility visible
      opacity 1
    }
  }
}


</style>
