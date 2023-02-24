import { useRef } from "react";
import type { FC } from "react";
import {
  motion,
  useAnimationFrame,
  useScroll,
} from "framer-motion";
import type { TChildren } from "@t/index";
import { useEventListener } from "@hooks/useEventListener";
import { NOOP } from "@constants/functions";
import { useContext } from "@state/Context";
import type { TMotionValuePair } from "@state/types";
import { TrailMotionValue } from "./TrailMotionValue";

export const TRAIL_SIZE = 22;
const STRIDE = 22;
const COUNT = TRAIL_SIZE * STRIDE;

export const DEFAULT_CURSOR = 14;
export const DEFAULT_CURSOR_05 = DEFAULT_CURSOR * 0.5;

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
  const { motionValuePairs } = useContext();
  const trailRef = useRef<[x: number, y: number][]>([]);
  const pointerRef = useRef<TMouse>({
    isMoving: false,
    timeout: null,
    stride: 0,
  });

  const { scrollX, scrollY } = useScroll();

  const resolveOffset = (index: number) =>
    COUNT - index * pointerRef.current.stride;

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
    }
    updateTrail();

    pointerRef.current.timeout = setTimeout(() => {
      pointerRef.current.isMoving = false;
    }, 0);
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
      {/* <ul className="fixed inset-0">
        {motionValuePairs.map(([x, y], index) => (
          <motion.li
            key={`${index}`}
            className="fixed"
            style={{ x, y }}
          >
            <div className="bg-green h-5 w-5 rounded-full" />
          </motion.li>
        ))}
      </ul> */}
      {[...Array(TRAIL_SIZE)].map((_, index) => (
        <TrailMotionValue key={`${index}`} index={index} />
      ))}
    </>
  );
};
