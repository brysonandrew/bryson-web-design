import { extend } from "@react-three/fiber";
import { DirectionalLight } from "three";
extend({ DirectionalLight });

export const Lighting = () => {
  return (
    <directionalLight
      castShadow
      intensity={1.2}
      // shadow-MapSize-width={1024}
      // shadow-mapSize-height={1024}
      // shadow-camera-far={200}
      // shadow-camera-left={-100}
      // shadow-camera-right={100}
      // shadow-camera-top={100}
      // shadow-camera-bottom={-100}
    />
  );
};
