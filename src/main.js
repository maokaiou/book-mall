import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
