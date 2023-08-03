import { useEventListener } from "@hooks/useEventListener";
import { useEffect, useRef } from "react";

export type TConfig = {
  cursorOn(event: PointerEvent): void;
  cursorOff(event: PointerEvent): void;
  // load(): void;
};
export const usePointerEnterLeave = ({
  cursorOff,
  cursorOn,
  // load,
}: TConfig) => {
  const docRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    docRef.current = document.documentElement;
  }, []);

  // useEffect(() => {
  //   void load();
  // }, []);

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
