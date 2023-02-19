import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export const useResetScroll = () => {
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  useEffect(() => {
    if (!location.hash) {
      timeoutRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, []);
};
