<template>
  <v-app id="app">
    <v-app-bar
      style="position:fixed;top:0;"
      :fade-on-scroll="false"
      absolute
      color="white"
      elevate-on-scroll
    >
      <v-toolbar-title>
        <span>Vvxir!</span>
        <span class="font-weight-light">NO4GET</span>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <Weather></Weather>
    </v-app-bar>
    <router-view />
    <v-footer>
      <div class="flex-grow-1"></div>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Weather from "@/components/Weather";
export default {
  components: {
    Weather
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
}
.main {
  padding-top: 56px;
}
</style>