<template>
  <div class="details-page">
    <div class="details-content">
      <div class="details-title">
        <span>饰品</span>
        <span>来源</span>
        <span>时间</span>
      </div>

      <ul class="details-list">
        <li v-for="item in detailsData">
          <div class="list-img">
            <img :src="item.url" alt="">
            <span>{{item.name}}</span>
          </div>
          <span>{{item.origin}}</span>
          <span>{{item.date}}</span>
        </li>
      </ul>
    </div>

    <div class="page-divide">
      <Page :total="detailsData.length" :page-size="10"></Page>
    </div>

  </div>
</template>

<script>

export default {
  name: 'stockDetails',
  data () {
    return {
      detailsData: [
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: 'XX箱子'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
        {
          date: '2020年12月30日 12:39:45',
          name: '海豹短刀（★）屠夫',
          url: require('../../assets/img/knife_1.png'),
          origin: '兑换商城'
        },
      ],
      mini: 'mini'
    }
  },
  methods: {

  },
  components: {

  }
};
</script>

<style scoped lang="stylus">
.details-page
  height 740px

  .details-content
    height 600px
    margin  20px 36px
    overflow hidden

  .details-title
    width: 858px;
    height: 50px;
    background: #364049;
    display flex
    justify-content center
    align-items center
    span
      text-align center
      color #fff
      &:nth-child(1)
        width 300px
      &:nth-child(2)
        width 400px
      &:nth-child(3)
        width 260px

  .details-list
    li
      width 100%
      height 54px
      display flex
      justify-content center
      align-items center
      span
        color #fff
        text-align center
      >:nth-child(2)
        width 400px
      >:nth-child(3)
        width 260px
      .list-img
        height 100%
        width 300px
        line-height 60px
        text-align center
        display flex
        justify-content center
        align-items center
        img
          width 48px
          height 48px
        span
          width 60%
          text-align left
          padding-left 16px
    li:nth-child(2n)
      background: #262C32;
    li:nth-child(2n-1)
      background-color transparent
  .page-divide
    height 46px
    width 836px
    text-align right
    position fixed
    bottom -40px
    right 36px
    line-height 42px
.fontRed
  color #E51D39!important
.fontGreen
  color #1EC129!important

</style>

