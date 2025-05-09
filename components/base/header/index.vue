<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Clema
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex" />
    <div class="navbar-end">
      <BaseThemeSelector />
      <NuxtLink
        v-if="!authStore.user"
        to="/auth/login"
        class="btn btn-primary"
        :class="{
          'btn-disabled': authStore.loading,
        }"
        :aria-disabled="authStore.loading"
      >
        <span v-if="!authStore.loading">
          Sign in
        </span>
        <span v-else class="loading loading-spinner loading-md" />
      </NuxtLink>
      <div v-else class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">
          <UserAvatar class="size-6 rounded-sm" />
          <span class="ml-2 text-sm font-semibold">
            {{ authStore.user?.name || authStore.user?.email }}
          </span>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <NuxtLink to="/auth/sign-out" class="flex items-center flex-nowrap justify-start gap-2">
              <Icon name="material-symbols:exit-to-app" size="18" />
              Sign out
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
