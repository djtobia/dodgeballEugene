<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Open Gym Schedule</h1>
    <div id="schedule">
      <ul>
        <li v-for="date in schedule" :class="{today: checkIfToday(date.date)}">
          {{ (date.sunday ? "Sunday " : "Wednesday ") + date.date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'}) }}
          <div v-if="checkIfToday(date.date)">That's today!</div>
        </li>
      </ul>
    </div>
  </v-container>
</template>



<script setup lang="ts">
import {schedule, checkIfToday} from "@/data/schedule"
</script>

<style>
.today {
  color: green;
  font-weight: bold;
}
 </style>