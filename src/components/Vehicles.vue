<template>

    <v-row justify="center">
    <v-card class="mx-auto" width="90%">
        <v-list dense>
        <v-subheader>Available cars</v-subheader>
        <v-list-item-group v-model="selectedCar" color="primary">
            <v-list-item v-for="(car, i) in getAvailableCars" :key="i">
            <v-list-item-content>
                <v-list-item-title v-text="car.licenseplate"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-card>
    </v-row>

</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import VehicleDataService from "@/services/VehicleDataService";

import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Vehicles",

  data: () => ({
    selectedCar: 1,
    }),
    computed: {
          ...mapGetters('cars',['getAvailableCars'])
    },
  mounted() {
      VehicleDataService.getAll()
      .then((response) => {
        this.$store.dispatch('cars/setCars', response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
});
</script>
