<script setup lang="ts">
const authStore = useAuthStore();

onMounted(async () => {
  await authStore.signOut();
});
</script>

<template>
  <section class="h-full w-full flex flex-col items-center justify-center">
    <div class="card bg-base-200 text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <h2 class="card-title">
          Logging out
        </h2>
        <p>
          Please wait while we log you out. This may take a few seconds.
        </p>
        <div v-if="authStore.loading" class="card-actions justify-end mt-2">
          <span class="loading loading-spinner loading-md" />
        </div>
      </div>
    </div>
  </section>
</template>
