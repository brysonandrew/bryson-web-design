import { useFrame } from "@react-three/fiber";
import type { TSource } from "@moth-state/types";

type TConfig = TSource;
export const useLeftToRight = (props: TConfig) => {
  const { instance: sourceInstance } = props;

  useFrame(({ clock }) => {
    if (!sourceInstance) return;
    const offset = Math.sin(clock.elapsedTime) * 0.14;
    sourceInstance.position.y = props.y;
    sourceInstance.position.x =
      sourceInstance.position.x + offset * 2;
  });
};
