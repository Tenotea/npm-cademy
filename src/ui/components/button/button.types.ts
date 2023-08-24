import { ButtonHTMLAttributes } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

export type BaseButtonViewProps = ButtonProps & {
  fit?: boolean;
};
