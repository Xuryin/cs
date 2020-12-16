<template>
  <div class="public-modal">
    <Modal
      v-model="$store.state.isShowModal == 1"
      :mask-closable="false"
      width="400"
      class-name="vertical-center-modal"
      :closable="false"
      :on-cancel="changeName"
      :footer-hide="true">
      <!--login-->
      <div class="modal-content">

        <!--登录各种头-->
        <div class="content-title" slot="header" v-if="modalShowName ==  'password' || modalShowName == 'message' ">
          <div class="login-tab">
            <span :class="modalShowName == 'password' ? 'modalActive' : ''"
                  @click="changeName(1, 'password')">密码登录</span>
            <span :class="modalShowName == 'message' ? 'modalActive' : ''" @click="changeName(1, 'message')">短信登录</span>
          </div>

          <div class="close-img" slot="close" @click="changeName">
            <img src="@assets/img/close.png" alt="">
          </div>
        </div>

        <!--注册的头-->
        <div class="content-title-text" slot="header" v-if="modalShowName == 'register' ">
          <p>注册</p>
          <div class="close-img" slot="close" @click="changeName">
            <img src="@assets/img/close.png" alt="">
          </div>
        </div>

        <!--弹窗input大赏-->
        <div class="content-input">
          <p class="content-info" v-if="false">请设置您的密码，完成账号注册</p>
          <!--手机号-->
          <div class="input-label">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_zhanghao.png" alt="">
              </div>
              <input type="text" placeholder="你的手机号" v-model="mobile" >
            </div>
            <span class="input-message">{{ phoneMessage }}</span>
          </div>

          <!--密码-->
          <div class="input-label" v-if="modalShowName == 'password' || modalShowName == 'register'">
            <div class="input-content">
              <div class="input-content-img">
                <img src="@assets/img/icon_mima.png" alt="">
              </div>
              <input type="password" placeholder="你的密码" v-model="password" >
            </div>
            <span class="input-message" >{{ passwordMessage }}</span>
          </div>

          <!--图形验证码-->
          <div class="input-label" v-if="modalShowName == 'message' || modalShowName ==  'register'">
            <div class="input-identifying-content">
              <div class="input-identifying-content-img">
                <img src="@assets/img/pic_verify.png" alt="">
              </div>
              <input type="text" placeholder="图形验证码" v-model="captcha" >
              <div class="img-verify">
                <img :src="`${configs.robotBaseURL}/captcha?t=${captchaCode}`" alt="identifyingCode" @click="captchaCode = Date.now()"/>
              </div>
            </div>
            <span class="input-message">{{ captchaMessage }}</span>
          </div>

          <!--短信验证码-->
          <div class="input-label"  v-if="modalShowName == 'message' || modalShowName == 'register'">
            <div class="input-content-verify">
              <div class="input-verify-img">
                <img src="@assets/img/icon_yzma.png" alt="">
              </div>
              <input type="text" placeholder="短信验证码" v-model="messageCode" >
              <button v-if="showCountDown == 0" class="get" @click="getMobileCode" :disabled="lockMessage">获取</button>
              <button v-if="showCountDown == 1" class="count" disabled>{{ time }}s</button>
            </div>
            <span class="input-message">{{ identifyingMessage }}</span>
          </div>
        </div>

        <!--底部按钮大赏-->
        <div class="content-footer" slot="footer">
          <button v-if="modalShowName == 'password'" @click="login" :disabled="loginButton">登录</button>
          <button v-if="modalShowName == 'message' " @click="smsLogin" :disabled="loginSmsButton">登录</button>
          <button v-if="modalShowName == 'register' " @click="register" :disabled="registerButton">注册</button>

          <p class="footer-password-forget" v-if="false">忘记密码？</p>
          <p class="footer-login" v-if="modalShowName == 'message' ">未注册手机验证后自动登录</p>
          <p class="footer-login" v-if="modalShowName == 'message' ">确认注册，即代表您同意<span>《用户条款和隐私政策》</span></p>
          <p class="footer-email" v-if="false">未收到邮件？<span>未收到邮件？</span></p>

        </div>

      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { mobileRegisterApi, sendMobileCode, sessionLogin, sendMsmLogin, smsLogin, userInfo} from '@/api/user';
import { configs } from '@/api/ajax.js';
import { validPhone, validPassword, validIdentifyingCode, validCaptcha} from '@/utils/verify';
import { msgAlert, setItem  } from '@/utils/tools';

