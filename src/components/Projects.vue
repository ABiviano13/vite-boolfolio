<script>
import axios from 'axios'
import ProjectCard from './card/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        fetchProjects() {
            axios
            .get('http://127.0.0.1:8000/api/projects')
            .then(res => {
                // console.log(res)

                const { results } = res.data
                this.projects = results

            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>

<template>
    
    <h1>
        Boolfolio
    </h1>

    <div class="projects">
        <ProjectCard v-for="project in projects" :project="project" :key="project.id"  />
    </div>

</template>

<style scoped >

.projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

</style>