import { Line, meshBounds } from "@react-three/drei";
import type { FC } from "react";

type TProps = any & {
  scale: number;
};
export const Rect: FC<TProps> = ({ scale, ...props }) => {
  const points = [
    -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, -0.5, 0,
    -0.5, 0.5, 0,
  ];
  return (
    <group scale={scale}>
      <Line
        points={points}
        color="gray"
        linewidth={2}
        segments={false}
        position={[0, 0, 100]}
      />
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  );
};
