import type { FC } from "react";
import { ARTEFACTS } from "./constants";
import { TEAL } from "@moth-constants/colors";
import { DoubleSide } from "three";

type TProps = {
  width: number;
  height: number;
};
export const Artefacts: FC<TProps> = () => (
  <group>
    {ARTEFACTS.map(({ x, y, width, height }, index) => (
      <mesh
        key={`${index}`}
        position={[x, y, 0]}
        rotation={[0, Math.PI, 0]}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={TEAL} side={DoubleSide} />
      </mesh>
    ))}
  </group>
);
