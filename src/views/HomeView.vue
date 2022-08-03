<template>
  <div class="text-center">
    <div id="blurb">
      <p class="text-light-blue text-h5 font-weight-bold py-3">
        Remember playing dodgeball on the playground? It's back! Only this time the balls hurt a lot less.
        We've replaced those hard rubber balls with friendly foam ones. Even if you haven't played in decades, we'll happily teach you.
      </p>
    </div>
    <div id="events" class="text-light-blue text-h6 font-weight-bold pt-5">
      <p class="pa-2">
        Where: Sheldon Community Center, 2445 Willakenzie Rd
      </p>
      <p class="pa-2">When: Wednesdays 6-8pm, Sundays 5-7pm</p>
      <p class="pa-2 pb-4">For more information, view our <a href="https://www.facebook.com/Dodgeball-Eugene-110959956928427/" target="_blank">Facebook</a> group, or our <a href="https://www.meetup.com/dodgeball-eugene/" target="_blank">Meetup</a>!</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.1088944645935!2d-123.07612578424957!3d44.081106332672334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0e21a354334b9%3A0x57984ccb32c51d08!2sSheldon%20Community%20Center!5e0!3m2!1sen!2sus!4v1659129344618!5m2!1sen!2sus"
        :width="mobile ? '200' : '600'"
        :height="mobile ? '200' : '450'"
        style="border:0;"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>
  <div id="announcements" class="pa-5">
    <v-card color="light-blue-darken">
      <v-card-title class="bg-dark-blue">Announcements</v-card-title>
      <v-card-text class="text-h6 font-weight-black pt-5 text-center">
        <v-row class="pb-4">
          <v-col cols="12">Interested in playing in a competitive league? Sundays starting at the end of September!</v-col>
          <v-row>
            <v-spacer />
            <v-col cols="10" lg="4" md="4" xl="4">
              <v-btn rounded color="dark-blue" to="/league">More Info Here</v-btn>
            </v-col>
            <v-spacer />
          </v-row>
        </v-row>
        <v-row class="pb-2">
          <v-col cols="12">Our annual D.U.A.L. Tournament:</v-col>
            <v-row>
              <v-spacer />
              <v-col cols="10" lg="4" md="4" xl="4">
                <v-btn rounded color="dark-blue" to="/dual-3">More Info Here</v-btn>
              </v-col>
              <v-spacer />
            </v-row>
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
  <v-img src="/images/d-eugene-transparent.png" class="pt-10"></v-img>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>
