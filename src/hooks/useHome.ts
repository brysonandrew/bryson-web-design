import { useEffect } from "react";
import { useLocation } from "react-router";
import { useTimeoutRef } from "./useTimeoutRef";

export const useHome = (delay?: number) => {
  const { pathname } = useLocation();

  const { timeoutRef, endTimeout } = useTimeoutRef();

  const reset = () => {
    window.scrollTo(0, 0);
  };

  const handler = () => {
    if (typeof delay === "number") {
      timeoutRef.current = setTimeout(() => {
        reset();
      }, delay);
    } else {
      reset();
    }
  };

  useEffect(() => {
    return endTimeout;
  }, [pathname]);

  return handler;
};
