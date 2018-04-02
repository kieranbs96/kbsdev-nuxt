<template lang="pug">
  div.wrapper.error
    app-miniheader
    div.container
      h1(v-if="error.statusCode === 404") Oops! Page not found
      h1(v-else) An error occurred
      nuxt-link(to="/") While you're here, here's a link to my home page. 👋
    app-footer
</template>

<script>
import Footer from "../components/Footer";
import MiniHeader from "../components/MiniHeader";

export default {
  props: ["error"],
  components: {
    "app-footer": Footer,
    "app-miniheader": MiniHeader
  }
};
</script>

<style lang="scss">

</style>
