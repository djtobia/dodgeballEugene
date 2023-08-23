<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Fall League</h1>
    <div id="about" class="py-3 text-h5"></div>
    <v-row class="text-left">
      <v-spacer />
      <v-col cols="12" lg="12" md="12" class="text-h6">
        <div id="when" class="my-2">
          <span class="font-weight-bold text-h5">When:</span> Sundays from 5-7pm, September 24th-November 5th
        </div>
        <div id="more-info" class="my-2">
          <span class="font-weight-bold text-h5">Cost:</span> $40!
        </div>
        <div id="type" class="my-2"><span class="font-weight-bold text-h5">Type:</span> Hat Draft (Players select their
          experience level when registerring, and
          placed into "hats" based on that. Teams are then made by picking names from a hat)</div>
        <div id="ball" class="my-2"><span class="font-weight-bold text-h5">Ball:</span> Either 8.25" foam, or 7" no
          sting. You select what you would like during
          registration, and most votes will be what we play.</div>
      </v-col>
      <v-col cols="12">
        <v-btn block color="dark-blue"
          href="https://docs.google.com/forms/d/e/1FAIpQLScTcJzcxGzNrTEFEkKwyRkrdmkOjn500Ib8JD2R5A1KvnmU5Q/viewform">
          Register here! </v-btn>
      </v-col>
      <v-spacer />
    </v-row>

    <h3 class="mt-5">
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
