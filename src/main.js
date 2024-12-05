import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "@mdi/font/css/materialdesignicons.css"; // Importa os estilos dos ícones
import "vuetify/styles";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
