import type { FC } from "react";
import { WING_LEFT_NAME } from "./config";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { DoubleSide } from "three";

export const Left: FC<TBaseTagmataProps> = ({
  span = 1,
  color,
  ...props
}) => (
  <mesh name={WING_LEFT_NAME} position-x={-span} {...props}>
    <circleGeometry args={[2.2, 4, Math.PI * 0.7, 2]} />
    <meshBasicMaterial
      transparent
      color={color}
      side={DoubleSide}
    />
  </mesh>
);
