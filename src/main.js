import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VeeValidate, { Validator } from "vee-validate";
import ja from "vee-validate/dist/locale/ja";

Validator.localize("ja", ja);
Vue.use(VeeValidate, {
  locale: "ja",
});
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
