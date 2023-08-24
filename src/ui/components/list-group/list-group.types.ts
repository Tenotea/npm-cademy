import {
  ListItemProps,
  RoleListItemViewProps,
} from "../list-item/list-item.types";

export type ListGroupProps = {
  onItemSelect: (payload: ListItemProps) => void;
  items: ListItemProps[];
};

export type RoleListGroupViewProps = {
  onItemSelect: (payload: RoleListItemViewProps["item"]) => void;
  items: RoleListItemViewProps["item"][];
  selected: ListItemProps["id"] | null;
};
