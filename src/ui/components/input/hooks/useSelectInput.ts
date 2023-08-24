import { useState } from "react";
import { SelectInputProps } from "../input.types";
import { ListItemProps } from "../../list-item/list-item.types";

export default function useSelectInput(props: SelectInputProps) {
  const [isStateExpanded, setIsStateExpanded] = useState(false);

  function toggleStateExpanded() {
    setIsStateExpanded(!isStateExpanded);
  }

  function handleSelectOption(option: ListItemProps) {
    if (!(props.onChange && props.name)) return;

    props.onChange({
      field: props.name,
      value: option.id.toString(),
    });
    toggleStateExpanded();
  }
  return { isStateExpanded, toggleStateExpanded, handleSelectOption };
}
