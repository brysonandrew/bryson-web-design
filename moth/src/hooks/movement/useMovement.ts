import type { TSource } from "@moth-state/types";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { resolveRandom } from "./resolveRandom";
import { useBounds } from "./useBounds";

type TConfig = TSource;
export const useMovement = (source: TConfig) => {
  const resolveBoundsX = useBounds(source?.x);
  const resolveBoundsY = useBounds(source?.y);

  const sourceInstance = source?.instance;
  const randomRef = useRef(resolveRandom());
  const boundsRef = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    if (!sourceInstance) return;
    const offsetX =
      Math.sin(clock.elapsedTime) * randomRef.current.x;
    const offsetY =
      Math.cos(clock.elapsedTime) * randomRef.current.y;

    if (~~clock.elapsedTime % 4 === 0) {
      randomRef.current = resolveRandom();
    }
    boundsRef.current = {
      x: resolveBoundsX(sourceInstance.position.x),
      y: resolveBoundsY(sourceInstance.position.y),
    };

    sourceInstance.position.y =
      sourceInstance.position.y +
      offsetY +
      boundsRef.current.y;

    sourceInstance.position.x =
      sourceInstance.position.x +
      offsetX +
      boundsRef.current.x;
  });
};
