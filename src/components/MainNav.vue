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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const links = [
    {text:"Home", link:"/"},
    {text:"Rules", link:"/rules"},
    {text:"Code of Conduct", link:"/code-of-conduct"},
    {text:"Glossary", link:"/glossary"},
    {text:"About", link:"/about"}
];
const navDrawer = ref(false);
const { smAndDown, mdAndUp} = useDisplay();
</script>