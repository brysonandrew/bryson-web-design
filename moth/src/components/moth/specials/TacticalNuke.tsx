import { TEAL } from "@moth-constants/colors";
import { useViewport } from "@moth-hooks/useViewport";
import { useRef, type FC } from "react";
import type { Mesh } from "three";
import { DoubleSide } from "three";
import { useMassCollision } from "./useMassCollision";

export const TacticalNuke: FC = () => {
  const ref = useRef<null | Mesh>(null);
  const { width: vWidth, height: vHeight } = useViewport();
  const width = vWidth * 1.5;
  const height = vHeight * 1.5;

  useMassCollision({
    name: "TacticalNuke",
    width,
    height,
    ref,
  });

  return (
    <mesh ref={ref} position={[vWidth / 2, vHeight / 2, 0]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        color={TEAL}
        side={DoubleSide}
      />
    </mesh>
  );
};
