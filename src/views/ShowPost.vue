<template>
  <div class="show">
    <h1>{{ post.title }}</h1>
    <img v-bind:src="post.image">
    <p>{{ post.body }}</p>
    <p><router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link></p>
    <button v-on:click="destroyPost()">Delete Post</button>
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
      post: {}
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(response  => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    destroyPost: function() {
      axios.delete(`/api/posts/${this.post.id}`).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>