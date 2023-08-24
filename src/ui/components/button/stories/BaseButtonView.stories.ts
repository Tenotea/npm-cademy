import type { Meta, StoryObj } from "@storybook/react";
import BaseButtonView from "../views/BaseButtonView";

const meta = {
  title: "Components/Buttons/BaseButtonView",
  component: BaseButtonView,
  tags: ["autodocs"],
} satisfies Meta<typeof BaseButtonView>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me!",
  },
};

export const Fit: Story = {
  args: {
    children: "Click Me!",
    fit: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Cannot Click Me",
    disabled: true,
  },
};

export default meta;
