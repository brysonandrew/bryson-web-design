import { useState, useEffect, useRef } from "react";
import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import type {
  TBaseChildren,
  TChildren,
  TChildrenProps,
} from "@t/index";
import { STATE } from "@state/constants";
import { Writer } from "./Writer";
import { useItems } from "./useItems";

const isDisabled = STATE.mode === "instant";

export type TTypewriterProps = {
  Placeholder?: FC<TChildrenProps>;
  delay?: number;
  wip: TBaseChildren | TBaseChildren[];
  children(content: TBaseChildren[]): TChildren;
};
export const Typewriter: FC<TTypewriterProps> = ({
  Placeholder,
  delay: initDelay,
  wip,
  children,
}) => {
  const delay = isDisabled ? 0 : initDelay;
  const isDelay = typeof delay === "number";
  const [content, setContent] = useState<TBaseChildren[]>(
    [],
  );
  const [isDone, setDone] = useState(isDelay);
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const handleStart = () => setDone(false);
  const handleDone = () => {
    if (!content) {
      setContent(items);
    }
    setDone(true);
  };
  const items = useItems({ wip });

  useEffect(() => {
    if (isDelay) {
      timeoutRef.current = setTimeout(() => {
        handleStart();
      }, delay);
    }
  }, [delay]);

  const handleUpdate = (next: TBaseChildren) => {
    setContent((prev) => {
      const last = prev[prev.length - 1];
      if (
        typeof last === "string" &&
        typeof next === "string"
      ) {
        return [...prev.slice(0, -1), last + next];
      } else {
        return [...prev, next];
      }
    });
  };

  return (
    <>
      <AnimatePresence>
        {!isDone && (
          <>
            <Writer
              items={items}
              onUpdate={handleUpdate}
              onDone={handleDone}
            />
            {Placeholder && (
              <Placeholder>
                <div className="invisible">{wip}</div>
              </Placeholder>
            )}
          </>
        )}
      </AnimatePresence>

      <>{children(content)}</>
    </>
  );
};
