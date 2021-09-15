<template>
    <!-- Get available cars component start-->
    <v-row justify="center">
    <v-card class="mx-auto" width="90%">
        <v-list dense>
        <v-subheader>Available cars</v-subheader>
        <v-list-item-group v-model="selectedCar" color="primary">
            <v-list-item v-for="(car, i) in cars" :key="i">
            <v-list-item-content>
                <v-list-item-title v-text="car.licenseplate"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-card>
    </v-row>
    <!-- Get available cars component end-->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Vehicles",

  data: () => ({
    selectedCar: 1,
      cars: [
        { licenseplate: 'S-GG-1236', },
      ],
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
