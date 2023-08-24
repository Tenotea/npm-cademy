import { useReducer } from "react";
import { InputChangePayload } from "~/ui/components/input/input.types";

export default function useFormData<T>(initialState: T) {
  function reducer(state: T, payload: InputChangePayload) {
    return {
      ...state,
      [payload.field]: payload.value,
    } as T;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return { formData: state, handleChange: dispatch };
}
