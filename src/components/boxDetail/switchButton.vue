<template>
  <div :class="['lottery-button', `background-${buttonType}`]" @mouseenter="changeType('hover')" @mouseleave="changeType('open')" >
    <div class="open-button" v-if="buttonType == 'open'">
      <span>开箱</span>
      <span>$39.99</span>
    </div>
    <div class="open-button" @click="startAnimation" v-if="buttonType == 'hover'">
      <span>已充值金额 8/10</span>
    </div>
    <div class="try-button" @click="startAnimation">
      <span>试玩</span>
    </div>
    <div v-if="buttonType == 'hover'" class="button-info">
      <span>充值</span>
      <span>满10元即可开启</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "switchButton",
  data () {
    return {
      buttonType: 'open'
    }
  },
  methods: {
    startAnimation(){
      this.start = true
    },
    changeType (type) {
      this.buttonType = type
    }
  }
}
</script>

<style scoped>

</style>
