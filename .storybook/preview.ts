import type { Preview } from "@storybook/react";
import { ThemeVars, themes } from "@storybook/theming";
import { logoDark, logoLight, title } from "./configLocal";

const theme: Partial<ThemeVars> = {
  brandTitle: title,
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Getting Started"],
      },
    },
    darkMode: {
      current: "light",
      light: {
        ...themes.normal,
        ...theme,
        brandImage: logoLight,
      } as ThemeVars,
      dark: {
        ...themes.dark,
        ...theme,
        brandImage: logoDark,
      } as ThemeVars,
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
