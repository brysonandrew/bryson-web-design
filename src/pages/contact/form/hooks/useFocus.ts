import { TInputElement } from "@pages/contact/config";
import { useEffect } from "react";

export const useFocus = (input: TInputElement | null, isFocused: boolean) => {
  const handler = () => {
    if (input) {
      input.focus();
    }
  };
  useEffect(() => {
    if (isFocused) {
      handler();
    }
    return () => {
      if (input && isFocused) {
        input.blur();
      }
    };
  }, [input, isFocused]);

  return handler;
};