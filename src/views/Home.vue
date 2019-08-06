<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.image">
      <p>{{ post.body }}</p>
      <p><router-link v-bind:to="`/posts/${post.id}`">Show Post</router-link></p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Home",
      posts: {}
    };
  },
  created: function() {
    console.log("in the created function");
    axios.get("/api/posts").then(response => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  methods: {}
};
</script>