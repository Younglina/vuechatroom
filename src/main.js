import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import VueChatScroll from 'vue-chat-scroll';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import './assets/css/loading.css';
// import './assets/css/loading-btn.css';

// Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(VueChatScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
