import { Square as Select } from "@components/select/Square";
import { NOOP } from "@constants/functions";
import { useEventListener } from "@hooks/useEventListener";
import { useContext } from "@state/Context";
import type { TChildren } from "@t/index";
import { useMotionValue, useScroll } from "framer-motion";
import type { FC } from "react";
import { CURSOR_SIZE_HALF } from "./config";
import { ID } from "@components/effects/displacement";

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

  const handleMove = (event: MouseEvent) => {
    if (!isCursorReady) {
      dispatch({ type: "cursor-ready", value: true });
    }
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    cursorX.set(nextX - CURSOR_SIZE_HALF);
    cursorY.set(nextY - CURSOR_SIZE_HALF);
  };

  useEventListener("pointermove", handleMove);
  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );
  if (selectId === null && isCursorReady) {
    return (
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
    );
  } else {
    return null;
  }
};
