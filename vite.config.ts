import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const entries = ["components", "utils", "theme"];
const entry = process.env.LIB_ENTRY || entries[0];

if (!entries.includes(entry)) {
  throw new Error(`'${entry}' is not a valid entry`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ entryRoot: `src/${entry}` })],
  build: {
    copyPublicDir: false,
    outDir: `dist/${entry}`,
    lib: {
      entry: resolve(__dirname, `src/${entry}/index.ts`),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "@heroicons/react",
        "react",
        "react/jsx-runtime",
        "tailwind-variants",
        "tailwindcss",
      ],
    },
  },
});
