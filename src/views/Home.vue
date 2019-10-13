<template>
  <v-app class="main">
    <v-container class="d-flex flex-column align-center justify-center">
      <Heart></Heart>
      <span class="display-1">212</span>
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
