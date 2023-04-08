import type { FC } from "react";
import { DARK_TEAL } from "@constants/colors";
import { DoubleSide } from "three";
import {
  COUNTER_WIDTH,
  HEIGHT,
  PADDING,
} from "../constants";

type TProps = {
  healthLeft: number;
};
export const Counter: FC<TProps> = ({ healthLeft }) => (
    <mesh
      position={[-healthLeft / 2 + COUNTER_WIDTH / 2, 0, 0]}
    >
      <planeGeometry
        args={[healthLeft, HEIGHT - PADDING * 4]}
      />
      <meshBasicMaterial
        color={DARK_TEAL}
        side={DoubleSide}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
