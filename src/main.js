import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'

const opts = {
  icons: {
    iconfont: "mdi"
  }
};

Vue.use(Vuetify);
new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(opts),
}).$mount("#app");
