import { useRouter } from "next/router";
import {
  IM_StudentIllustration,
  IM_TeacherIllustration,
} from "~/assets/images";
import { RoleListItemViewProps } from "~/ui/components/list-item/list-item.types";
import useListItemSwitch from "~/utils/hooks/useListItemSwitch";

export default function useIndexTemplate() {
  const router = useRouter();
  const listItemSwitch = useListItemSwitch<RoleListItemViewProps["item"]>({
    options: [
      { id: "TEACHER", name: "I am a Teacher", image: IM_TeacherIllustration },
      { id: "STUDENT", name: "I am a Student", image: IM_StudentIllustration },
    ],
  });

  async function handleActionProceed() {
    if (!listItemSwitch.activeOption) return;
    await router.push(
      "/enrol/" + listItemSwitch.activeOption?.id.toString().toLowerCase()
    );
  }
  return { ...listItemSwitch, handleActionProceed };
}
