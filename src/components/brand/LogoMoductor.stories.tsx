import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LogoMoductorFull } from "./LogoMoductorFull";
import { LogoMoductorSymbol } from "./LogoMoductorSymbol";
import { LogoMoductorType } from "./LogoMoductorType";

const meta = {
  title: "Brand/Moductor",
  component: LogoMoductorFull,
  args: { height: "3rem" },
  render: ({ ...args }) => <LogoMoductorFull {...args} />,
} satisfies Meta<typeof LogoMoductorFull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullLogo: Story = {
  name: "Full logo",
};

export const LogoType: Story = {
  name: "Logo type",
  render: ({ ...args }) => <LogoMoductorType {...args} />,
};

export const LogoSymbol: Story = {
  name: "Logo symbol",
  render: ({ ...args }) => <LogoMoductorSymbol {...args} />,
};
