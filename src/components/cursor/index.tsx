import { Square as Select } from "@components/select/Square";
import { NOOP } from "@constants/functions";
import { useEventListener } from "@hooks/useEventListener";
import { useContext } from "@state/Context";
import type { TChildren } from "@t/index";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { CURSOR_SIZE_HALF } from "./config";
import { ID } from "@components/effects/displacement";
import { useFreezeScrollBar } from "@hooks/useFreezeScroll";
import { useCursorAppear } from "@hooks/useCursorAppear";

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  onTap,
  children,
}) => {
  const docRef = useRef<HTMLElement | null>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const { isCursorReady, selectId, dispatch } =
    useContext();

  const { scrollX, scrollY } = useScroll();

  useEffect(() => {
    docRef.current = document.documentElement;
  }, []);

  const toggleCursor = (isReady: boolean) => {
    dispatch({ type: "cursor-ready", value: isReady });
  };
  const cursorOn = (_: MouseEvent) => {
    toggleCursor(true);
  };
  const cursorOff = (_: MouseEvent) => {
    toggleCursor(false);
  };
  const handleMove = (event: MouseEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    cursorX.set(nextX - CURSOR_SIZE_HALF);
    cursorY.set(nextY - CURSOR_SIZE_HALF);
  };

  useCursorAppear(isCursorReady);

  useEventListener<"pointermove">(
    "pointermove",
    handleMove,
  );

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

  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );

  if (selectId === null) {
    return (
      <AnimatePresence>
        {isCursorReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Select
              style={{
                left: cursorX,
                top: cursorY,
                // width: 200,
                // height: 200,
                backdropFilter:
                  // `blur(2px)`,
                  `url(#${ID})`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return null;
  }
};
