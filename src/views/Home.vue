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
import Loading from "@/components/Loading";
import Weather from '@/components/Weather';
import { fetch } from "@/api";

export default {
  name: "home",
  components: {
    Heart,
    Loading,
    Weather
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.main {
  padding-top: 56px;
}
.heart {
  margin-top: 10vh;
}
.kotoba {
  margin-top: 10vh;
}
</style>
