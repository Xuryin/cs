<template>
  <div class="side-bar">
    <div class="side-portrait">
      <div class="portrait-img">
        <img :src="userInfo.avatarFull" alt="">
        <p>{{userInfo.nickname}}</p>
      </div>

      <div class="side-info">
        <div class="side-info-item">
          <div> <img src="@assets/img/icon_zhanghao.png" alt=""></div>
          <span>手机号：</span>
          <span>{{userInfo.phoneNumber}}</span>
        </div>

        <div class="side-info-item">
          <div>
            <img src="@assets/img/icon_id.png" alt="">
          </div>
          <span>账号：</span>
          <span>{{userInfo.id}}</span>
        </div>
      </div>

        <p class="side-getPrice" v-if="false">获得饰品金额${{userInfo.getPrice}}</p>

      <ul class="side-nav">
        <li v-for="item in navbar" :class="activeIndex == item.dir ? 'active': ''" @click="changeState(item)">{{item.name}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
import { logout } from '@api/user';
import { mapMutations, mapGetters } from 'vuex'
import { getItem } from '@utils/tools';

export default {
  name: 'sideBar',
  data () {
    return {
      navbar: [
        { index: 1, name: '余额充值', dir: 'recharge' , tab: 0},
        { index: 2, name: '饰品取回', dir: 'recaption' , tab: 0},
      /*  { index: 3, name: '我的邀请', dir: 'invited' },*/
        { index: 4, name: '退出登录', dir: 'logout' },
      ],
      activeIndex: 1,
    }
  },
  methods: {
    ...mapMutations(['changeModalStates']),
    changeState (item) {
      this.activeIndex = item.dir
      if (item.index == 4) {
        this.changeModalStates({index: 2, subTitle: '您确定要退出登录吗?', name: 'logout', modalTitle: '提示'})
      } else {
        this.$router.push({name: item.dir, query: {tab: item.tab}})
      }
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val.name)
        this.activeIndex = val.name
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.activeIndex = this.$route.name
  }
};
</script>

<style scoped lang="stylus">
.side-bar
  height 640px
  width 254px
  background-color #1E242A
  border-radius 8px

  .side-portrait
    height 220px
    width 100%
    background-color #262C32
    .portrait-img
      height 220px
      text-align center
      padding-top 24px
      img
        width 140px
        height 140px
        border-radius 50%
      p
        color #FFFFFF
        font-size 14px
        line-height 30px

  .side-info
    width 100%
    height 112px
    margin-top 10px
    .side-info-item
      height 50px
      display flex
      justify-content flex-start
      align-items center
      padding-left 30px
      div
        height 30px
        text-align center
        padding-right 18px
      span
        font-size 14px
        color #FFFFFF
  .side-getPrice
    text-align center
    color #FFDD21
    font-size 14px
    width: 190px;
    height: 36px;
    line-height 36px
    background: #12171D;
    border-radius: 18px;
    margin-left 32px

  .side-nav
    margin-top 30px
    padding-left 40px
    li
      width 174px
      height 36px
      line-height 36px
      text-align center
      background url(../../assets/img/bg_geren_normal.png)
      color #9CA0A7
      cursor pointer
    li:not(:first-child)
      margin-top 14px

    .active
      background url(../../assets/img/bg_geren_hover.png)
      color #FFFFFF

</style>
