<template>
<v-progress-linear
      v-model="knowledge"
      height="25"
      color="amber"
      value="55"
    >
      <strong>55</strong>
    </v-progress-linear>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Fuel",

  data: () => ({
        percentage: [
          {
            value: 80,
            timestamp: '1631458012',
          },
        ],
  }),
});
</script>
