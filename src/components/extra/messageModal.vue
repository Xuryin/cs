<template>
  <div class="public-modal">
    <Modal
      v-model="$store.state.isShowModal == 2"
      :mask-closable="false"
      width="360"
      class-name="vertical-center-modal"
      :closable="false"
      :on-cancel="close"
      :footer-hide="true">
      <!--login-->
      <div class="modal-content">

        <!--有背景通用头-->
        <div class="content-title-text" slot="header">
          <p>{{ modalTitle }}</p>
          <div class="close-img" slot="close" @click="close()">
            <img src="@assets/img/close.png" alt="">
          </div>
        </div>

        <div class="input-content" >
          <p>{{ subTitle }}</p>
          <input type="text" v-if="modalShowName == 'cdk'">
          <span class="input-message" v-if="modalShowName != 'logout'">{{ message }}</span>
        </div>

        <div class="content-footer" slot="footer">
          <button v-if="modalShowName == 'logout' || modalShowName== 'replacingChange'" class="cancel" @click="close">取消</button>
          <button v-if="modalShowName == 'logout'" class="confirm" @click="confirm">确认</button>
          <button v-if="false">确认修改</button>
          <button v-if="false">下一步</button>
          <button v-if="modalShowName== 'replacingRecharge'" @click="goForRecharge" class="recharge">去充值</button>
        </div>


        <div class="qr-code" v-if="modalShowName == 'recharge'">
          <p>${{payAmount}}</p>
          <vue-qr :text="qrcode" :margin="0" colorDark="#f67b29" colorLight="#fff" :logoScale="0.3" :size="200"></vue-qr>
        </div>
      </div>

    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { logout } from '@api/user';
import { setItem } from '@utils/tools';
import { bus } from '@utils/bus';

export default {
  name: 'priceModal',
  data() {
    return {
      message: ''
    };
  },
  props: [],
  methods: {
    ...mapMutations(['changeModalStates','changeLoginStatus']),
    login() {
    },
    close() {
      this.$store.commit('changeModalStates', {
        index: 0,
        name: ''
      });
    },
    confirm() {
      if (this.modalShowName == 'logout') {
        logout().then(res => {
          console.log(res)
          if (res.code == 0) {
            this.$router.push({ name: 'replacing' });
            this.close()
            setItem('userInfo', {})
            this.$store.commit('changeLoginStatus', false)
            bus.$emit('login', false)
          }
        });
      }
    },
    goForRecharge () {
      this.$router.push({name: 'recharge', query: {tab: 0}})
      this.close()
    },
  },
  created() {

  },
  computed: {
    ...mapState(['modalShowName', 'subTitle', 'qrcode', 'payAmount', 'modalTitle']),
  }
};
</script>

<style lang="stylus" scoped>
.content-title-text
  background #23334D url("../../assets/img/img_tchader.png") no-repeat 68px 0
  background-size 264px 7px
  height 56px
  text-align center
  display flex
  justify-content center
  align-items center

.close-img
  position absolute
  right 24px
  top 16px


.input-content
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0 48px

  p
    line-height 30px
    color #fff
    text-align left
    margin 17px 0

  input
    width: 264px;
    height: 48px;
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
    line-height 30px

/*footer部分*/
.content-footer
  display flex
  justify-content space-around

  .cancel
    width: 90px;
    height: 40px;
    border: 2px solid #5A6671;
    color #9CA0A7
    background transparent

  .confirm
    width: 90px;
    height: 40px;
    border: 2px solid #3AA9EA;
    color #FFFFFF

  .recharge
    width: 90px;
    height: 40px;
    border: 2px solid #3AA9EA;
    color #FFFFFF

button
  width: 140px;
  height: 40px;
  border: 2px solid #3AA9EA;
  color #fff

.qr-code
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0 0 10px 0
  p
    color #FFDD21
    font-size 20px
    position relative
    top -10px
</style>
