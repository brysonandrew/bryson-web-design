import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { Writer } from "./Writer";
import type { TBaseChildren, TChildren } from "@t/index";
import { TItemsConfig } from "./useItems";

export type TBaseProps = TItemsConfig & {
  throttle?: number;
};
export type TTypewriterProps = TBaseProps & {
  delay?: number;
  children(content: TBaseChildren[]): TChildren;
};
export const Typewriter: FC<TTypewriterProps> = ({
  throttle,
  delay,
  wip,
  children,
}) => {
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
      {!isDone && (
        <Writer
          throttle={throttle}
          wip={wip}
          onUpdate={handleUpdate}
          onDone={handleDone}
        />
      )}
      <>{children(content)}</>
    </>
  );
};
