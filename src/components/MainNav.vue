<template>
  <v-app-bar color="dark-blue" >
    <template v-if="mdAndUp">
      <v-btn v-for="link in links" :id="link" :to="link.link" class="text-light-blue">{{link.text}}</v-btn>
    </template>
    <template v-if="smAndDown" v-slot:append>
      <v-btn icon class="text-light-blue" @click.stop="navDrawer = !navDrawer"><v-icon>mdi-menu</v-icon></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="navDrawer" temporary v-if="smAndDown" location="right">
    <v-list class="text-light-blue">
      <v-list-item v-for="link in links" :id="`${link.text}-sidebar`"><v-btn flat :to="link.link" class="text-light-blue">{{link.text}}</v-btn></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-banner v-if="true" class="my-16 font-weight-bold bg-red-darken-4" :min-height="smAndDown ? '180' : '75'">
    <v-banner-text>
      URGENT: We are looking for a new gym to play our open dodgeball during the week. August 24th, 2022, will be our last Wednesday night at Sheldon Community Center
      (We will still have Sunday nights for the time being). If you or anyone you know has any tips on a gym we could rent during the week, please contact us at
      <a
        href="mailto:dodgeballeugene@gmail.com"
        class="text-dark-blue font-weight-black"
        target="_blank"
      >
          DodgeballEugene@gmail.com
      </a>
    </v-banner-text>
  </v-banner> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const links = [
    {text:"Home", link:"/"},
    {text:"Rules", link:"/rules"},
    {text:"D.U.A.L. III", link: "/dual-3"},
    {text:"League", link: "/league"},
    {text:"Code of Conduct", link:"/code-of-conduct"},
    {text:"Glossary", link:"/glossary"},
    {text:"About", link:"/about"}
];
const navDrawer = ref(false);
const { smAndDown, mdAndUp} = useDisplay();
</script>