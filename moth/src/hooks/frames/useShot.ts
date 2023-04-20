import type { TShotRef } from "@moth-components/gun/Shot";
import type { TKillHandlerConfig } from "@moth-hooks/useKill";
import { useFrame } from "@react-three/fiber";

type TConfig = {
  name: string;
  speed: number;
  shot: TShotRef;
  onKill(config: TKillHandlerConfig): void;
};
export const useShot = ({
  name,
  speed,
  shot,
  onKill,
}: TConfig) => {
  useFrame(() => {
    if (shot !== null) {
      const x = shot.position.x;
      const y = shot.position.y;
      onKill({ x, y, mesh: shot, name });
      shot.position.y = shot.position.y + speed;
    }
  });
};
