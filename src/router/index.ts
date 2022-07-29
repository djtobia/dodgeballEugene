import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/rules",
      name: "Rules",
      component: () => import("../views/Rules.vue"),
    },
    {
      path: "/code-of-conduct",
      name: "Code Of Conduct",
      component: () => import("../views/CodeOfConduct.vue"),
    },
    {
      path: "/glossary",
      name: "Glossary",
      component: () => import("../views/Glossary.vue"),
    }
  ],
});

export default router;
