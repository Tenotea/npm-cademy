import React from "react";
import { TextInputProps } from "../input.types";
import { useInput } from "../hooks/useInput";
import InputFeedbackView from "../../feedback/views/InputFeedbackView";

export default function TextInputView(props: TextInputProps) {
  const { label, onChange, ...restProps } = props;
  const { handleChange, validationError } = useInput(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block h-[60px] w-full cursor-text rounded-lg border-app-gray-accent-5 bg-app-gray-accent-6 px-4 pt-2.5"
      >
        <span className="block text-xs text-app-gray-accent-1">{label}</span>
        <input
          {...restProps}
          className="block h-[30px] w-full bg-transparent font-semibold outline-none"
          id={props.id || props.name}
          onChange={handleChange}
        />
      </label>

      {validationError && (
        <InputFeedbackView>{validationError}</InputFeedbackView>
      )}
    </div>
  );
}
