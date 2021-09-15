<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="coordinates"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Location",

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
        coordinates: [
          {
            name: 'Longitude',
            value: 13.381815,
          },
          {
            name: 'Latitude',
            value: '13.381815',
          },
          {
            name: 'Heading',
            value: '52.520008',
          },
        ],
  }),
});
</script>
