<template>
  <div class="content-item" >
    <span>$ {{itemData.price}}</span>
    <div>
      <img :src="itemData.imgUrl" alt="">
    </div>
    <span :title="itemData.name">{{itemData.name}}</span>
    <div v-if="isShowModal" class="item-modal"></div>
    <img class="checked-img"  src="@assets/img/checked.png" alt="" v-if="checkIndexData.indexOf(itemData.id) > -1 || checkIndex == itemData.id">
    <p class="hover-text"  v-if="showHoverText">尚未拥有此物品，可使用相应余额代替</p>
  </div>
</template>

<script>
import {formatMoney} from '@utils/tools';

export default {
  name: 'decItem',
  data () {
    return {

    }
  },
  methods: {
    showFictitiousTitle (flag) {
      console.log(flag)
    },
  },
  computed: {
    isShowModal () {
      let flag
      let a = this.checkIndexData.indexOf(this.itemData.id) > -1
      let b = this.checkIndex == this.itemData.id
      let c = !this.itemData.fromInventory
      if (this.typeName == 'provide') {
        // 1.type == 'provide'  虚拟或者选中出现遮罩
        flag = c || a
      } else if (this.typeName == 'target') {
        // 2.type == 'target' 选中出现遮罩
        flag = b
      } else if (this.typeName == 'stock' ) {
        flag = a
      } else if (this.typeName == 'wanted') {
        flag = b
      }
      return flag
    },
    showHoverText () {
      // provide && 虚拟 && 选中
      let flag
      let a = !this.itemData.fromInventory
      let b = this.hoverFlag == this.itemData.id
      let c = this.typeName == 'provide'
      flag = c && a && b
      return  flag
    }
  },
  mounted() {
  },
  props: {
    typeName: {
      type: String,
      required: false,
      default () {
        return ''
      }
    },
    itemData: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    } ,
    checkIndexData: {
      type: Array,
      required: false,
      default () {
        return [0]
      }
    },
    checkIndex: {
      type: Number,
      required: false,
      default () {
        return 0
      }
    },
    hoverFlag: {
      type: Number,
      required: false,
      default () {
        return 0
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.content-item
  position relative
  width 120px
  height 145px
  border-top 2px solid #2950F4
  position relative
  text-align center
  margin-right 10px
  background: linear-gradient(180deg, rgba(41, 80, 244, 0.2), rgba(24, 28, 33, 0.2));
  span:nth-child(1)
    font-size 12px
    color #FFEC1A
    position absolute
    right 4px
    top 4px
  div:nth-child(2)
    width 108px
    height 108px
    img
      width 108px
  span:nth-child(3)
    display block
    line-height 20px
    padding 0 3px
    font-size 12px
    color #FFFFFF
    overflow: hidden
    text-overflow ellipsis
    white-space  nowrap
    cursor pointer

.item-modal
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  background #000
  opacity 0.4
  z-index 88
.checked-img
  position absolute
  top 55px
  left 55px
  z-index 99

.hover-text
  position absolute
  background #000
  color #cccccc
  z-index 99
  font-size 12px
  bottom 0
  padding 5px
</style>
