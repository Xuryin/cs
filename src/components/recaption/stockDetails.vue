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
            <img :src="item.awardPicture" alt="">
            <span>{{item.awardName}}</span>
          </div>
          <span>{{item.caseName}}</span>
          <span>{{item.timeCreate}}</span>
        </li>
      </ul>
    </div>

    <div class="page-divide">
      <Page v-model="pageInfo.current" :total="pageInfo.total" :page-size="pageInfo.size" @on-change="changePage"></Page>
    </div>

  </div>
</template>

<script>
import { inventory } from '@api/trade';
import { typeRate } from '@utils/tools';
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'stockDetails',
  data () {
    return {
      detailsData: [],
      pageInfo: {
        total: 0,
        current:1,
        size:10
      }
    }
  },
  methods: {
    ...mapMutations,
    getInventory() {
      let params = this.pageInfo
      params.type = 'available'
      console.log(params)
      inventory(params).then(res => {
        if (res.code === 0) {
          this.detailsData = res.data.data
          this.pageInfo = {
            total: res.data.totalItems,
            current: res.data.pageNumber,
            size: res.data.pageSize
          }
        } else {
          this.$Message.info(res.msg)
        }
      });
    },
    changePage (e) {
      this.pageInfo.current = e
      this.getInventory()
    }
  },
  components: {

  },
  mounted () {
    this.getInventory()
  }
};
</script>

<style scoped lang="stylus">
.details-page
  height 614px
  padding 20px 36px

  .details-content
    height 530px
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
        width 500px
      &:nth-child(2)
        width 200px
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
        width 200px
      >:nth-child(3)
        width 260px
      .list-img
        height 100%
        width 500px
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
    text-align right
    position fixed
    bottom 95px
    right 36px
.fontRed
  color #E51D39!important
.fontGreen
  color #1EC129!important

</style>

