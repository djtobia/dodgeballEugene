<template>
  <v-app>
    <MainNav />
    <v-main>
      <v-container fluid>
        <v-img src="images/dodgeball-eugene-logo.png" alt="Dodgeball Eugene Logo" max-height="300"></v-img>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-container class="text-center">
      <div id="fb-root"></div>
      <div class="fb-page" data-href="https://www.facebook.com/Dodgeball-Eugene-110959956928427" data-tabs="" data-width="" data-height="" data-lazy="true" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Dodgeball-Eugene-110959956928427" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Dodgeball-Eugene-110959956928427">Dodgeball Eugene</a></blockquote></div>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
import { onMounted } from "vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
onMounted(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCKYjjaBuJz3kWj83adJUdu_icRYrJ1D20",
    authDomain: "dodgeball-eugene.firebaseapp.com",
    projectId: "dodgeball-eugene",
    storageBucket: "dodgeball-eugene.appspot.com",
    messagingSenderId: "696887255313",
    appId: "1:696887255313:web:2b6485fb78545ca0af6cb0",
    measurementId: "G-FB0X407NFK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
});
</script>
<style>
li {
  padding-top: 15px;
}
</style>
