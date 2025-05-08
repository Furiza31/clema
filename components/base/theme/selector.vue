<script setup lang="ts">
import { themes } from "./themes";

const colorMode = useColorMode();

const activeTheme = computed({
  get() {
    return colorMode.value;
  },
  set(value: string) {
    colorMode.preference = value;
  },
});
</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      <Icon name="material-symbols:palette" size="24" />
    </div>
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl h-80 overflow-y-auto">
      <li v-for="theme in themes" :key="theme">
        <label
          class="btn btn-block justify-start" :class="{
            'btn-primary text-primary-content': activeTheme === theme,
            'btn-ghost text-base-content': activeTheme !== theme,
          }"
        >
          <Icon name="material-symbols:format-paint" size="24" class="mr-2" />
          <input
            v-model="activeTheme"
            type="radio"
            name="theme-dropdown"
            class="hidden"
            :aria-label="theme"
            :value="theme"
          >
          {{ theme }}
        </label>
      </li>
    </ul>
  </div>
</template>
