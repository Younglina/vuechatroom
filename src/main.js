import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import VueChatScroll from 'vue-chat-scroll';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/loading.css';
import './assets/css/loading-btn.css';

Vue.use(BootstrapVue);
Vue.use(VueChatScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
