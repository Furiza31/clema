<script setup lang="ts">
type ButtonProps = {
  isLoading?: boolean;
  icon?: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  isLoading: false,
  icon: undefined,
});
</script>

<template>
  <button :disabled="props.isLoading" class="btn">
    <span v-if="props.isLoading" class="loading loading-spinner loading-md" />
    <Icon v-if="props.icon && !props.isLoading" :name="props.icon" size="24" />
    <slot v-if="!props.isLoading && !props.icon" />
  </button>
</template>
