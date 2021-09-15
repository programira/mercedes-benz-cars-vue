<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="info"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VehicleDetails",

  data: () => ({

        headers: [
          {
            text: 'About',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Value', value: 'value' },
        ],
        info: [
          {
            name: 'License plate',
            value: 159,
          },
          {
            name: 'Sales designation',
            value: 'E 400 4MATIC Limousine',
          },
          {
            name: 'Nickname',
            value: 'E 400 4MATIC Limousine',
          },
          {
            name: 'Model Year',
            value: '2017',
          },
          {
            name: 'Color',
            value: 'Iridiumsilber metallic',
          },
          {
            name: 'Fuel type',
            value: 'Mmueller',
          },
          {
            name: 'Powerhp',
            value: '333',
          },
          {
            name: 'Number of doors',
            value: '5',
          },

        ],
  }),
});
</script>
