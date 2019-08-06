<template>
  <div class="new">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="makePost()">
      <p> Title: <input type="text" v-model="newPostTitle"></p>
      <p> Body: <input type="text" v-model="newPostBody"></p>
      <p> Image: <input type="text" v-model="newPostImage"></p>
      <input type="submit" value="Edit Post">
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
      message: "Edit Post",
      newPostTitle: "",
      newPostBody: "",
      newPostImage: ""
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.newPostTitle = response.data.title;
      this.newPostBody = response.data.body;
      this.newPostImage = response.data.image;
    });
  },
  methods: {
    makePost: function() {
      console.log("heloooooo from the makePost function");
      var params = {
        title: this.newPostTitle,
        body: this.newPostBody,
        image: this.newPostImage
      };
      axios.patch("/api/posts/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>