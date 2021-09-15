import VueI18n from 'vue-i18n'
import { messages, defaultLocale } from "@/i18n";
import Vue from 'vue'
import App from './App.vue'

const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale
});

new Vue({
    i18n,
    render: h => h(App)
  }).$mount("#app");


Vue.use(VueI18n)