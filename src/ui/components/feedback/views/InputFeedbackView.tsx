import React from "react";
import { InputFeedbackProps } from "../feedback.types";

export default function InputFeedbackView(props: InputFeedbackProps) {
  return (
    <span className="block px-2 py-1 text-xs font-semibold text-red-500">
      {props.children}
    </span>
  );
}
