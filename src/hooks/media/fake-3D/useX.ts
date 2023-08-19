import { useMemo } from "react";

const MIN = 10;
const MAX = 90

export const useX = ({ index, count }: { index: number, count: number; }) => {
  const style = useMemo(() => {
    return {
      left: `${~~((MAX - MIN) * ((index + 0.5) / count) + MIN)}%`,
      x: `${~~(Math.random() * 20 - 60)}%`,
    };
  }, []);
  return style;
};
