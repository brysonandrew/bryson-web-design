import { OrbitControls } from "@react-three/drei";
import {
  MotionCanvas,
  LayoutOrthographicCamera,
} from "framer-motion-3d";
import { FC } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { extend } from "@react-three/fiber";
import {
  CanvasTexture,
  MeshBasicMaterial,
  AmbientLight,
  PointLight,
  Group,
  Mesh,
  PlaneGeometry,
  MeshPhysicalMaterial,
  SphereGeometry,
  MeshStandardMaterial,
  BoxGeometry,
  AmbientLightProbe,
  ShapeGeometry
} from "three";
import { Building } from "./building";
import { Lighting } from "./Lighting";
import { Sections } from "./Sections";
import { Object3D } from "three";

extend({
  Object3D,
  CanvasTexture,
  MeshBasicMaterial,
  AmbientLight,
  PointLight,
  Group,
  Mesh,
  PlaneGeometry,
  MeshPhysicalMaterial,
  SphereGeometry,
  MeshStandardMaterial,
  BoxGeometry,
  AmbientLightProbe,
  ShapeGeometry
});

export const Main: FC = () => {
  const zoom = 10;
  const near = 0.1;
  const far = 1000;

  const base = { zoom, near, far };

  return (
    <MotionCanvas dpr={[1, 2]} shadows>
      <OrbitControls />
      <LayoutOrthographicCamera
        {...base}
        position={[120, 80, 500]}
        animate={{
          rotateX: degToRad(-15),
          rotateY: degToRad(25),
          rotateZ: degToRad(0),
        }}
      />
      <group position={[0, 0, 0]}>
        <Sections />
        <Building />
      <Lighting />

      </group>
    </MotionCanvas>
  );
};
