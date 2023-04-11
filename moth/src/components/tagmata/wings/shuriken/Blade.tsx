import type { FC } from "react";
import { Shape } from "@moth-components/shapes/Shape";
import { useShape } from "@moth-hooks/shape/useShape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { BLADE } from "./constants";

export const Blade: FC<TBaseTagmataProps> = (props) => {
  const shape = useShape(BLADE);
  if (!shape) return null;
  return <Shape shape={shape} {...props} />;
};
