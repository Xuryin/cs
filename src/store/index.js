import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowModal: false
  },
  mutations: {
    changeModalStates: (state) => {
      console.log(state.isShowModal);
      // state.isShowModal = state.isShowModal
    },
    getArrItem: (arr, dir) => {
      let arrObj = []
      arr.forEach((item) => {
        arrObj.push(item)
      })
      return arrObj
    }
  },

  actions: {},
  modules: {},
});
