import type { FC } from "react";
import { SPOT_RIGHT_NAME } from "@moth-components/moth/constants";
import type { TBaseTagmataProps } from "../types";

export const SpotRight: FC<TBaseTagmataProps> = ({
  span,
  color,
  size,
  ...props
}) => (
  <mesh
    name={SPOT_RIGHT_NAME}
    position-x={span}
    position-z={0.1}
    {...props}
  >
    <circleGeometry args={[size, 8]} />
    <meshBasicMaterial color={color} />
  </mesh>
);
