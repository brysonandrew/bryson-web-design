import type { FC } from "react";
import { Core } from "./Core";
import { Limbs } from "./Limbs";
import { Wings } from "./Wings";

export const Body: FC = () => (
  <group scale={0.2}>
    <Wings />
    <group position={[0, 0, 1]}>
      <Limbs />
      <Core />
    </group>
  </group>
);
