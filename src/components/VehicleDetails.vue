<template>
    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Car info</v-expansion-panel-header>
        <v-expansion-panel-content>
          <car-info/>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Tires Status</v-expansion-panel-header>
        <v-expansion-panel-content>
          Get Tires Status taabela
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Vehicle Location</v-expansion-panel-header>
        <v-expansion-panel-content>
          Get Current Location of the vehicle
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Fules</v-expansion-panel-header>
        <v-expansion-panel-content>
          Get Fuel
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
import Vue from "vue";
import CarInfo from "./info/CarInfo.vue";

export default Vue.extend({
  components: { CarInfo },
  name: "VehicleDetails",

  data: () => ({
    computed: {
    cars() {
    // return this.$store.state.carDetails
    }
  },
  mounted() {
    //this.$store.dispatch("getCarDetails");
  }

  }),
});
</script>
