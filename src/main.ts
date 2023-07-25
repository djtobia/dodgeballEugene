import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VueRecaptchaPlugin } from "vue-recaptcha"
import { createHead } from "@unhead/vue";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueRecaptchaPlugin,
    { v2SiteKey: '6LfdXlAnAAAAAMSqwCqD6ksxYELH-F5_SrEaYnk5' }
  )
  .use(createHead())
  .mount('#app')
