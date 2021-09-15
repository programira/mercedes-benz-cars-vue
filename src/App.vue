<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://adpearance.com/wp-content/uploads/2021/05/mercedes-benz-white-logo.png"
          transition="scale-transition"
          width="200"
        />
      </div>
      <div class="mt-1 ml-3 d-none d-md-block">Connected Vehicle Service</div>

      <v-spacer></v-spacer>

      <div class="col-3 mt-3">
        <v-select
          v-model="select"
          :items="items"
          item-text="language"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { LOCALES, Locales } from "@/i18n/locales";
import { defaultLocale } from "@/i18n";

export default Vue.extend({
  name: "App",

  data: () => ({
    LOCALES,
    defaultLocale,
    select: { language: "English", abbr: "EN" },
    items: [
      { language: "English", abbr: "EN" },
      { language: "German", abbr: "DE" },
    ],
  }),
  methods: {
    updateLanguage(lang: Locales) {
      this.$store.commit("SET_LANGUAGE", lang);
    },
  },
});
</script>
