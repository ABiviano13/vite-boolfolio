<script>
import axios from 'axios'

export default {
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
                console.log(res)
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

</template>

<style>

</style>