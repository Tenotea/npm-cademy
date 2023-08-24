import { Meta, StoryObj } from "@storybook/react";
import RoleListItemView from "../views/RoleListItemView";
import { IM_StudentIllustration } from "~/assets/images";

const meta = {
  title: "Components/List Items/RoleListItemView",
  component: RoleListItemView,
  tags: ["autodocs"],
} satisfies Meta<typeof RoleListItemView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: "1",
      image: IM_StudentIllustration,
      name: "I am a student",
    },
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    item: {
      id: "1",
      image: IM_StudentIllustration,
      name: "I am a student",
    },
    selected: true,
  },
};
