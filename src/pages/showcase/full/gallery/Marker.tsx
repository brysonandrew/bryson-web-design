import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useBlock } from "./heads-up-display/block/useBlock";
import { Rect } from "./Rect";
import { useContext } from "./state/Context";
import { Group, MathUtils } from "three";

export const Marker = () => {
  const { zoom, count, posRef, pageCount } =
    useContext();

  const ref = useRef<Group | null>(null);
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
    if (!ref.current) return;
    ref.current.rotation.z = MathUtils.lerp(
      ref.current.rotation.z,
      (posRef.current.top /
        zoom /
        sectionWidth /
        count) *
        -Math.PI *
        2,
      0.1,
    );
    const s = MathUtils.lerp(
      ref.current.scale.x,
      active || hovered ? 2 : 0.75,
      0.1,
    );
    ref.current.scale.set(s, s, s);
    camera.zoom = MathUtils.lerp(
      camera.zoom,
      active || hovered ? 40 : zoom,
      0.1,
    );
    camera.updateProjectionMatrix();
  });

  const dragHandlers = useDrag(
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
        {...dragHandlers()}
        onPointerOver={(e: any) => (
          e.stopPropagation(), set(true)
        )}
        onPointerOut={() => set(false)}
      />
    </group>
  );
};
