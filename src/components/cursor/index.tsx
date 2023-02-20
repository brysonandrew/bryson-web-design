import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { CURSOR_CLASS } from "./config";
import { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";

export const DEFAULT_CURSOR = 14;
export const DEFAULT_CURSOR_05 = DEFAULT_CURSOR * 0.5;

const Root = styled(motion.div)``;

export type TCursorProps = {
  children?: TChildren;
  size?: number;
  onTap?(event: PointerEvent): void;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
};
export const Cursor: FC<TCursorProps> = ({
  cursorX,
  cursorY,
  size = DEFAULT_CURSOR,
  onTap,
  children,
}) => {
  const handleMove = (event: MouseEvent) => {
    cursorX?.set(
      event.pageX,
      // - size * 0.5
    );
    cursorY?.set(
      event.pageY,
      //  - size * 0.5
    );
  };

  useEventListener("pointermove", handleMove);
  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );

  return (
    <Root
      className={clsx(
        CURSOR_CLASS,
        "top-0 left-0 pointer-events-none",
      )}
      style={{
        x: cursorX,
        y: cursorY,
        width: size,
        height: size,
      }}
    >
      {children}
    </Root>
  );
};
