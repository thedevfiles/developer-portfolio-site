import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://jonbernardi.com',
  integrations: [tailwind(), sitemap()],
  image: {
    service: sharpImageService()
  }
});
