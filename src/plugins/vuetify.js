import Vue from "vue";
import Vuetify from "vuetify/lib";
import { preset } from "vue-cli-plugin-vuetify-preset-fortnightly/preset";

Vue.use(Vuetify);
// import  '../assets/scss/variable.scss';

export default new Vuetify({
  preset,
  theme: {
    dark: true
  }
});
