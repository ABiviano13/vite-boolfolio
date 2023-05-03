<script>

</script>

<template>

    <header>

        <div class="container">
            <div class="row">
                <div class="col">
                    <router-link to="/"> Homepage </router-link>
                </div>
                <div class="col">
                    <router-link to="/portfolio" class="link"> Boolfolio </router-link>
                    <router-link to="/aboutus"> About us </router-link>
               </div>
            </div>
        </div>

    </header>

</template>

<style scoped>

.container{
    background-color: cornsilk;
}

.row{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    font-weight: bold;
}

.link{
    padding-right:  10px;
}


</style>