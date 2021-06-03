import Vue from "vue";
import App from "./App.vue";
import VueCarousel from "vue-carousel";
import VueYoutube from "vue-youtube";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import '@/assets/scss/app.scss'


Vue.use(PerfectScrollbar);
Vue.use(VueYoutube);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");