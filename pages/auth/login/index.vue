<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const authStore = useAuthStore();
const error = ref<string | null>(null);

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const formSchema = toTypedSchema(schema);

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
});

const submit = handleSubmit(async (values) => {
  try {
    await authStore.credentialSignIn({
      email: values.email,
      password: values.password,
    });
  }
  catch (e) {
    error.value = e as string;
  }
});
</script>

<template>
  <section class="h-full w-full flex flex-col items-center justify-center">
    <div class="card bg-base-200 text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-2xl">
          Welcome back!!
        </h2>
        <p>Please enter your credentials to continue.</p>
        <form action="" class="flex flex-col mt-4 gap-2 w-full" @submit.prevent="submit">
          <BaseFormField
            :error="errors.email"
            label="Email"
            name="email"
            type="email"
          />
          <BaseFormField
            :error="errors.password"
            label="Password"
            name="password"
            type="password"
          />
          <BaseButton
            :is-loading="authStore.loading"
            class="btn-neutral mt-4"
            type="submit"
          >
            Continue
          </BaseButton>
          <div v-if="error" role="alert" class="alert alert-error">
            <Icon name="material-symbols:error" size="24" />
            <span>
              {{ error }}
            </span>
          </div>
        </form>
        <div class="card-actions flex-col w-full">
          <div class="divider">
            OR
          </div>
          <div class="grid grid-cols-2 gap-2 w-full">
            <AuthProviderButton provider="google" />
            <AuthProviderButton provider="github" />
          </div>
          <div class="w-full">
            <div class="text-center text-sm mt-4 flex flex-row justify-center items-center">
              Don't have an account?
              <NuxtLink to="/auth/register" class="btn btn-link p-0 h-fit pl-1">
                Sign up
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
