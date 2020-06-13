import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
