import { createApp } from "vue";
import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

import router from "./router";

import App from "./App.vue";
import "@/assets/styles.css";

// import "./assets/styles.css";

createApp(App)
  .use(router)
  .use(TawkMessengerVue, {
    propertyId: "property_id",

    widgetId: "widget_id",
  })
  .mount("#app");
