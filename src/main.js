import { createApp } from "vue";
import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";
import Notifications from "@kyvg/vue3-notification";

import router from "./router";

import App from "./App.vue";
import "@/assets/styles.css";

createApp(App)
  .use(router)
  .use(TawkMessengerVue, {
    propertyId: "property_id",

    widgetId: "widget_id",
  })
  .use(Notifications)
  .mount("#app");
