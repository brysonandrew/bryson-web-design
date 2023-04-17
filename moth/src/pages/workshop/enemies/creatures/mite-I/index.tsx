import styled from "@emotion/styled";
import { Canvas, extend } from "@react-three/fiber";
import {
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  ShapeGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  CircleGeometry,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  ExtrudeGeometry,
} from "three";
import { BASE_ENEMY_CONFIG } from "@moth-components/enemies/constants";
import { OrbitControls } from "@react-three/drei";
import { MiteI as _MiteI } from "@moth-components/enemies/creatures/mite-i";

extend({
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  ShapeGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  ExtrudeGeometry,
  CircleGeometry,
  BufferGeometry,
  Line,
  LineBasicMaterial,
});

const props = {
  ...BASE_ENEMY_CONFIG,
};
const Root = styled.div``;

export const MiteI = () => (
  <Root className="w-screen h-screen">
    <Canvas
      camera={{
        position: [0, 0, -500],
        near: 0.01,
        far: 10000,
      }}
    >
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <group rotation={[0, Math.PI, 0]}>
        <_MiteI {...props} instance={null} />
      </group>
    </Canvas>
  </Root>
);
