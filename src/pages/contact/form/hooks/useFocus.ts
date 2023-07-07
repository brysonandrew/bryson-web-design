import { useEffect } from "react";

export const useFocus = (input: HTMLInputElement | HTMLTextAreaElement | null, isFocused: boolean) => {
  useEffect(() => {
    if (input && isFocused) {
      input.focus();
    }
    return () => {
      if (input && isFocused) {
        input.blur();
      }
    };
  }, [input, isFocused]);
};