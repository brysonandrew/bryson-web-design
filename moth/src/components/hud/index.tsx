import { useMothContext } from "@moth-state/Context";
import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { HealthBar } from "./health-bar";

export const Hud: FC = () => {
  const { spawns } = useMothContext();

  const bosses = spawns.filter((v: TSpawn) => v.isBoss);

  return (
    <group>
      {bosses.map((boss: TSpawn, index) => (
        <HealthBar
          key={`boss-${boss.name}`}
          boss={boss}
          index={index}
        />
      ))}
    </group>
  );
};
