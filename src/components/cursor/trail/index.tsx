import { useRef } from "react";
import type { FC } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
} from "framer-motion";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";
import styled from "@emotion/styled";
import type { TMouse } from "../config";
import {
  TRAIL_SIZE,
  COUNT,
  STRIDE,
  SELECT_LAYOUT_ID,
  CURSOR_SIZE_HALF,
  CURSOR_SIZE,
} from "../config";
import { TrailMotionValue } from "./TrailMotionValue";
import { BackgroundWithTrail } from "@components/shell/background/BackgroundWithTrail";

const Select = styled(motion.div)``;

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

  const {
    dispatch,
    motionValuePairs,
    isCursorReady,
    selectId,
  } = useContext();
  const trailRef = useRef<[x: number, y: number][]>([]);
  const pointerRef = useRef<TMouse>({
    isMoving: false,
    timeout: null,
    stride: 0,
  });

  const { scrollX, scrollY } = useScroll();

  const resolveOffset = (index: number) =>
    COUNT - index * pointerRef.current.stride - 1;

  const updateTrail = () => {
    motionValuePairs.forEach(
      (
        [motionValueX, motionValueY]: TMotionValuePair,
        index,
      ) => {
        const offset = resolveOffset(index);

        const value = trailRef.current[offset];
        if (typeof value === "undefined") {
          return;
        }
        const [x, y] = value;
        motionValueX.set(x);
        motionValueY.set(y);
      },
    );
  };

  const handleMove = (event: MouseEvent) => {
    if (pointerRef.current.timeout) {
      clearTimeout(pointerRef.current.timeout);
    }
    pointerRef.current.isMoving = true;
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();

    cursorX.set(nextX - CURSOR_SIZE_HALF);
    cursorY.set(nextY - CURSOR_SIZE_HALF);

    trailRef.current.push([nextX, nextY]);
    trailRef.current = trailRef.current.slice(-COUNT);

    if (pointerRef.current.stride < STRIDE) {
      pointerRef.current.stride++;
      updateTrail();
    }

    pointerRef.current.isMoving = false;

    if (
      trailRef.current.length >= COUNT &&
      !isCursorReady
    ) {
      dispatch({ type: "cursor-ready", value: true });
    }
  };

  useAnimationFrame(() => {
    if (
      !pointerRef.current.isMoving &&
      pointerRef.current.stride > 0
    ) {
      pointerRef.current.stride--;
      updateTrail();
    }
  });

  useEventListener("pointermove", handleMove);
  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );
  if (isCursorReady) {
    return (
      <>
        <>
          {selectId === null && (
            <Select
              layoutId={SELECT_LAYOUT_ID}
              style={{
                mixBlendMode: "difference",
                top: cursorY,
                left: cursorX,
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
              }}
              className="fixed shadow-teal-sm"
            />
          )}
        </>
        <BackgroundWithTrail
          motionValuePairs={motionValuePairs}
        />
      </>
    );
  } else {
    // return null;
    return (
      <>
        {[...Array(TRAIL_SIZE)].map((_, index) => (
          <TrailMotionValue
            key={`${index}`}
            index={index}
          />
        ))}
      </>
    );
  }
};
