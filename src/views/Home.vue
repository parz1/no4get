<template>
  <v-app class="main">
    <v-container class="d-flex flex-column align-center justify-center">
      <Heart></Heart>
      <span class="display-4">212</span>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Heart from "@/components/Heart.vue";

export default {
  name: "home",
  components: {
    Heart
  }
};
</script>

<style>
</style>
