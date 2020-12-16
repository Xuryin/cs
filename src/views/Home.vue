<template>
  <div class="home">
    <div v-for="(item, index) in boxData" >
      <BoxItem :boxData="item" :bgUrl="bgUrl[index]"/>
    </div>
  </div>
</template>

<script>
import { BoxItem } from '@/components/Home'
import { mapMutationsm, mapState } from 'vuex';
import { boxList } from '@api/trade';
export default {
  name: 'Home',
  data () {
    return {
      boxData: [],
      bgUrl: [
        {id: 1, url: require('../assets/img/img_fulibox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')},
        {id: 1, url: require('../assets/img/img_ptbox.png')}
      ]
    }
  },
  components: {
    BoxItem
  },
  methods :{
    getCaseList () {
      boxList().then(res => {
        if (res.code == 0) {
          this.boxData = res.data
        } else {
          this.$Message('res.msg')
        }
      })
    }
  },
  computed: {
  },
  mounted () {
    this.getCaseList()
  }
};
</script>

<style scoped lang="stylus">
.home
  margin-bottom 60px
  overflow-y auto

</style>
