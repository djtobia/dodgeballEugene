<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Open Gym Schedule</h1>
    <div id="schedule">
      <ul>
        <li :key="index" v-for="(date, index) in dates" :class="{ today: date.today, cancelled: date.cancelled }">
          {{
            date.day +
            " " +
            date.date.toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
            })
          }}
          <div v-if="date.cancelled">CANCELLED</div>
          <div v-else-if="date.today">That's today!</div>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { getData } from "@/data/schedule";
import type { Schedule } from "@/interfaces/scheduleInterface";
import { onMounted, ref } from "vue";
const dates = ref([] as Schedule[]);
onMounted(async () => {
  getData().then((data) => {
    data.forEach((date) => dates.value.push(date));
  });
});
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
