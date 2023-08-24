import React from "react";
import { RoleListGroupViewProps } from "../list-group.types";
import RoleListItemView from "../../list-item/views/RoleListItemView";

export default function RoleListGroupView(props: RoleListGroupViewProps) {
  return (
    <div className="grid grid-cols-2 gap-7">
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
