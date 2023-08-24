import React from "react";
import { ButtonProps } from "../button.types";

export default function BaseButtonView(props: ButtonProps) {
  const { fit, ...restProps } = props;

  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-lg bg-app-teal px-5 py-3 font-sans text-white disabled:cursor-not-allowed disabled:opacity-50 ${
        fit ? "max-w-max" : "w-full"
      }`}
      {...restProps}
    />
  );
}
