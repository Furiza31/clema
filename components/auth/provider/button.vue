<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

import type { Providers } from "./providers";

import { providers } from "./providers";

const props = defineProps<{
  provider: Providers;
}>();
const loading = ref(false);

const provider = providers[props.provider];

const authClient = createAuthClient();

async function signIn() {
  loading.value = true;
  await authClient.signIn.social({
    provider: provider.provider as Providers,
    callbackURL: "/app/dashboard",
    errorCallbackURL: "/auth/error",
  });
  loading.value = false;
}
</script>

<template>
  <BaseButton
    :is-loading="loading"
    class="btn-neutral"
    :icon="provider.icon"
    @click="signIn"
  >
    {{ provider.name }}
  </BaseButton>
</template>
