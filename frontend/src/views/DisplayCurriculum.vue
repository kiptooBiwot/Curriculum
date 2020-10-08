<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <h1 class="title">{{ selectedCurriculum.Name }}</h1>
          <p>
            {{ selectedCurriculum.Description }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(section, i) in selectedCurriculum.sections"
            :key="i"
          >
            <v-expansion-panel-header>
              Section {{ i + 1 }} - {{ section.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list flat subheader three-line>
                <v-subheader>Resources</v-subheader>

                <v-list-item-group multiple active-class="">
                  <v-list-item
                    v-for="(resource, j) in section.resources"
                    :key="resource + j"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{ resource.resource }}</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ resource.url }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-list flat subheader three-line>
                <v-subheader>Projects</v-subheader>

                <v-list-item-group multiple active-class="">
                  <v-list-item
                    v-for="(project, k) in section.projects"
                    :key="project + k"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{ project.title }}</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ project.description }}
                        </v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selectedCurriculum: {}
    }
  },
  computed: {
    ...mapState(['CurriculaData'])
  },
  mounted () {
    this.selectedCurriculum = this.CurriculaData.find((curriculum) => {
      return curriculum.id === this.$route.params.id
    })
    console.log(this.selectedCurriculum)
  }
}
</script>

<style>
</style>
