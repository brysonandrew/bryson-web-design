import { BLACK } from "@moth-constants/colors";
import type { FC } from "react";
import { DoubleSide } from "three";
import { HUD_STYLES } from "../constants";
const { width, height } = HUD_STYLES;

export const Background: FC = () => (
  <mesh position={[0, 0, 0]}>
    <planeGeometry args={[width, height]} />
    <meshBasicMaterial color={BLACK} side={DoubleSide} />
  </mesh>
);
