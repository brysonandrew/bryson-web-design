import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import * as THREE from "three";
import { useBlock } from "./block/useBlock";
import { Rect } from "./Rect";
import { useContext } from "./state/Context";

export const Marker = () => {
  const { zoom, items, posRef } = useContext();
  const count = items.length;

  const ref = useRef<THREE.Group | null>(null);
  const [active, setActive] = useState(false);
  const [hovered, set] = useState(false);
  const { sectionWidth } = useBlock();
  useEffect(
    () =>
      void (document.body.style.cursor = hovered
        ? "grab"
        : "auto"),
    [hovered],
  );
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        (posRef.current.top / zoom / sectionWidth / count) *
          -Math.PI *
          2,
        0.1,
      );
      const s = THREE.MathUtils.lerp(
        ref.current.scale.x,
        active || hovered ? 2 : 0.75,
        0.1,
      );
      ref.current.scale.set(s, s, s);
      camera.zoom = THREE.MathUtils.lerp(
        camera.zoom,
        active || hovered ? 40 : zoom,
        0.1,
      );
      camera.updateProjectionMatrix();
    }
  });
  const bind = useDrag(
    ({ movement: [x], first, last }) => (
      setActive(!last),
      (posRef.current.left = x * 2 * count)
    ),
    {
      initial: () => [(posRef.current.left * 0.5) / count],
    },
  );
  return (
    <group ref={ref} position={[0, 0, 2]}>
      <Rect
        {...bind()}
        onPointerOver={(e: any) => (
          e.stopPropagation(), set(true)
        )}
        onPointerOut={() => set(false)}
      />
    </group>
  );
};
