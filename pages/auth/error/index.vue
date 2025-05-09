<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred";
</script>

<template>
  <section class="h-full w-full flex flex-col items-center justify-center">
    <div class="card bg-base-200 text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <h2 class="card-title">
          Error
        </h2>
        <p>{{ error }}</p>
        <div class="card-actions justify-end mt-2">
          <NuxtLink to="/" class="btn btn-primary">
            <Icon name="material-symbols:home-outline-rounded" size="24" />
            Go back home
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
