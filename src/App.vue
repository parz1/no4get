<template>
  <v-app id="app">
    <v-app-bar
      style="position:fixed;top:0;"
      :fade-on-scroll="false"
      v-if="!isSpecial"
      absolute
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Vvxir!</span>
        <span class="font-weight-light">NO4GET</span>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <weather-icon></weather-icon>
    </v-app-bar>
    <v-navigation-drawer temporary app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view />
    <v-footer>
      <div class="flex-grow-1"></div>
      <div>&copy; {{ info + new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import WeatherIcon from "@/components/WeatherIcon";
export default {
  components: {
    WeatherIcon
  },
  data() {
    return {
      info: "Made by parz1 who loves vvxir. ",
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      drawer: null,
      right: null
    };
  },
  computed: {
    ...mapState({
      isSpecial: state => state.isSpecial
    })
  },
  methods: {}
};
</script>

<style>
#app {
}
</style>