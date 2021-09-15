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
          <tires-status />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Vehicle Location</v-expansion-panel-header>
        <v-expansion-panel-content>
          <location/>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Fuel</v-expansion-panel-header>
        <v-expansion-panel-content>
          <fuel />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
import Vue from "vue";
import CarInfo from "./info/CarInfo.vue";
import TiresStatus from "./info/TiresStatus.vue";
import Location from "./info/Location.vue";
import Fuel from "./info/Fuel.vue";

export default Vue.extend({
  components: { CarInfo, TiresStatus, Location, Fuel },
  name: "VehicleDetails",

  data: () => ({
    computed: {

  },
  mounted() {
    //this.$store.dispatch("getCarDetails");
  }

  }),
});
</script>
