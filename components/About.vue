<template lang="pug">
div.about
  div.container
    h2.about__heading 👋 My name is Kieran
    div.about__text
      p I'm an enthusiastic Junior Web Developer located in London, originally from Surrey. I have a genuine interest in the Web, I am extremely keen to advance my knowledge in and master the most modern technologies. During my leisure time, I participate in and enjoy swimming, cycling, playing/watching football (I support Chelsea to save the disappointment for future!), learning/advancing my knowledge in tech, browsing Social Media (primarily Twitter) reading articles on Medium, notably Codeburst.io, FreeCodeCamp &amp; Hackernoon. Below is a list of skills I possess and looking to advance.

    div.about__skills
      div.about__skill
        span.about__skill-icon.about__skill-icon--html
          i.fab.fa-html5
        p.about__skill-text HTML5
      div.about__skill
        span.about__skill-icon.about__skill-icon--css
          i.fab.fa-css3-alt
        p.about__skill-text CSS3
      .about__skill
        span.about__skill-icon.about__skill-icon--js
          i.fab.fa-js
        p.about__skill-text Javascript
      .about__skill
        span.about__skill-icon.about__skill-icon--css
          i.fab.fa-sass
        p.about__skill-text SASS
      .about__skill
        span.about__skill-icon.about__skill-icon--git
          i.fab.fa-github
        p.about__skill-text Github
      .about__skill
        span.about__skill-icon.about__skill-icon--npm
          i.fab.fa-npm
        p.about__skill-text NPM
      .about__skill
        span.about__skill-icon.about__skill-icon--gulp
          i.fab.fa-gulp
        p.about__skill-text Gulp
      .about__skill
        span.about__skill-icon.about__skill-icon--node
          i.fab.fa-node
        p.about__skill-text Node.js
      .about__skill
        span.about__skill-icon.about__skill-icon--react
          i.fab.fa-react
        p.about__skill-text React
      .about__skill
        span.about__skill-icon.about__skill-icon--react
          i.fal.fa-compress
        p.about__skill-text RWD
      .about__skill
        span.about__skill-icon.about__skill-icon--vue
          i.fab.fa-vuejs
        p.about__skill-text VueJS
      .about__skill
        span.about__skill-icon.about__skill-icon--pug
          img.about__skill-image.about__skill-image-w(src="../assets/svg/pug-w.png" alt="Pug")
          img.about__skill-image.about__skill-image-c(src="../assets/svg/pug-c.png" alt="Pug")
        p.about__skill-text Pug

</template>

<script>
export default {
  name: "About"
};
</script>
