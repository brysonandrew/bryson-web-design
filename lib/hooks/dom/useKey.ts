import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

type THandlers = {
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
};
type TConfig = {
  handlers: THandlers;
  isMarker: boolean;
};
export const useKey = ({
  handlers,
  isMarker,
}: TConfig): MutableRefObject<THandlers> => {
  const handlersRef = useRef(handlers);
  const removeListeners = () => {
    window.removeEventListener(
      "keydown",
      handlersRef.current.onKeyDown,
    );
    if (handlersRef.current.onKeyUp) {
      window.removeEventListener(
        "keyup",
        handlersRef.current.onKeyUp,
      );
    }
  };
  useEffect(() => {
    if (isMarker) {
      window.addEventListener(
        "keydown",
        handlersRef.current.onKeyDown,
      );
      if (handlersRef.current.onKeyUp) {
        window.addEventListener(
          "keyup",
          handlersRef.current.onKeyUp,
        );
      }
    } else {
      removeListeners();
    }
    return removeListeners;
  }, [isMarker]);
  return handlersRef;
};
