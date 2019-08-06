<template>
  <div class="new">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="makePost()">
      <p> Title: <input type="text" v-model="newPostTitle"></p>
      <p> Body: <input type="text" v-model="newPostBody"></p>
      <p> Image: <input type="text" v-model="newPostImage"></p>
      <input type="submit" value="Create new post">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "New Post",
      newPostTitle: "",
      newPostBody: "",
      newPostImage: ""
    };
  },
  created: function() {},
  methods: {
    makePost: function() {
      console.log("heloooooo from the makePost function");
      var params = {
        title: this.newPostTitle,
        body: this.newPostBody,
        image: this.newPostImage
      };
      axios.post("/api/posts", params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>