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

<router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">

    <ul class="project_card">
        <li>
            <h2>
                {{ project.title }}
            </h2>
        </li>
        <li>
            <p v-if="project.content">
                {{ project.content }}
            </p>
            <p class="null_content" v-else>
                Nessun contenuto.
            </p>
        </li>
    </ul>

</router-link>


</template>

<style scoped>

.null_content{
    font-style: italic;
    font-weight: lighter;
    text-align: center;
}

.project_card{
    width: 20%;
    background-color: rgba(217, 157, 242, 0.437);
    border-radius: 20px;
    padding: 10px;
}
</style>