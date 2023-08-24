import React from "react";
import { SelectInputProps, TextInputProps } from "../input.types";
import TextInputView from "./TextInputView";
import { Icon } from "@iconify/react";
import useSelectInput from "../hooks/useSelectInput";

export default function SelectInputView(props: SelectInputProps) {
  const { options, readOnly, ...inputProps } = props;
  const { handleSelectOption, isStateExpanded, toggleStateExpanded } =
    useSelectInput(props);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleStateExpanded}>
        <TextInputView {...inputProps} readOnly />
        <Icon
          icon={"pepicons-pop:angle-down"}
          width={20}
          className="absolute right-4 top-6"
        />
      </div>
      {isStateExpanded && (
        <ul className="absolute left-0 top-[56px] max-h-[150px] w-full overflow-auto rounded-b-lg bg-white shadow">
          {props.options.map((option) => (
            <li
              key={option.id}
              className="z-10 cursor-pointer rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-app-gray-accent-6"
              onClick={() => handleSelectOption(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
