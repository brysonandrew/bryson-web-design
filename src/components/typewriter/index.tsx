import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { Writer } from "./Writer";
import type { TBaseChildren, TChildren } from "@t/index";
import type { TItemsConfig } from "./useItems";
import { AnimatePresence, motion } from "framer-motion";
import { STATE } from "@state/constants";

const isDisabled = STATE.mode === "instant";

export type TBaseProps = TItemsConfig & {
  throttle?: number;
};
export type TTypewriterProps = TBaseProps & {
  delay?: number;
  children(content: TBaseChildren[]): TChildren;
};
export const Typewriter: FC<TTypewriterProps> = ({
  throttle,
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
  const handleDone = () => setDone(true);

  useEffect(() => {
    if (isDelay) {
      timeoutRef.current = setTimeout(() => {
        handleStart();
      }, delay);
    }
  }, [delay]);

  // if (isDisabled) return <>{wip}</>;

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
              throttle={throttle}
              wip={wip}
              onUpdate={handleUpdate}
              onDone={handleDone}
            />
            <motion.div
              key="placeholder"
              className="absolute bg-teal-02"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
            >
              <div className="invisible">{wip}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <>{children(content)}</>
    </>
  );
};
