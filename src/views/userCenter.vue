<template>
  <div class="user-center">
    <sideBar/>
    <div class="user-content">
      <div class="user-input">
        <input type="text" placeholder="请输入你的报价链接" v-model="userTransactionURL">
        <button @click="saveLink"  :disabled="saveButton">保存</button>
      </div>
      <p>
        <img src="@assets/img/warning-icon.png" alt="">
        <span>请确认你的报价链接有效，并且设置Steam库存公开。</span>
        <span>获取交易链接</span>
      </p>
      <div class="router-content">

        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import { getArrItem, getItem } from '@utils/tools.js';
import { sideBar } from '@/components/userCenter'
import { mapMutations } from 'vuex'
import { userTradeUrl } from '@api/user';
export default {
  name: 'userCenter',
  data () {
    return {
      saveButton: false,
      userTransactionURL: ''
    }
  },
  methods: {
    ...mapMutations(['getUserInfo']),
    // 保存
    saveLink () {
      console.log( this.userTransactionURL )
      if (!/^https:\/\/steamcommunity\.com\/tradeoffer\/new\/?\?partner=\d+&token=.+$/.test(this.userTransactionURL)) {
        this.$Message.info("请填写正确的Url地址！");
        this.userTransactionURL = ""
      } else {
        userTradeUrl({ tradeUrl: this.userTransactionURL}).then(res => {
          this.saveButton = true
          if (res.data.code === 0) {
            this.getUserInfo()
            this.$Message.info("修改成功");
          } else {
            this.$Message.info(res.msg);
          }
        }).then(() => {
          this.saveButton = false
        })
      }
    }
  },
  components: {
    sideBar
  },
  watch: {
    $router (newVal, oldVal) {
      // console.log(newVal)
    }
  },
  created () {
  },
  mounted () {

  },
};
</script>

<style scoped lang="stylus">
.user-center
  margin-top 40px
  display flex
  justify-content center

  .user-content
    height 782px
    width 930px
    margin-left 16px

    .user-input
      position relative
      input
        width 800px
        height 56px
        background: #1E242A;
        border: 1px solid #364049;
        padding-left 20px
        color #9CA0A7
      input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: #9CA0A7;
        font-size: 14px;
      }
      button
        width 88px
        height 40px
        background: #3AA9EA;
        color #fff
        border none
        border-radius: 8px;
        position absolute
        right 139px
        top 9px
    p
      line-height 30px
      vertical-align bottom
      img
        position relative
        top 2px
      span
        font-size 14px
        margin-top -5px
      span:nth-child(2)
        margin-left 10px
        color #9CA0A7
      span:nth-child(3)
        color #3AA9EA
        text-decoration underline
        cursor pointer

.router-content
  margin-top 10px
  width: 930px;
  background #1E242A
  border-radius 8px
</style>
