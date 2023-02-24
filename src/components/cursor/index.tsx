import { useRef } from "react";
import type { FC } from "react";
import {
  useAnimationFrame,
  useScroll,
} from "framer-motion";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";
import { TrailMotionValue } from "./TrailMotionValue";
import { Background } from "@components/Background";

export const TRAIL_SIZE = 11;
const STRIDE = 2;
const COUNT = TRAIL_SIZE * STRIDE;

type TMouse = {
  isMoving: boolean;
  timeout: ReturnType<typeof setTimeout> | null;
  stride: number;
};

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  onTap,
  children,
}) => {
  const { dispatch, motionValuePairs, isCursorReady } =
    useContext();
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
      dispatch({ type: "cursor-ready", value: null });
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
  return (
    <>
      {isCursorReady && (
        <Background motionValuePairs={motionValuePairs} />
      )}
      {[...Array(TRAIL_SIZE)].map((_, index) => (
        <TrailMotionValue key={`${index}`} index={index} />
      ))}
    </>
  );
};
