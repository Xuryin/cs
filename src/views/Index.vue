<template>
  <div class="home">
    <topScroll/>
    <Header class="home-header"/>
      <router-view></router-view>
    <Footer class="home-footer"/>
  </div>
</template>

<script>
import { topScroll, Header, BoxItem, Footer } from '@/components/Home'
import { mapMutationsm, mapState } from 'vuex';
export default {
  name: 'Home',
  data () {
    return {
      boxData: [
        { title: '福利宝箱',
          bgUrl: require('@assets/img/img_fulibox.png'),
          content: [
            {id: 1,url: require('@assets/img/box_1.png'), content: require('@assets/img/gun_1.png'), name: '箱子名称', price: 10},
            {id: 2,url: require('@assets/img/box_2.png'), content: require('@assets/img/gun_2.png'), name: '箱子名称', price: 10},
            {id: 3,url: require('@assets/img/box_3.png'), content: require('@assets/img/knife_1.png'), name: '箱子名称', price: 10},
            {id: 3,url: require('@assets/img/box_3.png'), content: require('@assets/img/knife_1.png'), name: '箱子名称', price: 10},
            {id: 3,url: require('@assets/img/box_3.png'), content: require('@assets/img/knife_1.png'), name: '箱子名称', price: 10},
          ] },
        { title: '第一类宝箱',
          bgUrl: require('@assets/img/img_fulibox.png'),
          content: [
            {id: 1,url: require('@assets/img/box_1.png'), content: require('@assets/img/gun_1.png'), name: '箱子名称', price: 10},
            {id: 2,url: require('@assets/img/box_2.png'), content: require('@assets/img/gun_2.png'), name: '箱子名称', price: 10},
            {id: 3,url: require('@assets/img/box_3.png'), content: require('@assets/img/knife_1.png'), name: '箱子名称', price: 10},
          ] },
        { title: '第二类宝箱',
          bgUrl: require('@assets/img/img_fulibox.png'),
          content: [
            {id: 1,url: require('@assets/img/box_1.png'), content: require('@assets/img/gun_1.png'), name: '箱子名称', price: 10},
            {id: 2,url: require('@assets/img/box_2.png'), content: require('@assets/img/gun_2.png'), name: '箱子名称', price: 10},
            {id: 3,url: require('@assets/img/box_3.png'), content: require('@assets/img/knife_1.png'), name: '箱子名称', price: 10},
          ] },
      ]
    }
  },
  components: {
    topScroll, Header, BoxItem, Footer
  },
  methods :{

  },
  computed: {
  },
  mounted () {
  }
};
</script>

<style scoped lang="stylus">
.home-header
  margin-bottom 60px

.box-content
  width 1200px
  margin-left 50%
  transform translateX(-600px)
  margin-top 30px

.home-footer
  position fixed
  bottom 0
</style>
