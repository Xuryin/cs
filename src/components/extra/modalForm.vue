<template>
  <div class="public-modal">
    <Modal
      title="Title"
      v-model="$store.state.isShowModal"
      :mask-closable="false">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'modalForm',
  data () {
    return {
    }
  },
  methods: {}
};
</script>

<style scoped lang="stylus">

</style>
