import React from "react";
import { type RoleListGroupViewProps } from "../list-group.types";
import RoleListItemView from "../../list-item/views/RoleListItemView";

export default function RoleListGroupView(props: RoleListGroupViewProps) {
  return (
    <div className="grid gap-7 sm:grid-cols-2">
      {props.items.map((item) => (
        <RoleListItemView
          item={item}
          key={item.id}
          selected={item.id === props.selected}
          onSelect={props.onItemSelect}
        />
      ))}
    </div>
  );
}
