import type { FC } from "react";
import { useShape } from "@moth-hooks/shape/useShape";
import { CIRCLE_CAGE_PATH } from "@moth-components/tagmata/cephalon/paths";
import { Shape } from "@moth-components/shapes/Shape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { MOTH_BODY_NAME } from "./constants";

type TProps = TBaseTagmataProps;
export const Thorax: FC<TProps> = (props) => {
  const shape = useShape(CIRCLE_CAGE_PATH);
  if (!shape) return null;
  return ( 
    <Shape
      name={MOTH_BODY_NAME}
      shape={shape}
      size={512}
      scale={0.006}
      transparent
      {...props}
    />
  );
};
