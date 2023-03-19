import { Shadow } from "@react-three/drei";

export const ShadowBall = () => (
  <mesh receiveShadow castShadow>
    <sphereGeometry args={[0.75, 64, 64]} />
    <meshPhysicalMaterial
      color="#e7b056"
      clearcoat={1}
      clearcoatRoughness={0}
    />
    <Shadow
      position-y={-0.79}
      rotation-x={-Math.PI / 2}
      opacity={0.6}
      scale={[0.8, 0.8, 1]}
    />
  </mesh>
);
