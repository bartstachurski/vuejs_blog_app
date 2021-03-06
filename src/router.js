import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import NewPost from "./views/NewPost.vue";
import ShowPost from "./views/ShowPost.vue";
import EditPost from "./views/EditPost.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/new_post",
      name: "new_post",
      component: NewPost
    },
    {
      path: "/posts/:id",
      name: "show_post",
      component: ShowPost
    },
    {
      path: "/posts/:id/edit",
      name: "edit_post",
      component: EditPost
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
