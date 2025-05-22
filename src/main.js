import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./static/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";
import { supabase } from "./supabase";

// Esperamos a que Supabase cargue sesión antes de montar todo
supabase.auth.getSession().then(({ data, error }) => {
  // Ya tenemos sesión inicializada

  const pinia = createPinia();
  pinia.use(piniaPersist);

  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
});
