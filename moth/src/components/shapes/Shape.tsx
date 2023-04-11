import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { motion } from "framer-motion-3d";
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
  <motion.mesh
    name={name}
    scale={scale}
    initial={false}
    animate={{
      x: (-size / 2) * scale + span,
      y: (-size / 2) * scale,
    }}
  >
    <shapeGeometry attach="geometry" args={[shape]} />
    <meshBasicMaterial
      attach="material"
      color={color}
      transparent={transparent}
      side={DoubleSide}
    />
  </motion.mesh>
);
