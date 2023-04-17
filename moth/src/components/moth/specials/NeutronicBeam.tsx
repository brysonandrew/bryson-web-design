import { TEAL_BRIGHT } from "@moth-constants/colors";
import { useViewportHeight } from "@moth-hooks/useViewportHeight";
import { useRef, type FC } from "react";
import type { Mesh } from "three";
import { DoubleSide } from "three";
import { useMassCollision } from "./useMassCollision";

export const NeutronicBeam: FC = () => {
  const ref = useRef<null | Mesh>(null);
  const vieportHeight = useViewportHeight();
  const width = 2;
  const height = vieportHeight * 2;

  useMassCollision({
    name: "NeutronicBeam",
    width,
    height,
    ref, 
  });
 
  return (
    <mesh ref={ref}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial color={TEAL_BRIGHT} side={DoubleSide} />
    </mesh>
  );
};
