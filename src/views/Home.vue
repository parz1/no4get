<template>
  <v-app>
    <v-container class="main d-flex flex-column align-center justify-center">
      <Heart class="heart"></Heart>
      <div class="d-flex flex-column align-center kotoba">
        <span class="title">YOU STOLE MY HEART</span>
        <span class="subtitle-1">But I'll let u keep it.</span>
      </div>
      <div>
        <v-btn text icon x-large color="pink">
          <v-icon>mdi-flower</v-icon>
        </v-btn>
        <v-btn text icon x-large color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text icon x-large color="pink">
          <v-icon>mdi-timer</v-icon>
        </v-btn>
      </div>
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
.main {
  height: 100vh;
}
.heart {
  margin-top: -10vh;
}
.kotoba {
  margin-bottom: 20vh;
}
</style>
