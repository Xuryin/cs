<template>
  <div class="home">
    <topScroll/>
    <Header class="home-header"/>
    <div class="home-content">
      <div class="home-container">
        <router-view></router-view>
      </div>

    </div>
    <server/>
    <Footer class="home-footer"/>
  </div>
</template>

<script>
import { topScroll, Header, BoxItem, Footer } from '@/components/Home'
import { mapMutationsm, mapState } from 'vuex';
import server from '@/components/extra/server'
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
      ],
      active: 1
    }
  },
  components: {
    topScroll, Header, BoxItem, Footer, server
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
.home-content
  width 100%
  overflow-y scroll
  .home-container
    width 1200px
    margin-left 50%
    min-height 900px
    overflow-y auto
    transform translateX(-600px)
</style>
