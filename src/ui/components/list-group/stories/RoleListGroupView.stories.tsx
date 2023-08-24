import { Meta, StoryFn } from "@storybook/react";
import RoleListGroupView from "../views/RoleListGroupView";
import {
  IM_StudentIllustration,
  IM_TeacherIllustration,
} from "~/assets/images";
import { useState } from "react";
import useListItemSwitch from "~/utils/hooks/useListItemSwitch";
import { RoleListItemViewProps } from "../../list-item/list-item.types";

const meta = {
  title: "Components/List Groups/RoleListGroupView",
  component: RoleListGroupView,
  tags: ["autodocs"],
} satisfies Meta<typeof RoleListGroupView>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { options, activeOption, handleOptionChange } = useListItemSwitch<
    RoleListItemViewProps["item"]
  >({
    options: [
      { id: 1, name: "I am a student", image: IM_StudentIllustration },
      { id: 2, name: "I am a teacher", image: IM_TeacherIllustration },
    ],
  });

  return (
    <RoleListGroupView
      items={options}
      onItemSelect={handleOptionChange}
      selected={activeOption?.id || ""}
    />
  );
};
