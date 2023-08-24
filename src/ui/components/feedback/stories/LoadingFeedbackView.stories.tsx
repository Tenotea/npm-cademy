import { Meta, StoryObj } from "@storybook/react";
import LoadingFeedbackView from "../views/LoadingFeedbackView";

const meta = {
  title: "Components/Feedbacks/LoadingFeedbackView",
  tags: ["autodocs"],
  component: LoadingFeedbackView,
} satisfies Meta<typeof LoadingFeedbackView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "dark",
  },
};
