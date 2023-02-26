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
import type { FC} from "react";
import { useEffect, useRef } from "react";
import { CURSOR_SIZE, CURSOR_SIZE_HALF } from "./config";
import { useCursorAppear } from "@hooks/useCursorAppear";
import { Pool } from "@components/effects/pool";
import { resolveUrlId } from "@utils/resolveUrlId";

const ID = "ID";

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

  return (
    <>
      <svg width="0%" height="0%" viewBox="0 0 100 100">
        <Pool id={ID} intensity={20} />
      </svg>
      {selectId === null && (
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
                  width: CURSOR_SIZE,
                  height: CURSOR_SIZE,
                  backdropFilter: resolveUrlId(ID),
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
