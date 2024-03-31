import { Canvas, Controls } from "@storybook/blocks";
import { StoryObj } from "@storybook/react";
import React from "react";

export default function StoryPreview({ story }: { story: StoryObj }) {
  return (
    <>
      <Canvas of={story}></Canvas>
      <Controls of={story} />
    </>
  );
}
