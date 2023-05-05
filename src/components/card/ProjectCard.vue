<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>

<router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"  class="project_card" >

    <div>
        <h2>
            {{ project.title }}
        </h2>
        <div>
            <p v-if="project.content">
                {{ project.content }}
            </p>
            <p class="null_content" v-else>
                Nessun contenuto.
            </p>
        </div>

    </div>

</router-link>


</template>

<style scoped>

.null_content{
    font-style: italic;
    font-weight: lighter;
    text-align: center;
}

.project_card{
    background-color: rgba(217, 157, 242, 0.437);
    border-radius: 20px;
    padding: 10px;
}
</style>