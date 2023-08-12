import { MutableRefObject, useRef, useEffect } from "react";

export const useDelayCallback = (
  callback: (...args: any) => void,
  delay: number | null
) => {
  const timeoutRef: MutableRefObject<ReturnType<
    typeof setTimeout
  > | null> = useRef(null);

  useEffect(() => {
    if (typeof delay !== "number") {
      return;
    }
    timeoutRef.current = setTimeout(callback, delay);
    return () => {
    const timeoutId = timeoutRef.current;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
};
