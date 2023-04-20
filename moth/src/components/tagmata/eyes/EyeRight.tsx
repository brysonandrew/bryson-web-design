import type { FC } from "react";
import { EYE_RIGHT_NAME } from "@moth-components/moth/constants";
import type { TBaseTagmataProps } from "../types";
import { DoubleSide } from "three";

export const EyeRight: FC<TBaseTagmataProps> = ({
  span,
  color,
  size,
  ...props
}) => (
  <mesh
    name={EYE_RIGHT_NAME}
    position-x={span}
    {...props}
  >
    <circleGeometry args={[size, 8]} />
    <meshBasicMaterial color={color} side={DoubleSide} />
  </mesh>
);
