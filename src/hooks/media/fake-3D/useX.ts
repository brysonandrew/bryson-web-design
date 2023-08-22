import { useMemo } from "react";
import { TDepthConfig } from "./useDepthStyle";

const MIN = 10;
const MAX = 90

export const useX = ({ index, count }:TDepthConfig) => {
  const style = useMemo(() => {
    return {
      left: `${~~((MAX - MIN) * ((index + 0.5) / count) + MIN)}%`,
      x: `${~~(Math.random() * 20 - 60)}%`,
    };
  }, []);
  return style;
};
