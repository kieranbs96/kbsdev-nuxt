<template lang="pug">
  div.wrapper
    app-header
    app-footer

</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

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
