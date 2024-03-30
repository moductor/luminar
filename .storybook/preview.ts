import type { Preview } from "@storybook/react";

import "../src/globals.css";
import "./preview.css";
import { themeDark, themeLight } from "./theme";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduction", "Getting Started"],
      },
    },
    darkMode: {
      current: "light",
      stylePreview: true,
      classTarget: "html",
      lightClass: "light",
      darkClass: "dark",
      light: themeLight,
      dark: themeDark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
