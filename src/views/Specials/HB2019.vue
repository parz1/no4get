<template>
  <v-app>
    <div class="d-flex justify-end">
      <v-btn x-large icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <aplayer
      class="aplayer"
      autoplay
      narrow
      :music="{
          title: 'Preparation',
          author: 'Hans Zimmer/Richard Harvey',
          url: 'http://devtest.qiniudn.com/Preparation.mp3',
          pic: 'http://devtest.qiniudn.com/Preparation.jpg',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }"
    ></aplayer>
  </v-app>
</template>

<script>
import Aplayer from "vue-aplayer";
import { mapMutations } from "vuex";
export default {
  name: "",
  components: {
    Aplayer
  },
  data() {
    return {};
  },
  created() {
    this.todayIsSpecial();
  },
  methods: {
    ...mapMutations(["todayIsSpecial", "beNormal"]),

    close() {
      this.$router.push("/");
      this.beNormal();
    }
  }
};
</script>

<style lang="scss" scoped>
.aplayer {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>