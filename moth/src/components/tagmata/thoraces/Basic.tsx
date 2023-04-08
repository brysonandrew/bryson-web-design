import type { FC } from "react";
import { DoubleSide, type Color } from "three";

type TProps = {
  color: Color | number;
  size?: number;
  count?: number;
};
export const Basic: FC<TProps> = ({
  color,
  count = 4,
  size = 2,
}) => (
  <group>
    {[...Array(count)].map((_, i) => (
      <mesh key={`${i}`} position={[0, i * size * 0.5, 0]}>
        <circleGeometry
          args={[size, size * 2, Math.PI * 1.2, 2]}
        />
        <meshBasicMaterial
          color={color}
          side={DoubleSide}
        />
      </mesh>
    ))}
  </group>
);
