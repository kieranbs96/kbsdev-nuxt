<template lang="pug">

div.projects#projects
  h2.projects__heading My Work

  div.projects__georgina
    div.projects__card
      div.projects__images
        h3.projects__card-heading Georgina Cross

      div.projects__content
        h3.projects_title Nursing Portfolio
        p.projects__text Georgina is a children's nurse who needed a portfolio to help with her validation renewal. I created the site assimple in Design as possible. The site was developed in GatsbyJS which is a powerful React Static Page Generator, I decided to use a React based website as I am confident in my React ability and it produces powerful and fast web apps, other technologies in the project include SASS &amp; SVG. The blog page is build into Gatsby using the Markdown Source, so all full blog pages are build in Markdown and inline HTML.
        a(target="_blank" href="//georginacross.co.uk/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__react-yt
    div.projects__card
      div.projects__images
        i.fab.fa-react

      div.projects__content
        h3.projects_title React Youtube
        p.projects__text Created using React and the Youtube API I created this replica of the 'old' Youtube layout. Focussed on the state of the app so that it changes based on what is entered in the search bar and limiting the amount of actions per second using Lodash.
        a(target="_blank" href="//react-yt.netlify.com/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__natours
    div.projects__card
      div.projects__images
        img(class="projects__logo" src="../assets/img/logo-green-1x.png" alt="Natours Project Logo")

      div.projects__content
        h3.projects_title Natours
        p.projects__text Natours is a fictional company, the focus of Natours is to advertise tours for adventurous people, the project was created for an Advanced CSS &amp; Sass course provided by 'Jonas Schmedtmann' - this taught me the power of CSS animations, as well as SASS and Node and how to create a build process.
        a(target="_blank" href="//natours-kbs.netlify.com/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__trillo
    div.projects__card
      div.projects__images
        img(class="projects__logo" src="../assets/img/trillo-logo.png" alt="Trillo Project Logo")

      div.projects__content
        h3.projects_title Trillo
        p.projects__text Trillo is a web app for booking Hotels, Flights, Car Rental and Tours very similar to Booking.com, the project was also created as part of the Advanced CSS & SASS course. This project is completely focussed around the power of Flexbox aswell as the use of SVG.
        a(target="_blank" href="//trillo-kbs.netlify.com/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__knitwell
    div.projects__card
      div.projects__images
        img(class="projects__logo" src="../assets/img/small-knitwell.png" alt="Knitwell Wools Project Logo")

      div.projects__content
        h3.projects_title Knitwell Wools
        p.projects__text Knitwell is a well-established knitting eCommerce store who have been around since 1949. The client wanted a fresh design that was usable for their audience which includes elderly customers. We decided to use Bootstrap 3 to make this possible as it's a solid framework for responsive web apps. The website was produced in the Sellerdeck Content Management system and includes a Mega Menu, Customized Checkout, Lazyload &amp; Responsive Images. We also decided to include Feefo (Customer Review System) so that reviews could be left easily and be seen on product pages.
        a(target="_blank" href="https://www.knitwell.co.uk/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__nexter
    div.projects__card
      div.projects__images
        img(class="projects__logo" src="../assets/img/nexter.png" alt="Nexter Project Logo")

      div.projects__content
        h3.projects_title Nexter
        p.projects__text Nexter is a real estate website that focusses on and advertises luxury estate. The project was also created as part of the Advanced CSS &amp; SASS course and the focus was on CSS Grid nearly every part of the website is created using CSS Grid, even the smallest of components.
        a(target="_blank" href="//nexter-kbs.netlify.com/" class="projects__read-more btn")
          span See the website &rarr;



  div.projects__cigars-of-cuba
    div.projects__card
      div.projects__images
        img(class="projects__logo" src="../assets/img/cigars-of-cuba-logo.png" alt="Cigars of Cuba Project Logo")

      div.projects__content
        h3.projects_title Cigars of Cuba
        p.projects__text Cigars of Cuba is one of the top Cigars &amp; Cigarette websites in the UK. The website was created by myself using HTML &amp; CSS from scratch and the Sellerdeck CMS. The aim was to produce a fast and easy to use eCommerce experience for customers.
        a(target="_blank" href="https://www.cigarsofcuba.co.uk/" class="projects__read-more btn")
          span See the website &rarr;




</template>

<script>
export default {
  name: "Projects"
};
</script>
