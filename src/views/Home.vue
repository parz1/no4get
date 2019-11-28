<template>
  <v-app>
    <v-container class="d-flex flex-column align-center justify-center container">
      <Heart  class="heart"></Heart>
      <Timer v-if="stat=='timer'"></Timer>
      <div class="d-flex flex-column align-center kotoba">
        <span class="title">YOU STOLE MY HEART</span>
        <span class="subtitle-1">But I'll let u keep it.</span>
      </div>
      <div>
        <v-btn text icon x-large color="pink">
          <v-icon>mdi-flower</v-icon>
        </v-btn>
        <v-btn text icon x-large color="pink" @click="stat='home'">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text icon x-large color="pink" @click="stat='timer'">
          <v-icon>mdi-timer</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Heart from "@/components/Heart.vue";
import Timer from "@/components/Timer";
//import { fetch } from "@/api";

export default {
  name: "home",
  components: {
    Heart,
    Timer
  },
  data(){
    return {
      stat:"timer"
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.container {
  padding-top: 56px;
}
.heart {
  margin-top: 10vh;
}
.kotoba {
  margin-top: 10vh;
}
</style>
