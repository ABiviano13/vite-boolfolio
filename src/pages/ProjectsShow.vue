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
        .finally(() => {
          
          this.loading = false

        }) 
      }

    },
    created() {
      this.fetchProject(this.slug)
    },
    beforeRouteUpdate(to) {
      const newSlug = to.params.slug
      console.log(newSlug)
      
      this.fetchProject(newSlug)

    }
    
  }
</script>

<template>
    <div v-if="project">
        <div class="container py-2">
            <h1 class="font-bold">
                {{ project.title }}
            </h1>
            <div v-html="project.content"></div>
        </div>


    </div>
    <div class="animate-pulse" v-else>
        ...Loading
    </div>

</template>

<style>

</style>