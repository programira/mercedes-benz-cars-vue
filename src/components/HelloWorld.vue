<template>
  <div>
    <v-container>
      <v-row class="text-center">
      </v-row>
    </v-container>
    <v-container class="grey lighten-5 mb-6">
      <v-row no-gutters style="height: 150px">
        <v-col cols="6" class="p-3">
          <vehicles/>
          <vehicle-display/>
        </v-col>
        <v-col cols="6">
          <v-row justify="center">
    <vehicle-details/>
  </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vehicles from "./Vehicles.vue";
import VehicleDetails from "./VehicleDetails.vue";
import VehicleDisplay from "./VehicleDisplay.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    Vehicles,
    VehicleDetails,
    VehicleDisplay
  },

  data: () => ({
    alignments: ["left", "rigth"],
      computed: {
    cars() {
    // return this.$store.state.posts
    }
  },
  mounted() {
    //this.$store.dispatch("getCars");
  }

  }),
});
</script>
