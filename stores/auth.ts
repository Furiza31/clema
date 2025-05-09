import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);
  const sending = ref(false);
  const loading = computed(() => session.value.isPending || session.value.isRefetching || sending.value);

  async function signIn(provider: Providers) {
    await authClient.signIn.social({
      provider,
      callbackURL: "/app/dashboard",
      errorCallbackURL: "/auth/error",
    });
  }

  async function credentialSignIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      sending.value = true;
      await authClient.signIn.email({
        email,
        password,
      }, {
        onError: (err) => { throw err.error?.message ?? "Erreur inconnue"; },
        onSuccess: () => { navigateTo("/app/dashboard"); },
      });
    }
    finally {
      sending.value = false;
    }
  }

  async function credentialRegister({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      sending.value = true;
      await authClient.signUp.email({
        email,
        name,
        password,
      }, {
        onError: (err) => { throw err.error?.message ?? "Erreur inconnue"; },
        onSuccess: () => { navigateTo("/app/dashboard"); },
      });
    }
    finally {
      sending.value = false;
    }
  }

  async function signOut() {
    sending.value = true;
    await authClient.signOut();
    sending.value = false;
    navigateTo("/auth/login");
  }

  return {
    loading,
    signIn,
    credentialSignIn,
    credentialRegister,
    user,
    signOut,
  };
});
