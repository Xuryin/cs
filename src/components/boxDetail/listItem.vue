<template>
  <div class="box-item" ref="boxItem">
    <span>{{boxData.rate}}</span>
    <div class="img-box">
      <img :src="boxData.awardPicture" alt="">
    </div>
    <span :title="boxData.awardName">{{boxData.awardName}}</span>
    <span>${{boxData.awardPrice}} {{boxData.rarityName}}</span>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    boxData: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
    bgColor: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
    margin: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
  },
  data () {
    return {
    }
  },
  mounted() {
    this.checkBg(this.boxData)
    this.$refs.boxItem.style.background = this.bgColor.bg
    this.$refs.boxItem.style.borderTop = this.bgColor.border
    this.$refs.boxItem.style.marginRight = this.margin.margin
  },
  methods: {
    checkBg (item) {
      switch (item.rarityName) {
        case "隐秘":
        case "非凡":
        case "违禁":
          this.bgColor = {border:'0.125rem solid #FFD514',bg:'linear-gradient(180deg, rgba(255, 213, 20, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "保密":
          this.bgColor = {border:'0.125rem solid #CE4748',bg:'linear-gradient(180deg, rgba(206, 71, 72, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "受限":
          this.bgColor = {border:'0.125rem solid #771BB7',bg:'linear-gradient(180deg, rgba(119, 27, 183, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "工业级":
        case "军规级":
          this.bgColor = {border:'0.125rem solid #2950F4',bg:'linear-gradient(180deg, rgba(41, 80, 244, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
        case "消费级":
          this.bgColor = {border:'0.125rem solid #1FAD82',bg:'linear-gradient(180deg, rgba(31, 173, 130, 0.2), rgba(24, 28, 33, 0.2))'};
          break;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.box-item
  .box-item
    width 180px
    height 216px
    position relative
    margin-top 24px
    span:nth-child(1)
      position absolute
      right 5px
      top 5px
      font-size 14px
      color #fff
    .img-box
      width 160px
      height 160px
      img
        width 160px
    span:nth-child(3)
      display block
      width 100%
      text-align left
      font-size 14px
      color #fff
      padding-left 8px
      line-height 30px
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      cursor pointer
    span:nth-child(4)
      font-size 14px
      color #FFEC1A
      line-height 30px
      padding 8px
</style>
