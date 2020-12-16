<template>
  <div class="lottery-page">
    <div class="prize-content" >
      <div class="prize-pointer" id="pointer"></div>
      <ul class="prize-list" ref='move'>
        <li class="prize-item" v-for="(item,index) in lotteryData">
          <div class="item-content">
            <p>{{item.name}}</p>
            <div>
              <img :src="item.url" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import index from "../../store";

export default {
  name: 'lottery',
  data () {
    return {
      lotteryData: [ // 抽奖列表

      ],
      boxData:[ // 饰品元数据，使用饰品元数据填充抽奖列表
        {date: '14d', name: 'AWP | 二西莫夫' , price: '100', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 三西莫夫' , price: '90', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 四西莫夫' , price: '80', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 五西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 6西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 7西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 8西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 9西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 10西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 11西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 12西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 13西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 14西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 15西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 16西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 17西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 18西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 19西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 20西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 21西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 22西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 23西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 24西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 25西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 26西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 27西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 28西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 29西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
        {date: '14d', name: 'AWP | 30西莫夫' , price: '70', url: require('../../assets/img/knife_1.png'), isChecked: false},
      ],
    }
  },
  props:['startMove'],
  created(){
    this.initBox()
  },
  mounted() {
    let moveBox = this.$refs.move
    moveBox.addEventListener('transitionrun',(e)=>{
      console.log(2222222222)
    })
    moveBox.addEventListener('transitionstart',(e)=>{
      console.log(11111111111)
    })
    moveBox.addEventListener('transitionend',(e)=>{
      console.log(333333333)
    })
  },
  watch:{
    startMove(start){
      console.log(start)
      if (start){
        this.getWinner().then(index=>{
          this.start(index)
        })
      }
    }
  },
  methods: {
    start(index){
      //替换指定位置的饰品为中奖饰品
      this.lotteryData[66] = this.boxData[index]
      this.$forceUpdate()
      let px = this.getOffsetPx()
      //计算移动距离
      let li_items = document.getElementsByClassName('prize-item')
      let prize_pointer = document.getElementById('pointer')
      console.log(this.lotteryData[66])
      console.log(px)
      console.log(li_items[66])
      let offset = li_items[66].getBoundingClientRect().left - (prize_pointer.getBoundingClientRect().left) + px + 90
      console.log(li_items[66].getBoundingClientRect().left)
      console.log(prize_pointer.getBoundingClientRect().left)
      console.log(offset)
      let moveBox = this.$refs.move
      let sec = Math.random()
      moveBox.style.transition = `transform ${sec*5 + 10}s ${sec}s cubic-bezier(0.15, 0.15, 0.1, 1)`
      moveBox.style.transform = `translateX(-${offset}px)`
    },
    initBox(){
      //初始化抽奖箱子长度，并填充饰品
      let box = []
      Array(99).fill(1).forEach(()=>{
        //随机填充饰品
        let index = Math.round(Math.random() * (this.boxData.length -1))
        let item = this.boxData[index]
        box.push(item)
      })
      this.lotteryData = box
    },
    getWinner(){//获取中奖饰品
      // api()
      let win_index = 0 // 中奖饰品在饰品元数据boxData中的下标
      return Promise.resolve(win_index)
    },
    //计算停止时的偏移量
    getOffsetPx(){
      let px = Math.round(Math.random() * 120)
      return px
    }
  }
};
</script>

<style scoped lang="stylus">
.prize-content{
  overflow hidden
  background-image  url("../../assets/img/bg_kx.png")
  position relative
  .prize-pointer {
    position absolute
    margin-left 50%
    margin-top -5.8px
    width 22px
    height 200px
    background-image url("../.././assets/img/img_centerline.png")
    z-index 999
  }
  .prize-list{
    display flex
    align-items center
    justify-content flex-start
    width 100%
    height 200px
    transform translateX(-90px)
    /*background-image  url("../../assets/img/bg_kx.png")*/
    background-repeat repeat-x
    background-size: cover
  }
  .prize-item{
    width 140px
    height 164px
    background-color #131723
    margin 12px 8px
    border-radius 4px
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
    .item-content{
      width 128px
      height 148px
      margin 8px 6px
      background-image url("../../assets/img/bg_box_blue.png")
      background-position center
      p{
        width 100%
        text-align center
        margin-top 9px
        font-size 12px
      }
      div{
        width 118px
        height 59px
        margin-top 30px
        margin-left 5px
        display flex
        align-items center
        justify-content center
        img{
          height 59px
        }
      }
    }
  }
}
</style>
