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
        loading: true
      }
    },
    props: ['slug'],
    computed: {
      relatedProjects() {
        if(this.project.relatedProjects) {
          return this.project.relatedProjects
        }

        return []
      }
    },
    methods: {
      fetchProject(slug) {

        this.loading = true

        axios.get(`http://127.0.0.1:8000/api/projects/${ slug }`)
        .then(res => {
          const { success, project } = res.data

          if(success) {
            this.project = project
          } else {
            console.log(err)
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
    <DefaultLayout>
        <template v-if="loading === false">
            <div class="container py-2">
                <h1 class="font-bold">
                    {{ project.title }}
                </h1>
                <h2>
                    {{  project.user.name }}
                </h2>
                <div v-html="project.content"></div>
            </div>


            <div class="container py-8" v-if="relatedProjects.length > 0">
                <ul class="grid grid-cols-3 gap-8">
                    <li v-for="related in relatedProjects" :key="related.id">
                        <ProjectCard :project="related" />
                    </li>
                </ul>
            </div>

        </template>
        <div class="animate-pulse" v-else>
            ...Loading
        </div>
    </DefaultLayout>

</template>

<style>

</style>