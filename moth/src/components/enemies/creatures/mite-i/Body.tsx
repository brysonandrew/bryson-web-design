import { Eyes } from "@moth-components/tagmata/eyes";
import { MiteI } from "@moth-components/tagmata/thoraces/mite-i";
import {
  GREY,
  LIGHT_BLACK,
  RED,
} from "@moth-constants/colors";
import type { FC } from "react";
import { DoubleSide } from "three";

export const Body: FC = () => (
  <group rotation={[Math.PI, Math.PI, 0]}>
    <MiteI scale={0.04} color={GREY} />
    <mesh position={[0, 3.5, 0]}>
      <circleGeometry args={[1.5, 32]} />
      <meshBasicMaterial
        color={LIGHT_BLACK}
        side={DoubleSide}
      />
    </mesh>
    <group position={[0, 2.4, 0]}>
      <Eyes span={2} color={RED} />
    </group>
  </group>
);
