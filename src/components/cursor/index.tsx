import type { FC } from "react";
import {
  AnimatePresence,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { Square as Select } from "@components/select/Square";
import { NOOP } from "@constants/functions";
import { useEventListener } from "@hooks/useEventListener";
import { useContext } from "@state/Context";
import type { TChildren } from "@t/index";
import { useCursorAppear } from "@hooks/useCursorAppear";
import { Pool } from "@components/effects/pool";
import { CURSOR_SIZE, CURSOR_SIZE_HALF } from "./config";
import { usePointerEnterLeave } from "./usePointerEnterLeave";

export const POOL_ID = "POOL_ID";

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  onTap,
  children,
}) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const { isCursorReady, selectId, dispatch } =
    useContext();

  const { scrollX, scrollY } = useScroll();

  const toggleCursor = (isReady: boolean) => {
    dispatch({ type: "cursor-ready", value: isReady });
  };
  const cursorOn = (_: PointerEvent) => {
    toggleCursor(true);
  };
  const cursorOff = (_: PointerEvent) => {
    toggleCursor(false);
  };
  const handleMove = (event: PointerEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    cursorX.set(nextX - CURSOR_SIZE_HALF);
    cursorY.set(nextY - CURSOR_SIZE_HALF);
  };

  const isHidden = isCursorReady || selectId === null;
  useCursorAppear(isHidden);

  useEventListener<"pointermove">(
    "pointermove",
    handleMove,
  );

  usePointerEnterLeave({ cursorOn, cursorOff });

  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );

  return (
    <>
      {selectId === null && (
        <AnimatePresence>
          {isCursorReady && (
            <Select
              style={{
                left: cursorX,
                top: cursorY,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
                originX: "50%",
                originY: "50%",
              }}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
};
