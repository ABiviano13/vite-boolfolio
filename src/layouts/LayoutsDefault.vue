<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    }
}

</script>

<template>

<Header></Header>

<main>
  <!-- router-view non bisogna importarlo poichè è globale -->
  <!-- <router-view></router-view>  -->
  <slot />
</main>


<footer>
  <div class="container">

    <h2>
      sono footer!!!
    </h2>

  </div>
</footer>

</template>