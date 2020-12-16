<template>
  <div class="box-item">

    <div class="box-item-title">
      <img :src="bgUrl.url" alt="">
      <p>{{boxData.groupName}}</p>
    </div>
    <div class="box-show" ref="content">
      <div v-for="item in boxData.cases.slice(0, 5)" class="show-item" @click="routerTo(item)">
        <a href="#">
          <div class="box-face">
            <div class="face-box">
              <img :src="configs.imgbaseURL + item.frontPic" />
            </div>
           <div class="face-main">
             <img :src="configs.imgbaseURL + item.casePic" />
           </div>

          </div>

          <p class="box-name">{{item.caseName}}</p>

          <div class="show-operation" ref="box">
            <div class="show-price position-abs">
              <img src="@assets/img/btn_dakai_normal.png" alt="">
              <p>${{item.casePrice}}</p>
            </div>
            <div class="show-open position-abs" >
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
import { configs } from '@api/ajax';

export default {
  name: "BoxItem",
  data () {
    return {
    }
  },
  props: ['boxData', 'bgUrl'],
  methods: {
    routerTo (item) {
      console.log(item)
      this.$router.push({name: 'boxDetail', query: {id: item.caseId}})
    },
  },
  created() {
    this.configs = configs
  },
  mounted () {
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
          transition aii 0.5s ease-in-out
          text-align center
          position absolute
          left 27px
          top 12px
          img
            transition transform 0.5s ease-in-out
            width 146px
            height 71px
      .box-name
        color #FFFFFF
        font-size 14px
        text-align center
        line-height 30px
        transition all 0.5s ease-in-out

      .show-operation
        position relative
        transition all 0.5s ease-in-out
        .show-price
          z-index 11
          transition all 0.5s ease-in-out
          p
            color #FFDD21
        .show-open
          z-index 9
          transition all 0.5s ease-in-out
          p
            color #fff
            transform rotateY(-180deg)


a:hover {
  transition all 0.5s ease-in-out
  .box-face {
    background url(../../assets/img/box-bg.png) no-repeat 0 58px
    background-size 238px 81px
  }
  .show-operation {
    transition all 0.5s ease-in-out
    .show-price {
      visibility hidden
      opacity 0
      transform rotateY(180deg)
      transition all 0.5s ease-in-out
    }
    .show-open {
      visibility visible
      opacity 1
      transform rotateY(-180deg)
      transition all 0.5s ease-in-out
      p {
        transform rotateY(-180deg)
      }
    }
  }
  .face-main img{
    transform rotateZ(-5deg) translateY(-15px)
    transform-origin: 50px 50px;
    transition transform 0.5s ease-in-out
  }
}
.position-abs
  position absolute
  left 70px
  margin-top 5px
  p
    position absolute
    left 30px
    top 5px


</style>
