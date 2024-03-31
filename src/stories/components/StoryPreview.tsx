import { Canvas, Controls } from "@storybook/blocks";
import { StoryObj } from "@storybook/react";
import React from "react";

export default function StoryPreview({
  title,
  story,
}: {
  title?: string;
  story: StoryObj;
}) {
  return (
    <>
      {title && (
        <p role="heading" style={{ fontSize: "1rem", fontWeight: 700 }}>
          {title}
        </p>
      )}
      <Canvas of={story}></Canvas>
      <Controls of={story} />
    </>
  );
}
