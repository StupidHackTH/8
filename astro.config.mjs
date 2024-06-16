import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  base: "/8",
  site: "https://stupid.hackathon.in.th/8",
  adapter: cloudflare(),
});
