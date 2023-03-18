import {
  ThreeEvent,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useBlock } from "../block/useBlock";
import { Rect } from "../Rect";
import { useContext } from "../state/Context";
import { Group, MathUtils } from "three";
import { clamp } from "three/src/math/MathUtils";

const PADDING = 100;

export const Marker = () => {
  const { zoom, count, posRef, scrollArea } = useContext();
  const { size } = useThree();

  const ref = useRef<Group | null>(null);
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [hovered, set] = useState(false);
  const { sectionWidth } = useBlock();

  const endTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "grab" : "auto";
    return endTimeout;
  }, [hovered]);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.rotation.z = MathUtils.lerp(
      ref.current.rotation.z,
      (posRef.current.top / zoom / sectionWidth / count) *
        -Math.PI *
        2,
      0.1,
    );
    const s = MathUtils.lerp(
      ref.current.scale.x,
      hovered ? 2 : 0.75,
      0.1,
    );
    ref.current.scale.set(s, s, s);
    camera.zoom = MathUtils.lerp(
      camera.zoom,
      hovered ? 40 : zoom,
      0.1,
    );
    camera.updateProjectionMatrix();
  });

  const resolveRight = () => size.width * 2 * count;

  const dragHandlers = useDrag(
    ({ movement: [x], down }) => {
      const next = x * 2 * count;
      if (down) {
        posRef.current.top = next;
      } else {
        endTimeout();
        const lastY = clamp(next, 0, resolveRight());
        posRef.current.top = lastY;
        scrollArea.scrollLeft = lastY;
        timeoutRef.current = setTimeout(() => {
          scrollArea.scrollLeft = lastY;
        }, 0);
      }
    },
    {
      bounds: {
        left: -PADDING,
        right: resolveRight() + PADDING,
      },
    },
  );

  const handlers = dragHandlers();

  return (
    <group ref={ref} position={[0, 0, 2]}>
      <Rect
        {...handlers}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          set(true);
          e.stopPropagation();
        }}
        onPointerOut={() => set(false)}
      />
    </group>
  );
};
