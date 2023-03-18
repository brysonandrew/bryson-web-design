import { Line, meshBounds } from "@react-three/drei";
import { FC } from "react";

type TProps = any & {
  scale: number;
};
export const Rect: FC<TProps> = ({
  scale,
  ...props
}: any) => {
  return (
    <group scale={scale}>
      <Line
        points={[
          -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5,
          -0.5, 0, -0.5, 0.5, 0,
        ]}
        color="white"
        linewidth={1}
        position={[0, 0, 0]}
      />
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  );
};
