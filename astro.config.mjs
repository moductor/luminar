import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  publicDir: "./docs/public",
  srcDir: "./docs",
  outDir: "./dist",
  site: "https://moductor.github.io",
  base: "/luminar",
});
