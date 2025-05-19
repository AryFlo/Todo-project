import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./static/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);

app.mount("#app");
