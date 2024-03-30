import { addons } from "@storybook/manager-api";
import { storyDefault } from "./configLocal";

let firstLoad = true;
addons.register("local/default-story", (api) => {
  api.onStory(() => {
    if (!firstLoad) return;
    firstLoad = false;
    api.selectStory("FirstKind", storyDefault);
  });
});
