import { Shape } from "@components/shapes/Shape";
import type { TBaseTagmataProps } from "@components/tagmata/types";
import { useShape } from "@hooks/shape/useShape";
import type { FC } from "react";
import { BLADE_1 } from "./constants";

export const Blade1: FC<TBaseTagmataProps> = (props) => {
  const shape = useShape(BLADE_1);
  if (!shape) return null;
  return <Shape shape={shape} {...props} />;
};
