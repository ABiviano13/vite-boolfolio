<script>
import DefaultLayout from '../layouts/LayoutsDefault.vue';
import axios from 'axios'
import ProjectCard from '../components/card/ProjectCard.vue';

export default {
    components: {
      DefaultLayout,
      ProjectCard
    },
    data() {
      return {
        project: null,
      }
    },
    props: ['slug'],
    methods: {
      fetchProject(slug) {

        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
        .then(res => {
          console.log(res)
          const { success, project } = res.data

          if(success) {
            this.project = project
          } else {
            console.log('project non definito')
          }

        })
        .catch(err => {
          console.log(err)
        })
      }

    },
    created() {
      this.fetchProject(this.slug)
    }
    
  }

</script>

<template>
  <div v-if="project">
    <div class="container py-2">
      <h1>
        {{ project.title }}
      </h1>
      <div>
        <p v-if="project.content">
          {{ project.content }}
        </p>
        <p class="null_content" v-else>
          Nessun contenuto.
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    ...Loading
  </div>

</template>

<style>

</style>