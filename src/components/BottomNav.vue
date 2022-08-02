<template>
  <v-row class="pl-5 bg-dark-blue text-light-blue mb-0" align="center">
    <v-col cols="12" sm="4" lg="4">© Copyright Dodgeball Eugene {{ year }}</v-col>
    <v-spacer />
    <v-col  cols="12" lg="2" sm="4" xl="2">Designed and built by <a href="http://www.dylantobia.com" target="_blank">Dylan Tobia</a></v-col>
  </v-row>
</template>

<script setup lang="ts">
  const year = new Date().getFullYear();
</script>