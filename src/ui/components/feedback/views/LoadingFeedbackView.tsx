import React from "react";
import { LoadingFeedbackViewProps } from "../feedback.types";

export default function LoadingFeedbackView(props: LoadingFeedbackViewProps) {
  return (
    <div
      className={`h-6 w-6 animate-spin rounded-full border-[3px] ${
        props.theme !== "dark" ? "border-white" : "border-app-teal"
      } border-t-transparent`}
    />
  );
}
