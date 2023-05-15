import { useEffect, useRef } from "react";

export const useHome = (delay?: number) => {
  const timeoutRef = useRef<null | ReturnType<
    typeof setTimeout
  >>(null);
  const endTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const reset = () => window.scrollTo(0, 0);
  
  const handler = () => {
    if (typeof delay === "number") {
      setTimeout(() => {
        reset();
      }, delay);
    } else {
      reset();
    }
  };

  useEffect(() => {
    return endTimeout;
  }, []);

  return handler;
};
