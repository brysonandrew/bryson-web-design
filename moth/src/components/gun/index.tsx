import type { TKillConfig } from "@hooks/useKill";
import { useKill } from "@hooks/useKill";
import type { FC, MutableRefObject } from "react";
import { Shot } from "./Shot";
import type { TShotsConfig } from "./useShots";
import { useShots } from "./useShots";

type TProps = {
  killConfig: TKillConfig;
  shotsRef: MutableRefObject<TShotsConfig>;
};
export const Gun: FC<TProps> = ({
  shotsRef,
  killConfig,
}) => {
  const { source } = killConfig;
  const { shots, onRemove } = useShots({
    source,
    shotsRef,
  });
  const { firingSpeed, range } = shotsRef.current;
  const handleKill = useKill({
    ...killConfig,
    onRemove,
    speed: firingSpeed,
    range,
  });
  if (shots.length === 0) return null;

  return (
    <group>
      {shots.map((shot) => (
        <Shot
          key={shot.name}
          {...shot}
          onKill={handleKill}
          speed={firingSpeed}
        />
      ))}
    </group>
  );
};
