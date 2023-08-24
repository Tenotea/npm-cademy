import Image from "next/image";
import React from "react";
import { RoleListItemViewProps } from "../list-item.types";
import { Icon } from "@iconify/react";

export default function RoleListItemView(props: RoleListItemViewProps) {
  return (
    <div
      className={`flex min-h-[300px] w-full items-end rounded-lg border-2  bg-app-gray-accent-6 px-8 pb-7 ${
        !props.selected ? "border-app-gray-accent-5" : "border-app-teal"
      }`}
    >
      <div className="w-full" onClick={() => props.onSelect?.(props.item)}>
        <Image src={props.item.image} alt={props.item.name} height={140} />
        <div className="mt-5 flex items-center justify-between">
          <h6
            className={`text-lg font-semibold ${
              !props.selected ? "text-black" : "text-app-teal"
            }`}
          >
            {props.item.name}
          </h6>
          <Icon
            icon={
              props.selected
                ? "fluent:radio-button-16-filled"
                : "fluent:radio-button-16-regular"
            }
            className={!props.selected ? "text-black" : "text-app-teal"}
            width={24}
          />
        </div>
      </div>
    </div>
  );
}
