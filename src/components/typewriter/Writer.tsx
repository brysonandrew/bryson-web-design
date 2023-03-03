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

  useAnimationFrame((timestamp: number, delta: number) => {
    if (
      ref.current.index < ref.current.count &&
      delta < 120
    ) {
      if (timestamp > elapsedRef.current) {
        if (
          typeof ref.current.items[ref.current.index] ===
          "string"
        ) {
          const nextIndex = ~~(timestamp / 60);
          elapsedRef.current = timestamp;
          const next = ref.current.items
            .slice(ref.current.index, nextIndex)
            .join("");
          onUpdate(next);
          ref.current.index = nextIndex;
        } else {
          elapsedRef.current += 1000 / 60;
          const next = ref.current.items[ref.current.index];
          const nextIndex = ref.current.index + 1;

          onUpdate(next);
          ref.current.index = nextIndex;
        }
      }
    } else {
      onDone();
    }
  });

  return null;
};
