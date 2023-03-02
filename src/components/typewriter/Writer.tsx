import type { TBaseChildren } from "@t/index";
import { useAnimationFrame } from "framer-motion";
import type { FC } from "react";
import { useRef } from "react";
import type { TBaseProps } from ".";
import type { TProcessor } from "./types";
import { useItems } from "./useItems";

type TProps = TBaseProps & {
  onUpdate(next: TBaseChildren): void;
  onDone(): void;
};
export const Writer: FC<TProps> = ({
  wip,
  onUpdate,
  onDone,
}) => {
  const elapsedRef = useRef<number>(0);
  const items = useItems({ wip });
  const ref = useRef<TProcessor>({
    items,
    index: 0,
    elapsed: 0,
    count: items.length,
  });

  useAnimationFrame((timestamp: number) => {
    if (ref.current.index < ref.current.count) {
      if (timestamp > elapsedRef.current) {
        elapsedRef.current += 1000 / 60;
        const next = ref.current.items[ref.current.index];
        onUpdate(next);
        ref.current.index = ~~elapsedRef.current;
      }
    } else {
      onDone();
    }
  });

  return null;
};
