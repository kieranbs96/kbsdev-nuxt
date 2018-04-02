<template lang="pug">
  div.wrapper
    app-miniheader
    .container
      h1 Blog
    app-footer

</template>

<script>
import MiniHeader from "../components/MiniHeader";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    "app-footer": Footer,
    "app-miniheader": MiniHeader
  }
};
</script>
