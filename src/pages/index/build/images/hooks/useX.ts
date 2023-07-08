import { useMemo } from "react";
import { IMAGE_SIZE } from "../Image";

export const useX = ({ index, count }: { index: number, count: number; }) => {
  const style = useMemo(() => {
    return {
      left: `calc(${~~(100 * ((index + 1) / count))}% - ${IMAGE_SIZE}px)`,
      x: `calc(${~~(Math.random() * 30 + 10)}% + ${0}px)`,
    };
  }, []);

  return style;
};
