import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import {userInfo} from '@api/user';
import {setItem, getItem} from '@utils/tools';

export default new Vuex.Store({
  state: {
    userInfo: getItem('userInfo') || null,
    isShowModal: 0, // 控制1登录注册、2提示、3密码、4开箱模态框
    modalShowName: null,
    isDisabled: false, // 控制
    subTitle: '' ,// 提示弹窗文字,
    modalTitle: '',
    qrCode: '',
    payAmount: ''
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    isLogin(state) {
      return state.userInfo ? 1 : false
    }
  },
  mutations: {
    changeModalStates: (state, obj) => {
      console.log(obj.modalTitle)
      state.modalShowName = obj.name || null
      state.isShowModal = obj.index || 0
      state.subTitle = obj.subTitle || null
      state.qrcode = obj.qrCode || ''
      state.payAmount = obj.payAmount || 0
      state.modalTitle = obj.modalTitle || ''
      console.log(obj.modalTitle)
    },
    getArrItem: (arr, dir, aim) => {
      let arrObj = []
      arr.forEach((item) => {
        if (item.dir == aim) {
          arrObj.push(item)
        }
      })
      return arrObj[0]
    },
    setUserInfo: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {},
  modules: {},
});
