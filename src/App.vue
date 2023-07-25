<template>
  <Suspense>
    <v-app>
      <!-- span with "dodgeball eugene" for web crawlers to find the home page -->
      <span style="display: none">Dodgeball Eugene</span>
      <MainNav />
      <v-main>
        <v-container fluid>
          <v-img src="images/dodgeball-eugene-logo.png" alt="Dodgeball Eugene Logo" max-height="300"></v-img>
          <router-view />
        </v-container>
      </v-main>
      <SocialLinks />
      <BottomNav />
    </v-app>
  </Suspense>
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import BottomNav from "@/components/BottomNav.vue";
import { onMounted, watch, provide } from "vue";
import { useRoute } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createClient } from "contentful";
import contentful from "./helpers";
const route = useRoute();
watch(route, () => {
  window.scroll(0, 0);
});
onMounted(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCKYjjaBuJz3kWj83adJUdu_icRYrJ1D20",
    authDomain: "dodgeball-eugene.firebaseapp.com",
    projectId: "dodgeball-eugene",
    storageBucket: "dodgeball-eugene.appspot.com",
    messagingSenderId: "696887255313",
    appId: "1:696887255313:web:2b6485fb78545ca0af6cb0",
    measurementId: "G-FB0X407NFK",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
});

const space = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_API_KEY;

const client = createClient({
  space,
  accessToken,
});

provide(contentful, client);
</script>
<style>
li {
  padding-top: 15px;
}
</style>

<style scoped>
.z-100 {
  z-index: 100;
}
</style>
