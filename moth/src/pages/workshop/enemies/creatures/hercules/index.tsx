import styled from "@emotion/styled";
import { Canvas, extend } from "@react-three/fiber";
import {
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  CircleGeometry,
} from "three";
import { Hercules as _Hercules } from "@moth-components/enemies/creatures/hercules";
import { BASE_ENEMY_CONFIG } from "@moth-components/enemies/constants";
import { OrbitControls } from "@react-three/drei";

extend({
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  CircleGeometry,
});

const props = BASE_ENEMY_CONFIG;
const Root = styled.div``;

export const Hercules = () => (
  <Root className="w-screen h-screen">
    <Canvas
      camera={{
        position: [0, 0, -20],
      }}
    >
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <_Hercules {...props} />
    </Canvas>
  </Root>
);
