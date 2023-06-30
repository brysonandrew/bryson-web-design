import { useTimeoutRef } from "@hooks/useTimeoutRef";
import { useState, useEffect } from "react";

export const useFading = () => {
  const [isFading, setFading] = useState(false);
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFading(true);
    }, 50);
  }, []);
  return isFading;
};