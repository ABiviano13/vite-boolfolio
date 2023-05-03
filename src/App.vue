<script>
// import Projects from './components/Projects.vue';

export default{
  // components: {
  //   Projects,
  // }
}
</script>

<template>

  <!-- <div class="container">
    <Projects />
  </div> -->

  <header>
    sono header!!!
  </header>

  <main>
    <!-- router-view non bisogna importarlo poichè è globale -->
    <router-view></router-view> 
  </main>


  <footer>
    sono footer!!!
  </footer>

</template>

<style scoped>

</style>
