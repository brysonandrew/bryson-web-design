import { resolveShade } from "@moth-utils/colors";
import type { FC } from "react";
import { DoubleSide } from "three";
import {
  BODY_SIZE_X,
  BODY_SIZE_X_0125,
  BODY_SIZE_X_05,
  BODY_SIZE_Y_0125,
  BODY_SIZE_Y_05,
  WING_SPAN_SCALE,
} from "../constants";

export const Wings: FC = () => (
  <group scale={WING_SPAN_SCALE}>
    <mesh>
      <planeGeometry
        args={[BODY_SIZE_X, BODY_SIZE_Y_0125]}
      />
      <meshBasicMaterial
        color={resolveShade(0.22)}
        side={DoubleSide}
      />
    </mesh>
    {[...Array(2)].map((_, index, { length }) => {
      const rotation = Math.PI * 2;
      return (
        <mesh
          key={`wing-${index}`}
          position={[
            Math.cos((rotation * index) / length) *
              BODY_SIZE_X_05,
            Math.sin((rotation * index) / length) *
              BODY_SIZE_Y_05,
            1,
          ]}
        >
          <planeGeometry
            args={[BODY_SIZE_X_0125, BODY_SIZE_X_05]}
          />
          <meshBasicMaterial
            color={resolveShade(0.2)}
            side={DoubleSide}
          />
        </mesh>
      );
    })}
  </group>
);
