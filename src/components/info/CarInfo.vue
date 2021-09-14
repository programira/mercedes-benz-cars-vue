<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="cars"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VehicleDetails",

  data: () => ({
      search: '',
        headers: [
          {
            text: 'About',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Value', value: 'value' },
        ],
        cars: [
          {
            name: 'licenseplate',
            value: 159,
          },
          {
            name: 'salesdesignation',
            value: 'E 400 4MATIC Limousine',
          },

        ],


  }),
});
</script>
