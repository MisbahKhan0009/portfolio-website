// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://neonmint.efeele.dev",
  integrations: [
    preact(),
    icon({
      include: {
        local: "./src/icons/*.svg",
      },
    }),
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags") && !page.includes("/blog/techs"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
