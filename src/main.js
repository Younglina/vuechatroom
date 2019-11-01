import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import VueChatScroll from 'vue-chat-scroll';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueChatScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
