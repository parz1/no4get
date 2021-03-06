import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: {},
    isSpecial: true //it's birthday
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather;
    },
    todayIsSpecial(state){
      state.isSpecial = true;
    },
    beNormal(state){
      state.isSpecial = false;
    }
  },
  actions: {

  }
})
