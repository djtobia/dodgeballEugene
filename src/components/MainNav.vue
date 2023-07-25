<template>
  <v-app-bar color="dark-blue" v-if="mdAndUp">
    <v-btn v-for="link in links" :key="link.link" :id="link" :to="link.link" class="text-light-blue">
      {{ link.text }}
    </v-btn>
  </v-app-bar>
  <v-row justify="end" class="z-1000 sticky ma-2">
    <v-btn v-if="smAndDown" icon class="text-light-blue on-top"
      @click.stop="navDrawer = !navDrawer"><v-icon>mdi-menu</v-icon></v-btn>
  </v-row>
  <v-navigation-drawer v-model="navDrawer" v-if="smAndDown" location="right" touchless>
    <v-list class="text-light-blue">
      <v-list-item v-for="link in links" :key="`${link.text}-sidebar`" :id="`${link.text}-sidebar`"><v-btn flat
          :to="link.link" class="text-light-blue">{{ link.text }}</v-btn></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-banner class="my-16 font-weight-bold bg-red-darken-4" :min-height="smAndDown ? '180' : '75'">
    <v-banner-text>
      URGENT: We are looking for a new gym to play our open dodgeball during the weekend. June 4th, 2023, will be our last
      Sunday night at Sheldon Community Center
      If you or anyone you know has any tips on a gym we could rent, please contact us at
      <a href="mailto:dodgeballeugene@gmail.com" class="text-dark-blue font-weight-black" target="_blank">
        DodgeballEugene@gmail.com
      </a>
    </v-banner-text>
  </v-banner> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const links = [
  { text: "Home", link: "/" },
  { text: "Rules", link: "/rules" },
  { text: "Open Gym Schedule", link: "/schedule" },
  { text: "D.U.A.L.", link: "/dual" },
  { text: "League", link: "/league" },
  { text: "Code of Conduct", link: "/code-of-conduct" },
  { text: "Glossary", link: "/glossary" },
  { text: "About", link: "/about" },
  { text: "Contact Us", link: "/contact" },
];
const navDrawer = ref(false);
const { smAndDown, mdAndUp } = useDisplay();
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 8px;
}

.z-1000 {
  z-index: 1000;
}

.h-100 {
  height: 100vh;
}
</style>