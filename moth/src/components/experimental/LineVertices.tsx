import { useShape } from "@moth-hooks/shape/useShape";
import { motion } from "framer-motion-3d";
import type { FC } from "react";
import { useRef } from "react";
import type { Mesh } from "three";
import { ShapeGeometry } from "three";
import { SHURIKEN_PATH } from "./paths";

export const LineVertices: FC = () => {
  const meshRef = useRef<Mesh | null>(null);
  const geometryRef = useRef<ShapeGeometry>(
    new ShapeGeometry(),
  );
  const shape = useShape(SHURIKEN_PATH);
  if (!shape) return null;

  return (
    <motion.group animate={{ x: -256, y: -256 }}>
      <mesh ref={meshRef}>
        <shapeGeometry
          attach="geometry"
          args={[shape]}
          ref={geometryRef}
        />
        <meshBasicMaterial
          attach="material"
          color={0x212121}
        />
      </mesh>
    </motion.group>
  );
};
