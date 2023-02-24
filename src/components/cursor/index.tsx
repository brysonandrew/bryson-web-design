import type { FC } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
} from "framer-motion";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import { useContext } from "@state/Context";
import styled from "@emotion/styled";
import {
  CURSOR_SIZE_HALF,
  SELECT_LAYOUT_ID,
  CURSOR_SIZE,
} from "./config";
import { Filter as Sobel } from "@components/effects/sobel/Filter";
import { Filter as Displacement } from "@components/effects/displacement/Filter";
import { Filter as Edges } from "@components/effects/edges/Filter";

const Select = styled(motion.div)``;

const ID = "GLITCH_ID";

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

  const { selectId } = useContext();

  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: MouseEvent) => {
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
  if (selectId === null) {
    return (
      <Select
        layoutId={SELECT_LAYOUT_ID}
        style={{
          mixBlendMode: "difference",
          top: cursorY,
          left: cursorX,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          // filter: `url(#${ID})`,
        }}
        className="fixed shadow-teal-sm z-50 pointer-events-none"
      />
    );
  } else {
    return null;
  }
};
