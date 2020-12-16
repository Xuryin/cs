<template>
  <div class="public-modal">
    <Modal
      v-model="$store.state.isShowModal == 4"
      :mask-closable="false"
      class-name="vertical-center-modal"
      :closable="false"
      :on-cancel="close"
      :footer-hide="true"  :scrollable="false">

      <!--login-->
      <div class="modal-content">

        <!--有背景通用头-->
        <div class="content-title-text" slot="header">
          <p>提示</p>
          <div class="close-img" slot="close" @click="close()">
            <img src="@assets/img/close.png" alt="">
          </div>
        </div>


        <div class="input-content">
          <div v-for="item in decorationData" class="content-item">
            <p class="fontBlue">{{ item.name }}</p>
            <div class="price-img">
              <img :src="item.url" alt="">
              <div class="content-modal" v-if="item.isChecked"></div>
              <div class="modal-button">
                <p>$10</p>
                <button>单独折现</button>
            </div>

            </div>
          </div>

        </div>


        <div class="content-footer" slot="footer">
          <div>
            <button class="blue-button" v-if="false">
              <span>折现余额</span>
              <span>$100</span>
            </button>
            <button v-if="false" class="green-button">
              <span>继续开箱</span>
              <span>$100</span>
            </button>
            <button v-if="false" class="gray-button">
              <span>折现余额</span>
              <span>$100</span>
            </button>
            <button class="long-button" v-if="true">
              <span>继续开箱</span>
              <span>$10</span>
              <span>仅需$6</span>
            </button>
          </div>
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
  name: 'boxModal',
  data() {
    return {
      title: '恭喜您获得',
      message: '红字提示',
      decorationData: [
        {
          date: '14d',
          name: 'AWP | 二西莫夫',
          price: '100',
          url: require('../../assets/img/knife_1.png'),
          isChecked: true
        }
      ]
    };
  },
  props: [],
  methods: {
    close() {
      this.$store.commit('changeModalStates', {
        index: 0,
        name: null
      });
    }
  },
  created() {

  },
  computed: {
    ...mapMutations('changeModalStates'),
  }
};
</script>

<style lang="stylus" scoped>
.content-title-text
  background #23334D url("../../assets/img/img_tchader.png") no-repeat
  background-position top
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

  .content-item
    padding 20px 0


    p
      line-height 30px
      text-align center
      font-size 14px

    .price-img
      width: 140px;
      height: 164px;
      position relative
      background: #131723;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      background url("../../assets/img/bg_box_green.png") 0 0
      background-size 100% 100%
      display flex
      justify-content center
      align-items center
      img
        width 120px
        height 120px
      .content-modal
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        background #000
        opacity 0.4
      .modal-button
        position absolute
        display flex
        flex-direction column
        p
          color #FFEC1A
          font-size 14px
          line-height 30px
          position relative
          top -10px
        button
          margin-top 60px
          width: 72px;
          height: 22px;
          background: #1D8ACA;
          border-radius: 11px;
          color #fff






.input-message
    color #E51D39
    font-size 12px
    width 100%
    text-align left
    line-height 30px

/*footer部分*/
.content-footer
  display flex
  justify-content center
  align-items center
  button
    margin-left 20px
  .blue-button
    width: 140px;
    height: 40px;
    border: 2px solid #3AA9EA;
    color #fff
    span:nth-child(1)
      color #fff
    span:nth-child(2)
      color #FFEC1A

  .green-button
    width: 140px;
    height: 40px;
    border: 2px solid #1EC129;
    color #fff
    span:nth-child(1)
      color #fff
    span:nth-child(2)
      color #FFEC1A

  .gray-button
    width: 140px;
    height: 40px;
    border: 2px solid #5A6671;
    color #9CA0A7

  .long-button
    width: 190px;
    height: 40px;
    border: 2px solid #1EC129;
    span:nth-child(1)
      color #fff
    span:nth-child(2)
      color #fff
    span:nth-child(2)
      text-decoration line-through
    span:nth-child(3)
      color #FFEC1A


.fontPurple
  color #771BB7
.fontGreen
  color #1FAD82
.fontBlue
  color #2950F4
</style>
