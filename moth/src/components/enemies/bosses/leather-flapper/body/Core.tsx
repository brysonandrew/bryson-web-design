import { resolveShade } from "@moth-utils/colors";
import type { FC } from "react";
import { DoubleSide } from "three";
import { BODY_SIZE_X, BODY_SIZE_Y } from "../constants";

export const Core: FC = () => (
  <mesh>
    <planeGeometry args={[BODY_SIZE_X, BODY_SIZE_Y]} />
    <meshBasicMaterial
      color={resolveShade(0.17)}
      side={DoubleSide}
    />
  </mesh>
);
