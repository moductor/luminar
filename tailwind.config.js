/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/**/*.stories.*",
    "!./src/stories/**/*",
  ],
  theme: {
    extend: {},
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
