<template>
  <v-container>
    <div class="font-weight-bold text-center text-light-blue text-h2">Helpful Videos</div>
    <v-row class="text-center my-2">
      <v-col cols="12">
        <iframe :width="!smAndDown ? '560' : ''" :height="!smAndDown ? '315' : ''"
          src="https://www.youtube.com/embed/O4jA_rM7gwk"
          title="Softball PRO Teaches How to Throw A Dodgeball | with Jamee Jones" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </v-col>
      <v-col cols="12">
        <iframe :width="!smAndDown ? '560' : ''" :height="!smAndDown ? '315' : ''"
          src="https://www.youtube.com/embed/2uu1uLGtRcs" title="How To Catch A Dodgeball | 21 PRO Tips!" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </v-col>
      <v-col cols="12">
        <iframe :width="!smAndDown ? '560' : ''" :height="!smAndDown ? '315' : ''"
          src="https://www.youtube.com/embed/9emvzWvFZxs" title="5 DO's & DON'Ts of Dodging In Dodgeball" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </v-col>
      <v-col cols="12">
        <iframe :width="!smAndDown ? '560' : ''" :height="!smAndDown ? '315' : ''"
          src="https://www.youtube.com/embed/ychVec7xPN0" title="PRO Dodgeball Faking Tips feat. Robert CK"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </v-col>
      <v-col cols="12">
        <iframe :width="!smAndDown ? '560' : ''" :height="!smAndDown ? '315' : ''"
          src="https://www.youtube.com/embed/Bxzq693G7n4"
          title="Do THIS to Throw FASTER in Dodgeball | feat. Kaelen Estabrooks" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { smAndDown } = useDisplay();
</script>