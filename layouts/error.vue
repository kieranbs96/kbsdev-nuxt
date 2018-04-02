<template lang="pug">
  div
    div.container
      h1(v-if="error.statusCode === 404") Oops! Page not found
      h1(v-else) An error occurred
      nuxt-link(to="/") Home page
    app-footer
</template>

<script>
import Footer from "../components/Footer";

export default {
  props: ["error"],
  components: {
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
</style>
