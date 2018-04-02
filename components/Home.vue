<template lang="pug">
  div.wrapper
    app-header
    app-about
    app-projects
    app-footer
</template>

<script>
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    "app-header": Header,
    "app-about": About,
    "app-projects": Projects,
    "app-footer": Footer
  }
};
</script>
