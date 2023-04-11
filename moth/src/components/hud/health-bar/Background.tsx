import { BLACK } from "@moth-constants/colors";
import type { FC } from "react";
import { DoubleSide } from "three";
import { HEIGHT, WIDTH } from "../constants";

export const Background: FC = () => (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshBasicMaterial color={BLACK} side={DoubleSide} />
    </mesh>
  );
