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
import { fetch } from "@/api";

export default {
  name: "home",
  components: {
    Heart,
    Loading
  },
  mounted() {
    fetch(
        "https://api.caiyunapp.com/v2/dzXnDU3NLcQRqM4M/121.6544,25.1552/realtime.json"
      )
      .then(res => {
        console.label(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style>
.main {
  padding-top: 56px;
}
</style>
