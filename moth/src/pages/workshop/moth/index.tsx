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
import { Moth as _Moth } from "@components/moth";
import { MapControls, OrbitControls } from "@react-three/drei";

extend({
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  CircleGeometry,
});

const Root = styled.div``;

export const Moth = () => (
  <Root className="w-screen h-screen">
    <Canvas
      camera={{
        position: [0, 0, -20],
      }}
    >
      <ambientLight intensity={0.3} />
      <MapControls />
      <_Moth />
    </Canvas>
  </Root>
);
