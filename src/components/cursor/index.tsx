import type { FC } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import type { TXY } from "@t/position";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";

const TRAIL_SIZE = 10;

export const DEFAULT_CURSOR = 14;
export const DEFAULT_CURSOR_05 = DEFAULT_CURSOR * 0.5;

const Root = styled(motion.div)``;

export type TCursorProps = TXY & {
  children?: TChildren;
  size?: number;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  x,
  y,
  size = DEFAULT_CURSOR,
  onTap,
  children,
}) => {
  const { motionValuePairs } = useContext();
  console.log(motionValuePairs);
  const trailRef = useRef<[x: number, y: number][]>([]);
  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: MouseEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    // trailRef.current.push([nextX, nextY]);
    // trailRef.current = trailRef.current.slice(-TRAIL_SIZE);
    x.set(nextX);
    y.set(nextY);
    motionValuePairs.forEach(
      (
        [motionValueX, motionValueY]: TMotionValuePair,
        index,
      ) => {
        // if (!trailRef.current[index]) {
        // console.log(trailRef.current);
        // console.log(index);
        //   return;
        // }
        // const [x, y] = trailRef.current[index];
        // motionValueX.set(x);
        // motionValueY.set(y);
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
      {/* {[...Array(TRAIL_SIZE)].map((_, index) => (
        <TrailMotionValue key={`${index}`} index={index} />
      ))} */}
    </>
    // <Root
    //   className={clsx(
    //     CURSOR_CLASS,
    //     "top-0 left-0 pointer-events-none",
    //   )}
    //   style={{
    //     x,
    //     y,
    //     width: size,
    //     height: size,
    //   }}
    // >
    //   {children}
    // </Root>
  );
};
