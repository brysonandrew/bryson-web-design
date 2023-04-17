import type { TKillConfig } from "@moth-hooks/useKill";
import { useKill } from "@moth-hooks/useKill";
import type { FC, MutableRefObject } from "react";
import { Shot } from "./Shot";
import type { TShotFiringConfig } from "./useShots";
import { useShots } from "./useShots";

type TProps = {
  killConfig: TKillConfig;
  shotsRef: MutableRefObject<TShotFiringConfig>;
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
    <>
      {shots.map((shot) => (
        <Shot
          key={shot.name}
          {...shot}
          onKill={handleKill}
          speed={firingSpeed}
        />
      ))}
    </>
  );
};
