<template lang="pug">
div.miniheader-wrapper
  header.miniheader
    div.miniheader__logo
        img.header__logo--icon(src="../assets/img/k-logo.png")
        h2.miniheader__heading
            span.miniheader__heading--main Kieran Smith

    nav.miniheader__menu
      ul.miniheader__list
        li.miniheader__item
          nuxt-link(to="/").miniheader__link Home
        li.miniheader__item
          nuxt-link(to="/blog").miniheader__link Blog
  <svg class="diagonal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0a1429"></stop>
        <stop offset="100%" stop-color="#132d63"></stop>
      </linearGradient>
    </defs>
    <polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon>
  </svg>

</template>

<script>
export default {
  name: "MiniHeader",
  data() {
    return {
      heading: "Kieran Smith",
      jobTitle: "Front-End Web Developer"
    };
  }
};
</script>

