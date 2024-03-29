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
    },
    {
      path: "/dual",
      name: "DUAL",
      component: () => import("../views/Dual.vue"),
    },
    {
      path: "/league",
      name: "League",
      component: () => import("../views/League.vue"),
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: () => import("../views/SchedulePage.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/videos",
      name: "Videos",
      component: () => import("../views/HelpfulVideos.vue"),
    }
  ],
});

export default router;
