import { useState, useEffect } from "react";

export const useNoPointer = () => {
  const [isPointer, setPointer] = useState<null | boolean>(
    null,
  );
  useEffect(() => {
    const isPointer =
      window.matchMedia("(pointer: none)").matches ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(any-hover: none)").matches;
    setPointer(isPointer);
  }, []);

  return isPointer;
};
