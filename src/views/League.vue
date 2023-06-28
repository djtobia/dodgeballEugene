<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Fall League</h1>
    <div id="about" class="py-3 text-h5"></div>
    <v-row class="text-left">
      <v-spacer />
      <v-col cols="12" lg="4" md="4">
        <div id="when" class="text-h6">
          When: Sundays from 5-8pm, September 25th-November 6th
        </div>
        <div id="more-info" class="text-h6">
          Cost: $40 if registered before August 14th, $45 after!
        </div>
        <div id="type" class="text-h6">Type: Random Draft</div>
        <div id="ball" class="text-h6">Ball: 7" Foam</div>
      </v-col>
      <v-spacer />
    </v-row>

    <h3 class="mt-2">
      Congatulations to Team Alex for winning our fall 2022 3's league!
    </h3>
    <v-row v-for="asset in assets.items" :key="asset.sys.id" class="mt-5">
      <v-img :src="asset.fields.file.url" max-height="1000px"></v-img>
    </v-row>
    <div id="event-page" class="text-h6 mt-4">Registration is closed</div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import contentful from "@/helpers";
import type { ContentfulClientApi, AssetCollection } from "contentful";
const assets = ref({} as AssetCollection);
const client = inject(contentful) as ContentfulClientApi;
assets.value = await client.getAssets({
  "metadata.tags.sys.id[in]": "3sFall2022",
});
</script>
