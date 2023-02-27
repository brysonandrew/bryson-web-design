import { useEventListener } from "@hooks/useEventListener";
import { useEffect, useRef } from "react";

export type TConfig = {
  cursorOn(event: PointerEvent): void;
  cursorOff(event: PointerEvent): void;
};
export const usePointerEnterLeave = ({
  cursorOff,
  cursorOn,
}: TConfig) => {
  const docRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    docRef.current = document.documentElement;
  }, []);

  useEventListener<"pointerenter", HTMLElement>(
    "pointerenter",
    cursorOn,
    docRef,
  );

  useEventListener<"pointerleave", HTMLElement>(
    "pointerleave",
    cursorOff,
    docRef,
  );
};
