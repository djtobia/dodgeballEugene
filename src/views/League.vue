<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Fall League</h1>
    <div id="about" class="py-3 text-h5">
    </div>
    <v-row class="text-left">
      <v-spacer />
      <v-col cols="12" lg="4" md="4">
        <div id="when" class="text-h6">When: Sundays from 5-8pm, September 25th-November 6th</div>
        <div id="more-info" class="text-h6">Cost: $40 if registered before August 14th, $45 after!</div>
        <div id="type" class="text-h6">Type: Random Draft</div>
        <div id="ball" class="text-h6">Ball: 7" Foam</div>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row id="standings">
      <v-spacer />

      <v-col cols="12" lg="6" xl="6">
        <v-table>
          <thead>
            <tr>
              <th class="text-center">Rank</th>
              <th class="text-center">Team</th>
              <th class="text-center">Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="info in teamInfo" :key="info.rank">
              <td>{{ info.rank }}</td>
              <td>{{ info.team }}</td>
              <td>{{ info.wins }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-spacer />
    </v-row>
    <div id="event-page" class="text-h6 mt-4">
      Registration is closed
    </div>
  </v-container>
</template>

<script setup lang="ts">
  const teamInfo = [
    {
      rank: 1,
      team: "Alex",
      wins: 10
    },
    {
      rank: 2,
      team: "Jon",
      wins: 6.5
    },
    {
      rank: 3,
      team: "Mark",
      wins: 6
    },
    {
      rank: 4,
      team: "Kyle Q",
      wins: 6
    },
    {
      rank: 5,
      team: "Dylan",
      wins: 5.5
    },
    {
      rank: 6,
      team: "Barb",
      wins: 4.5
    },
    {
      rank: 7,
      team: "Eric",
      wins: 3.5
    }
  ]

</script>