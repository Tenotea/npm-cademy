import { StaticImageData } from "next/image";

export type ListItemProps = {
  id: string | number;
  name: string;
};

export type RoleListItemViewProps = {
  item: ListItemProps & {
    image: StaticImageData;
  };
  selected?: boolean;
  onSelect?: (payload: RoleListItemViewProps["item"]) => void;
};
