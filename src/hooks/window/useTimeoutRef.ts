import { useEffect, useRef } from "react";

export const useTimeoutRef = () => {
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const endTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => endTimeout, []);

  return { timeoutRef, endTimeout };
};
