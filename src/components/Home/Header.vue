<template>
  <div class="home-header">
    <div class="header-container">
      <div class="header-logo">
        <img src="@assets/img/logo.png" alt="">
      </div>
      <div class="header-nav">
        <div :class="item.router == routerName? 'active' : ''" v-for="item in navData" class="header-nav-item" @click="routerTo(item)">
          <div class="nav-img">
            <img :src="item.src" alt="">
          </div>
          <p>{{item.name}}</p>
        </div>
      </div>

      <div class="header-login" v-if="!isLoginFlag">
        <p @click="openModal('password')">登录</p>
        <p @click="openModal('register')">注册</p>
      </div>

      <div class="header-info" v-if="isLoginFlag" @click="goRecharge">
        <div>
          <img :src="userInfo.avatarFull" alt="">
        </div>
        <p>{{userInfo.nickname}}</p>
        <p>$ {{userInfo.balance | formatMoney}}</p>
      </div>
    </div>

    <div class="header-bottom">
      <div class="bottom-item" v-for="item in bottomData">
        <div class="bottom-img">
          <img :src="item.src" alt="">
        </div>
        <p :style="{color: item.color}">{{item.number}}</p>
        <p>{{item.per}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { getItem, setItem, formatMoney } from '@utils/tools';
import { userInfo } from '@api/user';
import { indexHistory } from '@api/trade';
import {bus} from '@utils/bus';

export default {
  name: 'Header',
  data () {
    return {
      routerName: '',
      isShowHeader: false,
      navData: [
        {src: require('@assets/img/icon_baobox.png') , name: 'CSGO宝箱', isActive: true, router: 'Home'},
        {src: require('@assets/img/icon_taihuan.png') , name: '饰品汰换', isActive: false, router: 'replacing'},
        {src: require('@assets/img/icon_kucun.png') , name: '我的库存' , isActive: false, router: 'recaption' , tab: '0'},
        {src: require('@assets/img/icon_chongzhi.png') , name: '在线充值', isActive: false, router: 'recharge', tab: '0'},
      ],
      bottomData: [
        {src: require('@assets/img/icon_zaixian.png') , number: 0, per: '在线', color: '#7CE539'},
        {src: require('@assets/img/icon_zhuce.png') , number: 1, per: '注册',  color: '#FFB321'},
        {src: require('@assets/img/icon_yikaixiang.png') , number: 2, per: '开箱',  color: '#0066FF'},
        {src: require('@assets/img/icon_yiquhui.png') , number: 3, per: '已取回',  color: '#B716F3'},
      ],
      isLoginFlag: false,
      userInfo: null
    }
  },
  filters: {
    formatMoney
  },
  methods: {
    ...mapMutations(['changeModalStates']),
    routerTo (item) {
      this.$router.push({name: item.router, query: {tab: item.tab}})
    },
    openModal (name) {
      this.$store.commit('changeModalStates', {index: 1, name: name})
    },
    goRecharge () {
      this.$router.push({name: 'recharge', query: {tab: 0}})
    },
    getData() {
      indexHistory().then(res => {
        if (res.code == 0) {
          this.bottomData.forEach(item => {
            switch (item.number) {
              case 0:
                item.number = res.data.onlineUser
                break;
              case 1:
                item.number = res.data.redeemed_count
                break;
              case 2:
                item.number = res.data.total
                break;
              case 3:
                item.number = res.data.user_count
                break;
            }
          })
        } else {
          this.$Message('获取信息失败')
        }
      })
    },
    getUserInfo () {
      this.userInfo = {
        nickname: 'aaa',
        balance: 0,
        avatar: 'http://localhost:8080/img/knife_1.1b78f71e.png'
      }
      // userInfo().then(res => {
      //   if (res.code === 0) {
      //     setItem('userInfo', res.data);
      //     this.userInfo = res.data
      //   } else {
      //     localStorage.removeItem('user');
      //   }
      // });
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        // console.log(val.name)
        this.routerName = val.name
      },
      deep: true
    },
    isLoginFlag: {
      handler: (val, oldVal) => {
        setItem('loginFlag', val)
      }
    }
  },
  created () {
    this.routerName = this.$route.name
    bus.$on('login', (obj) => {
      this.isLoginFlag = obj
      console.log(obj)
    })
  },
  mounted() {
    this.getData()
    this.getUserInfo()
    this.isLoginFlag = getItem('isLoginFlag')
    bus.$on('login', (obj) => {
      console.log(122121)
      this.isLoginFlag = obj
    })
  },
  computed: {
    ...mapGetters({

    })
  },
  beforeDestroy() {

  }
};
</script>

<style scoped lang="stylus">
.home-header
  width 100%
  .header-container
    position relative
    width 1200px
    height 96px
    margin-left 50%
    transform translateX(-600px)
    display flex
    justify-content flex-start
    .header-logo
      height 96px
      display flex
      align-items center
    .header-nav
      display flex
      justify-content flex-start
      align-items center
      height 96px
      margin-left 20px
      .header-nav-item
        display flex
        align-items center
        flex-direction column
        height 96px
        width 135px
        cursor pointer
        .nav-img
          width 50px
          height 50px
          margin-top 15px
          text-align center
          img
            width 45px
            height 45px
        p
          line-height 15px
          color #FFFFFF
          font-size 14px

    .header-login
      height 35px
      position absolute
      right 0
      top 30px
      display flex
      justify-content center
      cursor: pointer;
      p
        line-height 35px
        text-align center
        color #FFFFFF
      p:nth-child(1)
        width 87px
        background url(../../assets/img/btn_denglu_normal.png) no-repeat 0 0
        background-size 100% 100%
        &:hover
          background url(../../assets/img/btn_denglu_hover.png) no-repeat 0 0
          background-size 100% 100%
      p:nth-child(2)
        width 75px
        margin-left -8px
        background url(../../assets/img/btn_zhuce_normal.png) no-repeat 0 0
        background-size 100% 100%
        &:hover
          background url(../../assets/img/btn_zhuce_hover.png) no-repeat 0 0
          background-size 100% 100%

    .header-info
      height 35px
      position absolute
      right 0
      top 30px
      display flex
      justify-content center
      align-items center
      cursor: pointer;
      div
        img
          width 36px
          height 36px
          margin-right 13px
          border-radius 50%
      p:nth-child(2)
        font-size 18px
        color #FFFFFF
      p:nth-child(3)
        font-size 18px
        color #FFEC1A
        margin-left 30px
  .header-bottom
    width 868px
    height 48px
    margin-left 50%
    transform translateX(-434px)
    background url(../../assets/img/header_bottom_bg.png) no-repeat 0 0
    background-size 100% 100%
    display flex
    justify-content center

    .bottom-item
      height 48px
      width 170px
      display flex
      align-items center
      justify-content flex-start
      .bottom-img
        padding 5px 0 0 25px
      p
        font-size 14px
        margin-left 5px
      p:nth-child(3)
        color #ffffff
        margin-left 10px
.active
  background url(../../assets/img/bg_daohang_hover.png) no-repeat 0 0
  background-size 100% 100%
</style>
