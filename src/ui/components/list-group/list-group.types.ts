import {
  ListItemProps,
  RoleListItemViewProps,
} from "../list-item/list-item.types";

export type ListGroupHookParams<ItemType = ListItemProps> = {
  onSelect: (payload: ItemType) => void;
};

export type ListGroupHookReturnType<ItemType = ListItemProps> = {
  onItemSelect: (payload: ItemType) => void;
};

export type ListGroupProps = ListGroupHookReturnType & {
  items: ListItemProps[];
};

export type RoleListGroupViewProps = ListGroupHookReturnType<
  RoleListItemViewProps["item"]
> & {
  items: RoleListItemViewProps["item"][];
  selected: ListItemProps["id"];
};
