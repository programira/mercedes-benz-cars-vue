<template>
  <div>
    <v-container class="grid-list-sm">
      <v-row class="text-center"> </v-row>
    </v-container>
    <v-container class="grey lighten-5 mb-6 grid-list-sm">
      <v-row style="height: 150px">
        <v-col cols="12" class="p-3 col-sm-6">
          <vehicles />
          <vehicle-display />
        </v-col>
        <v-col cols="12" class="col-sm-6">
          <v-row justify="center">
            <vehicle-details />
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
    VehicleDisplay,
  },

  data: () => ({
    alignments: ["left", "rigth"],
    computed: {
      cars() {
        // return this.$store.state.posts
      },
    },
    mounted() {
      //this.$store.dispatch("getCars");
    },
  }),
});
</script>
