import { useEffect, useRef } from "react";

type TDescending = boolean;
type TConfig = {
  isDescending: boolean;
  handler(isDescending: boolean): void;
};
export const useScrollDirection = ({
  isDescending,
  handler,
}: TConfig): TDescending => {
  const ref = useRef({ scroll: 0, isDescending: false });
  ref.current.isDescending = isDescending;

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY;
      if (
        next > ref.current.scroll &&
        !ref.current.isDescending
      ) {
        handler(true);
      } else if (
        next < ref.current.scroll &&
        ref.current.isDescending
      ) {
        handler(false);
      }
      ref.current.scroll = next;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isDescending;
};
