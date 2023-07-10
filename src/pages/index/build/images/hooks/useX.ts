import { useMemo } from "react";

export const useX = ({ index, count }: { index: number, count: number; }) => {
  const style = useMemo(() => {
    return {
      left: `${~~(100 * ((index + 1) / count))}%`,
      x: `${~~(Math.random() * -100)}%`,
    };
  }, []);

  return style;
};
