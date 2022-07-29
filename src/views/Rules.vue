<script setup lang="ts">
import { ref } from "vue";
import Overview from "@/components/rules/Overview.vue";
import PlayerConduct from "@/components/rules/PlayerConduct.vue";
import Setup from "@/components/rules/Setup.vue";
import TheRush from "@/components/rules/TheRush.vue";
import TheCount from "@/components/rules/TheCount.vue";
import Outs from "@/components/rules/Outs.vue";
import Catching from "@/components/rules/Catching.vue";
import Blocking from "@/components/rules/Blocking.vue";
import Shagging from "@/components/rules/Shagging.vue";
import Eagles from "@/components/rules/Eagles.vue";
import Headshots from "@/components/rules/Headshots.vue";
import Officiating from "@/components/rules/Officiating.vue";
import HighBalls from "@/components/rules/HighBalls.vue";
import Clarification from "@/components/rules/Clarification.vue";
const tab = ref("overview");
</script>

<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Rules</h1>
    <p class="font-weight-bold pb-4">The Following is our ruleset for a competitive league. Open play rules are very similar.</p>
    <v-tabs v-model="tab" color="light-blue" background-color="dark-blue" centered>
      <v-tab value="overview">Overview</v-tab>
      <v-tab value="playerConduct">Player Conduct</v-tab>
      <v-tab value="setup">Setup</v-tab>
      <v-tab value="theRush">The Rush</v-tab>
      <v-tab value="theCount">The Count</v-tab>
      <v-tab value="outs">Outs</v-tab>
      <v-tab value="catching">Catching</v-tab>
      <v-tab value="blocking">Blocking</v-tab>
      <v-tab value="shagging">Shagging</v-tab>
      <v-tab value="eagles">Eagles</v-tab>
      <v-tab value="headshots">Headshots</v-tab>
      <v-tab value="officiating">Officiating</v-tab>
      <v-tab value="highBalls">High Balls</v-tab>
      <v-tab value="clarifications">Clarifications</v-tab>
    </v-tabs>
    <v-card color="light-blue-darken">
      <v-card-text class="text-h6 mb-2">
        <v-window v-model="tab" >
          <v-window-item value="overview">
            <Overview />
          </v-window-item>
          <v-window-item value="playerConduct">
            <PlayerConduct />
          </v-window-item>
          <v-window-item value="setup">
            <Setup />
          </v-window-item>
          <v-window-item value="theRush">
            <TheRush />
          </v-window-item>
          <v-window-item value="theCount">
            <TheCount />
          </v-window-item>
          <v-window-item value="outs">
            <Outs />
          </v-window-item>
          <v-window-item value="catching">
            <Catching />
          </v-window-item>
          <v-window-item value="blocking">
            <Blocking />
          </v-window-item>
          <v-window-item value="shagging">
            <Shagging />
          </v-window-item>
          <v-window-item value="eagles">
            <Eagles />
          </v-window-item>
          <v-window-item value="headshots">
            <Headshots />
          </v-window-item>
          <v-window-item value="officiating">
            <Officiating />
          </v-window-item>
          <v-window-item value="highBalls">
            <HighBalls />
          </v-window-item>
          <v-window-item value="clarifications">
            <Clarification />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>