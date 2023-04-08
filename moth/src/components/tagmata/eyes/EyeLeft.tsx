import type { FC } from "react";
import { EYE_LEFT_NAME } from "@components/moth/constants";
import type { TBaseTagmataProps } from "../types";
import { DoubleSide } from "three";

export const EyeLeft: FC<TBaseTagmataProps> = ({
  span = 1,
  size = 1,
  color,
  ...props
}) => (
  <mesh
    name={EYE_LEFT_NAME}
    position-x={-span}
    position-z={0.1}
    {...props}
  >
    <circleGeometry args={[size, 8]} />
    <meshBasicMaterial color={color} side={DoubleSide} />
  </mesh>
);
