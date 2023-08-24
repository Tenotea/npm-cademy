import { useState } from "react";
import { ListItemProps } from "~/ui/components/list-item/list-item.types";

type UseListItemSwitchParams<T extends ListItemProps> = {
  options: T[];
};

export default function useListItemSwitch<
  ItemType extends ListItemProps = ListItemProps
>(params: UseListItemSwitchParams<ItemType>) {
  const [option, setOption] = useState<ItemType | null>(null);

  function handleOptionChange(option: ItemType) {
    setOption(option);
  }

  return {
    options: params.options,
    handleOptionChange,
    activeOption: option,
  };
}
