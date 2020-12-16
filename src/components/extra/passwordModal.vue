<template>
  <div class="public-modal">
    <Modal
      v-model="$store.state.isShowModal == 3"
      :mask-closable="false"
      width="400"
      class-name="vertical-center-modal"
      :closable="false"
      :on-cancel="changeName"
      :footer-hide="true">
      <!--login-->
      <div class="modal-content">
        <!--密码各种头-->
        <div class="content-title-text" slot="header" >
          <p>{{title}}</p>
          <div class="close-img" slot="close" @click="changeName">
            <img src="@assets/img/close.png" alt="">
          </div>
        </div>

        <!--弹窗input大赏-->
        <div class="content-input">

          <p class="content-info" v-if="modalShowName == 'setPassword'">请设置您的密码，完成账号注册</p>
          <p class="content-info" v-if="modalShowName == 'setPassword'">请输入您的注册手机，验证后将为您重设密码</p>
          <p class="content-info" v-if="modalShowName == 'forgetPassword'">请设置您的新密码</p>

          <!--设置密码-->
          <div class="input-label" v-if="modalShowName == 'setPassword'">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_mima.png" alt="">
              </div>
              <input type="text" placeholder="你的密码">
            </div>
            <span class="input-message" v-show="false">6-16位字母数字组合，不能为纯数字</span>
          </div>

          <!--手机号-->
          <div class="input-label" v-if="modalShowName == 'forgetPassword'">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_zhanghao.png" alt="">
              </div>
              <input type="text" placeholder="你的手机号">
            </div>
            <span class="input-message" v-show="false">请输入正确的手机号</span>
          </div>
          <!--密码-->
          <div class="input-label" v-if="modalShowName == 'resetPassword'">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_mima.png" alt="">
              </div>
              <input type="text" placeholder="你的密码">
            </div>
            <span class="input-message" v-show="false">6-16位字母数字组合，不能为纯数字</span>
          </div>



          <!--确认密码-->
          <div class="input-label"  v-if="modalShowName == 'resetPassword'">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_mima.png" alt="">
              </div>
              <input type="text" placeholder="再次输入密码">
            </div>
            <span class="input-message" v-show="false">6-16位字母数字组合，不能为纯数字</span>
          </div>

          <!--短信验证码-->
          <div class="input-label" >
            <div class="input-content-verify">
              <div class="input-verify-img">
                <img src="@assets/img/icon_yzma.png" alt="">
              </div>
              <input type="text" placeholder="再次输入密码">
              <button v-if="true" class="get">获取</button>
              <button v-if="false" class="count">59s</button>
            </div>
            <span class="input-message" v-show="false">6-16位字母数字组合，不能为纯数字</span>
          </div>


        </div>

        <div class="content-footer" slot="footer">
          <button v-if="false">登录</button>
          <button v-if="true">登录/注册</button>

          <p class="footer-password-forget" v-if="false">忘记密码？</p>
          <p class="footer-login" v-if="false">未注册手机验证后自动登录</p>
          <p class="footer-login" v-if="false">确认注册，即代表您同意<span>《用户条款和隐私政策》</span></p>
          <p class="footer-email">未收到邮件？<span>未收到邮件？</span> </p>

        </div>

      </div>
      <div>

      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'password',
  data() {
    return {
      title: '设置密码'
    };
  },
  methods: {
    ...mapMutations(['changeModalStates']),
    login () {
    },
    changeName (index = 0, name = null) {
      this.$store.commit('changeModalStates', { index: index, name: name} )
    },
  },
  created() {

  },
  computed: {
    ...mapState(['modalShowName'])
  }
};
</script>

<style lang="stylus" scoped>

.vertical-center-modal {
  .ivu-modal {
    width 400px
    top: 400px;
    border-radius 0

    .ivu-modal-content {
      border-radius 0
      background: #1F2B40;
      padding-bottom 10px
      .ivu-modal-body {
        padding 0
      }
    }
    .ivu-modal-footer {
      border none
    }
  }
}

.content-title
  height 56px
  background: #23334D;
  text-align center
  display flex
  justify-content center
  align-items center
  .modal-title-text
    line-height 56px
    color 16px
  .login-tab
    width 168px
    height 32px
    display flex
    justify-content center
    cursor: pointer;
    span
      width 50%
      background: #23334D;
      border 1px solid #3AA9EA
      color #fff
      line-height 32px

    img
      width 12px
      height 12px


.content-title-text
  background #23334D url("../../assets/img/img_tchader.png") no-repeat 68px 0
  background-size 264px 7px
  height 56px
  text-align center
  display flex
  justify-content center
  align-items center
  p
    color #fff
.modalActive
  background #3AA9EA!important
.close-img
  position absolute
  right 24px
  top 16px
.content-input
  padding 8px 48px
  .content-info
    line-height 30px
    color #fff
    text-align left
  .input-label
    width 305px
    height 48px
    display flex
    flex-direction column
    margin-top 10px
    .input-content
      display flex
      flex-direction row
      justify-content center

      .input-content-img
        width 50px
        height 46px
        text-align center
        padding-top 8px
        border-top 1px solid #5A6671
        border-bottom  1px solid #5A6671
        border-left 1px solid #5A6671
      input
        width: 255px;
        height: 46px;
        background: #1F2B40
        outline none
        color #fff
        padding-left 8px
        border 1px solid  #5A6671
.input-message
  color #E51D39
  font-size 12px
  width 100%
  text-align center
  line-height 30px
.input-content-verify
  display flex
  flex-direction row
  justify-content center
  .input-verify-img
    width 50px
    height 46px
    text-align center
    padding-top 8px
    border-left 1px solid #5A6671
    border-top 1px solid #5A6671
    border-bottom 1px solid #5A6671

  input
    width: 180px;
    height: 46px;
    background: #1F2B40
    outline none
    color #fff
    padding-left 8px
    border-top 1px solid #5A6671
    border-bottom  1px solid #5A6671
    border-left 1px solid #5A6671
    border-right none
  button
    width 76px
    height 46px
    background transparent
    border 1px solid
    color #fff
  .get
    border-image: linear-gradient(45deg, #3AA9EA, #42F5DE) 1 1;
  .count
    border-color #5A6671

/*footer部分*/
.content-footer
  padding 10px 48px
  button
    width: 304px;
    height: 40px;
    border: 2px solid;
    border-image: linear-gradient(45deg, #3AA9EA, #42F5DE) 1 1;
    background-color  #1F2B40
    color #fff
    margin-bottom  10px
    &:hover
      border: 2px solid ;
      border-image: linear-gradient(45deg, #88D3FF, #A6FFF3) 1 1;
  .footer-password-forget
    color #fff
    font-size 12px
    text-align left
    line-height 30px
  .footer-login
    color #9CA0A7
    font-size 12px
    span
      color #3AA9EA
  .footer-email
    color #9CA0A7
    font-size 12px
    span
      color #3AA9EA
</style>
