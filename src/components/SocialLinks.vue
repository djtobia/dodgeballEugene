<template>
  <v-container class="text-light-blue">
    <v-row align-content="center">
      <v-col cols="4" v-for="asset in assets.items" :key="asset.sys.id">
        <v-row class="text-center pa-0 ma-0">
          <v-spacer />
          <v-col class="pa-0" cols="6">
            <a :href="asset.fields.description.split('||')[2]">
              <v-img :src="asset.fields.file.url" max-height="50" min-height="50"
                :alt="asset.fields.description.split('||')[1]"></v-img>
            </a>
          </v-col>
          <v-spacer />
          <v-col cols="12" class="pa-0">{{
            asset.fields.description.split("||")[0]
          }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { AssetCollection, ContentfulClientApi } from "contentful";
import { onMounted, ref, inject } from "vue";
import contentful from "@/helpers";
const client = inject(contentful) as ContentfulClientApi;
const assets = ref({} as AssetCollection);
assets.value = await client.getAssets({
  "metadata.tags.sys.id[in]": "socialIcons",
});
</script>
