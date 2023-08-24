import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { InputHookReturnType, TextInputProps } from "../input.types";
import { ZodError } from "zod";
// import { TextInputProps } from "./TextInput.types";
// import useAutoAnimate from "../../../utils/hooks/useA";

export function useInput<T extends TextInputProps>(
  props: T
): InputHookReturnType {
  const [validationError, setValidationError] = useState<string | null>(null);
  // const { parentRef } = useAutoAnimate<HTMLDivElement>();

  useEffect(() => {
    if (validationError) {
      validateTextField();
    }
  }, [props.value]);

  useEffect(() => {
    if (!props.validationTrigger) {
      setValidationError(null);
      return;
    }
    validateTextField();
  }, [props.validationTrigger]);

  async function validateTextField() {
    try {
      if (props.validation) {
        setValidationError(null);
        await props.validation.parseAsync(props.value);
      }
    } catch (error: any) {
      setValidationError(error.issues[0]?.message || error.message);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!props.onChange || !props.name) return;
    props.onChange({
      field: props.name,
      value: e.target.value,
    });
  }

  return {
    validationError,
    handleChange,
  };
}
