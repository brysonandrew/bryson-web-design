import { useEffect } from "react";
import { useLocation } from "react-router";

export const useResetScroll = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
};
