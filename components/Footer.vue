<template lang="pug">
div
  footer.footer
    div.footer-area
      div.footer-area__logo
        img.footer-area__logo--img(src="../assets/img/k-logo.png")
      div.footer-area__contact
        a(href="mailto:kieranbs96@gmail.com" class="footer-area__contact--mail-link")
          span.say-hi Say hi
          i.fal.fa-hand-peace


      div.footer-area__links
        div.footer-area__links--twitter
          a(target="_blank" href="//twitter.com/kbsdev" class="twitter__link")
            i.fab.fa-twitter

        div.footer-area__links--linkedin
          a(target="_blank" href="//linkedin.com/in/kieranbs96" class="linkedin-in__link")
            i.fab.fa-linkedin-in


        div.footer-area__links--github
          a(target="_blank" href="//github.com/kieranbs96" class="github__link")
            i.fab.fa-github


        div.footer-area__links--codepen
          a(href="//codepen.io/kieranbs96/" target="_blank" class="codepen__link")
           i.fab.fa-codepen


  div.subFooter
    p.subFooter__message Created with
      span.subFooter__message-heart  &hearts;
      span  by Kieran

</template>

<script>
export default {
  name: "Footer"
};
</script>
