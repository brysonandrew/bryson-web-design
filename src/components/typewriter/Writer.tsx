import { useMemo, useRef } from "react";
import type { FC } from "react";
import { useAnimationFrame } from "framer-motion";
import type { TBaseChildren, TChildren } from "@t/index";
import type { TBaseProps } from ".";
import type { TProcessor } from "./types";
import { useItems } from "./useItems";

type TProps = TBaseProps & {
  onUpdate(next: TBaseChildren): void;
  onDone(): void;
};
export const Writer: FC<TProps> = ({
  throttle = 2,
  wip,
  onUpdate,
  onDone,
}) => {
  const items = useItems({ wip });
  const ref = useRef<TProcessor>({
    items,
    index: 0,
    count: items.length,
  });

  useAnimationFrame((f) => {
    if (ref.current.index < ref.current.count) {
      if (~~f % throttle === 0) {
        const next = ref.current.items[ref.current.index];
        onUpdate(next);
        ref.current.index++;
      }
    } else {
      onDone();
    }
  });

  return null;
};
