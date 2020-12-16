import Vue from 'vue';
import { Modal, LoadingBar, Page, Switch, Affix, Message } from 'view-design';
Vue.component('Modal', Modal)
Vue.component('LoadingBar', LoadingBar)
Vue.component('Page', Page)
Vue.component('a-switch', Switch)
Vue.component('Affix', Affix)
Message.config({
  duration: 3,
  background: true
})
Vue.prototype.$Message = Message;
