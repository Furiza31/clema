<script setup lang="ts">
const props = defineProps<{
  provider: Providers;
}>();

const authStore = useAuthStore();

const provider = providers[props.provider];

async function handleButtonClick() {
  await authStore.signIn(provider.provider as Providers);
}
</script>

<template>
  <BaseButton
    :is-loading="authStore.loading"
    class="btn-neutral"
    :icon="provider.icon"
    @click="handleButtonClick"
  >
    {{ provider.name }}
  </BaseButton>
</template>
