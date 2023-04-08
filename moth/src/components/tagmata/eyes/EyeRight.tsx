import type { FC } from "react";
import { EYE_RIGHT_NAME } from "@components/moth/constants";
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
    position-z={0.1}
    {...props}
  >
    <circleGeometry args={[size, 8]} />
    <meshBasicMaterial color={color} side={DoubleSide} />
  </mesh>
);
