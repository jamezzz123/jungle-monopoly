import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "./assets/scss/variable.scss";
import "./assets/css/main.css";

Vue.config.productionTip = false;

// vue anima js
import VueAnime from "vue-animejs";
Vue.use(VueAnime);

// vue transition
import VuePageTransition from "vue-page-transition";
Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
