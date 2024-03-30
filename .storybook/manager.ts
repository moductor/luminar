import { addons } from "@storybook/manager-api";
import { ThemeVars, themes } from "@storybook/theming";
import { logoLight, title } from "./configLocal";

const theme: ThemeVars = {
  ...themes.normal,
  brandTitle: title,
  brandImage: logoLight,
};

addons.setConfig({ theme });
