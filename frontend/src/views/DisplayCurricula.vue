<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row justify="space-between">
        <h1 class="title">All Curricula</h1>
        <v-btn
         @click="$router.push('/curricula/create')"
        >
          Create New
        </v-btn>
      </v-row>
      <v-card
        class="my-5"
        outlined
        v-for="curricula in CurriculaData"
        :key="curricula.id"
      >
        <v-card-title class="headline">
          <router-link :to="`/curricula/${curricula.id}`">
            {{ curricula.Name }}
          </router-link>
        </v-card-title>
        <v-card-text>
          {{ curricula.Description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['CurriculaData'])
  }
}
</script>

<style lang='scss' scoped>
// .home-page-home-header {
//   display: flex;
// }
</style>
