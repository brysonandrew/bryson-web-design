import { useMothContext } from "@moth-state/Context";
import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { HealthBar } from "./health-bar";
import type { TBossKey } from "./constants";
import { BOSSES } from "./constants";

export const Hud: FC = () => {
  const { spawns } = useMothContext();

  const bosses = spawns.filter(
    (v: TSpawn) =>
      typeof v.type !== "undefined" &&
      BOSSES.includes(v.type as TBossKey),
  );

  return (
    <group>
      {bosses.map((boss: TSpawn, index) => (
        <HealthBar
          key={`boss-${boss.id}`}
          boss={boss}
          index={index}
        />
      ))}
    </group>
  );
};
