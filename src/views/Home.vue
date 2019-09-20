<template>
  <v-app class="home">
    <v-container class="d-flex justify-center">
      <Heart></Heart>
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
