import type { RefObject } from "react";
import { useEventListener } from "./useEventListener";

type Handler = (event: MouseEvent) => void;

export type TOutsideClickConfig<T> = {
  ref: RefObject<T>;
  handler: Handler;
  mouseEvent?: "mousedown" | "mouseup";
};
export const useOutsideClick = <
  T extends HTMLElement = HTMLElement,
>({
  ref,
  handler,
  mouseEvent = "mousedown",
}: TOutsideClickConfig<T>): void => {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
};
