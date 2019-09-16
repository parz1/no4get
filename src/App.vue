<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PARZ!</span>
        <span class="font-weight-light">NO4GET</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
      >
        <span class="mr-2">ADD</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
