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

      <weather-icon v-on:click.native="gotoWeather"></weather-icon>
    </v-app-bar>
    <v-navigation-drawer dark temporary app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="display-1 font-weight-bold">NO4GET</v-list-item-title>
          <v-list-item-subtitle>今天也要元气满满的哦</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item-group v-model="item" color="primary">
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon x-large>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="body-1 font-weight-light">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-item-group>
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
      item: 1,
      items: [
        { title: "HOME", icon: "mdi-calendar", to: "/" },
        { title: "WEATHER", icon: "mdi-weather-hail", to: "/weather" },
        { title: "WE'VE BEEN", icon: "mdi-timeline-text-outline", to: "/wevebeen" },
        { title: "YAKUSOKU", icon: "mdi-flower-poppy", to: "/farm" },
        { title: "SPECIAL DAYS", icon: "mdi-calendar-star", to: "/special" },
        { title: "About", icon: "mdi-information", to: "/about" }
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
  methods: {
    gotoWeather() {
      this.$router.push("/weather");
    }}
};
</script>

<style>
#app {
}
</style>