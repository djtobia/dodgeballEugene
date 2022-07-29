// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

//types
import type { ThemeDefinition } from 'vuetify';
//components
import * as components from 'vuetify/components';

const dodgeballEugeneTheme: ThemeDefinition = {
  dark: true,
  colors: {
    "dark-blue": "#262262",
    "light-blue": "#25aae1",
    "light-blue-darken": "#146080",
    "background": "#3e404f",
  }
}
export default createVuetify({
  components,
  theme: {
    defaultTheme: "dodgeballEugeneTheme",
    themes: {
      dodgeballEugeneTheme,
    }
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
