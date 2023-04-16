import type { FC } from "react";
import { DoubleSide } from "three";
import { resolveShade } from "@moth-utils/colors";
import {
  BODY_SIZE_X_025,
  BODY_SIZE_Y_025,
} from "../constants";

export const Limbs: FC = () => (
  <group scale={2}>
    {[...Array(4)].map((_, index, { length }) => {
      const rotation = Math.PI * 2;
      return (
        <mesh
          key={`wing-${index}`}
          position={[
            Math.cos((rotation * index) / length) *
              BODY_SIZE_X_025,
            Math.sin((rotation * index) / length) *
              BODY_SIZE_Y_025,
            0,
          ]}
          rotation={[0, 0, 0]}
        >
          <planeGeometry
            args={[BODY_SIZE_X_025, BODY_SIZE_Y_025]}
          />
          <meshBasicMaterial
            color={resolveShade(0.15)}
            side={DoubleSide}
          />
        </mesh>
      );
    })}
  </group>
);
