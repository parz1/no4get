<template>
  <v-app>Happy birthday</v-app>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  created(){
      this.todayIsSpecial();
  },
  methods:{
      ...mapMutations(['todayIsSpecial'])
  }
};
</script>

<style lang="sass" scoped>
</style>