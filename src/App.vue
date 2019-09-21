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
        <span>Parz!</span>
        <span class="font-weight-light">NO4GET</span>
      </v-toolbar-title>
    </v-app-bar>
    <router-view />
    <div id="playground-example" style="display:block;height:1000px;width:100px;">1</div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#app {
}
.main {
  padding-top: 40px;
}
</style>