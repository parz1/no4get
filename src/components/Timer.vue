<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <div>We've been</div>
    <div>
      <span class="display-4 font-weight-bold font-italic">{{day}}</span>DAYS
    </div>
    <div>
      <span class="display-1 font-italic">{{hour}}</span>HOURS
      <span class="display-1 font-italic">{{min}}</span>MINS
    </div>

    <div>
      <span class="display-1 font-italic">{{second}}</span>SECONDS
    </div>
  </v-container>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      kokuhaku: Date,
      timestamp: 0
    };
  },
  created() {
    this.kokuhaku = new Date("2018/02/21 23:21");
    var s = this.kokuhaku.getTime();
    let now = Date.now();
    let e = now;
    this.timestamp = (e - s) / 1000;
    setInterval(() => {
      this.timestamp++;
    }, 1000);
  },
  computed: {
    day() {
      return parseInt(this.timestamp / (24 * 60 * 60));
    },
    hour() {
      let newstamp = this.timestamp - this.day * 24 * 60 * 60;
      return parseInt(newstamp / (60 * 60));
    },
    min() {
      let newstamp =
        this.timestamp - this.day * 24 * 60 * 60 - this.hour * 60 * 60;
      return parseInt(newstamp / 60);
    },
    second() {
      let newstamp =
        this.timestamp -
        this.day * 24 * 60 * 60 -
        this.hour * 60 * 60 -
        this.min * 60;
      return parseInt(newstamp);
    }
  }
};
</script>

<style scoped>
</style>