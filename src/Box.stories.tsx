import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
