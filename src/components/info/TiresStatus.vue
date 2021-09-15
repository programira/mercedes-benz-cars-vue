<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="status"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TiresStatus",

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
        status: [
          {
            name: 'Front Left',
            value: 230,
          },
          {
            name: 'Front right',
            value: '230',
          },
          {
            name: 'Rear rigth',
            value: '230',
          },
          {
            name: 'Rear left',
            value: '230',
          },
        ],
  }),
});
</script>
