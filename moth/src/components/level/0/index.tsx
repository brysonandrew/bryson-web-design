import type { FC } from "react";
import { Artefacts } from "./Artefacts";

type TProps = { width: number; height: number };
export const Level0: FC<TProps> = ({ width, height }) => (
  <group>
    <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial color="rgb(11, 11, 11)" />
    </mesh>
    <Artefacts {...{ width, height }} />
  </group>
);
