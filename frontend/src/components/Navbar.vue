<template>
  <div>
    <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn href="/" text>
            Home
        </v-btn>
        <v-btn href="/curricula" text>
            View All
        </v-btn>
        <v-btn href="/curricula/create" text>
            Create
        </v-btn>
        <!-- <router-link to="/curriculum/show">Upsert</router-link> -->
        </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
