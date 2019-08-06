<template>
  <div class="show">
    <h1>{{ message }}</h1>
    <p>{{ post }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      // you were here last, define the post
      post: {}
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => console.log(response.data));
  },
  methods: {}
};
</script>