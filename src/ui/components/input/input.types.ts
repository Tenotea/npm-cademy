import { ChangeEvent, InputHTMLAttributes } from "react";
import { ZodSchema } from "zod";

export type InputChangePayload = {
  field: string;
  value: string;
};

export type InputHookReturnType = {
  validationError: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "onChange"
> & {
  label: string;
  validationTrigger?: string | null;
  validation?: ZodSchema;
  onChange?: (payload: InputChangePayload) => void;
};
