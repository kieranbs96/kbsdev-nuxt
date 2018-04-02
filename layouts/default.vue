<template>
    <nuxt/>
</template>

<script>
export default {
  transition: "test",
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>


<style lang="scss">
@import "../assets/scss/style.scss";
</style>
