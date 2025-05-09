<script setup lang="ts">
import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

const authStore = useAuthStore();
const avatar = createAvatar(micah, {
  seed: authStore.user?.email,
}).toDataUri();
</script>

<template>
  <div class="avatar">
    <div class="w-24 rounded">
      <img v-if="!authStore.user?.image" :src="avatar" :alt="authStore.user?.name">
      <img v-else :src="authStore.user?.image" :alt="authStore.user?.name">
    </div>
  </div>
</template>
