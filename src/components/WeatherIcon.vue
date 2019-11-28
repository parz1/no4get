<template>
  <div class="text-center">
    <v-avatar color="#fff" tile>
      <v-icon v-if="WeatherIcon!=''" x-large>{{WeatherIcon}}</v-icon>
      <v-progress-circular v-else indeterminate color="indigo"></v-progress-circular>
    </v-avatar>
  </div>
</template>

<script>
import { fetch } from "@/api";
import CryptoJS from "crypto-js";
export default {
  name: "",
  data() {
    return {
      weather: {},
      skycon: {
        RAIN: "weather-rainy",
        PARTLY_CLOUDY_DAY: "weather-partly-cloudy",
        PARTLY_CLOUDY_NIGHT: "weather-night-partly-cloudy",
        CLEAR_DAY: "weather-sunny",
        CLEAR_NIGHT: "weather-night",
        CLOUDY: "weather-cloudy",
        WIND: "weather-windy",
        HAZE: "weather-hazy",
        SNOW: "weather-snowy-heavy"
      },
      WeatherStat: "",
      WeatherIcon: ""
    };
  },
  created() {
    fetch("weather", {
      lng: 120.08246,
      lag: 30.30208
    })
      .then(res => {
        this.weather = res.data;
        this.WeatherStat = this.weather.result.skycon;
        this.WeatherIcon = "mdi-" + this.skycon[this.WeatherStat];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
</style>