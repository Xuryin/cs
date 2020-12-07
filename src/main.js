import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(store).use(router);

/* px2rem */
// import '@utils/rem';
import '@assets/css/reset.css'
import '@assets/css/public.styl'

/* view-design */
import 'view-design/dist/styles/iview.css';
import '@utils/design.js'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
