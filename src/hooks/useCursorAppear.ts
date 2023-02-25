import { useEffect } from "react";

export const useCursorAppear = (isHidden = false) => {
  useEffect(() => {
    const setCursor = (next: "none" | "default") => {
      document.documentElement.style.cursor = next;
    };
    if (isHidden) {
      setCursor("none");
    } else {
      setCursor("default");
    }
    return () => {
      setCursor("default");
    };
  }, [isHidden]);
};
