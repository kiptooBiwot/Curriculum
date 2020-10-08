<template>
  <v-app>
    <navbar />
   <v-container fluid class="grey lighten-5">
      <router-view />
   </v-container>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
    //
  })
}
</script>
