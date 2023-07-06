import { useTimeoutRef } from "@hooks/useTimeoutRef";
import { useState, useEffect } from "react";

export const useDelay = (ms = 200) => {
  const [isReady, setReady] = useState(false);
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setReady(true);
    }, ms);
  }, []);
  return isReady;
};