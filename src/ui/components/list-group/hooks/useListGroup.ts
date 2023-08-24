import { useState } from "react";
import { ListItemProps } from "../../list-item/list-item.types";
import { ListGroupHookParams } from "../list-group.types";

export function useListGroup<ItemType = ListItemProps>(
  params: ListGroupHookParams<ItemType>
) {
  function handleSelect(item: ItemType) {
    params.onSelect(item);
  }

  return { handleSelect };
}
