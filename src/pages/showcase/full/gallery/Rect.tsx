import { Line, meshBounds } from "@react-three/drei";

export const Rect = ({ scale, ...props }: any) => {
  return (
    <group scale={scale}>
      <Line
        points={[
          -0.5, 0.5, 0, 0.5, 0.5, 
          0, 0.5, -0.5, 0, -0.5,
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
