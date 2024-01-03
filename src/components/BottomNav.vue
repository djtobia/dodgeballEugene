<template>
  <v-container fluid class="py-0">
    <v-row class="bg-dark-blue text-light-blue mb-0 " align="center">
      <v-col cols="12" sm="4" lg="4" :class="{ 'text-center': smAndDown }">© Copyright Dodgeball Eugene {{ year }}</v-col>
      <v-spacer />
      <v-col cols="12" lg="2" sm="3" xl="3">

        <v-row align="center">
          <v-col cols="12" lg="8" xl="8" md="8" :class="smAndDown ? 'text-center' : 'text-right'">Designed and built by
          </v-col>
          <v-col cols="12" lg="4" xl="4" md="4">
            <v-btn color="dark-blue" flat block href="http://www.dylantobia.com" target="_blank"
              class="website-btn text-light-blue">
              The One and Only
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
const year = new Date().getFullYear();
const { smAndDown } = useDisplay();
</script>
<style>
.mobile {
  right: 40vw;
}

.website-btn {
  z-index: 100;
}
</style>