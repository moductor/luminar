import { ThemeVars, themes } from "@storybook/theming";
import { logoDark, logoLight, title } from "./configLocal";

export const themeBase: Partial<ThemeVars> = {
  brandTitle: title,
};

export const themeLight: ThemeVars = {
  ...themes.normal,
  ...themeBase,
  brandImage: logoLight,
};

export const themeDark: ThemeVars = {
  ...themes.dark,
  ...themeBase,
  brandImage: logoDark,
};
