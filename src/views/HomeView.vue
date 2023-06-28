<template>
  <div class="text-center">
    <div id="blurb">
      <p class="text-light-blue text-h5 font-weight-bold py-3">
        Remember playing dodgeball on the playground? It's back! Only this time
        the balls hurt a lot less. We've replaced those hard rubber balls with
        friendly foam ones. Even if you haven't played in decades, we'll happily
        teach you.
      </p>
    </div>
    <div id="events" class="text-light-blue text-h6 font-weight-bold pt-5">
      <v-row>
        <v-spacer />
        <v-col cols="12" lg="4" md="4" class="text-center">
          <div class="text-left">
            <div>
              <span class="font-weight-black text-white">When:</span>
              <ul class="pl-8">
                <li>
                  Wednesdays 6:00-8:00pm at the Bob Keefer Center in Springfield
                </li>
                <li>Sundays, 5:00-7:00pm at the Bob Keefer Centir in Springfield</li>
              </ul>
              <span class="pa-2">For our full open gym schedule, go <router-link to="/schedule">Here</router-link></span>
              <p class="pa-2 pb-4">
                For more information, view our
                <a href="https://www.facebook.com/Dodgeball-Eugene-110959956928427/" target="_blank">Facebook</a>
                group, or our
                <a href="https://www.meetup.com/dodgeball-eugene/" target="_blank">Meetup</a>!
              </p>
            </div>
          </div>
        </v-col>
        <v-spacer />
      </v-row>
    </div>
  </div>
  <div id="announcements" class="pa-5">
    <v-card color="light-blue-darken">
      <v-card-title class="bg-dark-blue">Announcements</v-card-title>
      <v-card-text class="text-h6 font-weight-black pt-5 text-center">
        <v-row class="pb-4">
          <v-col cols="12">Weekly open dodgeball until we feel like doing something
            else!</v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Congrats to our DUAL IV Champions, School of Hard Blocks!</h3>
          </v-col>
          <v-col cols="12">
            <v-img v-if="assets?.items?.length" :src="assets.items[0].fields.file.url"
              alt="Dual Champs, School of Hard Blocks!"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
  <v-row class="text-h4 pt-10">
    <v-col>
      <v-btn to="rules" color="light-blue-darken" rounded>Rules</v-btn>
    </v-col>
    <v-col>
      <v-btn to="code-of-conduct" color="light-blue-darken" rounded>Code of Conduct</v-btn>
    </v-col>
  </v-row>
  <v-img v-if="assets?.items?.length" :src="assets.items[1].fields.file.url" class="pt-10"
    alt="Some members of Dodgeball Eugene"></v-img>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import type { AssetCollection, ContentfulClientApi } from "contentful";
import contentful from "@/helpers";
const client = inject(contentful) as ContentfulClientApi;
const assets = ref({} as AssetCollection);
assets.value = await client.getAssets({
  "metadata.tags.sys.id[in]": "transparentAll,dual4Champs",
});
</script>
<style scoped>
.large-announcement {
  line-height: normal;
}
</style>
