<template lang="pug">
  div.wrapper
    app-miniheader
    test-component
    app-footer
</template>

<script>
import MiniHeader from "../components/MiniHeader";
import TestComponent from "../components/TestComponent";
import Footer from "../components/Footer";

export default {
  name: "test",
  components: {
    "app-miniheader": MiniHeader,
    "test-component": TestComponent,
    "app-footer": Footer
  }
};
</script>


