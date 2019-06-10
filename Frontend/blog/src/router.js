import Vue from "vue";
import Router from "vue-router";
import Details from "./views/Details.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Blog",
      component: () => import("./views/Blog.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/post/:postId",
      name: "details",
      component: Details,
      props: true
    }
  ]
});
