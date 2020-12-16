<template>
  <div class="top-scroll" ref="outbox">
    <ul class="scroll-content" ref="moveBox">
      <li v-for="item in picData" @mouseenter="stopScroll(item)" @mouseleave="startScroll(item)">
        <img :src="item.awardPicture" alt="">
        <div class="hover-active" @click="searchOrigin(item.type)">
      <!--    <img src="@assets/img/icon_shengji.png" alt="" v-if="item.type == 1 && item.id == isActive">
          <img src="@assets/img/scroll_change.png" alt="" v-if="item.type == 2 && item.id == isActive">
          <img src="@assets/img/box_3.png" alt="" v-if="item.type == 3 && item.id == isActive">-->
          <img src="@assets/img/box_3.png" alt="" v-if="item.id == isActive">
          <p>
          <!--  <span v-if="item.type == 1 && item.id == isActive">兑换商城</span>
            <span v-if="item.type == 2 && item.id == isActive">饰品汰换</span>
            <span v-if="item.type == 3 && item.id == isActive">前往开箱</span>-->
            <span v-if="item.id == isActive">前往开箱</span>
            <img src="@assets/img/arrow_right.png" alt="" class="arrow-right" v-if=" item.id == isActive">
          </p>
        </div>

        <div class="scroll-modal" v-if=" item.id == isActive"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { indexHistory } from '@api/trade';

export default {
  name: 'topScroll',
  data() {
    return {
      picData: [],
      isActive: 0,
      initWidth: 0,
      scrollInterval: null
    };
  },
  methods: {
    checked(item) {
      this.isActive = item.id;
    },
    unChecked(item) {
      this.isActive = 0;
    },
    startAnimate() {
      let outer = this.$refs.outbox;
      let moveBox = this.$refs.moveBox;
      this.scrollInterval = setInterval(() => {
        this.initWidth++;
        if ((moveBox.scrollWidth / 2 + 12) <= this.initWidth) {
          this.initWidth = 0;
        }
        moveBox.style.transform = `translateX(-${this.initWidth}px)`;
      }, 10);
    },
    stopScroll(item) {
      this.isActive = item.id;
      clearInterval(this.scrollInterval);
    },
    startScroll(item) {
      this.isActive = 0;
      this.startAnimate();
    },
    getData() {
      this.picData = []
      indexHistory().then(res => {
        if (res.code == 0) {
          this.picData = [...res.data.history, ...res.data.history, ...res.data.history]
        } else {
          this.$Message('获取信息失败')
        }
      })
    },
    searchOrigin (origin) {}
  },
  mounted() {
    this.picData = [...this.picData, ...this.picData];
    this.startAnimate();
    this.getData()
  }

};
</script>

<style scoped lang="stylus">
.top-scroll
  height 88px
  background-color #060B0C

  .scroll-content
    display flex
    flex-direction row
    justify-content flex-start

    li
      height 88px
      width 96px
      padding 8px 12px
      margin-right 12px
      position relative
      background-color #101516
      display flex
      align-items center

      > img:nth-child(1)
        width 72px

      .hover-active
        position absolute
        left 0
        top 0
        z-index 99
        text-align center
        width 100%
        height 100%
        padding 8px 0

        > img:nth-child(1)
          width 40px
          height 40px

        p
          display flex
          flex-direction row
          align-items center
          justify-content space-evenly
          margin-top 5px
          color #3AA9EA

          img
            width 14px
            height 12px

      .scroll-modal
        width 96px
        height 88px
        background-color #212C31
        position absolute
        left 0
        top 0
        z-index 88


</style>
