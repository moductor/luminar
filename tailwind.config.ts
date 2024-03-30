import type { Config } from "tailwindcss";
import { colors } from "./src/theme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/**/*.stories.*",
    "!./src/stories/**/*",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
};
export default config;
