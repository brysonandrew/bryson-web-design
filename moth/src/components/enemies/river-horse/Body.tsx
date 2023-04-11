import { Piggy as Thorax } from "@moth-components/tagmata/thoraces/piggy";
import { Rhino as Head } from "@moth-components/tagmata/cephalon/rhino";
import { WHITE } from "@moth-constants/colors";
import type { FC } from "react";

export const Body: FC = () => (
  <group scale={2}>
    <group rotation={[Math.PI, 0, 0]} scale={2}>
      <Thorax scale={0.04} color={WHITE} />
    </group>
    <group position={[22, 0, 0]} rotation={[Math.PI, 0, 0]}>
      <Head />
    </group>
  </group>
);
