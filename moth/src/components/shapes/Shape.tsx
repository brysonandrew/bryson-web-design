import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import type { FC } from "react";
import { DoubleSide, type Shape as _Shape } from "three";

export type TProps = TBaseTagmataProps & {
  shape: _Shape;
};
export const Shape: FC<TProps> = ({
  name,
  size = 512,
  shape,
  scale = 1,
  color,
  transparent,
  span = 0,
}) => (
  <mesh
    name={name}
    scale={scale}
    position={[
      (-size / 2) * scale + span,
      (-size / 2) * scale,
      0,
    ]}
  >
    <shapeGeometry attach="geometry" args={[shape]} />
    <meshBasicMaterial
      attach="material"
      color={color}
      transparent={transparent}
      side={DoubleSide}
    />
  </mesh>
);
