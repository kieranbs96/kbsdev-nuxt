<template lang="pug">
header.header
  div.header__logo
      img.header__logo--icon(src="../assets/img/k-logo.png")

  h1.header__heading
      span.header__heading--main Kieran Smith
      span.header__heading--sub Front-End Web Developer
  div.header__location
      i.header__location--icon.fal.fa-map-marker-alt
      span.header__location--name London

  div.scroll
      a(href="#projects")
          i.scroll__icon.fal.fa-angle-down

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      heading: "Kieran Smith",
      jobTitle: "Front-End Web Developer"
    };
  }
};
</script>

