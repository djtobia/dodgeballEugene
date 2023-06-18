<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Open Gym Schedule</h1>
    <div id="schedule">
      <ul>
        <li v-for="date in schedule" :class="{today: date.today, cancelled: date.cancelled}">
          {{ (date.sunday ? "Sunday " : "Wednesday ") + date.date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'}) }}
          <div v-if="date.cancelled">CANCELLED</div>
          <div v-else-if="date.today">That's today!</div>
        </li>
      </ul>
    </div>
  </v-container>
</template>



<script setup lang="ts">
import {schedule} from "@/data/schedule"

</script>

<style>
li {
  list-style: none;
}

.today {
  color: green;
  font-weight: bold;
}

.cancelled {
  color: red;
  font-weight: bold;
}

 </style>