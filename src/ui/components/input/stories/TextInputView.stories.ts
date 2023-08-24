import { Meta, StoryObj } from "@storybook/react";
import TextInputView from "../views/TextInputView";

const meta = {
  title: "Components/Inputs/TextInput",
  component: TextInputView,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInputView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "National ID Number",
  },
};
