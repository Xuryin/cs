<template>
  <div class="helper-page">
    <div class="side-bar">
      <p class="father-menu" v-for="item in menuData" @click="checkArticle(item)">
        <span :class="articleID == item.id ? 'active' : ''">{{item.title}}</span>
      </p>
    </div>

    <div class="helper-content">
      <rightContent :articleData="menuData[articleID]" />
    </div>
  </div>
</template>

<script>
import rightContent from '@/components/helper/rightContent';
export default {
  name: 'helper',
  data () {
    return {
      menuData: [
        {id: 0, isFather: false, title: 'Steam无法访问解决方案', content: ''},
        {id: 1, isFather: false, title: 'Steam账号不能交易', content: ''},
        {id: 2, isFather: false, title: '如何取回饰品', content: ''},
        {id: 3, isFather: false, title: '缺货须知', content: ''},
        {id: 4, isFather: false, title: '使用条款', content: ''},
        {id: 5, isFather: false, title: '隐私政策', content: ''},
        {id: 6, isFather: false, title: '公司简介', content: ''},
      ],
      articleID: 1
    }
  },
  methods: {
    checkArticle (item) {
      this.articleID = item.id
      this.$router.push({name:"helper", params: {id: this.articleID}})
    }
  },
  components: { rightContent },
  created () {
    this.articleID = this.$route.params.id
    console.log(this.articleID)
  },
  watch: {
    $route: {
      handler: function (val, oldVal)  {
        console.log(val.params.id)
        this.articleID = val.params.id
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="stylus">
.helper-page
  width 1200px
  display flex
  flex-direction row
  justify-content space-between
  margin-top 32px
  .side-bar
    width 220px
    height 640px
    background: #1E242A;
    border-radius: 8px;
    .father-menu
      height 64px
      color: #FFFFFF
      font-size 16px
      cursor pointer
      text-align center
      span
        height 32px
        line-height 32px
        display block
        margin 16px 0 0 12px
        border-left 3px solid #3AA9EA
        text-align left
        padding-left 12px

  .helper-content
    width 930px
    height 643px

.active
  background: linear-gradient(-90deg, #1E242A, #253C4A);
</style>
