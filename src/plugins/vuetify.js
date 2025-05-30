import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: "#a4bbd3",
        secondary: "#453728",
        accent: "#ffab00",
        error: "#f44336",
        info: "#2196f3",
        success: "#4caf50",
        warning: "#ff9800",
      },
      dark: {
        primary: "#a4bbd3",
        secondary: "#453728",
        accent: "#ffab00",
        error: "#f44336",
        info: "#2196f3",
        success: "#4caf50",
        warning: "#ff9800",
      },
    },
    icons: {
      iconfont: "mdi",
    },
    components,
    directives,
  },
});

export default vuetify;
