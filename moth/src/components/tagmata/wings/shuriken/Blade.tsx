import type { FC } from "react";
import { Shape } from "@components/shapes/Shape";
import { useShape } from "@hooks/shape/useShape";
import type { TBaseTagmataProps } from "@components/tagmata/types";
import { BLADE } from "./constants";

export const Blade: FC<TBaseTagmataProps> = (props) => {
  const shape = useShape(BLADE);
  if (!shape) return null;
  return <Shape shape={shape} {...props} />;
};
