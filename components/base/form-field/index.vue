<script setup lang="ts">
const props = defineProps<{
  name: string;
  type: HTMLInputElement["type"] | "textarea";
  label: string;
  error?: string;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ props.label }}
    </legend>
    <Field
      :as="props.type === 'textarea' ? 'textarea' : 'input'"
      :name="props.name"
      :label="props.label"
      :type="props.type"
      class="w-full"
      :class="{
        'input-error': props.error,
        'input': type !== 'textarea',
        'textarea': type === 'textarea',
      }"
    />
    <p v-if="error" class="fieldset-label text-error">
      {{ props.error }}
    </p>
  </fieldset>
</template>
