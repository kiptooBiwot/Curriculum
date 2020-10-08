<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row class="mt-5" justify="space-between">
        <h1 class="title">Create Curricum</h1>
        <v-btn>Save</v-btn>
      </v-row>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="mt-5 pa-5 white">
        <v-text-field
          v-model="name"
          label="Name"
          required
          outlined
        ></v-text-field>
        <v-text-field
          v-model="goals"
          outlined
          label="Goals"
          required
        ></v-text-field>
        <v-textarea
          outlined
          name="description"
          label="Description"
          value=""
        ></v-textarea>
        <v-row>
          <v-col cols="12">
            <v-card class="px-5">
              <v-card-title
                class="headline"
              >Sections</v-card-title>
              <v-text-field
                v-model="name"
                label="Name"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="goals"
                outlined
                label="Goals"
                required
              ></v-text-field>
              <hr class="grey lighten-3 mx-2" />
              <v-card class="ma-5">
                <v-card-text>
                  <v-text-field
                    outlined
                    placeholder="Enter Resource Link"
                  ></v-text-field>
                  <v-row>
                    <v-col>
                      <p>List of Resources</p>
                      <p>List of Resources</p>
                      <p>List of Resources</p>
                      <p>List of Resources</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card class="ma-5">
                <v-card-text>
                  <v-text-field
                    outlined
                    placeholder="Enter Project Link"
                  ></v-text-field>
                  <v-row>
                    <v-col>
                      <p>List of Projects</p>
                      <p>List of Projects</p>
                      <p>List of Projects</p>
                      <p>List of Projects</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card-actions>
                <v-btn>Add Section</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // name: "Home",
}
</script>

<style lang='scss' scoped>
// .home-page-home-header {
//   display: flex;
// }
</style>
