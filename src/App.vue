<template>
  <v-app>
    <MainNav />
    <v-main>
      <v-container fluid>
        <v-img src="images/dodgeball-eugene-logo.png" alt="Dodgeball Eugene Logo" max-height="300"></v-img>
        <router-view />
      </v-container>
    </v-main>
    <v-container class="text-light-blue">
      <v-row>
        <v-col cols="6">
          <v-row class="text-center pa-0 ma-0">
            <v-col cols="12" class="pa-0">
              <a href="https://www.facebook.com/groups/dodgeballeugene" target="_blank">
                <v-img src="images/facebook.png" alt="facebook logo" max-height="94" />
              </a>
            </v-col>
            <v-col cols="12" class="pa-0">
              Join us on Facebook!
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row class="text-center pa-0 ma-0">
            <v-col cols="12" class="pa-0">
              <a href="https://www.meetup.com/dodgeball-eugene/" target="_blank">
                <v-img src="images/meetup.png" alt="meetup logo" max-height="100" />
              </a>
            </v-col>
            <v-col cols="12" class="pa-0">
              Join us on Meetup!
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <BottomNav />
  </v-app>
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
import BottomNav from "./components/BottomNav.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const route = useRoute();
watch(route, () => {
  window.scroll(0,0);
});
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
