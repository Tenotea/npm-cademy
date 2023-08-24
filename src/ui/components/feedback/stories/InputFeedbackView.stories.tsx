import { Meta, StoryObj } from "@storybook/react";
import InputFeedbackView from "../views/InputFeedbackView";

const meta = {
  title: "Components/Feedbacks/InputFeedbackView",
  tags: ["autodocs"],
  component: InputFeedbackView,
} satisfies Meta<typeof InputFeedbackView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This input component is missing some data",
  },
};
