<template>
  <v-container>
    <v-form @submit.prevent="sendEmail" validate-on="submit" v-model="cleanForm">
      <v-text-field v-model="recipientEmail" placeholder="Email" required validate-on="submit"
        :rules="rules.emailRules" />
      <v-text-field v-model="name" placeholder="Name" :rules="rules.nameRules" />
      <v-textarea v-model="text" placeholder="What would you like us to know?" :rules="rules.contactRules" />
      <v-row justify="center" class="mt-3 mb-5">
        <Checkbox theme="dark" v-model="isNotRobot" />
      </v-row>
      <v-btn type="submit" block :disabled="isNotRobot === ''">Submit!</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { Checkbox } from "vue-recaptcha";
import { ref } from "vue";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";


const isNotRobot = ref("");
const recipientEmail = ref("");
const name = ref("");
const text = ref("");
const cleanForm = ref(false);
const rules = {
  nameRules: [
    (value: string) => {
      if (value) return true;
      return "We'll need to know what to call you.";
    },
  ],
  emailRules: [
    (value: string) => {
      if (value) return true;
      return "We'll need to know how to contact you.";
    },
    (value: string) => {
      if (/.+@.+\..+/.test(value)) return true;

      return "E-mail must be valid.";
    },
  ],
  contactRules: [
    (value: string) => {
      if (value) return true;
      return "What would you like to know?";
    },
  ],
};

const sendEmail = async () => {


  if (cleanForm.value) {
    try {
      const functions = getFunctions();
      connectFunctionsEmulator(functions, "127.0.0.1", 5001);
      const sendEmailFunction = httpsCallable(functions, "sendEmail");
      const result = await sendEmailFunction({
        recipientEmail: recipientEmail.value,
        name: name.value,
        text: text.value,
      });
      if (!result.data.success) {
        console.error("There was an error sending an email.");
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
};
</script>
