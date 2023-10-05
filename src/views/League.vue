<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Fall League</h1>
    <div id="about" class="py-3 text-h5"></div>
    <v-row class="text-left">
      <v-spacer />
      <v-col cols="12" lg="12" md="12" class="text-h6">
        <div id="when" class="my-2">
          <span class="font-weight-bold text-h5">When:</span> Sundays from
          5-7pm, September 24th-November 5th
        </div>
        <!-- <div id="more-info" class="my-2">
          <span class="font-weight-bold text-h5">Cost:</span> $40!
        </div>
        <div id="type" class="my-2"><span class="font-weight-bold text-h5">Type:</span> Hat Draft (Players select their
          experience level when registerring, and
          placed into "hats" based on that. Teams are then made by picking names from a hat)</div>
        <div id="ball" class="my-2"><span class="font-weight-bold text-h5">Ball:</span> Either 8.25" foam, or 7" no
          sting. You select what you would like during
          registration, and most votes will be what we play.</div> -->
      </v-col>
      <!-- <v-col cols="12">
        <v-btn block color="dark-blue"
          href="https://docs.google.com/forms/d/e/1FAIpQLScTcJzcxGzNrTEFEkKwyRkrdmkOjn500Ib8JD2R5A1KvnmU5Q/viewform">
          Register here! </v-btn>
      </v-col>
      <v-spacer /> -->
    </v-row>

    <v-row class="text-center my-8">
      <v-col cols="12">
        <h2 class="font-weight-bold text-h6">Standings</h2>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th class="text-center">Team</th>
              <th class="text-center">Match Wins</th>
              <th class="text-center">Match Losses</th>
              <th class="text-center">Match Draws</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in leagueStandings" :key="index">
              <td>{{ row[0] }}</td>
              <td>{{ row[1] }}</td>
              <td>{{ row[2] }}</td>
              <td>{{ row[3] === undefined ? 0 : row[3] }}</td>

            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row class="text-center my-8" v-for="(weeks, index) in leagueWeeks" :key="index">

      <v-col cols="12">
        <h2 class="font-weight-bold text-h6">Week {{ index + 1 }}</h2>
      </v-col>

      <v-col cols="12">
        <v-table class="leagueTable">
          <thead>
            <tr>
              <th class="text-center">
                Court
              </th>
              <th class="text-center">Team 1</th>
              <th class="text-center">Team 2</th>
              <th class="text-center">Ref</th>
              <th class="text-center">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in weeks" :key="index">
              <td>{{ data.court }}</td>
              <td>{{ data.team1 }}</td>
              <td>{{ data.team2 }}</td>
              <td>{{ data.ref }}</td>
              <td>{{ time(index) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <!-- <h3 class="mt-5">
      Congatulations to Team Alex for winning our fall 2022 3's league!
    </h3>
    <v-row v-for="asset in assets.items" :key="asset.sys.id" class="mt-5">
      <v-img :src="asset.fields.file.url" max-height="1000px"></v-img>
    </v-row> -->
    <!-- <div id="event-page" class="text-h6 mt-4">Registration is closed</div> -->
  </v-container>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from "vue";
import { getLeagueScheduleFromGoogleSheet, getLeagueStandings } from "@/utility/googleSheetAPI";
import contentful from "@/helpers";
import type { ContentfulClientApi, AssetCollection } from "contentful";
const assets = ref({} as AssetCollection);
const client = inject(contentful) as ContentfulClientApi;
assets.value = await client.getAssets({
  "metadata.tags.sys.id[in]": "3sFall2022",
});
const leagueWeeks = ref();
const leagueStandings = ref();
onMounted(async () => {
  leagueWeeks.value = await getLeagueScheduleFromGoogleSheet();
  leagueStandings.value = await getLeagueStandings();
});

const time = (index: number): string => {
  switch (index) {
    case 0:
      return "5:00 pm";
    case 2:
      return "5:15 pm";
    case 4:
      return "5:30 pm";
    case 6:
      return "5:45 pm";
    case 8:
      return "6:00 pm";
    case 10:
      return "6:15 pm";
    case 12:
      return "6:30 pm";
    case 14:
      return "6:45 pm";
  }
  return "";
}
</script>

<style scss>
.leagueTable tr:nth-child(odd)>td {
  border-top: 2px solid white;
}
</style>
