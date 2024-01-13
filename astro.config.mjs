import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tooflex.github.io",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      cacheDir: "./.cache/image",
      logLevel: "debug",
    }),
  ],
});
