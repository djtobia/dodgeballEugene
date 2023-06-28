<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">D.U.A.L. IV</h1>
    <v-container id="logo">
      <v-row>
        <v-spacer />
        <v-img src="/images/dual/dual.png" max-width="450px" width="250px" class="ma-0" alt="DUAL logo"></v-img>
        <v-spacer />
      </v-row>
    </v-container>
    <!-- <div id="about" class="py-3 text-h5">
      <p class="font-weight-bold pb-4">Our 4th annual Dodgeball Unity and Love Tournament is back!</p>
    </div> -->
    <div id="event-page" class="text-h6">
      <h3 class="ma-5">Congrats to the DUAL IV Champions, School of Hard Blocks!</h3>
      <v-img v-if="assets?.items?.length" :src="assets.items[1].fields.file.url" alt="Dual Champs, School of Hard Blocks!"
        class="mt-3" />
    </div>
    <div class="image-container">
      <h2 class="ma-5">Most of our group at the after party!</h2>
      <v-img v-if="assets?.items?.length" :src="assets.items[0].fields.file.url"
        alt="Our whole group at the after party" />
    </div>

    <h6 class="mt-10">DUAL logo created by <a href="https://www.instagram.com/vmarchbanks/">Vince Marchbanks</a></h6>
  </v-container>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import type { AssetCollection, ContentfulClientApi } from "contentful";
import contentful from "@/helpers";
const client = inject(contentful) as ContentfulClientApi;
const assets = ref({} as AssetCollection);
assets.value = await client.getAssets({
  "metadata.tags.sys.id[in]": "dual4Group,dual4Champs",
});
</script>