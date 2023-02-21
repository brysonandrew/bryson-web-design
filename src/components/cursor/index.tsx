import { useRef } from "react";
import type { FC } from "react";
import { useScroll } from "framer-motion";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import type { TXY } from "@t/position";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";
import { TrailMotionValue } from "./TrailMotionValue";

const TRAIL_SIZE = 1;

export const DEFAULT_CURSOR = 14;
export const DEFAULT_CURSOR_05 = DEFAULT_CURSOR * 0.5;

export type TCursorProps = TXY & {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  x,
  y,
  onTap,
  children,
}) => {
  const { motionValuePairs } = useContext();
  const trailRef = useRef<[x: number, y: number][]>([]);
  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: MouseEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    trailRef.current.push([nextX, nextY]);
    trailRef.current = trailRef.current.slice(-TRAIL_SIZE);
    x.set(nextX);
    y.set(nextY);

    motionValuePairs.forEach(
      (
        [motionValueX, motionValueY]: TMotionValuePair,
        index,
      ) => {
        if (!trailRef.current[index]) {
          return;
        }
        const [x, y] = trailRef.current[index];
        motionValueX.set(x);
        motionValueY.set(y);
      },
    );
  };

  useEventListener("pointermove", handleMove);
  useEventListener(
    children && onTap ? "pointerdown" : null,
    onTap ?? NOOP,
  );

  return (
    <>
      {[...Array(TRAIL_SIZE)].map((_, index) => (
        <TrailMotionValue key={`${index}`} index={index} />
      ))}
    </>
  );
};