export default {
  name: 'modalForm',
  data() {
    return {
      time: 10,
      showCountDown: 0,
      configs: configs,

      mobile: '',
      password: '',
      messageCode: '',
      captcha: '',
      captchaUrl: '',
      captchaCode: "1223456",

      phoneMessage: '',
      captchaMessage: '',
      identifyingMessage: '',
      passwordMessage: '',

      loginButton: false,
      lockMessage: false,
      registerButton: false,
      loginSmsButton: false,
      showModal: 0
    };
  },
  props: [],
  methods: {
    ...mapMutations(['changeModalStates','setUserInfo']),
    login () {
      let formData = {
        username: this.mobile,
        password: this.password
      }
      this.phoneMessage = validPhone(this.mobile).msg
      this.passwordMessage = validPassword(this.password).msg
      if (validPhone(this.mobile).flag) {
        sessionLogin(formData).then(res => {
          this.loginButton = true
          if (res.code == 0) {
            //保存用户信息
            this.getUserInfo()
            this.changeName(0, null)
            this.$Message.success('登录成功')
          }else {
            this.$Message.info(res.msg)
          }
        }).then(() => {
          this.loginButton = false
        })
      }
    },
    getUserInfo() {
      userInfo().then(res => {
        if (res.code === 0) {
          setItem('userInfo', res.data);
          this.setUserInfo(res.data)
        } else {
          localStorage.removeItem('user');
        }
      });
    },
    smsLogin () {
      let formData = {
        phoneNumber: this.mobile,
        smsCode: this.messageCode,
      }
      this.phoneMessage = validPhone(this.mobile).msg
      if (validPhone(this.mobile).flag && validCaptcha(this.messageCode).flag) {
        smsLogin(formData).then(res => {
          this.loginSmsButton = true
          if (res.code == 0) {
            this.$Message.success('登录成功')
            this.getUserInfo()
            this.changeName(0, null)
          } else {
            this.$Message.success(res.msg)
          }
        }).then( () => {
          this.loginSmsButton = false
        })
      }
    },
    register () {
      let formData = {
        phoneNumber: this.mobile,
        smsCode: this.messageCode,
        password: this.password
      }
      this.phoneMessage = validPhone(this.mobile).msg
      if (validPhone(this.mobile).flag && validCaptcha(this.messageCode).flag) {
        mobileRegisterApi(formData).then(res => {
          this.registerButton = true
          if (res.code == 0) {
            this.$Message.success('注册成功')
            this.changeModalStates()
          }
        }).then( () => {
          this.registerButton = false
        })
      }
    },
    // 获取手机验证码
    getMobileCode() {
      let formData = {
        phoneNumber: this.mobile,
        captcha: this.captcha
      };
      let api = ''
      if (this.modalShowName == 'register') {
        api = sendMobileCode
      } else {
        api = sendMsmLogin
      }
      this.phoneMessage = validPhone(this.mobile).msg
      this.captchaMessage = validCaptcha(this.captcha).msg
      if (validPhone(this.mobile).flag && validCaptcha(this.captcha).flag) {
        this.lockMessage = true
        api(formData).then(res => {
            if (res.code == 0) {
              this.countDown();
              this.$Message.success(res.msg);
            } else {
              this.$Message.error(res.msg);
            }
          }).then(() => {
            this.lockMessage = false;
          });
      } else {
      }
    },
    changeName(index = 0, name = null) {
      console.log(index)
      console.log(name)
      this.changeModalStates({ index: index, name: name });
    },
    // 倒计时
    countDown() {
      this.showCountDown = 1;
      let fun = setInterval(() => {
        this.time--;
        if (this.time < 0) {
          clearInterval(fun);
          this.showCountDown = 0;
        }
      }, 1000);
    },
  },
  computed: {
    ...mapState(['modalShowName','isShowModal']),
  },
  mounted() {
    this.showModal = this.isShowModal
  }
};
</script>

<style lang="stylus">

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
  background #3AA9EA !important

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
    height 70px
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
        border-bottom 1px solid #5A6671
        border-left 1px solid #5A6671

      input
        width: 255px;
        height: 46px;
        background: #1F2B40
        outline none
        color #fff
        padding-left 8px
        border 1px solid #5A6671

.input-message
  color #E51D39
  font-size 12px
  width 100%
  text-align left
  padding-left 55px
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
    border-bottom 1px solid #5A6671
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

.input-identifying-content
  display flex
  flex-direction row
  justify-content center

  .input-identifying-content-img
    width 50px
    height 46px
    text-align center
    padding-top 8px
    border-top 1px solid #5A6671
    border-bottom 1px solid #5A6671
    border-left 1px solid #5A6671

  input
    width: 180px;
    height: 46px;
    background: #1F2B40
    outline none
    color #fff
    padding-left 8px
    border 1px solid #5A6671

  .img-verify
    width 75px

    img
      width 100%
      height 100%

/*footer部分*/
.content-footer
  padding 10px 48px

  button
    width: 304px;
    height: 40px;
    border: 2px solid;
    border-image: linear-gradient(45deg, #3AA9EA, #42F5DE) 1 1;
    background-color #1F2B40
    color #fff
    margin-bottom 10px

    &:hover
      border: 2px solid;
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
