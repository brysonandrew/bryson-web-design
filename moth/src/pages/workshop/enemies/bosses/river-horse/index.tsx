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
import { RiverHorse as _RiverHorse } from "@moth-components/enemies/bosses/river-horse";
import { Shell } from "@moth-pages/index/main/Shell";

const props = {
  ...BASE_ENEMY_CONFIG,
};
export const RiverHorse = () => (
  
  <Shell>
    <OrbitControls />
    <group>
      <_RiverHorse {...props} instance={null} />
    </group>
  </Shell>
);
