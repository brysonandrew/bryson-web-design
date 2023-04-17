import type { FC } from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  AmbientLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  PlaneGeometry,
  CircleGeometry,
} from "three";
import type { TChildren } from "@t/index";
import { Fullscreen } from "./Fullscreen";
import { CanvasShell } from "./CanvasShell";
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

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => (
  <Fullscreen>
    <Canvas
      camera={{
        position: [0, 0, 80],
      }}
    >
      <OrbitControls/>
      <CanvasShell>{children}</CanvasShell>
    </Canvas>
  </Fullscreen>
);
