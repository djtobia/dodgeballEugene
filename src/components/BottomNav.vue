<template>
  <v-row class="pl-5 bg-dark-blue text-light-blue mb-0" align="center">
    <v-col cols="3">© Copyright Dodgeball Eugene {{ year }}</v-col>
    <v-spacer />
    <v-col  cols="3" lg="1"  xl="1">Designed by <a href="http://www.dylantobia.com" target="_blank">Dylan Tobia</a></v-col>
  </v-row>
</template>

<script setup lang="ts">
  const year = new Date().getFullYear();
</script>