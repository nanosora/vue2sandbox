import Vue from "vue";
import App from "./App.vue";

import VeeValidate, { Validator } from "vee-validate";
import ja from "vee-validate/dist/locale/ja";

Validator.localize("ja", ja);
Vue.use(VeeValidate, {
  locale: "ja"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
