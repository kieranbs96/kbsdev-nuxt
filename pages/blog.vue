<template lang="pug">
  div.wrapper
    app-miniheader
    <div class="blog" :class="{ 'blog--reading': this.post }">
      h1 Blog
      <blog-feed :filters="filters"/>
      <blog-post :post="post"/>
    </div>
    app-footer

</template>

<script>
import MiniHeader from "../components/MiniHeader";
import BlogFeed from "../components/BlogFeed";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";

export default {
  name: "blog",
  components: {
    "app-miniheader": MiniHeader,
    BlogFeed,
    BlogPost,
    "app-footer": Footer
  },
  resource: "Blog",
  props: {
    post: String,
    author: String
  },
  data() {
    return {
      navs: 0,
      title: "",
      labels: {
        post: "",
        author: ""
      }
    };
  },
  computed: {
    content() {
      return { title: this.title, labels: this.labels };
    },
    filters() {
      let filters = {};
      if (this.post) filters.post = this.post;
      if (this.author) filters.author = this.author;
      return filters;
    }
  },
  watch: {
    "$route.name"(to, from) {
      if (to !== from) this.navs++;
    }
  },
  beforeMount() {
    this.$getResource("blog");
  }
};
</script>
