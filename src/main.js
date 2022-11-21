import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";

createApp(App).use(store).use(BootstrapVue3).mount("#app");
