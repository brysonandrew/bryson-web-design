import { useEffect, useRef } from "react";

type TDescending = boolean;
type TConfig = {
  isThreshold: boolean;
  threshold: number;
  handler(isDescending: boolean): void;
};
export const useScrollThreshold = ({
  isThreshold,
  threshold,
  handler,
}: TConfig): TDescending => {
  const ref = useRef({ scroll: 0, isThreshold: false });
  ref.current.isThreshold = isThreshold;

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY;
      if (
        next > threshold &&
        !ref.current.isThreshold
      ) {
        handler(true);
      } else if (
        next < threshold &&
        ref.current.isThreshold
      ) {
        handler(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isThreshold;
};
