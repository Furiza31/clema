export const providers = {
  github: {
    name: "GitHub",
    provider: "github",
    icon: "tabler:brand-github",
  },
  google: {
    name: "Google",
    provider: "google",
    icon: "tabler:brand-google",
  },
};

export type Providers = keyof typeof providers;
