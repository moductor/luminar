import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LogoLuminar } from "./LogoLuminar";

const meta = {
  title: "Brand/Luminar",
  component: LogoLuminar,
  args: { height: "3rem" },
  render: ({ ...args }) => <LogoLuminar {...args} />,
} satisfies Meta<typeof LogoLuminar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  name: "Logo",
};
