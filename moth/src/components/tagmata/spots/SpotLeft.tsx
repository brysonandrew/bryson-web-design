import type { FC } from "react";
import type { TBaseTagmataProps } from "../types";
import { SPOT_LEFT_NAME } from "@moth-components/moth/constants";

export const SpotLeft: FC<TBaseTagmataProps> = ({
  span = 1,
  size = 1,
  color,
  ...props
}) => (
  <mesh
    name={SPOT_LEFT_NAME}
    position-x={-span}
    position-z={0.1}
    {...props}
  >
    <circleGeometry args={[size, 8]} />
    <meshBasicMaterial color={color} />
  </mesh>
);
