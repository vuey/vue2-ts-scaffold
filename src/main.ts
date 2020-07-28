import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import utils from './utils';
import moment from 'moment';

moment.locale('zh-cn');

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
