import type { FC } from "react";
import { WING_RIGHT_NAME } from "./config";
import { useShape } from "@moth-hooks/shape/useShape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

const WARLORD_RIGHT_WING = "m486 219.3C506 31 432.4 18.7 360.5 58.7c0 0 114.1-27.7 66.1 109.4l-35.8 14.7z"

export const Right: FC<TBaseTagmataProps> = ({
  span = 1,
  color,
  ...props
}) => {
  const path = useShape(WARLORD_RIGHT_WING)
  return (
    <mesh name={WING_RIGHT_NAME} position-x={span} {...props}>
      <circleGeometry args={[2, 4, Math.PI * 1.7, 2]} />
      <meshBasicMaterial transparent color={color} />
    </mesh>
  );
  
}